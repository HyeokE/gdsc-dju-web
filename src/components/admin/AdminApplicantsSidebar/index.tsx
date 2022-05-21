import React, { memo } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { recruitmentState } from '../../../store/recruitHandler';
import { useSearchParams } from 'react-router-dom';
import { AdminSidebar, RecruitCard, RecruitCardWrapper } from './styled';

const position = {
  frontend: 'Frontend Developer',
  backend: 'Backend Developer',
  android: 'Android Developer',
  beginner: 'Beginner',
  design: 'Designer',
  ml: 'Machine Learning',
  home: 'Home',
};
const AdminApplicantsSidebar = () => {
  const recruit = useRecoilValue(recruitmentState);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentParam = searchParams.get('type') as string;
  const setParams = (key: string) => {
    setSearchParams({ type: key });
  };
  return (
    <AdminSidebar>
      {Object.keys(recruit).map((key, id) => (
        <RecruitCardWrapper
          key={id}
          isActive={key == currentParam}
          onClick={() => setParams(key)}
        >
          <RecruitCard>{position[key as keyof typeof position]}</RecruitCard>
        </RecruitCardWrapper>
      ))}
    </AdminSidebar>
  );
};
export default memo(AdminApplicantsSidebar);
