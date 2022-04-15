import React, { useEffect } from 'react';
import {
  onboardingAnimate,
  pageAnimate,
  pageTransitionAnimate,
} from '../../../components/common/Variants/Variants';
import {
  OnboardingBackArrow,
  OnboardingBackText,
  OnboardingBackWrapper,
  OnboardingDescription,
  OnboardingImageWrapper,
  OnboardingMiddleButton,
  OnboardingMiddleElementWrapper,
  OnboardingMiddleImage,
} from '../OnboardMiddle/styled';
import backArrow from '../../../assets/onBoardingImg/back.svg';
import { OnboardingTitle, OnboardingTitleWrapper } from '../OnBoardHome/styled';
import Human5 from '../../../assets/onBoardingImg/human-black.svg';

import { OnboardingContainer, OnboardingContainerWrapper } from '../styled';
import { useNavigate } from 'react-router-dom';

import OnboardingLinkBox from '../../../components/common/OnboardingLinkBox';
import {
  OnboardingLinkBoxWrapper,
  OnboardingLinkElementWrapper,
} from './styled';
import { useRecoilState } from 'recoil';
import { onboardingUserState } from '../../../store/onboardingUser';
import Api from '../../../apis/index';

export interface IProps {
  id: string;
  link: string;
}

const OnBoardLink = () => {
  const navigate = useNavigate();
  const [member, setMember] = useRecoilState(onboardingUserState);
  const uploadMembers = async () => {
    try {
      await Api.postOnboardingMembers(member);
    } catch (e) {
      console.log(e);
    }
  };

  const link: IProps[] = [
    {
      id: 'slack',
      link: 'https://join.slack.com/t/gdscdaejinuniversity/shared_invite/zt-zyj2as90-owri~sw7NLKgtshaYMunDQ',
    },
    { id: 'discord', link: 'https://discord.gg/FjrCbjpKt3' },
    {
      id: 'notion',
      link: 'https://www.notion.so/invite/e58f15389c5542412d73f05d0ffd38fe58f90e35',
    },
  ];

  return (
    <OnboardingContainerWrapper>
      {/*<MobileBlock />*/}
      <OnboardingContainer
        initial="start"
        animate="end"
        exit="out"
        variants={pageTransitionAnimate}
        transition={pageAnimate}
      >
        <OnboardingMiddleElementWrapper>
          <OnboardingLinkElementWrapper>
            <OnboardingBackWrapper
              variants={onboardingAnimate}
              onClick={() => {
                navigate(-1);
              }}
            >
              <OnboardingBackArrow src={backArrow} />
              <OnboardingBackText>Back</OnboardingBackText>
            </OnboardingBackWrapper>
            <OnboardingTitleWrapper>
              <OnboardingTitle variants={onboardingAnimate}>
                Almost There
              </OnboardingTitle>
            </OnboardingTitleWrapper>
            <OnboardingDescription variants={onboardingAnimate}>
              저희는 다음 서비스들을 이용해서 소통해요. 아래 링크를 눌러서
              하나씩 가입을 진행해주세요!
            </OnboardingDescription>
            <OnboardingLinkBoxWrapper variants={onboardingAnimate}>
              {link.map((data: IProps, id) => (
                <div
                  key={id}
                  onClick={() => {
                    window.open(data.link, '_blank');
                  }}
                >
                  <OnboardingLinkBox {...data} />
                </div>
              ))}
            </OnboardingLinkBoxWrapper>
            <OnboardingMiddleButton
              variants={onboardingAnimate}
              onClick={() => {
                navigate('/onboard/ticket');
                {
                  member.email.length > 2 &&
                    member.interest.length > 2 &&
                    member.major.length > 2 &&
                    uploadMembers();
                }
              }}
              style={{
                marginTop: '0px',
              }}
              whileHover={{ shadow: '20', boxShadow: '0px 0px 10px black' }}
              color={'#262626'}
            >
              다음으로
            </OnboardingMiddleButton>
          </OnboardingLinkElementWrapper>
          <OnboardingImageWrapper>
            <OnboardingMiddleImage variants={onboardingAnimate} src={Human5} />
          </OnboardingImageWrapper>
        </OnboardingMiddleElementWrapper>
      </OnboardingContainer>
    </OnboardingContainerWrapper>
  );
};

export default OnBoardLink;
