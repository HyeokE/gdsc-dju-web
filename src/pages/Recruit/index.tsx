import React, { lazy, memo } from 'react';
import { Route, Routes } from 'react-router-dom';
import ApplySuccess from './ApplySuccess';

const Recruitment = lazy(() => import('./Recruitment'));
const RecruitmentDetail = lazy(() => import('./RecruitmentDetail'));
const RecruitForm = lazy(() => import('./RecruitForm'));
const Recruit = () => {
  return (
    <Routes>
      <Route path={'/*'} element={<Recruitment />} />
      <Route path={'/detail/:id'} element={<RecruitmentDetail />} />
      <Route path={'/form/:id'} element={<RecruitForm />} />
      <Route path={'/apply-success'} element={<ApplySuccess />} />
    </Routes>
  );
};

export default memo(Recruit);
