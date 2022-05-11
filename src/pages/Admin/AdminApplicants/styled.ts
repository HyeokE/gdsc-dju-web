import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const Switch = styled.div`
  width: 40px;
  height: 20px;
  background-color: ${(props) => props.theme.colors.grey700};
  display: flex;
  justify-content: flex-start;
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.grey700};
  border-radius: 50px;
  padding: 3px;
  cursor: pointer;
  &[data-isOn='true'] {
    justify-content: flex-end;
    background-color: ${(props) => props.theme.colors.tossBlue};
  }
`;
export const Handle = styled(motion.div)`
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 40px;
`;
export const StyledPosition = styled.div`
  font-size: 1.5rem;
  margin-right: 10px;
`;
export const ToggleButtonWrapper = styled.div`
  width: 33.333%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 30px;
`;
export const ToggleButtonInner = styled.div`
  width: 350px;
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;
export const ToggleButtonSection = styled.section`
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
`;
export const AdminSidebar = styled.div`
  width: 250px;
  height: 100vh;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;
export const AdminSectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const RecruitCard = styled.div`
  width: 100%;
  padding: 20px 30px;
  border-bottom: 1px solid ${(props) => props.theme.colors.grey300};
  box-sizing: border-box;
  font-size: ${(props) => props.theme.fontSize.body1};
  cursor: pointer;
`;
export const RecruitCardWrapper = styled.div<{ isActive: boolean }>`
  margin-bottom: 10px;
  ${({ isActive }) =>
    isActive &&
    css`
      background-color: ${({ theme }) => theme.colors.tossBlue};
      color: white;
    `}
`;
