import styled from 'styled-components';
import { motion } from 'framer-motion';

export const MotionSelector = styled(motion.section)``;

export const StyledTableCategoryWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  padding: 15px 0px;
  text-align: center;
  font-size: 1.6rem;
  justify-content: space-around;
  background-color: white;
  font-weight: bold;
  @media (max-width: 500px) {
    display: none;
  }
`;
export const StyledMobileTableCategoryWrapper = styled.div`
  display: none;
  width: 100%;
  flex-direction: row;
  padding: 15px 0px;
  text-align: center;
  justify-content: space-around;

  font-weight: bold;
  @media (max-width: 500px) {
    display: flex;
  }
  @media (max-width: 320px) {
    font-size: 14px;
  }
`;
export const StyledTableWrapper = styled(motion.div)`
  display: flex;
  width: 100%;
  flex-direction: row;
  padding: 15px 0px;
  text-align: center;
  background: white;
  font-size: 1.6rem;
  justify-content: space-around;
  border-width: 0;
  cursor: pointer;
  @media (max-width: 500px) {
    display: none;
  }
`;
export const StyledMobileTableWrapper = styled(motion.div)`
  display: none;
  width: 100%;
  flex-direction: row;
  padding: 15px 0;
  text-align: center;
  justify-content: space-around;
  background-color: white;
  font-size: 1.6rem;
  @media (max-width: 500px) {
    display: flex;
  }
  @media (max-width: 320px) {
    font-size: 1.2rem;
  }
`;
export const StyledSmallColumn = styled(motion.div)`
  padding: 0 5px;
  width: 100px;
  cursor: pointer;
`;
export const StyledColumn = styled(motion.div)`
  padding: 0 7px;
  width: 120px;
  cursor: pointer;
`;
export const StyledLargeColumn = styled(motion.div)`
  padding: 0 7px;
  width: 220px;
  cursor: pointer;
`;
export const MemberPageWrapper = styled(motion.div)`
  margin-top: 10px;
`;
