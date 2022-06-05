import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { GDSCButton } from '../../../components/common/Button';
import { TextInput } from '../../../components/common/input/TextInput';
import { dbService } from '../../../firebase/firebase';
import { IApplicantType, statusType } from '../../../types/applicant';

const AdminEmail = () => {
  const [email, setEmail] = useState('');
  const [template, setTemplate] = useState<undefined | string>('');
  const templateRef = useRef<HTMLInputElement>(null);
  const [filteredApplicants, setFilteredApplicants] =
    useState<IApplicantType[]>();
  const getApplicants = (status: statusType) => {
    dbService.collection('applicants').where('status', '==', status).get();
  };
  const emailProps = {
    to_email: 'jhjeong00@gmail.com',
    to_name: '정준혁',
    from_name: 'Google Developer Student Clubs Daejin University',
  };
  const sendEmail = (template: string) => {
    emailjs.init('RsM6o4WUsb5rzJGXG');
    emailjs.send('default_service', template, emailProps).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      },
    );
  };

  return (
    <div>
      <TextInput
        ref={templateRef}
        onChange={(e) => console.log(e.target.value)}
      />
      <div>{template}</div>
      <GDSCButton
        text={'템플릿 확인'}
        onClick={() => setTemplate(templateRef.current?.value)}
        type={'button'}
      />
      {/*<GDSCButton*/}
      {/*  text={'전송'}*/}
      {/*  onClick={() => sendEmail('template_i93hrqb')}*/}
      {/*  type={'button'}*/}
      {/*/>*/}
    </div>
  );
};

export default AdminEmail;
