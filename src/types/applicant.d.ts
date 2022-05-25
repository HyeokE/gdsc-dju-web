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
