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
  ${({ color }) =>
    color &&
    css`
      background: ${(props) => props.theme.colors[color]};
    `}
`;
export const HomeSectionContainerInner = styled(motion.div)`
  position: relative;
  justify-content: center;
  display: flex;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  max-width: 1140px;
  margin: 0 auto;
  min-width: 320px;
`;
