export interface IApplicantType {
  status: 'DOCS' | 'INTERVIEW' | 'REJECTED' | 'HIRED';
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
  uploadDate: string;
}
export interface IApplicantTypeWithID extends IApplicantType {
  id: string;
}
export interface IApplicantCountType {
  isDOCS: number;
  isINTERVIEW: number;
  isREJECTED: number;
  isHIRED: number;
}
