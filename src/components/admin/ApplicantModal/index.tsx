import React, { memo, useCallback, useEffect, useState } from 'react';
import {
  ApplicantBadgeWrapper,
  ApplicantDataWrapper,
  ApplicantInfoHeader,
  ApplicantInfoInner,
  ApplicantInfoLink,
  ApplicantInfoSection,
  ApplicantInfoStateWrapper,
  ApplicantInfoText,
  ApplicantInfoTextWrapper,
  ApplicantInfoWrapper,
  ApplicantModalInner,
  ApplicantModalWrapper,
  ApplicantName,
  ApplicantNameWrapper,
} from './styled';
import { dbService } from '../../../firebase/firebase';
import { IApplicantTypeWithID, StatusType } from '../../../types/applicant';
import { useRecoilState } from 'recoil';
import { MODAL_KEY, modalState } from '../../../store/modal';
import { ClearButton } from '../../common/ModalButton';
import { modalVariants } from '../../common/Variants/modalVariants';

import StatusBadge from '../Statusbadge';
import OutsideClickHandler from '../../../utils/OutsideClickHandler';
import ApplicantChat from '../ApplicantChatSection';
import { AnimatePresence } from 'framer-motion';
import { timeFilter } from '../../../utils/timeFilter';

const ApplicantModal = () => {
  const [applicantData, setApplicantData] = useState<IApplicantTypeWithID>();
  const [modal, setModal] = useRecoilState(modalState);

  const getApplicant = (id: string) => {
    dbService
      .collection('applicants')
      .doc(id)
      .get()
      .then((doc) => {
        const data = { ...doc.data(), id: doc.id };
        setApplicantData(data as IApplicantTypeWithID);
      });
  };

  const closeModal = () => {
    setModal({
      ...modal,
      [MODAL_KEY.ADMIN_APPLICANT]: false,
      selectedId: '',
    });
  };
  useEffect(() => {
    modal.selectedId && getApplicant(modal.selectedId);
  }, [modal.selectedId]);

  return (
    <AnimatePresence>
      {modal.adminApplicant && modal.selectedId && (
        <ApplicantModalWrapper>
          <OutsideClickHandler outsideClick={closeModal}>
            <ApplicantModalInner
              variants={modalVariants}
              layoutId={`card-${modal.selectedId}`}
            >
              {applicantData && (
                <ApplicantInfoWrapper>
                  <ApplicantInfo applicantData={applicantData} />
                  <ApplicantInfoState
                    applicantData={applicantData}
                    setApplicantData={setApplicantData}
                  />
                </ApplicantInfoWrapper>
              )}
              <ApplicantInfoSection>
                <ApplicantInfoHeader>
                  <ClearButton onClick={closeModal} />
                </ApplicantInfoHeader>
                {applicantData && (
                  <ApplicantDataWrapper>
                    <object
                      type="text/html"
                      data={applicantData?.fileURL}
                      width="100%"
                      height="100%"
                    />

                    <ApplicantChat applicantId={applicantData.id} />
                  </ApplicantDataWrapper>
                )}
              </ApplicantInfoSection>
            </ApplicantModalInner>
          </OutsideClickHandler>
        </ApplicantModalWrapper>
      )}
    </AnimatePresence>
  );
};
const ApplicantInfoState: React.FC<{
  applicantData: IApplicantTypeWithID;
  setApplicantData: (data: IApplicantTypeWithID) => void;
}> = ({ applicantData, setApplicantData }) => {
  const applicantRef = dbService.collection('applicants').doc(applicantData.id);
  const updateStatus = useCallback(async (status: StatusType) => {
    await applicantRef.update({
      status: status,
    });
    setApplicantData({
      ...applicantData,
      status: status,
    });
  }, []);

  return (
    <ApplicantInfoStateWrapper>
      <ApplicantBadgeWrapper onClick={() => updateStatus('DOCS')}>
        <StatusBadge
          status={'DOCS'}
          disable={applicantData.status !== 'DOCS'}
        />
      </ApplicantBadgeWrapper>
      <ApplicantBadgeWrapper onClick={() => updateStatus('REJECTED_DOCS')}>
        <StatusBadge
          status={'REJECTED_DOCS'}
          disable={applicantData.status !== 'REJECTED_DOCS'}
        />
      </ApplicantBadgeWrapper>
      <ApplicantBadgeWrapper onClick={() => updateStatus('INTERVIEW')}>
        <StatusBadge
          status={'INTERVIEW'}
          disable={applicantData.status !== 'INTERVIEW'}
        />
      </ApplicantBadgeWrapper>
      <ApplicantBadgeWrapper onClick={() => updateStatus('REJECTED_INTERVIEW')}>
        <StatusBadge
          status={'REJECTED_INTERVIEW'}
          disable={applicantData.status !== 'REJECTED_INTERVIEW'}
        />
      </ApplicantBadgeWrapper>
      <ApplicantBadgeWrapper onClick={() => updateStatus('HIRED')}>
        <StatusBadge
          status={'HIRED'}
          disable={applicantData.status !== 'HIRED'}
        />
      </ApplicantBadgeWrapper>
    </ApplicantInfoStateWrapper>
  );
};

