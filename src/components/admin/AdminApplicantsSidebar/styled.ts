import styled, { css } from 'styled-components';

export const RecruitCard = styled.div`
  width: 100%;
  padding: 20px 30px;
  border-bottom: 1px solid ${(props) => props.theme.colors.grey300};
  box-sizing: border-box;
  font-size: ${(props) => props.theme.fontSize.body1};
  cursor: pointer;
`;
export const RecruitCardWrapper = styled.div<{ isActive: boolean }>`
  margin-bottom: 10px;
  ${({ isActive }) =>
    isActive &&
    css`
      background-color: ${({ theme }) => theme.colors.tossBlue};
      color: white;
    `}
`;
export const AdminSidebar = styled.div`
  width: 250px;
  height: 100vh;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
