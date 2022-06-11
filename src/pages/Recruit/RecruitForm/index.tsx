import React, { memo, useLayoutEffect, useState } from 'react';
import { SubTitle, Title } from '../../../components/common/Title/title';
import { ContainerInner, LayoutContainer } from '../../../styles/layouts';
import {
  FormArticleWrapper,
  FormContentWrapper,
  FormLabel,
  FormLi,
  FormMargin,
  FormMarginXS,
  FormSubmitButton,
  FormText,
  RecruitFormInner,
  RecruitFormWrapper,
} from './styled';
import { createSearchParams, useNavigate, useParams } from 'react-router-dom';
import { positionSelect } from './FormFunctions';
import {
  getDownloadURL,
  ref,
  StorageReference,
  uploadBytesResumable,
} from 'firebase/storage';
import { storage } from '../../../firebase/firebase.config';
import { useRecoilState } from 'recoil';
import { loaderState } from '../../../store/loader';
import ApplyModal from '../../../components/common/Modal/ApplyModal';
import { MODAL_KEY, modalState } from '../../../store/modal';
import { alertState } from '../../../store/alert';
import ReactHelmet from '../../../components/common/ReactHelmet';
import { useForm } from 'react-hook-form';
import {
  ErrorBox,
  StyledInput,
} from '../../../components/common/input/TextInput/styled';
import { FieldValues } from 'react-hook-form/dist/types/fields';
import {
  IApplicantParams,
  IInputRegister,
  IRegisterApplicantType,
} from '../../../types/applicant';
import FileInput from '../../../components/common/input/FileInput';
import { isObjEmpty } from '../../../utils/objectCheck';
import { formValidation } from '../../../components/Validation/recuitForm';
import { recruitInfo } from '../../../apis/pageData/recruitInfo';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../../firebase/firebase';

