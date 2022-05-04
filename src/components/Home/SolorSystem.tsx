import React, { memo } from 'react';
import styled from 'styled-components';
import Line1 from '../../assets/HomeAssets/Line1';
import Line2 from '../../assets/HomeAssets/Line2';
import Line3 from '../../assets/HomeAssets/Line3';

const SolarSystemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
const SolarSystem = () => {
  return (
    <>
      <SolarSystemWrapper>
        <Line1 />
      </SolarSystemWrapper>
      <SolarSystemWrapper>
        <Line2 />
      </SolarSystemWrapper>
      <SolarSystemWrapper>
        <Line3 />
      </SolarSystemWrapper>
    </>
  );
};

export default memo(SolarSystem);
