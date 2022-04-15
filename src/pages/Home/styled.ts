import { motion } from 'framer-motion';
import styled from 'styled-components';

export const HomeWrapper = styled(motion.main)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh + 70px);
  top: -70px;
  overflow-x: hidden;
`;
export const StyledRecruitmentButton = styled.button<{ disable?: boolean }>`
  width: 220px;
  height: 60px;
  border-radius: 75px;
  border-style: solid;
  background: ${(props) => props.theme.colors.tossBlueActive};
  border-width: 0;
  color: white;
  font-size: 1.6rem;
  cursor: pointer;
  ${(props) =>
    props.disable &&
    `
    background: ${props.theme.colors.tossBlue200};
    cursor: not-allowed;
    `};
  @media (max-width: ${(props) => props.theme.windowSize.tablet}px) {
    width: 180px;
    height: 55px;
    font-size: 1.5rem;
  }
  @media (max-width: 500px) {
    width: 150px;
    height: 45px;
    font-size: 1.3rem;
  }
`;
export const StyledMainBanner = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: row;
  overflow-x: hidden;
  z-index: -1;
  top: 0;
`;
export const BannerTitleWrapper = styled(motion.section)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
`;
export const RecruitingWrapper = styled(motion.div)`
  position: static;
  z-index: 50;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LeftColorLinesWrapper = styled(motion.div)`
  z-index: 1;
  position: absolute;
  max-width: 500px;
  width: 40%;

  left: -200px;
  @media (max-width: ${(props) => props.theme.windowSize.desk}px) {
    width: 45%;
  }
  @media (max-width: ${(props) => props.theme.windowSize.tablet}px) {
    bottom: 100px;
    width: 300px;
    left: -100px;
  }
`;
export const RightColorLinesWrapper = styled(motion.div)`
  z-index: 1;
  position: absolute;
  max-width: 500px;
  width: 40%;
  right: -200px;
  @media (max-width: ${(props) => props.theme.windowSize.desk}px) {
    width: 45%;
  }
  @media (max-width: ${(props) => props.theme.windowSize.tablet}px) {
    top: 200px;
    width: 300px;
    right: -100px;
  }
  @media (max-width: 760px) {
    top: -50px;
  }
`;

export const ButtonWrapper = styled(motion.div)`
  margin-top: 50px;
`;
export const MainBannerText = styled(motion.p)`
  margin-top: 30px;
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 1.8rem;
  color: ${(props) => props.theme.colors.grey500};
  @media (max-width: ${(props) => props.theme.windowSize.tablet}px) {
    font-size: 1.5rem;
  }
  @media (max-width: 320px) {
    font-size: 1.5rem;
  }
`;
export const DownArrowWrapper = styled(motion.div)`
  position: absolute;
  bottom: 90px;
  display: flex;
  width: 100vw;
  justify-content: center;
  opacity: 50;
`;
