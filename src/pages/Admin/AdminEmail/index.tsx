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
import { CheckboxSection } from './styled';

const AdminEmail = () => {
  const [email, setEmail] = useState('');
  const [template, setTemplate] = useState<undefined | string>('');
  const templateRef = useRef<HTMLInputElement>(null);
  const [filteredApplicants, setFilteredApplicants] =
    useState<IApplicantTypeWithID[]>();
  const testEmail = {
    email: 'jhjeong00@gmail.com',
    name: '정준혁',
  };
  const getApplicants = async (status?: StatusType) => {
    const res = status
      ? await dbService
          .collection('applicants')
          .where('status', '==', status)
          .get()
      : await dbService.collection('applicants').get();

    const applicantsList = res.docs.map((doc) => {
      return { id: doc.id, ...(doc.data() as IApplicantType) };
    });
    setFilteredApplicants(applicantsList);
  };
  useEffect(() => {
    getApplicants('DOCS');
  }, []);

  const sendLogHandler = async (logs: EmailLogType[]) => {
    logs.map(async (log) => {
      await dbService.collection('emailLogs').doc().set(log);
    });
  };

  const testSend = (email: typeof testEmail) => {
    console.log(email);
  };

  const sendEmail = async (
    template: string,
    applicants: IApplicantTypeWithID[],
  ) => {
    let log: EmailLogType[] = [];

    applicants.map((applicant) => {
      testSend({
        email: applicant.email,
        name: applicant.name,
      });
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

  return (
    <LayoutContainer>
      <ContainerInner>
        <TextInput
          ref={templateRef}
          onChange={(e) => console.log(e.target.value)}
        />
        <div>{template}</div>
        {filteredApplicants && (
          <CheckboxSection>
            {filteredApplicants.map((applicant) => (
              <CheckBoxCard {...applicant} key={applicant.id} />
            ))}
          </CheckboxSection>
        )}

        <GDSCButton
          color={'googleBlue'}
          text={'템플릿 선택'}
          onClick={() => setTemplate(templateRef.current?.value)}
          type={'button'}
        />
        <div>
          {filteredApplicants?.map((applicant) => (
            <div key={applicant.id}>
              <div>{applicant.name}</div>
              <div>{applicant.email}</div>
            </div>
          ))}
        </div>
        <GDSCButton
          text={'리스트 선택'}
          onClick={() => getApplicants('DOCS')}
          type={'button'}
        />
        {filteredApplicants && (
          <GDSCButton
            text={'전송'}
            onClick={() => sendEmail('template_docs_pass', filteredApplicants)}
            type={'button'}
          />
        )}
      </ContainerInner>
    </LayoutContainer>
  );
};

export default AdminEmail;
// testSend(emailProps);
// emailjs.init('RsM6o4WUsb5rzJGXG');
// emailjs.send('default_service', template, emailProps).then(
//   (result) => {
//     console.log(result.text);
//   },
//   (error) => {
//     console.log(error.text);
//   },
// );
