import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { MODAL_KEY, modalState } from '../../../../store/modal';
import { ApplyModalInner, ApplyModalWrapper } from '../ApplyModal/styled';
import OutsideClickHandler from '../../../../utils/OutsideClickHandler';
import { modalVariants } from '../../Variants/modalVariants';
import TextInput from '../../input/TextInput';
import { StyledDefaultInput } from '../../input/TextInput/styled';
import { GDSCButton } from '../../Button';
import { AdminSignUpWrapper } from './styled';
import firebase from 'firebase/compat/app';
import error from '../../../../pages/Error';

const AdminSignUp = () => {
  const [modal, setModal] = useRecoilState(modalState);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };
  const signUp = () => {
    try {
      firebase.auth().createUserWithEmailAndPassword(email, password);
      setModal({ ...modal, [MODAL_KEY.ADMIN_SIGN_UP]: false });
    } catch (error: typeof error) {
      setError(error.message);
    }
  };
  return (
    <AnimatePresence>
      {modal.adminSignUp && (
        <ApplyModalWrapper>
          <OutsideClickHandler
            outsideClick={() =>
              setModal({ ...modal, [MODAL_KEY.ADMIN_SIGN_UP]: false })
            }
          >
            <AdminSignUpWrapper
              variants={modalVariants}
              exit={'unActive'}
              animate={'active'}
              initial={'unActive'}
            >
              <StyledDefaultInput
                onChange={handleOnChange}
                name={'email'}
                placeholder={'이메일'}
              />
              <StyledDefaultInput
                onChange={handleOnChange}
                name={'password'}
                placeholder={'비밀번호'}
              />
              <div>{error}</div>
              <GDSCButton
                text={'회원가입'}
                color={'tossBlue'}
                onClick={signUp}
              />
            </AdminSignUpWrapper>
          </OutsideClickHandler>
        </ApplyModalWrapper>
      )}
    </AnimatePresence>
  );
};

export default AdminSignUp;