const RecruitForm = () => {
  const { id } = useParams();
  const [position, setPosition] = useState('');
  const [loading, setLoading] = useRecoilState(loaderState);
  const [modal, setModal] = useRecoilState(modalState);
  const [alert, setAlert] = useRecoilState(alertState);
  const [file, setFile] = useState<null | File>(null);
  const navigate = useNavigate();
  const [data, setData] = useState<null | IInputRegister>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  const uploadApplicantFile = async (
    storageRef: StorageReference,
    file: File,
    object: Record<string, any>,
  ) => {
    await uploadBytesResumable(storageRef, file);
    const url = await getDownloadURL(storageRef);
    console.log(url);
    await addDoc(collection(db, recruitInfo.COLLECTION), {
      ...object,
      fileURL: url,
    });
  };
  const checkFile = (file: File | null, size: number, type: string) => {
    if (file) {
      if (file.size > size) {
        setAlert({
          ...alert,
          alertMessage: `지원서 파일 사이즈는 ${Math.floor(
            size / 1000000,
          )}MB 이하로 선택해주세요.`,
          alertStatus: 'error',
          alertHandle: true,
        });
      } else if (file.type !== type) {
        const typeName = type.replace('application/', '');
        setAlert({
          ...alert,
          alertMessage: `${typeName} 파일만 업로드 가능합니다.`,
          alertStatus: 'error',
          alertHandle: true,
        });
        return;
      } else {
        return file;
      }
      return;
    }
  };

  const uploadFiles = async (
    file: File,
    applicantData: IRegisterApplicantType,
  ) => {
    try {
      setModal({ ...modal, [MODAL_KEY.APPLY_CHECK]: false });
      const checkedFile = checkFile(file, 50000001, 'application/pdf');
      if (checkedFile instanceof File) {
        setLoading({ ...loading, load: true });
        const storageRef = ref(storage, `${checkedFile.name}`);
        await uploadApplicantFile(storageRef, checkedFile, applicantData);
        setLoading({ ...loading, load: false });
        navigate({
          pathname: '/recruit/apply-success',
          search: `?${createSearchParams(
            params as Record<string, string | string[]>,
          )}`,
        });
      } else {
        setLoading({ ...loading, load: false });
      }
    } catch (e) {
      console.log(e);
    }
  };
  const onRegister = async () => {
    const recruitItem: IRegisterApplicantType = {
      ...(data as IInputRegister),
      status: 'DOCS',
      generation: Number(recruitInfo.GENERATION),
      uploadDate: new Date(),
      position: position,
    };
    file && (await uploadFiles(file, recruitItem));
  };

  const isBlocked = !(
    watch('name') &&
    watch('email') &&
    watch('link0') &&
    watch('major') &&
    watch('phoneNumber') &&
    watch('studentID') &&
    file
  );
  const onSubmit = (values: FieldValues) => {
    setData(JSON.parse(JSON.stringify(values)));
    isObjEmpty(errors) && setModal({ ...modal, [MODAL_KEY.APPLY_CHECK]: true });
  };

  const params = {
    name: data?.name,
    position: position,
    email: data?.email,
    phoneNumber: data?.phoneNumber,
  };
  useLayoutEffect(() => {
    setPosition(positionSelect[id as keyof typeof positionSelect]);
  }, [id]);

  return (
    <>
      <ReactHelmet title={`${position} 지원서 작성 `} />
      <ApplyModal {...(params as IApplicantParams)} onClick={onRegister} />
      <LayoutContainer>
        <ContainerInner>
          <FormMargin />
          <FormMargin />
          <form onSubmit={handleSubmit(onSubmit)}>
            <RecruitFormWrapper>
              <RecruitFormInner>
                <Title>지원서 작성하기</Title>
                <SubTitle>{position}</SubTitle>
                <FormMargin />
                <FormContentWrapper>
                  <FormLabel essential={true}>이름(실명)</FormLabel>
                  <StyledInput
                    error={errors.name}
                    placeholder={'김구글'}
                    {...register('name', formValidation.name)}
                  />
                  <ErrorBox>{errors.name && errors.name.message}</ErrorBox>
                </FormContentWrapper>
                <FormContentWrapper>
                  <FormLabel essential={true}>전화번호</FormLabel>
                  <StyledInput
                    placeholder={'010-0000-0000'}
                    error={errors.phoneNumber}
                    {...register('phoneNumber', formValidation.phoneNumber)}
                  />
                  <ErrorBox>
                    {errors.phoneNumber && errors.phoneNumber.message}
                  </ErrorBox>
                </FormContentWrapper>
                <FormContentWrapper>
                  <FormLabel essential={true}>이메일(gmail)</FormLabel>
                  <StyledInput
                    placeholder={'googledev@gmail.com'}
                    error={errors.email}
                    {...register('email', formValidation.email)}
                  />
                  <ErrorBox>{errors.email && errors.email.message}</ErrorBox>
                </FormContentWrapper>
                <FormContentWrapper>
                  <FormLabel essential={true}>학과</FormLabel>
                  <StyledInput
                    placeholder={'구글개발학과'}
                    error={errors.major}
                    {...register('major', formValidation.major)}
                  />
                  <ErrorBox>{errors.major && errors.major.message}</ErrorBox>
                </FormContentWrapper>
                <FormContentWrapper>
                  <FormLabel essential={true}>학번</FormLabel>
                  <StyledInput
                    placeholder={'20221234'}
                    error={errors.studentID}
                    {...register('studentID', formValidation.studentID)}
                  />
                  <ErrorBox>
                    {errors.studentID && errors.studentID.message}
                  </ErrorBox>
                </FormContentWrapper>
                <FormContentWrapper>
                  <FormLabel essential={true}>포지션</FormLabel>
                  <StyledInput disabled={true} placeholder={position} />
                  <ErrorBox>
                    {errors.position && errors.position.message}
                  </ErrorBox>
                </FormContentWrapper>
                <FormContentWrapper>
                  <FormLabel essential={true}>지원서</FormLabel>
                  <FileInput
                    defaultPlaceholder={'지원서 / 포트폴리오 PDF'}
                    accept={'application/pdf, .pdf'}
                    onChange={(e) =>
                      setFile(e.target.files && e.target.files[0])
                    }
                  />
                  <FormText>
                    * 파일은 최대 50MB로 업로드 하실 수 있습니다.
                  </FormText>
                  <FormText>
                    * 원활한 검토를 위해 PDF 형식으로 제출해주세요.
                  </FormText>
                  <FormText>
                    * 지원서는 자유 양식이며 아래 항목을 포함하여 제출해주세요.
                  </FormText>
                  <FormArticleWrapper>
                    <FormLi>
                      활용할 수 있는 기술스택(디자이너 분들은 사용가능한 툴)을
                      알려주세요.
                    </FormLi>
                    <FormLi>
                      프로젝트 협업 경험이 있다면 자세하게 알려주세요.
                    </FormLi>
                    <FormLi>
                      팀 리드 해보신 경험과 어떤 리드가 좋은 리드라고
                      생각하시는지 알려주세요.
                    </FormLi>
                    <FormLi>
                      팀원과 갈등상황은 어떻게 해결하시나요? 커뮤니케이션 방식을
                      알려주세요.
                    </FormLi>
                    <FormLi>
                      본인만의 공부방법이 있다면 어떤 것이 있나요?
                    </FormLi>
                  </FormArticleWrapper>
                </FormContentWrapper>
                <FormContentWrapper>
                  <FormLabel essential={true}>링크 1</FormLabel>
                  <StyledInput
                    placeholder={'https://'}
                    error={errors.link0}
                    {...register('link0', formValidation.link0)}
                  />
                  <ErrorBox>{errors.link0 && errors.link0.message}</ErrorBox>
                  <FormLabel>링크 2 (선택사항)</FormLabel>
                  <StyledInput
                    placeholder={'https://'}
                    error={errors.link1}
                    {...register('link1', formValidation.link1)}
                  />
                  <ErrorBox>{errors.link1 && errors.link1.message}</ErrorBox>
                  <FormText>
                    자신을 잘 나타낼 수 있는 개인블로그, 노션, Github링크 등을
                    입력해주세요.
                  </FormText>
                  <FormText>
                    *포트폴리오를 업로드하셔야할 경우 클라우드/드라이브에 파일을
                    업로드 후 공유링크를 입력해주세요.
                  </FormText>
                </FormContentWrapper>
                <FormMarginXS />
                <FormContentWrapper>
                  <FormLabel>추천인</FormLabel>
                  <StyledInput
                    placeholder={'GDSC에 추천인이 있다면 입력해주세요.'}
                    {...register('recommender')}
                  />
                  <ErrorBox>
                    {errors.recommender && errors.recommender.message}
                  </ErrorBox>
                </FormContentWrapper>
                <FormMargin />
                {!isBlocked ? (
                  <FormSubmitButton type={'submit'} onClick={onSubmit}>
                    제출하기
                  </FormSubmitButton>
                ) : (
                  <FormSubmitButton type={'button'} disable={isBlocked}>
                    제출하기
                  </FormSubmitButton>
                )}
                <FormMargin />
              </RecruitFormInner>
            </RecruitFormWrapper>
          </form>
        </ContainerInner>
      </LayoutContainer>
    </>
  );
};

export default memo(RecruitForm);
