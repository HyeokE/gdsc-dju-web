import React from 'react';
import { Route, Routes } from 'react-router-dom';
import OnBoardHome from './OnBoardHome';
import OnboardMiddle from './OnboardMiddle';
import OnboardTicket from './OnboardTicket';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router';
import OnBoardingLinks from './OnboardLink';

const OnBoard = () => {
  const location = useLocation();
  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path={'/*'} element={<OnBoardHome />} />
          <Route path={'/middle/*'} element={<OnboardMiddle />} />
          <Route path={'/middle/:id'} element={<OnboardMiddle />} />
          <Route path={'/almost'} element={<OnBoardingLinks />} />
          <Route path={'/ticket'} element={<OnboardTicket />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default OnBoard;
