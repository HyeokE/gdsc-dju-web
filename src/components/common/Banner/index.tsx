import React from 'react';
import styled from 'styled-components';

import BlueBanner from '../../../assets/BannerImages/BlueBanner.png';
import RedBanner from '../../../assets/BannerImages/RedBanner.png';
import YellowBanner from '../../../assets/BannerImages/YellowBanner.png';
import GreenBanner from '../../../assets/BannerImages/GreenBanner.png';

interface BannerProps {
  color: 'blue' | 'red' | 'yellow' | 'green';
  image?: string;
}

const Banner: React.FC<BannerProps> = ({ color, image }) => {
  const bannerImages = {
    blue: BlueBanner,
    red: RedBanner,
    yellow: YellowBanner,
    green: GreenBanner,
  } as const;
  return (
    <BannerWrapper>
      <BannerInner src={image ? image : bannerImages[color]} />
    </BannerWrapper>
  );
};

export default Banner;
export const BannerInner = styled.img`
  height: 440px;
  background-position-x: 50%;
  background-position-y: 50%;
  -webkit-background-size: cover;
  background-size: cover;
`;
export const BannerWrapper = styled.div`
  height: 200px;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  @media (max-width: 500px) {
    height: 180px;
  }
`;
