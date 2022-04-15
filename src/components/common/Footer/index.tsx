import React from 'react';

import { useLocation } from 'react-router';
import {
  FooterCopyRight,
  FooterLogo,
  FooterText,
  FooterWrapper,
} from './styled';
import { useNavigate } from 'react-router-dom';

export const Footer = () => {
  const location = useLocation();
  const locate = location.pathname;
  const navigate = useNavigate();

  return (
    <FooterWrapper className={locate === '/onboarding' ? 'none' : ''}>
      <FooterLogo>
        <FooterText google={true} href={'https://developers.google.com/'}>
          Google
        </FooterText>

        <FooterText href={'https://developers.google.com/community-guidelines'}>
          Community guidelines
        </FooterText>
        <FooterText href={'/faq'}>FAQ</FooterText>
      </FooterLogo>
      <FooterCopyRight>{'Copyright © '}GDSC Daejin 2021</FooterCopyRight>
    </FooterWrapper>
  );
};
