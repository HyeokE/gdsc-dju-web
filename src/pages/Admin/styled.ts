import styled from 'styled-components';

export const AdminContainerInner = styled.div`
  background: ${({ theme }) => theme.colors.grey50};
  min-height: 100%;
  padding: 30px 30px;
`;
export const AdminContainer = styled.div`
  -webkit-box-flex: 1;
  flex-grow: 1;
  height: 100%;
  position: relative;
  overflow: hidden;
`;
export const AdminContainerWrapper = styled.div`
  height: 100vh;
  display: flex;
  overflow: hidden;
`;
export const SidebarContainer = styled.div`
  width: 225px;
  height: 100%;
  border-right: 1px solid ${({ theme }) => theme.colors.grey300};
  flex-shrink: 0;
  padding-top: 35px;
  position: relative;
`;
