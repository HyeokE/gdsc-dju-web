import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import AdminHeader from '../../components/admin/AdminHeader';
import AdminHome from './AdminHome';
import AdminApplicants from './AdminApplicants';
import { authService, dbService } from '../../firebase/firebase';
import { useRecoilState } from 'recoil';
import { adminUserState } from '../../store/localUser';
import { recruitmentSelector } from '../../store/recruitHandler';
import AdminEmail from './AdminEmail';
import AdminSignUp from '../../components/common/Modal/AdminSignUp';
import AdminMember from './AdminMember';
import AdminEmailLog from './AdminEmailLog';

const Admin = () => {
  const [adminUser, setAdminUser] = useRecoilState(adminUserState);
  const [selector, setSelector] = useRecoilState(recruitmentSelector);
  const [template, setTemplate] = useState<string>('템플릿이 없어요 :(');
  const navigate = useNavigate();
  const getAdminUser = (uid: string) => {
    dbService
      .collection('adminUsers')
      .doc(uid)
      .get()
      .then((doc) => {
        const userData = doc.data();
        setAdminUser({
          ...adminUser,
          uid: uid,
          nickname: userData?.nickname,
          name: userData?.name,
          phoneNumber: userData?.phoneNumber,
        });
      });
  };

  const checkAdminUser = async () => {
    await authService.onAuthStateChanged((user) => {
      if (user) {
        try {
          getAdminUser(user.uid);
        } catch (error) {
          navigate('/');
          error instanceof Error && console.log(error);
        }
      } else {
        navigate('/');
        authService.signOut();
      }
    });
  };

  useEffect(() => {
    setSelector(selector);
    checkAdminUser();
  }, []);
  return (
    <>
      <AdminSignUp />
      <AdminHeader />
      <Routes>
        <Route path={'/*'} element={<AdminHome />} />
        <Route path={'/member'} element={<AdminMember />} />
        <Route path={'/recruit'} element={<AdminApplicants />} />
        <Route path={'/email'} element={<AdminEmail template={template} />} />
        <Route
          path={'/email-log'}
          element={
            <AdminEmailLog template={template} setTemplate={setTemplate} />
          }
        />
      </Routes>
    </>
  );
};

export default Admin;