const ApplicantInfo: React.FC<{
  applicantData: IApplicantTypeWithID;
}> = ({ applicantData }) => {
  function removeHttp(address: string) {
    return address.replace(/^(https?:\/\/)?(www\.)?/, '');
  }

  return (
    <ApplicantInfoInner>
      <ApplicantNameWrapper>
        <ApplicantName>{applicantData.name}</ApplicantName>
        <StatusBadge status={applicantData.status} />
      </ApplicantNameWrapper>
      <ApplicantInfoTextWrapper>
        <ApplicantInfoText>이메일</ApplicantInfoText>
        <ApplicantInfoText>{applicantData.email}</ApplicantInfoText>
      </ApplicantInfoTextWrapper>
      <ApplicantInfoTextWrapper>
        <ApplicantInfoText>전화번호</ApplicantInfoText>
        <ApplicantInfoText>{applicantData.phoneNumber}</ApplicantInfoText>
      </ApplicantInfoTextWrapper>
      <ApplicantInfoTextWrapper>
        <ApplicantInfoText>전공</ApplicantInfoText>
        <ApplicantInfoText>{applicantData.major}</ApplicantInfoText>
      </ApplicantInfoTextWrapper>
      <ApplicantInfoTextWrapper>
        <ApplicantInfoText>학번</ApplicantInfoText>
        <ApplicantInfoText>{applicantData.studentID}</ApplicantInfoText>
      </ApplicantInfoTextWrapper>
      <ApplicantInfoTextWrapper>
        <ApplicantInfoText>Link1</ApplicantInfoText>
        <ApplicantInfoLink href={applicantData.link0} target={'_blank'}>
          {removeHttp(applicantData.link0)}
        </ApplicantInfoLink>
      </ApplicantInfoTextWrapper>
      {applicantData.link1 !== '' && (
        <ApplicantInfoTextWrapper>
          <ApplicantInfoText>Link2</ApplicantInfoText>
          <ApplicantInfoLink href={applicantData.link1} target={'_blank'}>
            {removeHttp(applicantData.link1)}
          </ApplicantInfoLink>
        </ApplicantInfoTextWrapper>
      )}
      <ApplicantInfoTextWrapper>
        <ApplicantInfoText>추천인</ApplicantInfoText>
        <ApplicantInfoText>
          {applicantData.recommender == '' ? '없음' : applicantData.recommender}
        </ApplicantInfoText>
      </ApplicantInfoTextWrapper>
      <ApplicantInfoTextWrapper>
        <ApplicantInfoText>지원 일자</ApplicantInfoText>
        <ApplicantInfoText>
          {timeFilter(applicantData.uploadDate.seconds).Y_M_D}
        </ApplicantInfoText>
      </ApplicantInfoTextWrapper>
    </ApplicantInfoInner>
  );
};

export default memo(ApplicantModal);
