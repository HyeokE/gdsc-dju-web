import React from 'react';
import {
  ApplicantInfoInner,
  ApplicantInfoText,
  ApplicantInfoTextWrapper,
  ApplicantInfoWrapper,
  ApplicantModalInner,
  ApplicantModalWrapper,
  ApplicantName,
  ApplicantNameWrapper,
} from './styled';

const ApplicantModal = () => {
  return (
    <ApplicantModalWrapper>
      <ApplicantModalInner>
        <ApplicantInfoWrapper>
          <ApplicantInfo />
        </ApplicantInfoWrapper>
      </ApplicantModalInner>
    </ApplicantModalWrapper>
  );
};

const ApplicantInfo = () => {
  return (
    <ApplicantInfoInner>
      <ApplicantNameWrapper>
        <ApplicantName>정준혁</ApplicantName>
      </ApplicantNameWrapper>
      <ApplicantInfoTextWrapper>
        <ApplicantInfoText>이메일</ApplicantInfoText>
        <ApplicantInfoText>jhjoeng00@gmail.com</ApplicantInfoText>
      </ApplicantInfoTextWrapper>
      <ApplicantInfoTextWrapper>
        <ApplicantInfoText>전화번호</ApplicantInfoText>
        <ApplicantInfoText>010-2544-1586</ApplicantInfoText>
      </ApplicantInfoTextWrapper>
      <ApplicantInfoTextWrapper>
        <ApplicantInfoText>전공</ApplicantInfoText>
        <ApplicantInfoText>로봇공학전공</ApplicantInfoText>
      </ApplicantInfoTextWrapper>
      <ApplicantInfoTextWrapper>
        <ApplicantInfoText>학번</ApplicantInfoText>
        <ApplicantInfoText>20191422</ApplicantInfoText>
      </ApplicantInfoTextWrapper>
      <ApplicantInfoTextWrapper>
        <ApplicantInfoText>Link1</ApplicantInfoText>
        <ApplicantInfoText>ㅇㄴㅇㄴㅇ</ApplicantInfoText>
      </ApplicantInfoTextWrapper>
      <ApplicantInfoTextWrapper>
        <ApplicantInfoText>Link2</ApplicantInfoText>
        <ApplicantInfoText>없음</ApplicantInfoText>
      </ApplicantInfoTextWrapper>
    </ApplicantInfoInner>
  );
};

export default ApplicantModal;
