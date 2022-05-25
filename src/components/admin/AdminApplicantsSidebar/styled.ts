import styled, { css } from 'styled-components';

export const RecruitCard = styled.p`
  width: 100%;
  box-sizing: border-box;
  font-size: ${(props) => props.theme.fontSize.body1};
`;
export const RecruitCardWrapper = styled.div`
  padding: 14px 20px;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.grey300};
  border-radius: 10px;
  box-shadow: 0 2px 4px ${({ theme }) => theme.colors.grey300};
`;
export const AdminSidebar = styled.aside`
  background: ${({ theme }) => theme.colors.grey100};
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  row-gap: 10px;
  width: 100%;
  max-width: 200px;
`;
export const StatusCircle = styled.div<{ status: boolean }>`
  position: relative;
  top: -4px;
  left: -9px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  ${({ status }) =>
    status
      ? css`
          background: ${({ theme }) => theme.colors.googleGreen};
        `
      : css`
          background: ${({ theme }) => theme.colors.googleRed};
        `}
`;
