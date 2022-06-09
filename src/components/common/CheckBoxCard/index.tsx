import React from 'react';
import styled, { css } from 'styled-components';
import { IApplicantTypeWithID } from '../../../types/applicant';
import StatusBadge from '../../admin/Statusbadge';

const CheckBoxCardWrapper = styled.div<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  box-sizing: border-box;
  box-shadow: 0 0 10px ${({ theme }) => theme.colors.grey300};
  background: ${({ theme }) => theme.colors.white};
  padding: 12px 16px;
  height: 46px;
  border-radius: 6px;
  transition: all 0.3s ease-in-out;
  width: 400px;
  &:hover {
    background: ${({ theme }) => theme.colors.grey50};
    cursor: pointer;
  }
  ${({ disabled }) =>
    disabled &&
    css`
      width: 300px;
    `}
`;
const CheckBoxText = styled.div<{ disabled?: boolean }>`
  font-size: ${({ theme }) => theme.fontSize.body2};
  width: 70px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  ${({ disabled }) =>
    disabled &&
    css`
      width: 120px;
    `}
`;
const CheckBoxEmailText = styled.div`
  font-size: ${({ theme }) => theme.fontSize.body2};
  width: 130px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
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
interface ICheckBoxCardProps {
  setCheckedList?: (id: string, isChecked: boolean) => void;
  checkedList?: Set<unknown>;
  disabled?: boolean;
}

const CheckBoxCard: React.FC<IApplicantTypeWithID & ICheckBoxCardProps> = ({
  id,
  name,
  email,
  status,
  position,
  checkedList,
  setCheckedList,
  disabled,
}) => {
  const ref = React.useRef<HTMLInputElement>(null);
  return (
    <CheckBoxCardWrapper
      disabled={disabled}
      onClick={() => {
        setCheckedList && setCheckedList(id, !ref.current?.checked as boolean);
      }}
    >
      {!disabled && checkedList && setCheckedList && (
        <CheckBox
          type={'checkbox'}
          ref={ref}
          checked={checkedList.has(id)}
          onChange={(e) => setCheckedList(id, e.target.checked)}
        />
      )}
      <CheckBoxText>{name}</CheckBoxText>
      {!disabled && <CheckBoxText>{position}</CheckBoxText>}
      <CheckBoxEmailText>{email}</CheckBoxEmailText>
      {!disabled && <StatusBadge status={status} />}
    </CheckBoxCardWrapper>
  );
};

export default CheckBoxCard;
