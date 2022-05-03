import React from 'react';
import {
  ApplyCardBlueLine,
  ApplyCardContent,
  ApplyCardContentWrapper,
  ApplyCardInner,
  ApplyCardWrapper,
} from './styled';

interface Iprops {
  username?: string;
  email?: string;
  phone?: string;
  position?: string;
}

const ApplySuccessCard = (props: Iprops) => {
  const { username, email, phone, position } = props;
  return (
    <ApplyCardWrapper>
      <ApplyCardBlueLine />
      <ApplyCardInner>
        <ApplyCardContentWrapper>
          <ApplyCardContent>이름</ApplyCardContent>
          <ApplyCardContent>{username}</ApplyCardContent>
        </ApplyCardContentWrapper>
        <ApplyCardContentWrapper>
          <ApplyCardContent>포지션</ApplyCardContent>
          <ApplyCardContent>{position}</ApplyCardContent>
        </ApplyCardContentWrapper>
        <ApplyCardContentWrapper>
          <ApplyCardContent>이메일</ApplyCardContent>
          <ApplyCardContent>{email}</ApplyCardContent>
        </ApplyCardContentWrapper>
        <ApplyCardContentWrapper>
          <ApplyCardContent>전화번호</ApplyCardContent>
          <ApplyCardContent>{phone}</ApplyCardContent>
        </ApplyCardContentWrapper>
      </ApplyCardInner>
    </ApplyCardWrapper>
  );
};

export default ApplySuccessCard;
