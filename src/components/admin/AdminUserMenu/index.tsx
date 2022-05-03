import React from 'react';
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
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <AdminUserMenuWrapper
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
    </>
  );
};

export default AdminUserMenu;
