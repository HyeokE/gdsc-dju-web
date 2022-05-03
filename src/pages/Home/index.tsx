import React from 'react';
import styled from 'styled-components';
import HomePage from '../../components/Home/HomePage';

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
