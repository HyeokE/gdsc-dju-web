import React from 'react';
import styled from 'styled-components';
import { IApplicantTypeWithID } from '../../../types/applicant';
import StatusBadge from '../../admin/Statusbadge';

const CheckBoxCardWrapper = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  box-sizing: border-box;
  box-shadow: 0 0 10px ${({ theme }) => theme.colors.grey300};
  padding: 16px 30px;
  border-radius: 10px;
  width: 500px;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: ${({ theme }) => theme.colors.grey50};
    cursor: pointer;
  }
`;
const CheckBoxText = styled.div`
  font-size: ${({ theme }) => theme.fontSize.body2};
  width: 100px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
const CheckBoxEmailText = styled.div`
  font-size: ${({ theme }) => theme.fontSize.body2};
  width: 200px;
`;
const CheckBox = styled.input`
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid ${({ theme }) => theme.colors.grey300};
  cursor: pointer;

  &:checked {
    background: ${({ theme }) => theme.colors.googleBlue};
  }
`;

const CheckBoxCard: React.FC<IApplicantTypeWithID> = ({
  id,
  name,
  email,
  status,
}) => {
  return (
    <CheckBoxCardWrapper>
      <CheckBox type={'checkbox'} />
      <CheckBoxText>{name}</CheckBoxText>
      <CheckBoxEmailText>{email}</CheckBoxEmailText>
      <StatusBadge status={status} />
    </CheckBoxCardWrapper>
  );
};

export default CheckBoxCard;
