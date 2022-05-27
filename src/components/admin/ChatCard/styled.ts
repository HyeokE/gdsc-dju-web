import styled from 'styled-components';

export const ChatCardWrapper = styled.div`
  padding: 10px;
  width: 150px;
  box-shadow: 0 2px 3px ${({ theme }) => theme.colors.grey300};
  margin-top: 10px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  row-gap: 4px;
  position: relative;
`;
export const ChatUser = styled.p`
  font-size: ${({ theme }) => theme.fontSize.body5};
  color: ${({ theme }) => theme.colors.grey900};
`;
export const ChatText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.body2};
  color: ${({ theme }) => theme.colors.grey900};
`;
export const ChatDate = styled.p`
  font-size: ${({ theme }) => theme.fontSize.body4};
  color: ${({ theme }) => theme.colors.grey500};
  position: relative;
  right: 0;
`;
