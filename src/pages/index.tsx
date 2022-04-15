import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router';
import ScrollTop from '../components/common/ScrollTop';
import Introduce from './Introduce';
import Faq from './Faq';
import Home from './Home';
import Recruit from './Recruit';
import CodeOfConduct from './CodeOfConduct';
import { useRecoilState } from 'recoil';
import { recruitmentSelector } from '../store/recruitHandler';

const Pages = () => {
  const [selector, setSelector] = useRecoilState(recruitmentSelector);

  useEffect(() => {
    setSelector(selector);
  }, []);
  return (
    <>
      <ScrollTop />
      <Routes>
        <Route path={'/*'} element={<Home />} />
        <Route path={'/introduce'} element={<Introduce />} />
        <Route path={'/recruit/*'} element={<Recruit />} />
        <Route path={'/conduct'} element={<CodeOfConduct />} />
        <Route path={'/faq/*'} element={<Faq />} />
      </Routes>
    </>
  );
};
export default Pages;
