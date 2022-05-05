import { motion } from 'framer-motion';
import React from 'react';
import { LineContainer } from './Line1';
import Planet from './Planet';

const Line2 = () => {
  return (
    <LineContainer>
      <svg
        width="986"
        height="986"
        viewBox="0 0 986 986"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          opacity="0.23"
          d="M493 985.5C765 985.5 985.5 765 985.5 493C985.5 221 765 0.5 493 0.5C221 0.5 0.5 221 0.5 493C0.5 765 221 985.5 493 985.5Z"
          stroke="black"
        />
      </svg>
      <Planet line={2} />
      <Planet line={2} />
      <Planet line={2} />
      <Planet line={2} />
    </LineContainer>
  );
};

export default Line2;
