import { motion } from 'framer-motion';
import styled from 'styled-components';

export const MobileNavBackGround = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 250px;
  height: 100vh;
  background: #fff;
  z-index: 998;
  border-style: solid;
  border-width: 0;
  border-left-width: 1px;
  border-color: ${(props) => props.theme.colors.grey200};
`;
