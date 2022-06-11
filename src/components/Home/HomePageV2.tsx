import React from 'react';
import {
  BannerTitleWrapper,
  ButtonWrapper,
  GoogleColorText,
  GoogleColorTextWrapper,
  HomeWrapper,
  MainBannerText,
  RecruitingWrapper,
  StyledRecruitmentButton,
} from '../../pages/Home/styled';
import { bannerItemAnimate } from '../common/Variants/Variants';
import { useRecoilState } from 'recoil';
import { recruitmentState } from '../../store/recruitHandler';
import DownArrow from '../common/DownArrow';

const HomePageV2 = () => {
  return (
    <HomeWrapper>
      <BannerTitleWrapper>
        <RecruitingWrapper variants={bannerItemAnimate}>
          <GoogleColorTextWrapper>
            <GoogleColorText color={'googleBlue'}>2</GoogleColorText>
            <GoogleColorText color={'googleRed'}>n</GoogleColorText>
            <GoogleColorText color={'googleYellow'}>d</GoogleColorText>
            <GoogleColorText color={'googleGreen'}>.</GoogleColorText>
          </GoogleColorTextWrapper>
          <GoogleColorText>Recruit</GoogleColorText>
          <MainBannerText variants={bannerItemAnimate}>
            2022. 06. 13 ~ 2022. 07. 31
          </MainBannerText>
          <HomeRecruitmentButton />
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
