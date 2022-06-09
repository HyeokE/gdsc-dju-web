import React, { useEffect, useState } from 'react';
import { GDSCButton } from '../../../components/common/Button';
import { dbService } from '../../../firebase/firebase';
import {
  EmailLogType,
  IApplicantType,
  IApplicantTypeWithID,
  StatusType,
} from '../../../types/applicant';
import CheckBoxCard from '../../../components/common/CheckBoxCard';
import emailjs from '@emailjs/browser';
import {
  CheckboxSection,
  CheckboxWrapper,
  EmailCategory,
  EmailLeftInner,
  EmailLeftWrapper,
  EmailRightInner,
  EmailRightWrapper,
  SelectedBoxSection,
  TemplateSelectorWrapper,
} from './styled';
import { useRecoilState, useRecoilValue } from 'recoil';
import { alertState } from '../../../store/alert';
import { AdminSectionWrapper } from '../AdminApplicants/styled';
import { adminUserState } from '../../../store/localUser';
import ApplicantModal from '../../../components/admin/ApplicantModal';
import { MODAL_KEY, modalState } from '../../../store/modal';
import { AnimatePresence } from 'framer-motion';
import StatusBadgeBox from '../../../components/admin/StatusBadgeBox';
import { getApplicants } from '../../../utils/applicantsHandler';

const AdminEmail: React.FC<{ template: string }> = ({ template }) => {
  const [alert, setAlert] = useRecoilState(alertState);
  const admin = useRecoilValue(adminUserState);

  const [filteredApplicants, setFilteredApplicants] =
    useState<IApplicantTypeWithID[]>();
  const [checkedApplicants, setCheckedApplicants] = useState(new Set());
  const [filter, setFilter] = useState<StatusType | null>(null);
  const [modal, setModal] = useRecoilState(modalState);
  const openModal = (id: string) => {
    setModal({
      ...modal,
      [MODAL_KEY.ADMIN_APPLICANT]: true,
      selectedId: id,
    });
  };
  const checkedApplicantHandler = (id: string, isChecked: boolean) => {
    const newCheckedApplicants = new Set(checkedApplicants);
    if (isChecked) {
      newCheckedApplicants.add(id);
      setCheckedApplicants(newCheckedApplicants);
    } else if (!isChecked && checkedApplicants.has(id)) {
      newCheckedApplicants.delete(id);
      setCheckedApplicants(newCheckedApplicants);
    }
  };
  const isAllChecked = checkedApplicants.size === filteredApplicants?.length;

  const checkAllHandler = (isChecked: boolean) => {
    if (isChecked) {
      setCheckedApplicants(new Set(filteredApplicants?.map((data) => data.id)));
    } else {
      setCheckedApplicants(new Set());
    }
  };

  const sendLogHandler = async (logs: EmailLogType[]) => {
    logs.map(async (log) => {
      await dbService.collection('emailLogs').doc().set(log);
    });
  };

  const sendEmail = async (
    template: string,
    applicants: IApplicantTypeWithID[],
  ) => {
    let log: EmailLogType[] = [];
    applicants.map((applicant) => {
      emailjs.init('RsM6o4WUsb5rzJGXG');
      emailjs
        .send('default_service', template, {
          email: applicant.email,
          name: applicant.name,
        })
        .then(
          (result) => {
            console.log(result.text);
            setAlert({
              ...alert,
              alertHandle: true,
              alertMessage: '메일이 전송되었습니다.',
              alertStatus: 'success',
            });
          },
          (error) => {
            console.log(error.text);
          },
        );
      const emailLog: EmailLogType = {
        email: applicant.email,
        name: applicant.name,
        applicantID: applicant.id,
        applicantStatus: applicant.status,
        sender: admin.name,
        uploadDate: new Date(),
      };
      log = [...log, emailLog];
    });
    await sendLogHandler(log);
  };
  useEffect(() => {
    getApplicants(filter, setFilteredApplicants);
  }, [filter]);

  const selectApplicants = filteredApplicants?.filter((applicant) => {
    return checkedApplicants.has(applicant.id);
  });

  return (
    <AnimatePresence>
      <AdminSectionWrapper>
        {modal.adminApplicant && <ApplicantModal />}

        <EmailLeftWrapper>
          <EmailLeftInner>
            <EmailCategory>선택한 이메일</EmailCategory>
            {selectApplicants && (
              <SelectedApplicantsBox selectApplicants={selectApplicants} />
            )}
          </EmailLeftInner>
        </EmailLeftWrapper>
        <EmailRightWrapper>
          <EmailRightInner>
            {filteredApplicants && (
              <StatusBadgeBox
                status={filter}
                setStatus={setFilter}
                filteredApplicants={filteredApplicants}
                setFilteredApplicants={setFilteredApplicants}
              />
            )}
            <TemplateSelectorWrapper>
              <GDSCButton
                color={!isAllChecked ? 'tossBlue200' : 'tossBlueActive'}
                text={!isAllChecked ? '모두 선택' : '모두 해제'}
                onClick={() => checkAllHandler(!isAllChecked)}
                type={'button'}
              />
              <GDSCButton
                color={'googleBlue'}
                text={'이메일 전송'}
                onClick={() =>
                  selectApplicants && sendEmail(template, selectApplicants)
                }
                type={'button'}
              />
            </TemplateSelectorWrapper>
            {filteredApplicants && (
              <CheckboxSection>
                {filteredApplicants.map((applicant) => (
                  <CheckboxWrapper
                    key={applicant.id}
                    onDoubleClick={() => openModal(applicant.id)}
                  >
                    <CheckBoxCard
                      {...applicant}
                      checkedList={checkedApplicants}
                      setCheckedList={checkedApplicantHandler}
                    />
                  </CheckboxWrapper>
                ))}
              </CheckboxSection>
            )}
          </EmailRightInner>
        </EmailRightWrapper>
      </AdminSectionWrapper>
    </AnimatePresence>
  );
};

const SelectedApplicantsBox: React.FC<{
  selectApplicants: IApplicantTypeWithID[];
}> = ({ selectApplicants }) => {
  const [modal, setModal] = useRecoilState(modalState);
  const openModal = (id: string) => {
    setModal({
      ...modal,
      [MODAL_KEY.ADMIN_APPLICANT]: true,
      selectedId: id,
    });
  };
  return (
    <SelectedBoxSection>
      {selectApplicants.map((applicant) => (
        <div
          onDoubleClick={() => openModal(applicant.id)}
          key={`check-${applicant.id}`}
        >
          <CheckBoxCard {...applicant} disabled={true} />
        </div>
      ))}
    </SelectedBoxSection>
  );
};

const EmailLogBox = () => {
  const [logs, setLogs] = useState<EmailLogType[]>([]);
  const getEmailLogs = async () => {
    const res = await dbService
      .collection('emailLogs')
      .orderBy('uploadDate', 'desc')
      .get();
    setLogs(
      res.docs.map((doc) => {
        return { id: doc.id, ...(doc.data() as EmailLogType) };
      }),
    );
  };
  useEffect(() => {
    getEmailLogs();
  }, []);
  return (
    <EmailLeftWrapper>
      <EmailLeftInner>
        <EmailCategory>이메일 로그</EmailCategory>
        <SelectedBoxSection></SelectedBoxSection>
      </EmailLeftInner>
    </EmailLeftWrapper>
  );
};

export default AdminEmail;
