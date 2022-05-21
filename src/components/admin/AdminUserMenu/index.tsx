import React, { useCallback, useEffect, useRef } from 'react';
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { AdminUserMenuWrapper, MenuElement } from './styled';
import { authService } from '../../../firebase/firebase';
import { MODAL_KEY, modalState } from '../../../store/modal';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';

const AdminUserMenu = (props: {
  isOpen: boolean;
  setIsOpen: (data: boolean) => void;
}) => {
  const { isOpen, setIsOpen } = props;
  const [modal, setModal] = useRecoilState(modalState);
  const navigate = useNavigate();
  const hoverMotion = {
    cursor: 'pointer',
    backgroundColor: '#E5E8EB',
  };
  const userMenuRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = useCallback(
    (e: Event) => {
      const target = e.target as Node;
      const username = document.getElementsByClassName('username')[0];
      if (isOpen && target.contains(username || target)) {
        setIsOpen(false);
        console.log(`removeEventListener`);
        document.removeEventListener('click', handleClickOutside);
      }
    },
    [isOpen],
  );
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        document.addEventListener('click', handleClickOutside);
        console.log('open');
      }, 0);
      // window.addEventListener('click', handleClickOutside);
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <AdminUserMenuWrapper
          ref={userMenuRef}
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <MenuElement
            layout
            whileHover={hoverMotion}
            onClick={() => {
              setIsOpen(false);
              authService.signOut();
              navigate('/auth');
            }}
          >
            로그아웃
          </MenuElement>
          <MenuElement
            layout
            whileHover={hoverMotion}
            onClick={() => {
              setIsOpen(false);
              setModal({ ...modal, [MODAL_KEY.ADMIN_SIGN_UP]: true });
            }}
          >
            회원가입
          </MenuElement>
        </AdminUserMenuWrapper>
      )}
    </AnimatePresence>
  );
};

export default AdminUserMenu;
