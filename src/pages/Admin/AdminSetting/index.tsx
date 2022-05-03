import React, { useEffect } from 'react';
import {
  AdminSectionWrapper,
  AdminSidebar,
  Handle,
  RecruitCard,
  RecruitCardWrapper,
  Switch,
  ToggleButtonSection,
} from './styled';
import { useRecoilState } from 'recoil';
import { recruitmentState } from '../../../store/recruitHandler';
import API from '../../../apis/index';
import { useSearchParams } from 'react-router-dom';
import { useLocation } from 'react-router';

const AdminSetting = () => {
  const [recruit, setRecruit] = useRecoilState(recruitmentState);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  console.log(recruit);
  useEffect(() => {
    API.putRecruitStatus(recruit);
  }, [recruit]);
  useEffect(() => {
    !searchParams.get('type') &&
      setSearchParams({
        type: 'frontend',
      });
  }, [location.pathname]);
  const currentParam = searchParams.get('type') as string;
  const setParams = (key: string) => {
    setSearchParams({ type: key });
  };
  // const keyTyped = name as keyof typeof recruit;
  const toggleSwitch = (key: string) => {
    switch (key) {
      case 'frontend':
        return setRecruit({ ...recruit, frontend: !recruit.frontend });
      case 'backend':
        return setRecruit({ ...recruit, backend: !recruit.backend });
      case 'android':
        return setRecruit({ ...recruit, android: !recruit.android });
      case 'beginner':
        return setRecruit({ ...recruit, beginner: !recruit.beginner });
      case 'design':
        return setRecruit({ ...recruit, design: !recruit.design });
      case 'ml':
        return setRecruit({ ...recruit, ml: !recruit.ml });
      case 'home':
        return setRecruit({ ...recruit, home: !recruit.home });
      default:
        return console.log('error');
    }
  };
  const isOn = (key: string) => {
    switch (key) {
      case 'frontend':
        return recruit.frontend;
      case 'backend':
        return recruit.backend;
      case 'android':
        return recruit.android;
      case 'beginner':
        return recruit.beginner;
      case 'design':
        return recruit.design;
      case 'ml':
        return recruit.ml;
      case 'home':
        return recruit.home;
    }
  };

  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30,
  };
  const position = {
    frontend: 'Frontend Developer',
    backend: 'Backend Developer',
    android: 'Android Developer',
    beginner: 'Beginner',
    design: 'Designer',
    ml: 'Machine Learning',
    home: 'Home',
  };

  return (
    <AdminSectionWrapper>
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
      {currentParam && (
        <ToggleButtonSection>
          <Switch
            data-ison={isOn(currentParam)}
            onClick={() => toggleSwitch(currentParam)}
          >
            <Handle layout transition={spring} />
          </Switch>
        </ToggleButtonSection>
      )}
    </AdminSectionWrapper>
  );
};

export default AdminSetting;
