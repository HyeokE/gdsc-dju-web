export enum positionSelect {
  frontend = 'Frontend Developer',
  backend = 'Backend Developer',
  design = 'UX/UI Designer',
  android = 'Android Developer',
  beginner = 'Beginner Position',
  ml = 'Machine Learning Engineer',
}

export const formValidation = {
  name: {
    required: {
      value: true,
      message: '필수 입력 값이에요.',
    },
    pattern: {
      value: /^[ㄱ-ㅎ|가-힣]/g,
      message: '한글만 입력 가능해요.',
    },
    minLength: {
      value: 2,
      message: '이름 전체를 입력해주세요.',
    },
  },
  phoneNumber: {
    pattern: {
      value: /^01([0|1|6|7|8|9])-([0-9]{4})-([0-9]{4})$/,
      message: '전화번호 형식에 맞춰 입력해주세요',
    },
    required: {
      value: true,
      message: '필수 입력 값이에요.',
    },
  },
  email: {
    pattern: {
      value: /^[A-Z0-9._%+-]+@[gmail]+\.[A-Z]{3}$/i,
      message: '이메일 형식에 맞춰 입력해주세요',
    },
    required: {
      value: true,
      message: '필수 입력 값이에요.',
    },
  },
  major: {
    required: {
      value: true,
      message: '필수 입력 값이에요.',
    },
    pattern: {
      value: /^[ㄱ-ㅎ|가-힣]/g,
      message: '한글만 입력 가능해요.',
    },
    minLength: {
      value: 3,
      message: '전공을 전부 입력해주세요',
    },
  },
  studentID: {
    pattern: {
      value: /^[0-9]{8}$/,
      message: '학번을 전부 입력해주세요',
    },
    required: {
      value: true,
      message: '필수 입력 값이에요.',
    },
  },
  link0: {
    pattern: {
      value:
        /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/,
      message: 'URL 형식에 맞춰 입력해주세요',
    },
    required: {
      value: true,
      message: '필수 입력 값이에요.',
    },
  },
  link1: {
    pattern: {
      value:
        /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/,
      message: 'URL 형식에 맞춰 입력해주세요',
    },
  },
  position: {},
};
