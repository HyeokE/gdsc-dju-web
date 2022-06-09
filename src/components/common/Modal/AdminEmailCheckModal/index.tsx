import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { ModalBackgroundWrapper } from '../styled';
import OutsideClickHandler from '../../../../utils/OutsideClickHandler';
import { useRecoilState } from 'recoil';
import { MODAL_KEY, modalState } from '../../../../store/modal';

const AdminEmailCheckModal = () => {
  const [modal, setModal] = useRecoilState(modalState);

  return (
    <AnimatePresence>
      <ModalBackgroundWrapper>
        <OutsideClickHandler
          outsideClick={() => {
            setModal({ ...modal, [MODAL_KEY.ADMIN_EMAIL_CHECK]: false });
          }}
        >
          <div>{modal.adminEmailCheck && <div>isopen</div>}</div>
        </OutsideClickHandler>
      </ModalBackgroundWrapper>
    </AnimatePresence>
  );
};

export default AdminEmailCheckModal;
