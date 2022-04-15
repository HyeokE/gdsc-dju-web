import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

export const firebaseKey = {
  apiKey: 'AIzaSyDrAEizOXHcCXYrQa96w6TxfddOS2Yb0tU',
  authDomain: 'gdsc-dju.firebaseapp.com',
  projectId: 'gdsc-dju',
  storageBucket: 'gdsc-dju.appspot.com',
  messagingSenderId: '487063212251',
  appId: '1:487063212251:web:82d233e5e10f2b0aca3cfe',
  measurementId: 'G-3B40W72HNQ',
};
const app = initializeApp(firebaseKey);

const storage = getStorage(app);

export { storage, app };
