import React, { useState } from 'react';
import { SubTitle } from '../../Title/title';
import { ModalButtonWrapper, ModalElementWrapper } from '../styled';
import { StyledInput } from '../../../Input/Input';

import { StyledButton } from '../../Button/styled';
import { Modal } from 'react-rainbow-components';
import { useRecoilState } from 'recoil';
import { MODAL_KEY, modalState } from '../../../../store/modal';
import { dbService } from '../../../../firebase/firebase';
import { localUserState } from '../../../../store/localUser';

const AdminSetUserProfile = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [modal, setModal] = useRecoilState(modalState);
  const [adminUser, setAdminUser] = useRecoilState(localUserState);

  const setUserProfile = () => {
    // dbService.collection('adminUsers').doc().get;
    try {
      dbService
        .collection('adminUsers')
        .doc(adminUser.uid)
        .set({
          name: name,
          nickname: nickname,
          phoneNumber: phoneNumber,
        })
        .then(() => {
          setAdminUser({
            ...adminUser,
            nickname: nickname,
            name: name,
            phoneNumber: phoneNumber,
          });
        });
      setModal({ ...modal, [MODAL_KEY.ADMIN_SET_PROFILE]: false });
    } catch (e) {
      console.log(e);
    }
  };
  const onChange = (e: any) => {
    const {
      target: { name, value },
    } = e;
    if (name === 'name') {
      setName(value);
    } else if (name === 'nickname') {
      setNickname(value);
    } else if (name === 'phoneNumber') {
      setPhoneNumber(value);
    }
  };
  return (
    <div>
      <Modal
        size={'small'}
        isOpen={modal.adminSetProfile}
        style={{ display: 'flex', padding: '10px', width: 400 }}
      >
        <SubTitle>Admin Profile</SubTitle>
        <ModalElementWrapper>
          이름
          <StyledInput name={'name'} onChange={onChange} />
        </ModalElementWrapper>
        <ModalElementWrapper>
          닉네임
          <StyledInput name={'nickname'} onChange={onChange} />
        </ModalElementWrapper>
        <ModalElementWrapper>
          전화번호
          <StyledInput name={'phoneNumber'} onChange={onChange} />
        </ModalElementWrapper>
        <ModalElementWrapper style={{ colors: '#f44336' }}>
          {/*{error}*/}
        </ModalElementWrapper>
        <ModalButtonWrapper>
          <StyledButton
            onClick={() => {
              setUserProfile();
            }}
          >
            Admin SignIn
          </StyledButton>
        </ModalButtonWrapper>
      </Modal>
    </div>
  );
};

export default AdminSetUserProfile;
