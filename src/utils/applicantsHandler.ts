import {
  IApplicantType,
  IApplicantTypeWithID,
  StatusType,
} from '../types/applicant';
import { dbService } from '../firebase/firebase';

export const applicantFilterByStatus = (
  filteredApplicants: IApplicantTypeWithID[],
) => {
  const DOCS = filteredApplicants.filter((data) => data.status === 'DOCS');
  const INTERVIEW = filteredApplicants.filter(
    (data) => data.status === 'INTERVIEW',
  );
  const REJECTED_DOCS = filteredApplicants.filter(
    (data) => data.status === 'REJECTED_DOCS',
  );
  const REJECTED_INTERVIEW = filteredApplicants.filter(
    (data) => data.status === 'REJECTED_INTERVIEW',
  );
  const HIRED = filteredApplicants.filter((data) => data.status === 'HIRED');
  return {
    DOCS: DOCS,
    INTERVIEW: INTERVIEW,
    REJECTED_DOCS: REJECTED_DOCS,
    REJECTED_INTERVIEW: REJECTED_INTERVIEW,
    HIRED: HIRED,
  };
};
export const getApplicants = async (status: StatusType | null) => {
  const res = status
    ? await dbService
        .collection('applicants')
        .where('status', '==', status)
        .get()
    : await dbService
        .collection('applicants')
        .orderBy('uploadDate', 'desc')
        .get();
  const applicantsList = res.docs.map((doc) => {
    return { id: doc.id, ...(doc.data() as IApplicantType) };
  });
  return applicantsList;
};

// export const applicantFilterByStatus = (
//   filteredApplicants: IApplicantTypeWithID[],
//   status: StatusType,
// ) => filteredApplicants.filter((data) => data.status === status);
