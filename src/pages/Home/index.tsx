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
      {/*<Parallax speed={-10}>*/}
      {/*  <SectionIntroduce />*/}
      {/*</Parallax>*/}
<<<<<<< HEAD
      {/*<SectionGoal />*/}
      {/*<SectionTimeLine />*/}
=======

      {/*<SectionGoal />*/}

      {/*<SectionTimeLine />*/}

>>>>>>> 2c1bde41c74e21dc9e16957bb0825fae78618927
      {/*<Parallax speed={10}>*/}
      {/*  <SectionManager />*/}
      {/*</Parallax>*/}
    </HomeContainer>
  );
};
export default Home;
