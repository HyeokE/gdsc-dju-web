import styled from 'styled-components';

export const MinTitle = styled.div`
  width: 90px;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.grey800};
`;
export const MinText = styled.div`
  color: #3886f6;
  font-size: 1.4rem;
`;

export const ElementWrapper = styled.div`
  padding: 14px 0px;
  display: flex;
  border-top: 1px solid ${({ theme }) => theme.colors.grey200};
  @media (max-width: 500px) {
    width: 100%;
  }
`;
