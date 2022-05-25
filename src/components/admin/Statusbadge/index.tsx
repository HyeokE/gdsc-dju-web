import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../styles/theme';

const StatusBadgeWrapper = styled.div<{ color: keyof typeof theme.colors }>`
  padding: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.body3};
  border: 1px solid ${({ color }) => theme.colors[color]};
  border-radius: 4px;
  color: ${({ color }) => theme.colors[color]};
  background: fade(${({ color }) => theme.colors[color]}, 20%);
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
const StatusBadge = ({ status }: { status: keyof typeof statusData }) => {
  return (
    <StatusBadgeWrapper
      color={statusData[status].color as keyof typeof theme.colors}
    >
      {statusData[status].text}
    </StatusBadgeWrapper>
  );
};

export default StatusBadge;
