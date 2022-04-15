import React, { useEffect, useState } from 'react';
import { OnboardingContainer, OnboardingContainerWrapper } from '../styled';
import {
  buttonFadeAnimate,
  onboardingAnimate,
  pageAnimate,
  pageTransitionAnimate,
} from '../../../components/common/Variants/Variants';
import backArrow from '../../../assets/onBoardingImg/back.svg';
import Human1 from '../../../assets/onBoardingImg/human_red.svg';
import Human2 from '../../../assets/onBoardingImg/human-green.svg';
import Human3 from '../../../assets/onBoardingImg/human-blue.svg';
import Human4 from '../../../assets/onBoardingImg/human-yellow.svg';
import {
  ErrorMessageWrapper,
  OnboardingBackArrow,
  OnboardingBackText,
  OnboardingBackWrapper,
  OnboardingDescription,
  OnboardingImageWrapper,
  OnboardingInnerWrapper,
  OnboardingInput,
  OnboardingInputWrapper,
  OnboardingMiddleButton,
  OnboardingMiddleElementWrapper,
  OnboardingMiddleImage,
  StyledErrorMessage,
} from './styled';
import { OnboardingTitle, OnboardingTitleWrapper } from '../OnBoardHome/styled';
import { onBoardingData } from '../../../apis/pageData/onBoarding';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router';
import { OnboardingMiddleTextWrapper } from '../OnboardTicket/styled';
import { useRecoilState } from 'recoil';
import { onboardingUserState } from '../../../store/onboardingUser';
import { Form, FormikProvider, useFormik } from 'formik';
import * as Yup from 'yup';

