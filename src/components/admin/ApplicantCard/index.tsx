import React from 'react';
import { ApplicantCardWrapper, ApplicantText } from './styled';
import { IApplicantTypeWithID } from '../../../types/applicant';
import StatusBadge from '../Statusbadge';

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
      <ApplicantText>{position.split(' ')[0]}</ApplicantText>
      <ApplicantText>{email}</ApplicantText>

      <StatusBadge status={status} />
    </ApplicantCardWrapper>
  );
};

export default ApplicantCard;
