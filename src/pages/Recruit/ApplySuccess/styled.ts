import styled from 'styled-components';

export const ApplyTitle = styled.h1`
  font-size: ${(props) => props.theme.fontSize.h2};
  color: ${(props) => props.theme.colors.grey800};
  font-weight: 500;
`;
export const ApplyMargin = styled.div`
  height: 70px;
`;
export const CheckLottieWrapper = styled.div`
  height: 300px;
  @media (max-width: ${(props) => props.theme.windowSize.tablet}px) {
    height: 200px;
  }
`;

export const ApplyImage = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  @media (max-width: ${(props) => props.theme.windowSize.tablet}px) {
    width: 50%;
  }
`;