const OnboardMiddle = () => {
  const { id } = useParams();
  const pageData = onBoardingData.find((data) => data.id === id);
  const color = pageData?.colors;
  const navigate = useNavigate();
  const [userData, setUserData] = useRecoilState(onboardingUserState);
  const [formikInput, setFormikInput] = useState<any>();
  const [button, setButton] = useState<boolean>(false);

  // const { data } = useGetMemberNickname();

  // const nicknameList = data?.map((a) => a.nickname);

  useEffect(() => {
    buttonHandler();
  });
  const formik = useFormik({
    initialValues: {
      email: '',
      nickname: '',
      major: '',
      interest: '',
    },
    onSubmit: async () => {
      console.log(formik.values);
    },
    //validation setting
    validationSchema: Yup.object({
      email: Yup.string()
        .min(4, '필수입력란입니다.')
        .matches(
          /^[A-Z0-9._%+-]+@[gmail]+\.[A-Z]{3}$/i,
          'gmail.com형식으로 작성해주세요',
        )
        .required('필수입력란입니다.'),
      nickname: Yup.string()
        .min(3, '3글자이상 작성해주세요')
        .max(15, '2~15사이의 길이로 입력해주세요')
        .matches(/^[A-Z]/, '대문자로 시작해야합니다.')
        // .notOneOf(nicknameList ? nicknameList : [], '중복된 닉네임입니다.')
        .required('필수입력란입니다.'),
      major: Yup.string()
        .min(3, '3글자 이상 작성해주세요')
        .required('필수입력란입니다.'),
      interest: Yup.string()
        .min(10, '10글자 이상 작성해주세요')
        .required('필수입력란입니다. 각 단어는 ,로 구분합니다.'),
    }),
  });

  const buttonHandler = () => {
    const id = pageData?.id;
    if (id === 'email') {
      formik.errors.email || formik.values.email.length < 1
        ? setButton(false)
        : setButton(true);
    }
    if (id === 'nickname') {
      formik.errors.nickname || formik.values.nickname.length < 1
        ? setButton(false)
        : setButton(true);
    }
    if (id === 'major') {
      formik.errors.major || formik.values.major.length < 1
        ? setButton(false)
        : setButton(true);
    }
    if (id === 'interest') {
      formik.errors.interest || formik.values.interest.length < 1
        ? setButton(false)
        : setButton(true);
    }
  };
  //set formik values
  const setFormik = async () => {
    const id = pageData?.id;
    if (id === 'email') {
      await setFormikInput(formik.values.email);
    }
    if (id === 'nickname') {
      await setFormikInput(formik.values.nickname);
    }
    if (id === 'major') {
      await setFormikInput(formik.values.major);
    }
    if (id === 'interest') {
      await setFormikInput(formik.values.interest);
    }
  };
  //connect data in recoil
  const onApply = () => {
    const id = pageData?.id;
    if (id === 'email') {
      setUserData({
        ...userData,
        email: formik.values.email,
      });
    }
    if (id === 'nickname') {
      setUserData({
        ...userData,
        nickname: formik.values.nickname,
      });
    }
    if (id === 'major') {
      setUserData({
        ...userData,
        major: formik.values.major,
      });
    }
    if (id === 'interest') {
      setUserData({
        ...userData,
        interest: formik.values.interest,
      });
    }
  };

  return (
    <OnboardingContainerWrapper>
      {pageData && (
        <FormikProvider value={formik}>
          <Form>
            <OnboardingContainer
              initial="start"
              animate="end"
              exit="out"
              variants={pageTransitionAnimate}
              transition={pageAnimate}
            >
              <OnboardingMiddleElementWrapper>
                <OnboardingMiddleTextWrapper>
                  <OnboardingBackWrapper
                    variants={onboardingAnimate}
                    onClick={() => {
                      navigate(-1);
                    }}
                  >
                    <OnboardingBackArrow src={backArrow} />
                    <OnboardingBackText>Back</OnboardingBackText>
                  </OnboardingBackWrapper>
                  <OnboardingTitleWrapper>
                    <OnboardingTitle variants={onboardingAnimate}>
                      Tell us
                    </OnboardingTitle>
                    <OnboardingInnerWrapper variants={onboardingAnimate}>
                      <OnboardingTitle>Your</OnboardingTitle>
                      <OnboardingTitle marginLeft={20} color={color}>
                        {pageData.title}
                      </OnboardingTitle>
                    </OnboardingInnerWrapper>
                  </OnboardingTitleWrapper>
                  <OnboardingDescription variants={onboardingAnimate}>
                    {pageData.subTitle}
                  </OnboardingDescription>
                  <OnboardingInputWrapper variants={onboardingAnimate}>
                    <OnboardingInput
                      placeholder={pageData.placeHolder}
                      name={pageData.id}
                      type={pageData.id}
                      value={formikInput}
                      onChange={formik.handleChange}
                      color={color}
                    />
                  </OnboardingInputWrapper>
                  <ErrorMessageWrapper>
                    <StyledErrorMessage name={pageData.id} component="div" />
                  </ErrorMessageWrapper>
                  {button ? (
                    <OnboardingMiddleButton
                      variants={buttonFadeAnimate}
                      color={color}
                      whileHover={{
                        shadow: '20',
                        boxShadow: '0px 3px 20px #b7b7b7',
                      }}
                      onClick={() => {
                        setFormik();
                        onApply();

                        navigate('/onboard/' + pageData.next);
                      }}
                    >
                      다음으로
                    </OnboardingMiddleButton>
                  ) : (
                    <OnboardingMiddleButton variants={buttonFadeAnimate}>
                      다음으로
                    </OnboardingMiddleButton>
                  )}
                </OnboardingMiddleTextWrapper>
                <OnboardingImageWrapper>
                  <OnboardingMiddleImage
                    variants={onboardingAnimate}
                    src={
                      pageData.id === 'email'
                        ? Human1
                        : pageData.id === 'nickname'
                        ? Human2
                        : pageData.id === 'major'
                        ? Human3
                        : pageData.id === 'interest'
                        ? Human4
                        : ''
                    }
                  />
                </OnboardingImageWrapper>
              </OnboardingMiddleElementWrapper>
            </OnboardingContainer>
          </Form>
        </FormikProvider>
      )}
    </OnboardingContainerWrapper>
  );
};

export default OnboardMiddle;
