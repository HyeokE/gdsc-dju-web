import { useFormik } from 'formik';
import * as Yup from 'yup';

export const nameSchema = {
  name: Yup.string()
    .min(2, '이름 전체를 입력해주세요.')
    .matches(/^[ㄱ-ㅎ|가-힣]/g, '한글만 입력 가능합니다.')
    .required('필수입력란입니다.'),
};
export const nicknameSchema = {
  nickname: Yup.string()
    .min(3, '3글자이상 작성해주세요')
    .max(15, '2~15사이의 길이로 입력해주세요')
    .matches(/^[A-Z]/, '대문자로 시작해야합니다.')
    // .notOneOf(nicknameList ? nicknameList : [], '중복된 닉네임입니다.')
    .required('필수입력란입니다.'),
};
export const introduceSchema = {
  introduce: Yup.string()
    .min(10, '10글자 이상 작성해주세요')
    .max(70, '최대 70자 입니다.')
    .required('필수입력란입니다.'),
};
export const hashTagSchema = {
  hashTag: Yup.string()
    .min(10, '10글자 이상 작성해주세요')
    .required('필수입력란입니다.'),
};
export const phoneNumberSchema = {
  phoneNumber: Yup.string()
    .matches(
      /^01([0|1|6|7|8|9])-([0-9]{4})-([0-9]{4})$/,
      '전화번호 형식에 맞춰 입력해주세요',
    )
    .required('필수입력란입니다.'),
};
export const emailSchema = {
  email: Yup.string()
    .min(4, '필수입력란입니다.')
    .matches(
      /^[A-Z0-9._%+-]+@[gmail]+\.[A-Z]{3}$/i,
      'gmail.com형식으로 작성해주세요',
    )
    .required('필수입력란입니다.'),
};
export const majorSchema = {
  major: Yup.string()
    .min(3, '3글자 이상 작성해주세요')
    .matches(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/, '한글만 입력 가능합니다.')
    .required('필수입력란입니다.'),
};
export const studentIDSchema = {
  studentID: Yup.string()
    .matches(/^[0-9]{8}$/, '학번 형식에 맞춰 입력해주세요')
    .required('필수입력란입니다.'),
};
export const gitEmailSchema = {
  gitEmail: Yup.string().matches(
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/,
    '이메일 형식으로 작성해주세요',
  ),
};
export const gitLinkSchema = {
  gitEmail: Yup.string().matches(
    /(http(s)?:\/\/)+(github)+\.+(com\/)+[A-Z,a-z]/,
    'github.com 형식으로 작성해주세요',
  ),
};
export const urlsSchema = {
  memberPortfolioUrls: Yup.string().matches(
    /(http(s)?:\/\/)([a-z0-9\w]+\.*)+[a-z0-9]{2,4}/,
    'http/https 형식으로 작성해주세요',
  ),
};
export const urlValidation = Yup.string().matches(
  /(http(s)?:\/\/)([a-z0-9\w]+\.*)+[a-z0-9]{2,4}/,
  'http/https 형식으로 작성해주세요',
);

export const recruitFormSchema = Yup.object().shape({
  ...nameSchema,
  ...phoneNumberSchema,
  ...emailSchema,
  ...majorSchema,
  ...studentIDSchema,
  link0: urlValidation,
  link1: urlValidation,
});
