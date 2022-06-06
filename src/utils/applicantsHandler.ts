import { IApplicantTypeWithID, StatusType } from '../types/applicant';

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
// export const applicantFilterByStatus = (
//   filteredApplicants: IApplicantTypeWithID[],
//   status: StatusType,
// ) => filteredApplicants.filter((data) => data.status === status);
