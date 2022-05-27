import React, { useEffect } from 'react';
import { AdminSectionWrapper } from './styled';
import { useRecoilState } from 'recoil';
import { recruitmentState } from '../../../store/recruitHandler';
import API from '../../../apis/index';
import { useSearchParams } from 'react-router-dom';
import { useLocation } from 'react-router';
import AdminApplicantsSidebar from '../../../components/admin/AdminApplicantsSidebar';
import AdminApplicantSection from '../../../components/admin/AdminApplicantSection';

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
        type: 'home',
      });
  }, [location.pathname]);

  return (
    <AdminSectionWrapper>
      <AdminApplicantsSidebar />
      <AdminApplicantSection />
    </AdminSectionWrapper>
  );
};

export default AdminApplicants;
