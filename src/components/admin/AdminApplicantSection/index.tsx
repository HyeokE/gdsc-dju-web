import React, { memo, useEffect, useState } from 'react';
import ApplicantCard from '../ApplicantCard';
import {
  ApplicantCardSection,
  ApplicantCardWrapper,
  ApplicantSection,
} from './styled';
import {
  ApplicantsBadgeWrapper,
  ApplicantsStatusWrapper,
  Handle,
  InformationHeader,
  Switch,
  ToggleButton,
} from '../../../pages/Admin/AdminApplicants/styled';
import { useRecoilState } from 'recoil';
import { recruitmentState } from '../../../store/recruitHandler';
import { useSearchParams } from 'react-router-dom';
import { dbService } from '../../../firebase/firebase';
import {
  IApplicantCountType,
  IApplicantType,
  IApplicantTypeWithID,
} from '../../../types/applicant';
import { position } from '../AdminApplicantsSidebar';
import StatusBadge from '../Statusbadge';
import { MODAL_KEY, modalState } from '../../../store/modal';
import ApplicantModal from '../ApplicantModal';
import { AnimatePresence, LayoutGroup } from 'framer-motion';

const AdminApplicantSection = () => {
  const [modal, setModal] = useRecoilState(modalState);
  const [applicants, setApplicants] = useState<IApplicantTypeWithID[]>();
  const [applicantCount, setApplicantCount] = useState<IApplicantCountType>({
    isDOCS: 0,
    isINTERVIEW: 0,
    isREJECTED: 0,
    isHIRED: 0,
  });
  const [searchParams] = useSearchParams();

  const currentParam = searchParams.get('type') as string;
  const openModal = (id: string) => {
    setModal({
      ...modal,
      [MODAL_KEY.ADMIN_APPLICANT]: true,
      selectedId: id,
    });
  };
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
        const filteredApplicantsByPosition =
          currentParam !== 'home'
            ? tempDoc.filter((data) =>
                data.position
                  .toLowerCase()
                  .includes(
                    position[
                      currentParam as keyof typeof position
                    ].toLowerCase(),
                  ),
              )
            : tempDoc;
        tempDoc && setApplicants(filteredApplicantsByPosition);
        countApplicantsHandler(filteredApplicantsByPosition);
      });
  }, [currentParam, modal.selectedId]);
  const countApplicantsHandler = (
    filteredApplicants: IApplicantTypeWithID[],
  ) => {
    const DOCS = filteredApplicants.filter((data) => data.status === 'DOCS');
    const INTERVIEW = filteredApplicants.filter(
      (data) => data.status === 'INTERVIEW',
    );
    const REJECTED = filteredApplicants.filter(
      (data) => data.status === 'REJECTED',
    );
    const HIRED = filteredApplicants.filter((data) => data.status === 'HIRED');
    setApplicantCount({
      isDOCS: DOCS.length,
      isINTERVIEW: INTERVIEW.length,
      isREJECTED: REJECTED.length,
      isHIRED: HIRED.length,
    });
  };

  return (
    <AnimatePresence>
      <LayoutGroup>
        {modal.adminApplicant && <ApplicantModal />}
        <ApplicantSection>
          <InformationHeader>
            <AnnouncementToggle currentParam={currentParam} />
            <ApplicantStatus {...applicantCount} />
          </InformationHeader>
          {applicants && (
            <ApplicantCardSection>
              {applicants.map((applicant) => (
                <ApplicantCardWrapper
                  key={applicant.id}
                  onClick={() => openModal(applicant.id)}
                >
                  <ApplicantCard {...applicant} />
                </ApplicantCardWrapper>
              ))}
            </ApplicantCardSection>
          )}
        </ApplicantSection>
      </LayoutGroup>
    </AnimatePresence>
  );
};

const ApplicantStatus: React.FC<IApplicantCountType> = ({
  isDOCS,
  isINTERVIEW,
  isREJECTED,
  isHIRED,
}) => {
  return (
    <ApplicantsStatusWrapper>
      <ApplicantsBadgeWrapper>
        <StatusBadge status={'DOCS'} /> {isDOCS}
      </ApplicantsBadgeWrapper>
      <ApplicantsBadgeWrapper>
        <StatusBadge status={'INTERVIEW'} /> {isINTERVIEW}
      </ApplicantsBadgeWrapper>
      <ApplicantsBadgeWrapper>
        <StatusBadge status={'REJECTED'} /> {isREJECTED}
      </ApplicantsBadgeWrapper>
      <ApplicantsBadgeWrapper>
        <StatusBadge status={'HIRED'} /> {isHIRED}
      </ApplicantsBadgeWrapper>
    </ApplicantsStatusWrapper>
  );
};

const AnnouncementToggle = ({ currentParam }: { currentParam: string }) => {
  const [recruit, setRecruit] = useRecoilState(recruitmentState);

  const switchHandler = (key: keyof typeof recruit) => {
    return setRecruit({ ...recruit, [key]: !recruit[key] });
  };
  const isOn = (key: keyof typeof recruit) => {
    return recruit[key];
  };
  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30,
  };
  return (
    <ToggleButton>
      <Switch
        data-ison={isOn(currentParam as keyof typeof recruit)}
        onClick={() => switchHandler(currentParam as keyof typeof recruit)}
      >
        <Handle layout transition={spring} />
      </Switch>
    </ToggleButton>
  );
};

export default memo(AdminApplicantSection);
