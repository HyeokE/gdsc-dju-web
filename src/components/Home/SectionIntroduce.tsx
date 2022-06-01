import React from 'react';
import styled from 'styled-components';
import { HomeSectionContainer, HomeSectionContainerInner } from './styled';
import { motion } from 'framer-motion';
import SolorSystem from './SolorSystem';

const SectionTitle = styled.span`
  display: block;
  width: 100%;
  margin-bottom: 25px;
  font-size: ${({ theme }) => theme.fontSize.h2};
  font-style: normal;
  font-weight: bold;
  font-stretch: normal;
  line-height: 52px;
  color: ${({ theme }) => theme.colors.grey900};
  letter-spacing: normal;
  word-break: keep-all;
  @media (max-width: ${({ theme }) => theme.windowSize.mobile}px) {
    font-size: ${({ theme }) => theme.fontSize.h4};
  }
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40rem;
  margin-top: 5.1rem;
  word-break: keep-all;
  @media (max-width: ${({ theme }) => theme.windowSize.mobile}px) {
    width: 250px;
    margin-top: 2rem;
  }
`;
const ContentTitle = styled.span`
  margin-bottom: 0.9rem;
  font-size: ${({ theme }) => theme.fontSize.h5};
  font-style: normal;
  font-weight: normal;
  font-stretch: normal;
  line-height: 2.629rem;
  color: ${({ theme }) => theme.colors.grey600};
  letter-spacing: normal;
  word-break: keep-all;
  -webkit-font-smoothing: subpixel-antialiased;
  @media (max-width: ${({ theme }) => theme.windowSize.mobile}px) {
    font-size: ${({ theme }) => theme.fontSize.body2};
  }
`;
const ContentText = styled.span`
  font-size: ${({ theme }) => theme.fontSize.h2};
  font-style: normal;
  font-weight: bold;
  font-stretch: normal;
  color: ${({ theme }) => theme.colors.grey900};
  letter-spacing: normal;
  word-break: keep-all;
  @media (max-width: ${({ theme }) => theme.windowSize.mobile}px) {
    font-size: ${({ theme }) => theme.fontSize.h4};
    line-height: 1.5;
  }
`;
const SectionWrapper = styled(motion.div)`
  max-width: 960px;
  padding: 0 3rem;
  display: flex;
  flex-wrap: wrap;
`;
const IntroduceSolarSystemWrapper = styled.div`
  position: relative;
  right: -50vw;
  bottom: -70vh;
  transform: scale(1.5);
  z-index: -1;
  height: 100%;
  width: 100%;
  @media (max-width: ${({ theme }) => theme.windowSize.mobile}px) {
    transform: scale(1);
    right: -50%;
  }
`;
const SectionAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      duration: 1,
    },
  },
};

const SectionIntroduce = () => {
  return (
    <HomeSectionContainer>
      <HomeSectionContainerInner>
        <SectionWrapper
          variants={SectionAnimation}
          initial={'hidden'}
          whileInView={'visible'}
          viewport={{ once: true }}
        >
          <IntroduceSolarSystemWrapper>
            <SolorSystem />
          </IntroduceSolarSystemWrapper>
          <SectionTitle>디자이너와 개발자의 성장을 위해</SectionTitle>
          <ContentWrapper>
            <ContentTitle>누적 지원자 수</ContentTitle>
            <ContentText>90명 +</ContentText>
          </ContentWrapper>
          <ContentWrapper>
            <ContentTitle>전체 인원</ContentTitle>
            <ContentText>30명 +</ContentText>
          </ContentWrapper>
          <ContentWrapper>
            <ContentTitle>진행한 스터디/프로젝트</ContentTitle>
            <ContentText>10회 +</ContentText>
          </ContentWrapper>
          <ContentWrapper>
            <ContentTitle>진행한 이벤트</ContentTitle>
            <ContentText>100회 +</ContentText>
          </ContentWrapper>
        </SectionWrapper>
      </HomeSectionContainerInner>
    </HomeSectionContainer>
  );
};

export default SectionIntroduce;
