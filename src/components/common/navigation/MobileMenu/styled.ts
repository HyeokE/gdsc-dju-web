import { motion } from 'framer-motion';
import styled from 'styled-components';

export const MobileMenuSolarSystemWrapper = styled.div`
  position: absolute;
  bottom: -50%;
  left: 0;
  transform: translate(-50%, -50%);
`;

export const MobileNavBackGround = styled(motion.div)`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: 900;
  border-style: solid;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-width: 0;
  border-left-width: 1px;
  border-color: ${(props) => props.theme.colors.grey200};
`;
