import { motion } from 'framer-motion';
import styled from 'styled-components';

export const AdminUserMenuWrapper = styled(motion.div)`
  position: fixed;
  top: 60px;
  justify-content: center;
  text-align: center;
  background: white;
  padding: 5px 5px;
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.grey200};
  border-radius: 10px;
`;
export const MenuElement = styled(motion.div)`
  font-size: 1.6rem;
  padding: 5px 15px;
  border: 0 solid;
  border-radius: 5px;
  background-color: white;
`;
