import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { MainText, SubTitle } from '../../../components/common/Title/title';
import { ContainerInner, LayoutContainer } from '../../../styles/layouts';
import {
  RecruitFormCardWrapper,
  RecruitFormInner,
  RecruitFormWrapper,
} from '../RecruitForm/styled';
import { ApplyMargin, ApplyTitle } from './styled';
import ApplySuccessCard from '../../../components/common/ApplySuccessCard';

const ApplySuccess = () => {
  const [searchParams] = useSearchParams();
  const username = searchParams.get('username');
  const position = searchParams.get('position');

  const params = Object.fromEntries(new URLSearchParams(location.search));

  return (
    <>
      <LayoutContainer>
        <ContainerInner>
          <RecruitFormWrapper>
            <RecruitFormInner>
              <ApplyMargin />
              <ApplyMargin />
              <ApplyTitle>지원해주셔서 감사합니다.</ApplyTitle>
              <SubTitle>{position}</SubTitle>
              <ApplyMargin />
              <RecruitFormCardWrapper>
                <ApplySuccessCard {...params} />
              </RecruitFormCardWrapper>
              <ApplyMargin />
              <MainText>{username}님, 지원서가 접수되었어요.</MainText>
              <MainText>
                서류검토는 지원마감일로부터 최대 2주 소요될 수 있어요.
              </MainText>
              <MainText>
                각 전형결과에 관한 안내는 적어주신 메일로 안내되니 꼭
                확인부탁드려요.
              </MainText>
              <ApplyMargin />
              <MainText>GDSC DJU 운영진 드림</MainText>
              <ApplyMargin />
            </RecruitFormInner>
          </RecruitFormWrapper>
        </ContainerInner>
        {/*<ApplyImage src={BlueHuman} />*/}
      </LayoutContainer>
    </>
  );
};

export default ApplySuccess;
