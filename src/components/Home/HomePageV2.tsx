import React from 'react';
import {
  BannerTitleWrapper,
  HomeWrapper,
  MainBannerText,
  RecruitingWrapper,
} from '../../pages/Home/styled';
import Line1 from '../../assets/HomeAssets/Line1';
import Line2 from '../../assets/HomeAssets/Line2';
import Line3 from '../../assets/HomeAssets/Line3';
import { bannerItemAnimate } from '../common/Variants/Variants';
import Recruiting from '../../assets/Recruiting';

const HomePageV2 = () => {
  return (
    <HomeWrapper>
      <SolarSystem />
      <BannerTitleWrapper>
        <RecruitingWrapper variants={bannerItemAnimate}>
          <Recruiting />
          <MainBannerText variants={bannerItemAnimate}>
            <>상상의 시작은 GDSC로부터.</>
          </MainBannerText>
          <MainBannerText variants={bannerItemAnimate}>
            11. 22 ~ 12. 19
          </MainBannerText>
        </RecruitingWrapper>
      </BannerTitleWrapper>
    </HomeWrapper>
  );
};
const SolarSystem = () => {
  return (
    <div>
      <Line3 />
      <Line1 />
      <Line2 />
    </div>
  );
};

export default HomePageV2;
