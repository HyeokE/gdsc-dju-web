import React, { memo } from 'react';
import { useRecoilValue } from 'recoil';
import { recruitmentState } from '../../../store/recruitHandler';
import { useSearchParams } from 'react-router-dom';
import {
  AdminSidebar,
  RecruitCard,
  RecruitCardWrapper,
  StatusCircle,
} from './styled';

export const position = {
  home: 'Home',
  frontend: 'Frontend Developer',
  backend: 'Backend Developer',
  android: 'Android Developer',
  beginner: 'Beginner',
  design: 'Designer',
  ml: 'Machine Learning',
};

const AdminApplicantsSidebar = () => {
  const recruit = useRecoilValue(recruitmentState);

  return (
    <AdminSidebar>
      {Object.keys(position).map((data, id) => (
        <AnnouncementCard
          data={data}
          status={recruit[data as keyof typeof recruit]}
          key={data}
        />
      ))}
    </AdminSidebar>
  );
};

const AnnouncementCard = ({
  data,
  status,
}: {
  data: string;
  status: boolean;
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const setParams = (key: string) => {
    setSearchParams({ type: key });
  };
  const isInRoute = searchParams.get('type') === data;
  return (
    <RecruitCardWrapper onClick={() => setParams(data)} isInRoute={isInRoute}>
      <StatusCircle status={status} />
      <RecruitCard>{position[data as keyof typeof position]}</RecruitCard>
    </RecruitCardWrapper>
  );
};

export default memo(AdminApplicantsSidebar);
