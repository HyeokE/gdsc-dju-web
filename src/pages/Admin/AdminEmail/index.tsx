import React, { useEffect, useRef, useState } from 'react';
import { GDSCButton } from '../../../components/common/Button';
import { TextInput } from '../../../components/common/input/TextInput';
import { dbService } from '../../../firebase/firebase';
import {
  EmailLogType,
  IApplicantType,
  IApplicantTypeWithID,
  StatusType,
} from '../../../types/applicant';
import { ContainerInner, LayoutContainer } from '../../../styles/layouts';
import CheckBoxCard from '../../../components/common/CheckBoxCard';
import emailjs from '@emailjs/browser';
import {
  CheckboxSection,
  EmailCategory,
  EmailLeftInner,
  EmailLeftWrapper,
  EmailRightInner,
  EmailRightWrapper,
  SelectedBoxSection,
  TemplateEmailWrapper,
  TemplateSelectorWrapper,
  TemplateText,
} from './styled';
import { useRecoilState } from 'recoil';
import { alertState } from '../../../store/alert';
import { AdminSectionWrapper } from '../AdminApplicants/styled';

const AdminEmail = () => {
  const [alert, setAlert] = useRecoilState(alertState);
  const [template, setTemplate] = useState<string>('템플릿이 없어요 :(');
  const templateRef = useRef<HTMLInputElement>(null);
  const [filteredApplicants, setFilteredApplicants] =
    useState<IApplicantTypeWithID[]>();
  const [checkedApplicants, setCheckedApplicants] = useState(new Set());
  const [filter, setFilter] = useState<StatusType | null>(null);

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

  const getApplicants = async (status: StatusType | null) => {
    const res = status
      ? await dbService
          .collection('applicants')
          .where('status', '==', status)
          .get()
      : await dbService
          .collection('applicants')
          .orderBy('uploadDate', 'desc')
          .get();
    const applicantsList = res.docs.map((doc) => {
      return { id: doc.id, ...(doc.data() as IApplicantType) };
    });
    setFilteredApplicants(applicantsList);
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
        uploadDate: new Date(),
      };
      log = [...log, emailLog];
    });
    await sendLogHandler(log);
  };
  useEffect(() => {
    getApplicants(filter);
  }, [filter]);

  const selectApplicants = filteredApplicants?.filter((applicant) => {
    return checkedApplicants.has(applicant.id);
  });

  return (
    <AdminSectionWrapper>
      <EmailLeftWrapper>
        <EmailLeftInner>
          <EmailCategory>선택한 이메일</EmailCategory>
          <SelectedBoxSection>
            {selectApplicants &&
              selectApplicants.map((applicant) => (
                <CheckBoxCard
                  key={`check-${applicant.id}`}
                  {...applicant}
                  disabled={true}
                />
              ))}
          </SelectedBoxSection>
        </EmailLeftInner>
      </EmailLeftWrapper>
      <EmailRightWrapper>
        <EmailRightInner>
          <TemplateSelectorWrapper>
            <TemplateText>
              {template !== '템플릿이 없어요 :(' && '선택한 템플릿 '}
              {template}
            </TemplateText>
            <TemplateEmailWrapper>
              <TextInput
                ref={templateRef}
                placeholder={'템플릿을 입력해주세요.'}
              />
            </TemplateEmailWrapper>
            <GDSCButton
              color={'googleBlue'}
              text={'템플릿 선택'}
              onClick={() => setTemplate(templateRef.current?.value ?? '')}
              type={'button'}
            />
            <GDSCButton
              color={!isAllChecked ? 'googleGreen' : 'googleRed'}
              text={!isAllChecked ? '모두 선택' : '모두 해제'}
              onClick={() => checkAllHandler(!isAllChecked)}
              type={'button'}
            />
            <GDSCButton
              color={'googleBlue'}
              text={'선택 전송'}
              onClick={() =>
                selectApplicants && sendEmail(template, selectApplicants)
              }
              type={'button'}
            />
          </TemplateSelectorWrapper>
          {filteredApplicants && (
            <CheckboxSection>
              {filteredApplicants.map((applicant) => (
                <CheckBoxCard
                  {...applicant}
                  key={applicant.id}
                  checkedList={checkedApplicants}
                  setCheckedList={checkedApplicantHandler}
                />
              ))}
            </CheckboxSection>
          )}
        </EmailRightInner>
      </EmailRightWrapper>
    </AdminSectionWrapper>
  );
};

export default AdminEmail;
