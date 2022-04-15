import React, { useState } from 'react';
import { SubTitle } from '../../Title/title';
import { StyledInput } from '../../../Input/Input';

import { StyledButton } from '../../Button/styled';
import { Modal } from 'react-rainbow-components';
import { useRecoilState } from 'recoil';
import { modalState } from '../../../../store/modal';
import {
  ModalButtonWrapper,
  ModalElementWrapper,
  StyledModal,
} from '../styled';
import { authService } from '../../../../firebase/firebase';

const AdminSignInModal = () => {
  const [modal, setModal] = useRecoilState(modalState);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const onEmailLogIn = async (e: any) => {
    e.preventDefault();
    authService.signInWithEmailAndPassword(email, password).catch((error) => {
      if (error.code == 'auth/email-already-in-use') {
        setError('이미 사용 중인 이메일입니다.');
      }
      if (error.code == 'auth/invalid-email') {
        setError('해당 이메일 주소로 등록된 계정을 찾을 수 없습니다.\n');
      }
      if (error.code == 'operation-not-allowed') {
        setError('이메일 가입이 중지되었습니다.');
      }
      if (error.code == 'auth/weak-password') {
        setError('비밀번호를 6자리 이상 입력하세요.');
      }
      if (error.code == 'auth/user-not-found') {
        setError('올바르지 않은 유저정보입니다.');
      }
      if (error.code == 'auth/wrong-password') {
        setError('올바르지 않은 비밀번호입니다.');
      }
      console.log(error.message);
    });
  };

  const onChange = (e: any) => {
    const {
      target: { name, value },
    } = e;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };
  return (
    <>
      <StyledModal size={'small'} isOpen={modal.adminSignIn}>
        <SubTitle>Admin SignIn</SubTitle>
        <ModalElementWrapper>
          이메일
          <StyledInput name={'email'} onChange={onChange} />
        </ModalElementWrapper>
        <ModalElementWrapper>
          비밀번호
          <StyledInput
            type={'password'}
            name={'password'}
            onChange={onChange}
          />
        </ModalElementWrapper>
        <ModalElementWrapper error={'#f44336'}>{error}</ModalElementWrapper>
        <ModalButtonWrapper>
          <StyledButton onClick={onEmailLogIn}>Admin SignIn</StyledButton>
        </ModalButtonWrapper>
      </StyledModal>
    </>
  );
};

export default AdminSignInModal;
