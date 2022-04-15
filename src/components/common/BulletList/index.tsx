import React from 'react';
import { StyledLi } from './styled';

const BulletList = (props: { text: string }) => {
  const { text } = props;
  return (
    <>
      {text.split('\n').map((line, id) => {
        return (
          <StyledLi key={id}>
            {line}
            <br />
          </StyledLi>
        );
      })}
    </>
  );
};

export default BulletList;
