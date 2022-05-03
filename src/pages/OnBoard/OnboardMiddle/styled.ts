import { motion } from 'framer-motion';
import styled from 'styled-components';
import { ErrorMessage, Field } from 'formik';

export const OnboardingBackArrow = styled.img`
  height: 30px;
  display: flex;
  align-items: center;
`;
export const OnboardingBackText = styled.div`
  font-size: 20px;
  font-family: 'Gothic A1', sans-serif;
  font-weight: 700;
  color: #c6c6c6;
  margin-left: 15px;
  height: 20px;
`;
export const OnboardingMiddleElementWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
  position: fixed;
`;
export const OnboardingBackWrapper = styled(motion.div)`
  display: flex;
  position: absolute;
  top: -40px;
  align-items: center;
  text-align: center;
  flex-direction: row;
  cursor: pointer;
`;
export const OnboardingInnerWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  flex-direction: row;
`;
export const OnboardingDescription = styled(motion.div)`
  margin-top: 15px;
  font-size: 20px;
  font-family: 'Gothic A1', sans-serif;
  color: ${(props) => props.theme.colors.grey800};
`;

export const OnboardingInputWrapper = styled(motion.div)``;
export const ErrorMessageWrapper = styled.div`
  height: 30px;
`;
export const StyledErrorMessage = styled(ErrorMessage)`
  color: #f44336;
`;
export const OnboardingInput = styled(Field)`
  margin-top: 65px;
  font-size: 33px;
  border-style: solid;
  padding-left: 8px;
  padding-bottom: 24px;
  border-width: 0px;
  border-bottom-width: 5px;
  border-color: ${(props) => props.colors};
  caret-color: ${(props) => props.colors};
  color: ${(props) => props.colors};
  width: 700px;
  ::placeholder {
    color: black;
    opacity: 20%;
  }
  :focus {
    outline: none;
  }
`;
export const OnboardingMiddleButton = styled(motion.button)`
  margin-top: 50px;
  height: 70px;
  width: 230px;
  color: white !important;
  border-style: solid;
  border-radius: 50px;
  border-width: 0px;
  font-size: 14px;
  font-weight: bold;
  font-family: 'Gothic A1', sans-serif;
  cursor: pointer;
`;
export const OnboardingMiddleImage = styled(motion.img)`
  height: auto;
  width: auto;
  display: flex;
  z-index: -1;
`;
export const OnboardingImageWrapper = styled(motion.div)`
  position: absolute;
  height: 850px;
  justify-content: center;
  align-items: flex-end;
  display: flex;
  right: -200px;
  bottom: -200px;
  z-index: -1;
`;
