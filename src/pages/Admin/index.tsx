import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import AdminHeader from '../../components/admin/AdminHeader';
import AdminHome from './AdminHome';
import AdminApplicants from './AdminApplicants';
import { db, auth } from '../../firebase/firebase';
import { useRecoilState } from 'recoil';
import { adminUserState } from '../../store/localUser';
import { recruitmentSelector } from '../../store/recruitHandler';
import AdminEmail from './AdminEmail';
import AdminSignUp from '../../components/common/Modal/AdminSignUp';
import AdminMember from './AdminMember';
import AdminEmailLog from './AdminEmailLog';
import {
  AdminContainer,
  AdminContainerInner,
  AdminContainerWrapper,
} from './styled';
import AdminSidebar from '../../components/admin/AdminSidebar';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

const Admin = () => {
  const [adminUser, setAdminUser] = useRecoilState(adminUserState);
  const [selector, setSelector] = useRecoilState(recruitmentSelector);
  const [template, setTemplate] = useState<string>('템플릿이 없어요 :(');
  const navigate = useNavigate();

  const getAdminUser = async (uid: string) => {
    const adminUserRef = await getDoc(doc(db, 'adminUsers', uid));
    const userData = adminUserRef.data();
    if (adminUserRef.exists()) {
      setAdminUser({
        ...adminUser,
        uid: uid,
        nickname: userData?.nickname,
        name: userData?.name,
        phoneNumber: userData?.phoneNumber,
      });
    }
  };

  const checkAdminUser = async () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        try {
          getAdminUser(user.uid);
        } catch (error) {
          navigate('/auth');
          error instanceof Error && console.log(error);
        }
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
      <AdminContainerWrapper>
        <AdminSidebar />
        <AdminContainer>
          <AdminContainerInner>
            <Routes>
              <Route path={'/*'} element={<AdminHome />} />
              <Route path={'/member'} element={<AdminMember />} />
              <Route path={'/recruit'} element={<AdminApplicants />} />
              <Route
                path={'/email'}
                element={<AdminEmail template={template} />}
              />
              <Route
                path={'/email-log'}
                element={
                  <AdminEmailLog
                    template={template}
                    setTemplate={setTemplate}
                  />
                }
              />
            </Routes>
          </AdminContainerInner>
        </AdminContainer>
      </AdminContainerWrapper>
    </>
  );
};

export default Admin;
