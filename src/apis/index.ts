// https://firestore.googleapis.com/v1/projects/gdsc-dju/databases/(default)/documents/members?key=AIzaSyDrAEizOXHcCXYrQa96w6TxfddOS2Yb0tU
import axios from 'axios';
import {
  getRecruitmentInfoDataType,
  nickNameDataType,
  onBoardingMember,
  recruitmentInfoDataType,
  UserDataState,
} from './types';
import { OnboardingUserState } from '../store/onboardingUser';
import { memberWarning } from '../types/admin';

export class GDSCApi {
  private API: string;
  private FIREBASE_API: string;
  constructor() {
    this.API = 'https://gdsc-dju.com';
    this.FIREBASE_API =
      'https://firestore.googleapis.com/v1/projects/gdsc-dju/databases/(default)';
  }
  getMemberNickname = () => {
    return axios.get<nickNameDataType>(
      `${this.API}/api/member/onBoarding/nickname`,
    );
  };
  postOnboardingMembers = (payload: onBoardingMember) => {
    return axios.post<onBoardingMember>(
      `${this.API}/api/member/onBoarding/join`,
      payload,
    );
  };
  getRecruitStatus = () => {
    return axios.get<getRecruitmentInfoDataType>(
      `${this.API}/api/support/limit`,
    );
  };
  putRecruitStatus = (payload: recruitmentInfoDataType) => {
    return axios.put<recruitmentInfoDataType>(
      `${this.API}/api/admin/v1/support/limit/update`,
      payload,
    );
  };
  postMemberWarning = (payload: memberWarning) => {
    return axios.post<UserDataState>(
      `${this.API}/api/admin/v1/warning`,
      payload,
    );
  };
  putMemberRole = (payload: memberWarning) => {
    return axios.post<UserDataState>(
      `${this.API}/api/admin/v1/update/role`,
      payload,
    );
  };
  getAdminUser = (id: string | null) => {
    return axios.get(`${this.FIREBASE_API}/documents/adminUsers/${id}`);
  };
}
export default new GDSCApi();
