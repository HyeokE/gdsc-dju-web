import React, { memo } from 'react';
import styled from 'styled-components';
import Line1 from '../../assets/HomeAssets/Line1';
import Line2 from '../../assets/HomeAssets/Line2';
import Line3 from '../../assets/HomeAssets/Line3';

const SolarSystemLineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
const SolarSystemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 50%;
  top: 5%;
  transform: translate(-50%, -50%);
  transform: scale(1.5, 1.5);

  @media (max-width: 500px) {
    left: 100%;
    top: 60%;
    transform: scale(0.6, 0.6);
  }
`;
const SolarSystem = () => {
  return (
    <SolarSystemWrapper>
      <SolarSystemLineWrapper>
        <Line1 />
      </SolarSystemLineWrapper>
      <SolarSystemLineWrapper>
        <Line2 />
      </SolarSystemLineWrapper>
      <SolarSystemLineWrapper>
        <Line3 />
      </SolarSystemLineWrapper>
    </SolarSystemWrapper>
  );
};

export default memo(SolarSystem);
