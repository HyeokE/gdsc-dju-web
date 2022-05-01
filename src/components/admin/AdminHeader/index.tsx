import React, { useState } from 'react';
import './Admin.css';
import {
  AdminNavCategoryWrapper,
  AdminNavigationWrapper,
  SidebarContainer,
  StyledUserName,
} from './styled';
import AdminSignInModal from '../../../components/common/Modal/AdminSignIn';
import AdminSignUpModal from '../../../components/common/Modal/AdminSignUp';
import AdminSetUserProfile from '../../../components/common/Modal/AdminSetUserProfile';
import AdminTopMenu from '../../../components/admin/AdminTopMenu';
import { TopMargin } from '../../../styles/layouts';
import { useLocation } from 'react-router';
import {
  NavInner,
  NavTask,
  NavTaskWrapper,
  NavWrapper,
  SchoolName,
  SchoolNameUni,
  StyledImg,
  StyledLogo,
  StyledLogoWrapper,
} from '../../common/navigation/DeskNavigation/styled';
import GDSCLogo from '../../../assets/GDSCLogo.svg';
import AdminUserMenu from '../AdminUserMenu';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { localUserState } from '../../../store/localUser';

const AdminHome = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [adminMenuHandler, setAdminMenuHandler] = useState(false);
  const [adminUser] = useRecoilState(localUserState);
  const [selectedCategory, setSelectedCategory] = useState<string>(
    location.pathname,
  );

  const tabs = [
    { label: '홈', route: '/admin' },
    { label: '멤버 관리', route: '/admin/member' },
    { label: '지원자 관리', route: '/admin/recruit' },
    { label: '이메일', route: '/admin/email' },
  ];

  return (
    <>
      <AdminSignInModal />
      <AdminSignUpModal />
      <AdminSetUserProfile />
      <AdminSetUserProfile />
      <AdminNavigationWrapper>
        <NavWrapper>
          <NavInner>
            <NavTaskWrapper>
              <NavTask>
                <StyledLogoWrapper to={'/admin'}>
                  <StyledImg src={GDSCLogo} alt="GDSC-Chapter-Logo" />
                  <StyledLogo>GDSC</StyledLogo>
                  <SchoolName>Daejin </SchoolName>
                  <SchoolNameUni>Admin</SchoolNameUni>
                </StyledLogoWrapper>
              </NavTask>
            </NavTaskWrapper>
            <AdminNavCategoryWrapper>
              <SidebarContainer>
                <AdminTopMenu
                  tabs={tabs}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                />
              </SidebarContainer>
              <div>
                <AdminUserMenu
                  isOpen={adminMenuHandler}
                  setIsOpen={setAdminMenuHandler}
                />
              </div>
              {adminUser.nickname.length > 0 && (
                <StyledUserName
                  onClick={() => setAdminMenuHandler(!adminMenuHandler)}
                >
                  Hi {adminUser.nickname}
                </StyledUserName>
              )}
            </AdminNavCategoryWrapper>
          </NavInner>
        </NavWrapper>
      </AdminNavigationWrapper>
    </>
  );
};

export default AdminHome;
