import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ApplicantCardWrapper = styled(motion.div)`
  display: flex;
  flex-direction: row;
  padding: 10px 30px;
  justify-content: space-around;
  box-shadow: 0 2px 12px 0 ${({ theme }) => theme.colors.grey300};
  border-radius: 10px;
  box-sizing: border-box;
  align-items: center;
  cursor: pointer;
  height: 50px;
  width: 400px;
`;
export const ApplicantText = styled(motion.div)`
  font-size: ${({ theme }) => theme.fontSize.body2};
  text-overflow: ellipsis;
  width: 80px;
  white-space: nowrap;
  overflow: hidden;
  display: block;
`;
export const ApplicantEmail = styled(motion.div)`
  font-size: ${({ theme }) => theme.fontSize.body2};
  text-overflow: ellipsis;
  width: 100px;
  white-space: nowrap;
  overflow: hidden;
  display: block;
`;
