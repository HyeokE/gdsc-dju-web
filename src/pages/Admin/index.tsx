import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import AdminHeader from '../../components/admin/AdminHeader';
import AdminHome from './AdminHome';
import AdminMember from './AdminMember';
import AdminApplicants from './AdminApplicants';
import { authService, dbService } from '../../firebase/firebase';
import { useRecoilState } from 'recoil';
import { localUserState } from '../../store/localUser';
import { useLocation } from 'react-router';
import { recruitmentSelector } from '../../store/recruitHandler';
import API from '../../apis/index';
import AdminEmail from './AdminEmail';

const Admin = () => {
  const [adminUser, setAdminUser] = useRecoilState(localUserState);
  const [selector, setSelector] = useRecoilState(recruitmentSelector);
  const navigate = useNavigate();
  const location = useLocation();
  const checkAdminUser = async () => {
    await authService.onAuthStateChanged((user) => {
      if (user) {
        setAdminUser({
          ...adminUser,
          uid: user.uid,
        });
        try {
          dbService
            .collection('adminUsers')
            .doc(`${user.uid}`)
            .get()
            .then((doc) => {
              console.log(doc.data());
            });
          API.getAdminUser(user.uid).then((data) => {
            const userData = data.data.fields;
            setAdminUser({
              ...adminUser,
              uid: user.uid,
              nickname: userData?.nickname.stringValue,
              name: userData?.name.stringValue,
              phoneNumber: userData?.phoneNumber.stringValue,
            });
            location.pathname.includes('/admin') ? null : navigate('/admin');
          });
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
      <AdminHeader />
      <Routes>
        <Route path={'/*'} element={<AdminHome />} />
        {/*<Route path={'/member'} element={<AdminMember />} />*/}
        <Route path={'/recruit'} element={<AdminApplicants />} />
        <Route path={'/email'} element={<AdminEmail />} />
      </Routes>
    </>
  );
};

export default Admin;
