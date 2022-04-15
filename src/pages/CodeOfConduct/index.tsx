import React from 'react';
import {
  BannerWrapper,
  ContainerInner,
  LayoutContainer,
  TopMargin,
} from '../../styles/layouts';
import {
  MainText,
  SubCategory,
  Title,
} from '../../components/common/Title/title';
import { Banner } from '../../assets/Banner/Banner';
import RedBanner from '../../assets/Banner/RedBanner.png';
import { codeOfConduct } from '../../apis/pageData/codeOfConduct';
import BulletList from '../../components/common/BulletList';

const CodeOfConduct = () => {
  return (
    <>
      <BannerWrapper>
        <Banner src={RedBanner} />
      </BannerWrapper>
      <LayoutContainer>
        <ContainerInner>
          <TopMargin />
          <Title>Code of Conduct (Google)</Title>
          <TopMargin />
          {codeOfConduct.map((data, id) => (
            <>
              <SubCategory>{data.title}</SubCategory>
              <MainText>
                <BulletList text={data.content} />
              </MainText>
              <TopMargin />
            </>
          ))}
        </ContainerInner>
      </LayoutContainer>
    </>
  );
};
export default CodeOfConduct;
