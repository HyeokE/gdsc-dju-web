import React from 'react';
import { useParams } from 'react-router-dom';
import {
  ContainerInner,
  LayoutContainer,
  TopMargin,
} from '../../../styles/layouts';
import {
  MainText,
  SubCategory,
  Title,
} from '../../../components/common/Title/title';
import {
  IntroduceWrapper,
  JoinInner,
  JoinWrapper,
  MoblieBottomElementWrapper,
  MoblieTopElementWrapper,
  SectionWrapper,
} from './styled';
import { recruitDefaultText } from '../../../apis/pageData/recruitDefaultText';
import { RecruitDetails } from '../../../apis/pageData/recruitDetails';
import BulletList from '../../../components/common/BulletList';
import InformationBar from './InformationBar';
import RecruitFaqButton from './RecruitFaqButton';
import Banner from '../../../components/common/Banner';

const RecruitmentDetail: React.FC = () => {
  const { id } = useParams();
  const aboutTeam = RecruitDetails.find((aboutTeam) => aboutTeam.id === id);
  return (
    <>
      <Banner color={'blue'} />
      {aboutTeam && (
        <LayoutContainer>
          <ContainerInner>
            <TopMargin />
            <Title>{aboutTeam?.name}</Title>
            <TopMargin />
            <MoblieTopElementWrapper>
              <JoinInner>
                <InformationBar name={aboutTeam.name} />
                <TopMargin />
              </JoinInner>
            </MoblieTopElementWrapper>
            <MainText>열정적인 동료를 얻기 위해 이 자리에 모였습니다.</MainText>
            <MainText>
              우리는 함께 고민을 나누고 도전하며 목표를 향해 달리고 있습니다.
            </MainText>
            <TopMargin />
            <SectionWrapper>
              {aboutTeam && (
                <IntroduceWrapper>
                  {aboutTeam.activity ? (
                    <>
                      <SubCategory>합류하시면 함께 할 활동입니다.</SubCategory>
                      <BulletList text={aboutTeam.activity} />
                      <TopMargin />
                    </>
                  ) : null}
                  <SubCategory>이런 분을 찾습니다</SubCategory>
                  <MainText>
                    <BulletList text={recruitDefaultText.findMember} />
                    {aboutTeam.people && <BulletList text={aboutTeam.people} />}
                  </MainText>
                  <TopMargin />
                  <SubCategory>이런 경험이 있다면 더 좋습니다</SubCategory>
                  <MainText>
                    <BulletList text={recruitDefaultText.goodMember} />
                    {aboutTeam.preferential && (
                      <BulletList text={aboutTeam.preferential} />
                    )}
                  </MainText>
                  <TopMargin />
                  <SubCategory>GDSC의 혜택</SubCategory>
                  <MainText>
                    <BulletList text={recruitDefaultText.benefits} />
                  </MainText>
                  <TopMargin />
                  <SubCategory>GDSC DJU로의 합류과정</SubCategory>
                  <MainText>
                    <BulletList text={recruitDefaultText.process} />
                  </MainText>
                </IntroduceWrapper>
              )}
              <JoinWrapper>
                <JoinInner>
                  <InformationBar name={aboutTeam.name} />
                  <TopMargin />
                  <RecruitFaqButton name={id as string} />
                  <TopMargin />
                </JoinInner>
              </JoinWrapper>
            </SectionWrapper>
            <MoblieBottomElementWrapper>
              <RecruitFaqButton name={id as string} />
            </MoblieBottomElementWrapper>
          </ContainerInner>
        </LayoutContainer>
      )}
      <TopMargin />
    </>
  );
};
export default RecruitmentDetail;
