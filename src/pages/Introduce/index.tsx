import React from 'react';
import {
  ContainerInner,
  LayoutContainer,
  TopMargin,
} from '../../styles/layouts';
import { MainText, Title } from '../../components/common/Title/title';

import { memberList } from '../../apis/pageData/MemberList';

import Banner from '../../components/common/Banner';
import MemberCardSection from '../../components/Introduce/MemberCardSection';

const Introduce = () => {
  return (
    <>
      <Banner color={'yellow'} />
      <LayoutContainer>
        <ContainerInner>
          <TopMargin />
          <Title>About us</Title>
          <TopMargin />
          <MainText>
            GDSC와 함께 성장하는 팀원 {memberList.length}명을 소개합니다.
          </MainText>
          <TopMargin />
          <MemberCardSection />
          <TopMargin />
        </ContainerInner>
      </LayoutContainer>
    </>
  );
};
export default Introduce;
