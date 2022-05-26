export interface IApplicantType {
  status: statusType;
  email: string;
  fileURL: string;
  link0: string;
  link1: string;
  major: string;
  name: string;
  phoneNumber: string;
  position: string;
  recommender: string;
  studentID: string;
  uploadDate: {
    seconds: number;
    nanoseconds: number;
  };
}
export type statusType = 'DOCS' | 'INTERVIEW' | 'REJECTED' | 'HIRED';
export interface IApplicantTypeWithID extends IApplicantType {
  id: string;
}
export interface IApplicantCountType {
  isDOCS: number;
  isINTERVIEW: number;
  isREJECTED: number;
  isHIRED: number;
}
