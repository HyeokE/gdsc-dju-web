import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const HomeWrapper = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
`;
export const StyledRecruitmentButton = styled.button<{ disable?: boolean }>`
  width: 22rem;
  height: 6rem;
  border-radius: 7.5rem;
  border-style: solid;
  background: ${({ theme }) => theme.colors.tossBlueActive};
  border-width: 0;
  color: white;
  font-size: 1.6rem;
  cursor: pointer;
  ${({ disable }) =>
    disable &&
    css`
      background: ${({ theme }) => theme.colors.tossBlue200};
      cursor: not-allowed;
    `};
  @media (max-width: ${({ theme }) => theme.windowSize.tablet}px) {
    width: 18rem;
    height: 5.5rem;
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
  width: 70%;
`;
export const RecruitingWrapper = styled(motion.div)`
  position: static;
  z-index: 50;
  max-width: 600px;
  width: 400px;
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
  @media (max-width: ${({ theme }) => theme.windowSize.desk}px) {
    width: 45%;
  }
  @media (max-width: ${({ theme }) => theme.windowSize.tablet}px) {
    bottom: 100px;
    width: 300px;
    left: -100px;
  }
`;
export const RightColorLinesWrapper = styled(motion.div)`
  z-index: 1;
  position: absolute;
  max-width: 50rem;
  width: 40%;
  right: -20rem;
  @media (max-width: ${({ theme }) => theme.windowSize.desk}px) {
    width: 45%;
  }
  @media (max-width: ${({ theme }) => theme.windowSize.tablet}px) {
    top: 200px;
    width: 30rem;
    right: -10rem;
  }
  @media (max-width: 760px) {
    top: -5rem;
  }
`;

export const ButtonWrapper = styled(motion.div)`
  margin-top: 5rem;
`;
export const MainBannerText = styled(motion.p)`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 1.8rem;

  color: ${({ theme }) => theme.colors.grey500};
  @media (max-width: ${({ theme }) => theme.windowSize.tablet}px) {
    font-size: 1.5rem;
  }
  @media (max-width: 320px) {
    font-size: 1.5rem;
  }
`;
export const DownArrowWrapper = styled(motion.div)`
  position: absolute;
  bottom: 9rem;
  display: flex;
  width: 100vw;
  justify-content: center;
  opacity: 50;
`;
