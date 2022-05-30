import React from 'react';
import styled from 'styled-components';
import { HomeSectionContainer, HomeSectionContainerInner } from './styled';
import MemberCard from '../common/MemberCard';
import jason from '../../assets/managerProfile/jason.jpeg';
import { motion } from 'framer-motion';
import { managerData } from '../../apis/pageData/managerData';

const ManagerTitle = styled(motion.span)`
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
const ManagerWrapper = styled.div`
  padding: 0 3rem;
  display: flex;
  flex-wrap: wrap;
`;
const ManagerSubTitle = styled(motion.div)`
  margin-bottom: 50px;
  font-size: ${({ theme }) => theme.fontSize.h6};
  font-style: normal;
  font-weight: normal;
  font-stretch: normal;
  line-height: 1.45em;
  color: ${({ theme }) => theme.colors.grey600};

  letter-spacing: normal;
  word-break: keep-all;
  -webkit-font-smoothing: subpixel-antialiased;
  @media (max-width: ${({ theme }) => theme.windowSize.mobile}px) {
    font-size: ${({ theme }) => theme.fontSize.body1};
  }
`;
const MemberCardSection = styled(motion.section)`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 30px;
`;
const MemberCardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 250px;
  min-height: 300px;

  @media (max-width: ${({ theme }) => theme.windowSize.mobile}px) {
    width: 100%;
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
const SectionManager = () => {
  return (
    <HomeSectionContainer>
      <HomeSectionContainerInner
        variants={SectionAnimation}
        initial={'hidden'}
        whileInView={'visible'}
        viewport={{ once: true }}
      >
        <ManagerWrapper>
          <ManagerTitle>GDSC Daejin 운영진을 소개해요</ManagerTitle>
          <ManagerSubTitle>
            구성원의 도움을 받아 커뮤니티의 문화를 만들어나가고 있어요
          </ManagerSubTitle>
          <MemberCardSection>
            {managerData.map((member, index) => (
              <MemberCardWrapper key={index}>
                <MemberCard {...member} />
              </MemberCardWrapper>
            ))}
          </MemberCardSection>
        </ManagerWrapper>
      </HomeSectionContainerInner>
    </HomeSectionContainer>
  );
};

export default SectionManager;
