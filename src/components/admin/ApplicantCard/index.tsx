import React from 'react';
import { ApplicantCardWrapper, ApplicantText } from './styled';
import { IApplicantTypeWithID } from '../../../types/applicant';

const ApplicantCard: React.FC<IApplicantTypeWithID> = ({
  name,
  email,
  position,
  status,
  studentID,
}) => {
  return (
    <ApplicantCardWrapper>
      <ApplicantText>{name}</ApplicantText>
      <ApplicantText>{position}</ApplicantText>
      <ApplicantText>{email}</ApplicantText>
      <ApplicantText>{status}</ApplicantText>
    </ApplicantCardWrapper>
  );
};

export default ApplicantCard;
