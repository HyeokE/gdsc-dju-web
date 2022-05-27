import React, { memo, useLayoutEffect, useRef, useState } from 'react';
import { SubTitle, Title } from '../../../components/common/Title/title';
import { ContainerInner, LayoutContainer } from '../../../styles/layouts';
import {
  FormArticleWrapper,
  FormLabel,
  FormLi,
  FormMargin,
  FormMarginXS,
  FormSubmitButton,
  FormText,
  RecruitFormInner,
  RecruitFormWrapper,
} from './styled';
import TextInput from '../../../components/common/input/TextInput';
import { createSearchParams, useNavigate, useParams } from 'react-router-dom';
import { positionSelect } from './FormFunctions';
import {
  getDownloadURL,
  ref,
  StorageReference,
  uploadBytesResumable,
  UploadTaskSnapshot,
} from 'firebase/storage';
import { storage } from '../../../firebase/firebase.config';
import { dbService } from '../../../firebase/firebase';
import { useRecoilState } from 'recoil';
import { loaderState } from '../../../store/loader';
import { FormikProvider, useFormik } from 'formik';
import { recruitFormSchema } from '../../../components/Validation/profileEdit';
import FileInput from '../../../components/common/input/FileInput';
import ApplyModal from '../../../components/common/Modal/ApplyModal';
import { MODAL_KEY, modalState } from '../../../store/modal';

