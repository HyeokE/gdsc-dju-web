import React from 'react';
import {
  MemberImg,
  Name,
  Nickname,
  Role,
  Skeleton,
} from '../../card/MemberCard/styled';
import { MemberCardModalInner, ModalWrapper, StyledModal } from './styled';
import { memberDataType } from '../../../../types/member';
import OutsideClickHandler from '../../../../utils/OutsideClickHandler';

interface Iprops extends memberDataType {
  setSelectedId: (num: number | undefined) => void;
  id: number;
}

const MemberCardModal = (props: Iprops) => {
  const { name, nickname, role, memberImg, introduce, setSelectedId, id } =
    props;
  return (
    <ModalWrapper>
      <OutsideClickHandler outsideClick={() => setSelectedId(undefined)}>
        <StyledModal layoutId={String(id)}>
          <MemberCardModalInner>
            {memberImg ? (
              <MemberImg
                src={memberImg}
                layoutId={`memberImage-section-${String(id)}`}
              />
            ) : (
              <Skeleton layoutId={`memberImage-section-${String(id)}`} />
            )}
            <Nickname layoutId={`nickname-section-${String(id)}`}>
              {nickname}
            </Nickname>
            <Name layoutId={`name-section-${String(id)}`}>{name}</Name>
            <Role layoutId={`role-section-${String(id)}`}>{role}</Role>
            <Name>{introduce}</Name>
          </MemberCardModalInner>
        </StyledModal>
      </OutsideClickHandler>
    </ModalWrapper>
  );
};

export default MemberCardModal;
