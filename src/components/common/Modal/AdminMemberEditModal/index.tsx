import React, { useEffect, useState } from 'react';

import { SubTitle } from '../../Title/title';
import {
  ModalButtonWrapper,
  ModalElementWrapper,
  StyledModal,
} from '../styled';

import { StyledButton } from '../../Button/styled';
import { useRecoilState } from 'recoil';
import { MODAL_KEY, modalState } from '../../../../store/modal';
import { dbService } from '../../../../firebase/firebase';

import { alertState } from '../../../../store/alert';

const AdminEditMemberModal = ({ selectMember, setSelectMember }: any) => {
  const [alert, setAlert] = useRecoilState(alertState);
  const [modal, setModal] = useRecoilState(modalState);

  const editMemberProfile = () => {
    try {
      dbService
        .collection('members')
        .doc(selectMember.id)
        .update({
          name: selectMember.name,
          nickName: selectMember.nickName,
          phoneNumber: selectMember.phoneNumber,
          role: selectMember.role,
          warning: selectMember.warning,
          position: selectMember.position,
          introduce: selectMember.introduce,
        })
        .then(() => {
          setModal({ ...modal, [MODAL_KEY.ADMIN_EDIT_MEMBER]: false });
          setAlert({
            ...alert,
            alertHandle: true,
            alertStatus: 'success',
            alertMessage: '멤버 정보 수정이 완료되었습니다.',
          });
        });
    } catch (e) {
      console.log(e);
    }
  };

  const onChange = (e: any) => {
    const {
      target: { name, value },
    } = e;
    if (name === 'name') {
      setSelectMember({ ...selectMember, name: value });
    } else if (name === 'nickName') {
      setSelectMember({ ...selectMember, nickName: value });
    } else if (name === 'phoneNumber') {
      setSelectMember({ ...selectMember, phoneNumber: value });
    } else if (name === 'role') {
      setSelectMember({ ...selectMember, role: value });
    } else if (name === 'warning') {
      setSelectMember({ ...selectMember, warning: value });
    } else if (name === 'position') {
      setSelectMember({ ...selectMember, position: value });
    } else if (name === 'introduce') {
      setSelectMember({ ...selectMember, introduce: value });
    }
  };
  return (
    <div>
      <StyledModal
        size={'small'}
        isOpen={modal.adminEditMember}
        onRequestClose={() =>
          setModal({
            ...modal,
            [MODAL_KEY.ADMIN_EDIT_MEMBER]: false,
          })
        }
      >
        <SubTitle>멤버 정보 수정</SubTitle>
        <ModalElementWrapper>
          직책
          <input name={'role'} onChange={onChange} value={selectMember?.role} />
        </ModalElementWrapper>
        <ModalElementWrapper>
          이름
          <input name={'name'} onChange={onChange} value={selectMember?.name} />
        </ModalElementWrapper>
        <ModalElementWrapper>
          포지션
          <input
            name={'position'}
            onChange={onChange}
            value={selectMember?.position}
          />
        </ModalElementWrapper>
        <ModalElementWrapper>
          닉네임
          <input
            name={'nickName'}
            onChange={onChange}
            value={selectMember?.nickName}
          />
        </ModalElementWrapper>
        <ModalElementWrapper>
          전화번호
          <input
            name={'phoneNumber'}
            onChange={onChange}
            value={selectMember?.phoneNumber}
          />
        </ModalElementWrapper>
        <ModalElementWrapper>
          한 줄 소개
          <input
            name={'introduce'}
            onChange={onChange}
            value={selectMember?.introduce}
          />
        </ModalElementWrapper>
        <ModalElementWrapper>
          경고횟수
          <input
            name={'warning'}
            onChange={onChange}
            value={selectMember?.warning}
          />
        </ModalElementWrapper>
        <ModalElementWrapper style={{ colors: '#f44336' }}>
          {/*{error}*/}
        </ModalElementWrapper>
        <ModalButtonWrapper>
          <StyledButton
            onClick={() => {
              editMemberProfile();
            }}
          >
            수정하기
          </StyledButton>
        </ModalButtonWrapper>
      </StyledModal>
    </div>
  );
};

export default AdminEditMemberModal;
