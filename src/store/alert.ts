import { atom } from 'recoil';

export const ALERT = 'alert';

export const AlertState = {
  alertHandle: false,
  alertMessage: '',
  alertStatus: '',
};
export const alertState = atom<typeof AlertState>({
  key: ALERT,
  default: AlertState,
});
