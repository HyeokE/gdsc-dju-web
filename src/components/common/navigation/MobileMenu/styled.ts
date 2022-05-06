import { motion } from 'framer-motion';
import styled from 'styled-components';

export const MobileNavBackGround = styled(motion.div)`
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: 900;
  border-style: solid;
  display: flex;

  justify-content: center;
  border-width: 0;
  border-left-width: 1px;
  border-color: ${(props) => props.theme.colors.grey200};
`;
