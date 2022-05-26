import React, { useEffect, useState } from 'react';
import {
  ApplicantInfoHeader,
  ApplicantInfoInner,
  ApplicantInfoLink,
  ApplicantInfoSection,
  ApplicantInfoText,
  ApplicantInfoTextWrapper,
  ApplicantInfoWrapper,
  ApplicantModalInner,
  ApplicantModalWrapper,
  ApplicantName,
  ApplicantNameWrapper,
} from './styled';
import { dbService } from '../../../firebase/firebase';
import { IApplicantTypeWithID } from '../../../types/applicant';
import { useRecoilState } from 'recoil';
import { MODAL_KEY, modalState } from '../../../store/modal';
import {
  ClearButton,
  LeftArrowButton,
  RightArrowButton,
} from '../../common/ModalButton';

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
    applicantHandler('ubzYtfm60pSsH14p9BZx');
    // applicantHandler(modal.selectedId);
  }, []);
  const closeModal = () => {
    setModal({
      ...modal,
      [MODAL_KEY.ADMIN_APPLICANT]: false,
      selectedId: '',
    });
  };
  return (
    <ApplicantModalWrapper>
      <ApplicantModalInner>
        <ApplicantInfoWrapper>
          {applicantData && <ApplicantInfo applicantData={applicantData} />}
        </ApplicantInfoWrapper>
        <ApplicantInfoSection>
          <ApplicantInfoHeader>
            <LeftArrowButton onClick={closeModal} />
            <RightArrowButton onClick={closeModal} />
            <ClearButton onClick={closeModal} />
          </ApplicantInfoHeader>
        </ApplicantInfoSection>
      </ApplicantModalInner>
    </ApplicantModalWrapper>
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
    </ApplicantInfoInner>
  );
};

export default ApplicantModal;
