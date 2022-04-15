import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Menu = styled.div`
  top: 0px;
  position: fixed;
  background: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
  z-index: 99;
`;
export const MenuInner = styled(motion.div)`
  padding: 25px;
  position: absolute;
  top: 100px;
  right: 0px;
  width: 200px;
  z-index: 999;
`;

export const MenuWrapper = styled(motion.div)`
  list-style: none;
  margin-bottom: 20px;
  display: flex;
  cursor: pointer;
  flex-direction: column;
  justify-content: flex-start;
`;
export const CategoryLine = styled.div`
  background: #f5f5f5;
  height: 1px;
  width: 100%;
  opacity: 50;
`;
