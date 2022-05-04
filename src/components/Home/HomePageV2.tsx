import React from 'react';
import {
  BannerTitleWrapper,
  HomeWrapper,
  MainBannerText,
  RecruitingWrapper,
} from '../../pages/Home/styled';
import { bannerItemAnimate } from '../common/Variants/Variants';
import Recruiting from '../../assets/Recruiting';
import SolarSystem from '../../components/Home/SolorSystem';

const HomePageV2 = () => {
  return (
    <HomeWrapper>
      <SolarSystem />
      <BannerTitleWrapper>
        <RecruitingWrapper variants={bannerItemAnimate}>
          <Recruiting />
          <MainBannerText variants={bannerItemAnimate}>
            상상을 현실로
          </MainBannerText>
          <MainBannerText variants={bannerItemAnimate}>
            11. 22 ~ 12. 19
          </MainBannerText>
        </RecruitingWrapper>
      </BannerTitleWrapper>
    </HomeWrapper>
  );
};

export default HomePageV2;
