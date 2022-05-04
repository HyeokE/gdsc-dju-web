import { motion } from 'framer-motion';
import React from 'react';
import Planet from './Planet';
import styled from 'styled-components';

export const LineContainer = styled.div`
  position: relative;
`;

const Line1 = () => {
  return (
    <LineContainer>
      <svg
        width="500"
        height="500"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          opacity="0.23"
          d="M250 499.5C387.795 499.5 499.5 387.795 499.5 250C499.5 112.205 387.795 0.5 250 0.5C112.205 0.5 0.5 112.205 0.5 250C0.5 387.795 112.205 499.5 250 499.5Z"
          stroke="black"
        />
      </svg>
      <Planet line={1} />
      <Planet line={1} />
    </LineContainer>
  );
};

export default Line1;
