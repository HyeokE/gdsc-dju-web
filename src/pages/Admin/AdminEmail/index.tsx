import React, { useRef, useState } from 'react';
import TextInput from '../../../components/common/input/TextInput';
import emailjs from '@emailjs/browser';
import { GDSCButton } from '../../../components/common/Button';

const AdminEmail = () => {
  const [email, setEmail] = useState('');
  const emailProps = {
    to_email: 'jhjeong00@gmail.com',
    to_name: '정준혁',
    from_name: 'Google Developer Student Clubs Daejin University',
  };
  const sendEmail = () => {
    emailjs.init('RsM6o4WUsb5rzJGXG');
    emailjs.send('default_service', 'template_i93hrqb', emailProps).then(
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
      <GDSCButton text={'전송'} onClick={sendEmail} type={'button'} />
    </div>
  );
};

export default AdminEmail;
