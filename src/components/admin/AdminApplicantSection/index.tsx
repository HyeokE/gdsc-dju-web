import React, { useEffect, useState } from 'react';
import ApplicantCard from '../ApplicantCard';
import { ApplicantCardWrapper, ApplicantSection } from './styled';
import {
  Handle,
  Switch,
  ToggleButtonSection,
} from '../../../pages/Admin/AdminApplicants/styled';
import { useRecoilState } from 'recoil';
import { recruitmentState } from '../../../store/recruitHandler';
import { useSearchParams } from 'react-router-dom';
import { dbService } from '../../../firebase/firebase';
import API from '../../../apis';
import { IApplicantType, IApplicantTypeWithID } from '../../../types/applicant';

const AdminApplicantSection = () => {
  const [recruit, setRecruit] = useRecoilState(recruitmentState);
  const [searchParams, setSearchParams] = useSearchParams();
  const [applicants, setApplicants] = useState<IApplicantTypeWithID[]>();

  const currentParam = searchParams.get('type') as string;
  useEffect(() => {
    dbService
      .collection('applicants')
      .get()
      .then((querySnapshot) => {
        const tempDoc: IApplicantTypeWithID[] = querySnapshot.docs.map(
          (doc) => {
            return { id: doc.id, ...(doc.data() as IApplicantType) };
          },
        );
        tempDoc && setApplicants(tempDoc);
      });
  }, []);
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
    <>
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
      {applicants && (
        <ApplicantSection>
          {applicants.map((applicant) => (
            <ApplicantCardWrapper key={applicant.id}>
              <ApplicantCard {...applicant} />
            </ApplicantCardWrapper>
          ))}
        </ApplicantSection>
      )}
    </>
  );
};

export default AdminApplicantSection;
