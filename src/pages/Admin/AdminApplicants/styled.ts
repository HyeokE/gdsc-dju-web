import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';
import { theme } from '../../../styles/theme';

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
export const InformationHeader = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;
export const ApplicantsStatusWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const ApplicantsBadgeWrapper = styled.div`
  font-size: ${({ theme }) => theme.fontSize.body2};
  color: ${({ theme }) => theme.colors.grey700};
  display: flex;
  align-items: center;
  padding: 0 10px;
  flex-wrap: wrap;
  gap: 0 5px;
`;

export const ToggleButton = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 20px;
`;

export const AdminSectionWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  min-width: 320px;
  flex: 1;
`;
