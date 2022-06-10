import React, { memo } from 'react';
import { SidebarContainer } from '../../../pages/Admin/styled';
import {
  SideElementSelectBar,
  SideElementText,
  SideElementWrapper,
} from './styled';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router-dom';

const AdminSidebar = () => {
  const tabs = [
    { label: '홈', route: '/admin' },
    { label: '멤버 관리', route: '/admin/member' },
    { label: '지원자 관리', route: '/admin/recruit' },
    { label: '이메일', route: '/admin/email' },
    { label: '이메일 로그', route: '/admin/email-log' },
  ];
  const location = useLocation();
  const navigate = useNavigate();

  const routeHandler = (route: string) => {
    navigate(route);
  };

  return (
    <SidebarContainer>
      {tabs.map((item) => {
        const isCurrent = location.pathname === item.route;
        return (
          <SideElementWrapper
            key={item.route}
            onClick={() => routeHandler(item.route)}
          >
            <SideElementSelectBar isCurrent={isCurrent} id={'bar'} />
            <SideElementText isCurrent={isCurrent}>
              {item.label}
            </SideElementText>
          </SideElementWrapper>
        );
      })}
    </SidebarContainer>
  );
};

export default memo(AdminSidebar);
