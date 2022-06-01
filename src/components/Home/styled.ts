import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';
import { theme } from '../../styles/theme';

export const HomeSectionContainer = styled(motion.div)<{
  color?: keyof typeof theme.colors;
}>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  ${({ color }) =>
    color &&
    css`
      background: ${(props) => props.theme.colors[color]};
    `}
  @media (max-width: ${({ theme }) => theme.windowSize.mobile}px) {
    min-height: 100vh;
    padding: 20px 0;
  }
`;
export const HomeSectionContainerInner = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  max-width: 1160px;
  margin: 0 auto;
  min-width: 320px;
`;
export const HomeSectionWrapper = styled(motion.div)`
  max-width: 960px;
  padding: 0 3rem;
  display: flex;
  flex-wrap: wrap;
`;
export const HomeSectionTitle = styled.h1`
  display: block;
  width: 100%;
  margin-bottom: 25px;
  font-size: ${({ theme }) => theme.fontSize.h2};
  font-style: normal;
  font-weight: bold;
  font-stretch: normal;
  line-height: 52px;
  color: ${({ theme }) => theme.colors.grey900};
  letter-spacing: normal;
  word-break: keep-all;
  @media (max-width: ${({ theme }) => theme.windowSize.tablet}px) {
    font-size: ${({ theme }) => theme.fontSize.h3};
  }
  @media (max-width: ${({ theme }) => theme.windowSize.mobile}px) {
    font-size: ${({ theme }) => theme.fontSize.h4};
    width: 330px;
  }
`;
