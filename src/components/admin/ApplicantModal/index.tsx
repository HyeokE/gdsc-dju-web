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
import { modalVariants } from '../../common/Variants/modalVariants';
// import { Document, Page, pdfjs } from 'react-pdf';
import StatusBadge from '../Statusbadge';

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
  }, [modal.selectedId]);
  const closeModal = () => {
    setModal({
      ...modal,
      [MODAL_KEY.ADMIN_APPLICANT]: false,
      selectedId: '',
    });
  };
  return (
    <ApplicantModalWrapper>
      <ApplicantModalInner
        variants={modalVariants}
        layoutId={`card-${modal.selectedId}`}
      >
        <ApplicantInfoWrapper>
          {applicantData && <ApplicantInfo applicantData={applicantData} />}
          <ApplicantInfoState id={modal.selectedId} />
        </ApplicantInfoWrapper>
        <ApplicantInfoSection>
          <ApplicantInfoHeader>
            <LeftArrowButton onClick={closeModal} />
            <RightArrowButton onClick={closeModal} />
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
    </ApplicantModalWrapper>
  );
};
const ApplicantInfoState = ({ id }: { id: string }) => {
  const applicantRef = dbService.collection('applicants').doc(id);
  const updateStatus = async (status: string) => {
    await applicantRef.update({
      status: status,
    });
  };
  //
  // const res = cityRef.update({ status: 'DOCS' });
  return (
    <>
      <StatusBadge status={'DOCS'} />
      <StatusBadge status={'INTERVIEW'} />
      <StatusBadge status={'HIRED'} />
      <StatusBadge status={'REJECTED'} />
    </>
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
        <ApplicantInfoText>지원 일자</ApplicantInfoText>
        <ApplicantInfoText>{uploadDate}</ApplicantInfoText>
      </ApplicantInfoTextWrapper>
    </ApplicantInfoInner>
  );
};

export default ApplicantModal;
