import { atom } from 'recoil';

export const LocalUser = 'localUser';
export const LocalUserState = {
  uid: '',
  name: '',
  nickname: '',
  phoneNumber: '',
};
export const localUserState = atom<typeof LocalUserState>({
  key: LocalUser,
  default: LocalUserState,
});
