import React, { useEffect } from 'react';
import {
  AdminSectionWrapper,
  Handle,
  Switch,
  ToggleButtonSection,
} from './styled';
import { useRecoilState } from 'recoil';
import { recruitmentState } from '../../../store/recruitHandler';
import API from '../../../apis/index';
import { useSearchParams } from 'react-router-dom';
import { useLocation } from 'react-router';
import AdminApplicantsSidebar from '../../../components/admin/AdminApplicantsSidebar';

const AdminApplicants = () => {
  const [recruit, setRecruit] = useRecoilState(recruitmentState);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
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

  return (
    <AdminSectionWrapper>
      <AdminApplicantsSidebar />
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

export default AdminApplicants;
