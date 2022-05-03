// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import { firebaseKey as firebaseConfig } from './firebase.config';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import Timestamp = firebase.firestore.Timestamp;

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
export const firebaseInstance = firebase;
export const dbService = firebase.firestore();
export const authService = firebase.auth();
export const getDbTime = () => console.log(Timestamp.now().seconds * 1000);
