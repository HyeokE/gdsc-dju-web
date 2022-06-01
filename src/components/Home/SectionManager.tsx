import React from 'react';
import styled from 'styled-components';
import {
  HomeSectionContainer,
  HomeSectionContainerInner,
  HomeSectionTitle,
  HomeSectionWrapper,
} from './styled';
import MemberCard from '../common/MemberCard';
import { motion } from 'framer-motion';
import { managerData } from '../../apis/pageData/managerData';

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
  @media (max-width: ${({ theme }) => theme.windowSize.tablet}px) {
    font-size: ${({ theme }) => theme.fontSize.body1};
  }
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
        <HomeSectionWrapper>
          <HomeSectionTitle>GDSC DJU 운영진을 소개해요</HomeSectionTitle>
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
        </HomeSectionWrapper>
      </HomeSectionContainerInner>
    </HomeSectionContainer>
  );
};

export default SectionManager;
