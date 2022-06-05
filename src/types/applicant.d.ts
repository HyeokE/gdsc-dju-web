import { theme } from '../styles/theme';

export interface IApplicantType {
  status: StatusType;
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
  generation: number;
  uploadDate: {
    seconds: number;
    nanoseconds: number;
  };
}
export type StatusType =
  | 'DOCS'
  | 'INTERVIEW'
  | 'REJECTED_DOCS'
  | 'REJECTED_INTERVIEW'
  | 'HIRED';

export interface IApplicantTypeWithID extends IApplicantType {
  id: string;
}
export interface IApplicantCountType {
  isDOCS: number;
  isINTERVIEW: number;
  isREJECTED_DOCS: number;
  isREJECTED_INTERVIEW: number;
  isHIRED: number;
}
export interface IApplicantChatType {
  text: string;
  createdAt: number;
  id: string;
  uid: string;
  displayName: string;
  isRead: boolean;
}
export type StatusBadgeType = {
  [key in StatusType]: {
    color: keyof typeof theme.colors;
    text: string;
  };
};

export interface EmailLogType {
  email: string;
  name: string;
  applicantID: string;
  applicantStatus: StatusType;
  uploadDate: Date;
}
