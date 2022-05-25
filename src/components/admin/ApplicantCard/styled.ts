import styled from 'styled-components';

export const ApplicantCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 17px 30px;
  flex-wrap: wrap;
  column-gap: 10px;
  box-shadow: 0 2px 12px 0 ${({ theme }) => theme.colors.grey300};
  border-radius: 10px;
  box-sizing: border-box;
  cursor: pointer;
`;
export const ApplicantText = styled.div`
  font-size: ${({ theme }) => theme.fontSize.body1};
`;
