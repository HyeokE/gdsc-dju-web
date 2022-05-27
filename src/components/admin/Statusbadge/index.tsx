import React from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../../../styles/theme';

const StatusBadgeWrapper = styled.div<{
  color: keyof typeof theme.colors;
  disable?: boolean;
}>`
  padding: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  ${({ color }) =>
    color &&
    css`
      color: ${theme.colors[color]};
      background: ${theme.colors.white};
      border: 1px solid ${theme.colors[color]};
    `}
  font-size: ${({ theme }) => theme.fontSize.body3};
  width: fit-content;
  border-radius: 4px;
  ${({ disable }) =>
    disable &&
    css`
      color: ${theme.colors.grey400};
      background: ${theme.colors.white};
      border: 1px solid ${theme.colors.grey400};
    `}
`;
const statusData = {
  DOCS: {
    color: 'googleBlue',
    text: '서류심사',
  },
  INTERVIEW: {
    color: 'googleYellow',
    text: '인터뷰',
  },
  REJECTED: {
    color: 'googleRed',
    text: '불합격',
  },
  HIRED: {
    color: 'googleGreen',
    text: '최종합격',
  },
};
const StatusBadge = ({
  status,
  disable,
}: {
  status?: keyof typeof statusData;
  disable?: boolean;
}) => {
  return (
    <>
      {status && (
        <StatusBadgeWrapper
          color={statusData[status].color as keyof typeof theme.colors}
          disable={disable}
        >
          {statusData[status].text}
        </StatusBadgeWrapper>
      )}
    </>
  );
};

export default StatusBadge;
