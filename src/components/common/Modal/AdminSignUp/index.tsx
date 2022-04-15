import React, { useState } from 'react';
import { SubTitle } from '../../Title/title';
import { StyledInput } from '../../../Input/Input';

import { StyledButton } from '../../Button/styled';
import { Modal } from 'react-rainbow-components';
import { useRecoilState } from 'recoil';
import { modalState, MODAL_KEY } from '../../../../store/modal';
import { authService } from '../../../../firebase/firebase';
import {
  ModalButtonWrapper,
  ModalElementWrapper,
  StyledModal,
} from '../styled';
import './AdminSignUp.css';

const AdminSignUpModal = () => {
  const [modal, setModal] = useRecoilState(modalState);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const onChange = (e: any) => {
    console.log(e.target.name);
    const {
      target: { name, value },
    } = e;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };
  const onRegisterIn = async (e: any) => {
    e.preventDefault();
    authService
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user);
        setModal({ ...modal, [MODAL_KEY.ADMIN_SIGN_UP]: false });
      })
      .catch((error) => {
        if (error.code == 'auth/email-already-in-use') {
          setError('이미 사용 중인 이메일입니다.');
        } else if (error.code == 'auth/invalid-email') {
          setError('유효하지 않은 이메일입니다.');
        } else if (error.code == 'operation-not-allowed') {
          setError('이메일 가입이 중지되었습니다.');
        } else if (error.code == 'auth/weak-password') {
          setError('비밀번호를 6자리 이상 입력하세요.');
        } else if (error.code == 'auth/user-not-found') {
          setError('올바르지 않은 유저정보입니다.');
        } else if (error.code == 'auth/wrong-password') {
          setError('올바르지 않은 비밀번호입니다.');
        }
      });
  };
  return (
    <>
      <StyledModal
        size={'small'}
        isOpen={modal.adminSignUp}
        onRequestClose={() =>
          setModal({ ...modal, [MODAL_KEY.ADMIN_SIGN_UP]: false })
        }
      >
        <ModalElementWrapper>
          <SubTitle>Admin Signup</SubTitle>
        </ModalElementWrapper>
        <ModalElementWrapper>
          이메일
          <StyledInput
            name={'email'}
            onChange={onChange}
            placeholder={'Email'}
          />
        </ModalElementWrapper>
        <ModalElementWrapper>
          비밀번호
          <StyledInput
            type={'password'}
            name={'password'}
            onChange={onChange}
            placeholder={'Password'}
          />
        </ModalElementWrapper>

        <ModalElementWrapper style={{ colors: '#f44336' }}>
          {error}
        </ModalElementWrapper>
        <ModalButtonWrapper>
          <StyledButton onClick={onRegisterIn}>Admin Signup</StyledButton>
        </ModalButtonWrapper>
      </StyledModal>
    </>
  );
};

export default AdminSignUpModal;