const RecruitForm = () => {
  const { id } = useParams();
  const [position, setPosition] = useState('');
  const [loading, setLoading] = useRecoilState(loaderState);
  const [modal, setModal] = useRecoilState(modalState);
  const [uploadProgress, setUploadProgress] = useState(0);
  const input = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const calculateProgress = (progress: number, total: number) => {
    return Math.round((progress / total) * 100);
  };

  const recruitItem = {
    uploadDate: new Date(),
    status: 'DOCS',
    name: '',
    phoneNumber: '',
    email: '',
    major: '',
    studentID: '',
    position: positionSelect[id as keyof typeof positionSelect],
    link0: '',
    link1: '',
    fileURL: '',
    recommender: '',
    generation: 2,
  };
  const recruitFormik = useFormik({
    initialValues: recruitItem,
    onSubmit: () => {
      return;
    },
    validationSchema: recruitFormSchema,
  });
  const uploadApplicantFile = async (
    storageRef: StorageReference,
    file: File,
    object: Record<string, any>,
  ) => {
    await uploadBytesResumable(storageRef, file);
    const url = await getDownloadURL(storageRef);
    await dbService
      .collection('applicants')
      .doc()
      .set({ ...object, fileURL: url });
  };
  const checkFile = (fileList: FileList | null, size: number, type: string) => {
    if (fileList !== null) {
      const file = fileList[0];
      if (!file) return;
      if (file.size > size) {
        alert(
          `${type} 파일 사이즈는 ${Math.floor(
            size / 1000000,
          )}MB 이하로 선택해주세요.`,
        );
      }
      if (file.type !== type) {
        const typeName = type.replace('application/', '');
        alert(`${typeName} 파일만 업로드 가능합니다.`);
        return;
      }
      return file;
    }
  };

  const uploadFiles = async (data: HTMLInputElement) => {
    try {
      const file = checkFile(data.files, 50000001, 'application/pdf');
      if (file instanceof File) {
        setLoading({ ...loading, load: true });
        setModal({ ...modal, [MODAL_KEY.APPLY_CHECK]: false });
        const storageRef = ref(storage, `${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);
        await uploadTask.on('state_changed', (snapshot: UploadTaskSnapshot) => {
          setUploadProgress(
            calculateProgress(snapshot.bytesTransferred, snapshot.totalBytes),
          );
        });

        await uploadApplicantFile(storageRef, file, recruitFormik.values);
        setLoading({ ...loading, load: false });
        navigate({
          pathname: '/recruit/apply-success',
          search: `?${createSearchParams(params)}`,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
  const onSubmit = async () => {
    input.current && (await uploadFiles(input.current));
  };

  const requiredSchema = !!(
    recruitFormik.values.email &&
    recruitFormik.values.name &&
    recruitFormik.values.phoneNumber &&
    recruitFormik.values.major &&
    recruitFormik.values.studentID &&
    recruitFormik.values.position &&
    recruitFormik.values.link0.length > 0 &&
    input.current?.files
  );
  const params = {
    username: recruitFormik.values.name,
    position: position,
    email: recruitFormik.values.email,
    phone: recruitFormik.values.phoneNumber,
  };
  const applyValidation = !(recruitFormik.isValid && requiredSchema);
  useLayoutEffect(() => {
    setPosition(positionSelect[id as keyof typeof positionSelect]);
  }, [id]);
  return (
    <>
      <ApplyModal {...recruitFormik.values} onClick={onSubmit} />
      <LayoutContainer>
        <ContainerInner>
          <FormMargin />
          <FormMargin />
          <FormikProvider value={recruitFormik}>
            <RecruitFormWrapper>
              <RecruitFormInner>
                <Title>지원서 작성하기</Title>
                <SubTitle>{position}</SubTitle>
                <FormMargin />
                <div>
                  <FormLabel essential={true}>이름(실명)</FormLabel>
                  <TextInput
                    placeholder={'김구글'}
                    name={'name'}
                    value={recruitFormik.values.name}
                    onChange={recruitFormik.handleChange}
                    touched={recruitFormik.touched.name}
                    error={recruitFormik.errors.name}
                  />
                </div>

                <div>
                  <FormLabel essential={true}>전화번호</FormLabel>
                  <TextInput
                    placeholder={'010-0000-0000'}
                    name={'phoneNumber'}
                    value={recruitFormik.values.phoneNumber}
                    onChange={recruitFormik.handleChange}
                    touched={recruitFormik.touched.phoneNumber}
                    error={recruitFormik.errors.phoneNumber}
                  />
                </div>

                <div>
                  <FormLabel essential={true}>이메일(gmail)</FormLabel>
                  <TextInput
                    placeholder={'googledev@gmail.com'}
                    name={'email'}
                    value={recruitFormik.values.email}
                    onChange={recruitFormik.handleChange}
                    touched={recruitFormik.touched.email}
                    error={recruitFormik.errors.email}
                  />
                </div>
                <div>
                  <FormLabel essential={true}>학과</FormLabel>
                  <TextInput
                    placeholder={'구글개발학과'}
                    name={'major'}
                    value={recruitFormik.values.major}
                    onChange={recruitFormik.handleChange}
                    touched={recruitFormik.touched.major}
                    error={recruitFormik.errors.major}
                  />
                </div>

                <div>
                  <FormLabel essential={true}>학번</FormLabel>
                  <TextInput
                    placeholder={'20221234'}
                    name={'studentID'}
                    value={recruitFormik.values.studentID}
                    onChange={recruitFormik.handleChange}
                    touched={recruitFormik.touched.studentID}
                    error={recruitFormik.errors.studentID}
                  />
                </div>
                <div>
                  <FormLabel essential={true}>포지션</FormLabel>
                  <TextInput
                    disabled={true}
                    name={'position'}
                    placeholder={position}
                  />
                </div>

                <div>
                  <FormLabel essential={true}>지원서</FormLabel>
                  <FileInput
                    defaultPlaceholder={'지원서 / 포트폴리오 PDF'}
                    ref={input}
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
                    <FormLi>활용할 수 있는 기술스택을 알려주세요.</FormLi>
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
                      본인만의 공부방법이 있다면 어떤 것이 있나요? 이뤄낸 성과가
                      있다면 자세히 알려주세요.
                    </FormLi>
                  </FormArticleWrapper>
                </div>
                <div>
                  <FormLabel essential={true}>링크 1</FormLabel>
                  <TextInput
                    placeholder={'https://'}
                    name={'link0'}
                    value={recruitFormik.values.link0}
                    onChange={recruitFormik.handleChange}
                    touched={recruitFormik.touched.link0}
                    error={recruitFormik.errors.link0}
                  />
                  <FormMarginXS />
                  <FormLabel>링크 2 (선택사항)</FormLabel>
                  <TextInput
                    placeholder={'https://'}
                    name={'link1'}
                    value={recruitFormik.values.link1}
                    onChange={recruitFormik.handleChange}
                    touched={recruitFormik.touched.link1}
                    error={recruitFormik.errors.link1}
                  />
                  <FormText>
                    자신을 잘 나타낼 수 있는 개인블로그, 노션, Github링크 등을
                    입력해주세요.
                  </FormText>
                  <FormText>
                    *포트폴리오를 업로드하셔야할 경우 클라우드/드라이브에 파일을
                    업로드 후 공유링크를 입력해주세요.
                  </FormText>
                </div>
                <FormMarginXS />
                <div>
                  <FormLabel>추천인</FormLabel>
                  <TextInput
                    placeholder={'GDSC에 추천인이 있다면 입력해주세요.'}
                    name={'recommender'}
                    value={recruitFormik.values.recommender}
                    onChange={recruitFormik.handleChange}
                    touched={recruitFormik.touched.recommender}
                    error={recruitFormik.errors.recommender}
                  />
                </div>
                <FormMargin />
                <FormSubmitButton
                  onClick={() => {
                    !applyValidation &&
                      setModal({ ...modal, [MODAL_KEY.APPLY_CHECK]: true });
                  }}
                  disable={applyValidation}
                >
                  제출하기
                </FormSubmitButton>
                <FormMargin />
              </RecruitFormInner>
            </RecruitFormWrapper>
          </FormikProvider>
        </ContainerInner>
      </LayoutContainer>
    </>
  );
};

export default memo(RecruitForm);
