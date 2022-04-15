import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import AdminHeader from '../../components/admin/AdminHeader';
import AdminHome from './AdminHome';
import AdminMember from './AdminMember';
import AdminSetting from './AdminSetting';
import { authService, dbService } from '../../firebase/firebase';
import { useRecoilState } from 'recoil';
import { localUserState } from '../../store/localUser';
import { useLocation } from 'react-router';
import { recruitmentSelector } from '../../store/recruitHandler';

const Admin = () => {
  const [adminUser, setAdminUser] = useRecoilState(localUserState);
  const navigate = useNavigate();
  const location = useLocation();

  const checkAdminUser = async () => {
    await authService.onAuthStateChanged((user: any) => {
      if (user) {
        setAdminUser({
          ...adminUser,
          uid: user.uid,
        });
        try {
          dbService
            .collection('adminUsers')
            .doc(user.uid)
            .get()
            .then((data) => {
              const userData = data.data();
              setAdminUser({
                ...adminUser,
                uid: user.uid,
                nickname: userData?.nickname,
                name: userData?.name,
                phoneNumber: userData?.phoneNumber,
              });
              location.pathname.includes('/admin') ? null : navigate('/admin');
            });
        } catch (e: any) {
          navigate('/');
          console.log(e.message);
        }
      } else {
        navigate('/');
        authService.signOut();
      }
    });
  };

  const [selector, setSelector] = useRecoilState(recruitmentSelector);
  useEffect(() => {
    setSelector(selector);
    checkAdminUser();
  }, []);

  return (
    <>
      <AdminHeader />
      <Routes>
        <Route path={'/*'} element={<AdminHome />} />
        <Route path={'/member'} element={<AdminMember />} />
        <Route path={'/recruit'} element={<AdminSetting />} />
      </Routes>
    </>
  );
};

export default Admin;
