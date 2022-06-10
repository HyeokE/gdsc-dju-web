import React from 'react';
import { AdminContainerWrapper } from '../styled';
import { dbService } from '../../../firebase/firebase';

const AdminHome = () => {
  // const startRecruit = async (generation: string) => {
  //   await dbService.collection('recruitLog').doc(generation).set();
  // };
  // const endRecruit = async (generation: string) => {
  //   await dbService.collection('recruitLog').doc(generation).set();
  // };
  const getRecruitLog = async (generation: string) => {
    const recruit = dbService
      .collection('recruitLog')
      .where('status', '==', 'OPEN')
      .get();
    const result =
      (await recruit) ??
      (await dbService
        .collection('recruitLog')
        .where('status', '==', 'CLOSED')
        .get());
    return result;
  };
  return <AdminContainerWrapper></AdminContainerWrapper>;
};

export default AdminHome;
