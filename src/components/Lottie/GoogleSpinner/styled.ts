import styled, { css } from 'styled-components';

export const LoaderBackground = styled.div<{ background?: boolean }>`
  display: flex;
  background: rgba(255, 255, 255, 0.7);
  ${(props) =>
    props.background &&
    css`
      background: rgba(0, 0, 0, 0.7);
    `}

  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 999;
`;
export const GoogleLoader = styled.div`
  width: 100px;
`;
