import React from 'react';

import { useLocation } from 'react-router';
import {
  FooterCopyRight,
  FooterLogo,
  FooterText,
  FooterWrapper,
} from './styled';
import { useNavigate } from 'react-router-dom';

export const Footer: React.FC<{ disable?: boolean }> = ({ disable = true }) => {
  return (
    <FooterWrapper disable={disable}>
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
