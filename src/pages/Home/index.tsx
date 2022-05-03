import React from 'react';
import SectionIntroduce from '../../components/Home/SectionIntroduce';
import SectionTimeLine from '../../components/Home/SectionTimeLine';
import SectionManager from '../../components/Home/SectionManager';
import SectionGoal from '../../components/Home/SectionGoal';
import styled from 'styled-components';
import HomePage from '../../components/Home/HomePage';
import { Parallax } from 'react-scroll-parallax';

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
      <HomePage />
      {/*<SectionIntroduce />*/}
      {/*<SectionGoal />*/}
      {/*<SectionTimeLine />*/}
      {/*<SectionManager />*/}
    </HomeContainer>
  );
};
export default Home;
