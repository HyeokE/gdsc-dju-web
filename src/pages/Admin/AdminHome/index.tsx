import React from 'react';
import { AdminContainerWrapper } from '../styled';
import {
  collection,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from 'firebase/firestore';
import { db } from '../../../firebase/firebase';

const AdminHome = () => {
  // const startRecruit = async (generation: string) => {
  //   await dbService.collection('recruitLog').doc(generation).set();
  // };
  // const endRecruit = async (generation: string) => {
  //   await dbService.collection('recruitLog').doc(generation).set();
  // };
  const recruitQuery = query(
    collection(db, `recruitLog`),
    where('status', '==', 'OPEN'),
  );
  const recruitLogQuery = query(
    collection(db, `recruitLog`),
    where('status', '==', 'CLOSED'),
  );
  const getRecruitLog = async (generation: string) => {
    const recruit = await getDocs(recruitQuery);
    const result = (await recruit) ?? (await getDocs(recruitLogQuery));
    return result;
  };
  return <AdminContainerWrapper></AdminContainerWrapper>;
};

export default AdminHome;
