import React, { memo, useCallback, useEffect, useState } from 'react';
import {
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
import {
  IApplicantType,
  IApplicantTypeWithID,
  statusType,
} from '../../../types/applicant';
import { useRecoilState } from 'recoil';
import { MODAL_KEY, modalState } from '../../../store/modal';
import {
  ClearButton,
  LeftArrowButton,
  RightArrowButton,
} from '../../common/ModalButton';
import { modalVariants } from '../../common/Variants/modalVariants';

import StatusBadge from '../Statusbadge';
import OutsideClickHandler from '../../../utils/OutsideClickHandler';

const ApplicantModal = () => {
  const [applicantData, setApplicantData] = useState<IApplicantTypeWithID>();
  const [modal, setModal] = useRecoilState(modalState);

  const getApplicant = async (id: string) => {
    let applicant;
    await dbService
      .collection('applicants')
      .doc(id)
      .get()
      .then((doc) => {
        applicant = { ...doc.data(), id: doc.id };
      });
    return applicant;
  };
  const applicantHandler = async (id: string) => {
    const applicant = await getApplicant(id);
    applicant && setApplicantData(applicant);
    return;
  };
  useEffect(() => {
    applicantHandler(modal.selectedId);
  }, [modal.selectedId, applicantData]);
  const closeModal = () => {
    setModal({
      ...modal,
      [MODAL_KEY.ADMIN_APPLICANT]: false,
      selectedId: '',
    });
  };
  return (
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
              {/*<LeftArrowButton onClick={closeModal} />*/}
              {/*<RightArrowButton onClick={closeModal} />*/}
              <ClearButton onClick={closeModal} />
            </ApplicantInfoHeader>
            <object
              type="text/html"
              data={applicantData?.fileURL}
              width="700px"
              height="100%"
            />
          </ApplicantInfoSection>
        </ApplicantModalInner>
      </OutsideClickHandler>
    </ApplicantModalWrapper>
  );
};
const ApplicantInfoState: React.FC<{
  applicantData: IApplicantTypeWithID;
  setApplicantData: (data: IApplicantTypeWithID) => void;
}> = ({ applicantData, setApplicantData }) => {
  const applicantRef = dbService.collection('applicants').doc(applicantData.id);
  const updateStatus = useCallback(
    async (status: statusType) => {
      await applicantRef.update({
        status: status,
      });
      setApplicantData({
        ...applicantData,
        status: status,
      });
    },
    [applicantData],
  );

  return (
    <ApplicantInfoStateWrapper>
      <div onClick={() => updateStatus('DOCS')}>
        <StatusBadge
          status={'DOCS'}
          disable={applicantData.status !== 'DOCS'}
        />
      </div>
      <div onClick={() => updateStatus('INTERVIEW')}>
        <StatusBadge
          status={'INTERVIEW'}
          disable={applicantData.status !== 'INTERVIEW'}
        />
      </div>
      <div onClick={() => updateStatus('HIRED')}>
        <StatusBadge
          status={'HIRED'}
          disable={applicantData.status !== 'HIRED'}
        />
      </div>
      <div onClick={() => updateStatus('REJECTED')}>
        <StatusBadge
          status={'REJECTED'}
          disable={applicantData.status !== 'REJECTED'}
        />
      </div>
    </ApplicantInfoStateWrapper>
  );
};

const ApplicantInfo: React.FC<{
  applicantData: IApplicantTypeWithID;
}> = ({ applicantData }) => {
  function removeHttp(address: string) {
    return address.replace(/^(https?:\/\/)?(www\.)?/, '');
  }

  const uploadDate = new Date(
    applicantData.uploadDate.seconds * 1000,
  ).toString();
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
        <ApplicantInfoLink href={applicantData.link0}>
          {removeHttp(applicantData.link0)}
        </ApplicantInfoLink>
      </ApplicantInfoTextWrapper>
      <ApplicantInfoTextWrapper>
        <ApplicantInfoText>Link2</ApplicantInfoText>
        <ApplicantInfoLink href={applicantData.link1}>
          {removeHttp(applicantData.link1)}
        </ApplicantInfoLink>
      </ApplicantInfoTextWrapper>
      <ApplicantInfoTextWrapper>
        <ApplicantInfoText>추천인</ApplicantInfoText>
        <ApplicantInfoText>
          {applicantData.recommender == '' ? '없음' : applicantData.recommender}
        </ApplicantInfoText>
      </ApplicantInfoTextWrapper>
      <ApplicantInfoTextWrapper>
        <ApplicantInfoText>지원 일자</ApplicantInfoText>
        <ApplicantInfoText>{uploadDate}</ApplicantInfoText>
      </ApplicantInfoTextWrapper>
    </ApplicantInfoInner>
  );
};

export default memo(ApplicantModal);
