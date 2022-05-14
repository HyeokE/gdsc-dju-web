import React from 'react';
import {
  BannerTitleWrapper,
  ButtonWrapper,
  HomeSolarSystemWrapper,
  HomeWrapper,
  MainBannerText,
  RecruitingWrapper,
  StyledRecruitmentButton,
} from '../../pages/Home/styled';
import { bannerItemAnimate } from '../common/Variants/Variants';
import Recruiting from '../../assets/Recruiting';
import SolarSystem from '../../components/Home/SolorSystem';
import { useRecoilState } from 'recoil';
import { recruitmentState } from '../../store/recruitHandler';
import DownArrow from '../common/DownArrow';

const HomePageV2 = () => {
  return (
    <HomeWrapper>
      <HomeSolarSystemWrapper>
        <SolarSystem />
      </HomeSolarSystemWrapper>
      <BannerTitleWrapper>
        <RecruitingWrapper variants={bannerItemAnimate}>
          <Recruiting />
          <MainBannerText variants={bannerItemAnimate}>
            상상을 현실로 만들다.
          </MainBannerText>
          <HomeRecruitmentButton />
          {/*<MainBannerText variants={bannerItemAnimate}>*/}
          {/*  11. 22 ~ 12. 19*/}
          {/*</MainBannerText>*/}
        </RecruitingWrapper>
      </BannerTitleWrapper>
      <DownArrow />
    </HomeWrapper>
  );
};
const HomeRecruitmentButton = () => {
  const [recruit] = useRecoilState(recruitmentState);
  return (
    <ButtonWrapper variants={bannerItemAnimate}>
      {recruit.home ? (
        <StyledRecruitmentButton
          onClick={() => {
            window.open('https://gdsc-dju.web.app/recruit', '_blank');
          }}
        >
          지원하기
        </StyledRecruitmentButton>
      ) : (
        <StyledRecruitmentButton disable={true}>
          지원기간이 아닙니다.
        </StyledRecruitmentButton>
      )}
    </ButtonWrapper>
  );
};

export default HomePageV2;
