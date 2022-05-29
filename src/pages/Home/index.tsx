import React, { lazy, Suspense } from 'react';
import styled from 'styled-components';
import SectionManager from '../../components/Home/SectionManager';
import SectionIntroduce from '../../components/Home/SectionIntroduce';
import GoogleSpinner from '../../components/Lottie/GoogleSpinner';
import { Footer } from '../../components/common/Footer';

const HomePageV2 = lazy(() =>
  import('../../components/Home/HomePageV2').then((module) => ({
    default: module.default,
  })),
);

const HomeContainer = styled.div`
  overflow-y: auto;
  .container {
    scroll-behavior: smooth;
    height: 100vh;
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    @media (max-width: 500px) {
      scroll-snap-type: none;
      height: auto;
    }
  }
  .container::-webkit-scrollbar {
    width: 0;
    background: transparent;
    display: none;
  }
  .container > div {
    scroll-snap-align: start;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <Suspense fallback={<GoogleSpinner />}>
        <div className={'container'}>
          <HomePageV2 />
          <SectionIntroduce />
          {/*<SectionGoal />*/}
          <SectionManager />
          <Footer />
        </div>
      </Suspense>
    </HomeContainer>
  );
};
export default Home;
