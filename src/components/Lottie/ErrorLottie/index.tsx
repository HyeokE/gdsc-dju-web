import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

const ErrorLottie = () => {
  const errorRef = useRef<HTMLDivElement>(null);
  useEffect(
    () =>
      void lottie.loadAnimation({
        container: errorRef.current as Element,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: require('./ErrorLottie.json'),
      }),
    [],
  );
  return <div ref={errorRef} />;
};

export default ErrorLottie;
