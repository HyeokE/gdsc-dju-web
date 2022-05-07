import { motion } from 'framer-motion';
import React from 'react';
import { LineContainer } from './Line1';
import Planet from './Planet';

const Line3 = () => {
  return (
    <LineContainer>
      <svg
        width="1243"
        height="1243"
        viewBox="0 0 1243 1243"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          opacity="1"
          d="M621.5 1242.5C964.469 1242.5 1242.5 964.469 1242.5 621.5C1242.5 278.531 964.469 0.5 621.5 0.5C278.531 0.5 0.5 278.531 0.5 621.5C0.5 964.469 278.531 1242.5 621.5 1242.5Z"
          stroke="#e7e7e7"
        />
      </svg>
      <Planet line={3} />
      <Planet line={3} />
      <Planet line={3} />
    </LineContainer>
  );
};

export default Line3;
