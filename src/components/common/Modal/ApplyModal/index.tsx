import React from 'react';
import {
  ApplyButtonWrapper,
  ApplyModalButtonWrapper,
  ApplyModalContentWrapper,
  ApplyModalInner,
  ApplyModalInnerWrapper,
  ApplyModalP,
  ApplyModalTitle,
  ApplyModalWrapper,
} from './styled';
import { GDSCButton } from '../../Button';
import { MODAL_KEY, modalState } from '../../../../store/modal';
import { useRecoilState } from 'recoil';
import OutsideClickHandler from '../../../../utils/OutsideClickHandler';
import { AnimatePresence } from 'framer-motion';
import BulletList from '../../BulletList';

interface Props {
  name: string;
  position: string;
  email: string;
  phoneNumber: string;
  onClick: () => void;
}
const variants = {
  active: {
    opacity: 1,
    scale: 1,
    y: 0,
  },
  unActive: {
    opacity: 0,
    scale: 0,
    y: 200,
  },
};
const ApplyModal: React.FC<Props> = ({
  name,
  position,
  email,
  phoneNumber,
  onClick,
}) => {
  const [modal, setModal] = useRecoilState(modalState);
  return (
    <AnimatePresence>
      {modal.applyCheck && (
        <ApplyModalWrapper
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <OutsideClickHandler
            outsideClick={() =>
              setModal({ ...modal, [MODAL_KEY.APPLY_CHECK]: false })
            }
          >
            <ApplyModalInner
              variants={variants}
              exit={'unActive'}
              animate={'active'}
              initial={{ opacity: 0, scale: 0, y: 200 }}
              transition={{ duration: 0.5 }}
            >
              <ApplyModalInnerWrapper>
                <ApplyModalTitle>최종 제출 전, 확인해주세요.</ApplyModalTitle>
                <ApplyModalContentWrapper>
                  <ApplyModalP>이름</ApplyModalP>
                  <ApplyModalP>{name}</ApplyModalP>
                </ApplyModalContentWrapper>
                <ApplyModalContentWrapper>
                  <ApplyModalP>지원 포지션</ApplyModalP>
                  <ApplyModalP>{position}</ApplyModalP>
                </ApplyModalContentWrapper>
                <ApplyModalContentWrapper>
                  <ApplyModalP>이메일 주소</ApplyModalP>
                  <ApplyModalP>{email}</ApplyModalP>
                </ApplyModalContentWrapper>
                <ApplyModalContentWrapper>
                  <ApplyModalP>전화번호</ApplyModalP>
                  <ApplyModalP>{phoneNumber}</ApplyModalP>
                </ApplyModalContentWrapper>

                {/*<BulletList text={'지원서 내용은 제출 후 수정이 불가능해요.'} />*/}
              </ApplyModalInnerWrapper>
              <ApplyModalP>
                * 지원서 내용은 제출 후 수정이 불가능해요.
              </ApplyModalP>
              <ApplyButtonWrapper>
                <GDSCButton
                  text={'제출하기'}
                  onClick={() => onClick()}
                  color={'GDSC blue'}
                />
                <ApplyModalButtonWrapper>
                  <GDSCButton
                    text={'돌아가기'}
                    onClick={() =>
                      setModal({ ...modal, [MODAL_KEY.APPLY_CHECK]: false })
                    }
                  />
                </ApplyModalButtonWrapper>
              </ApplyButtonWrapper>
            </ApplyModalInner>
          </OutsideClickHandler>
        </ApplyModalWrapper>
      )}
    </AnimatePresence>
  );
};

export default ApplyModal;
