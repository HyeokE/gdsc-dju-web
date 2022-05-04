import React from 'react';
import styled from 'styled-components';
import HomePage from '../../components/Home/HomePage';
import SectionManager from '../../components/Home/SectionManager';
import SectionTimeLine from '../../components/Home/SectionTimeLine';
import SectionIntroduce from '../../components/Home/SectionIntroduce';
import SectionGoal from '../../components/Home/SectionGoal';
import HomePageV2 from '../../components/Home/HomePageV2';

const HomeContainer = styled.div`
  overflow-y: auto;
  .container {
    scroll-behavior: smooth;
    height: calc(100vh);
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
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
      <div className={'container'}>
        {/*<HomePageV2 />*/}
        <HomePage />
        <SectionIntroduce />
        {/*<SectionGoal />*/}
        {/*<SectionTimeLine />*/}
        <SectionManager />
      </div>
    </HomeContainer>
  );
};
export default Home;
