import React, { lazy, Suspense } from 'react';
import styled from 'styled-components';
import GoogleSpinner from '../../components/Lottie/GoogleSpinner';

const HomePage = lazy(() =>
  import('../../components/Home/HomePage').then((module) => ({
    default: module.default,
  })),
);

const HomeContainer = styled.div`
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
    display: none;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <Suspense fallback={<GoogleSpinner />}>
        <HomePage />
      </Suspense>
      {/*<SectionIntroduce />*/}
      {/*<SectionGoal />*/}
      {/*<SectionTimeLine />*/}
      {/*<SectionManager />*/}
    </HomeContainer>
  );
};
export default Home;
