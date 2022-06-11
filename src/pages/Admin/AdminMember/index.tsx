import React, { useLayoutEffect, useState } from 'react';

import {
  MemberPageWrapper,
  MotionSelector,
  StyledColumn,
  StyledLargeColumn,
  StyledMobileTableCategoryWrapper,
  StyledMobileTableWrapper,
  StyledSmallColumn,
  StyledTableCategoryWrapper,
  StyledTableWrapper,
} from './styled';
import { useRecoilState } from 'recoil';
import './MemberPage.css';
import { UserDataState } from '../../../apis/types';
import { MODAL_KEY, modalState } from '../../../store/modal';
import { db } from '../../../firebase/firebase';

import { MainText, Title } from '../../../components/common/Title/title';
import {
  listAnimate,
  listItemAnimate,
} from '../../../components/common/Variants/Variants';
import {
  ContainerInner,
  LayoutContainer,
  TopMargin,
} from '../../../styles/layouts';
import { collection, getDocs } from 'firebase/firestore';

const AdminMember = () => {
  const [memberData, setMemberData] = useState<UserDataState[]>([]);
  const [selectMember, setSelectMember] = useState<UserDataState>();
  const [modal, setModal] = useRecoilState(modalState);

  const memberSort = (
    memberData: UserDataState[],
    setMemberData: (data: UserDataState[]) => void,
    id: string,
  ) => {
    console.log(memberData);
    switch (id) {
      case 'warning':
        setMemberData([
          ...memberData.sort((a: UserDataState, b: any) =>
            a.warning > b.warning ? 1 : -1,
          ),
        ]);
        return [];
      case 'name':
        setMemberData([
          ...memberData.sort((a: any, b: any) => (a.name > b.name ? 1 : -1)),
        ]);
        return [];
      case 'nickName':
        setMemberData([
          ...memberData.sort((a: any, b: any) =>
            a.nickName > b.nickName ? 1 : -1,
          ),
        ]);
        return [];
      case 'email':
        setMemberData([
          ...memberData.sort((a: any, b: any) => (a.email > b.email ? 1 : -1)),
        ]);
        return [];
      case 'position':
        setMemberData([
          ...memberData.sort((a, b) => (a.position > b.position ? 1 : -1)),
        ]);
        return [];
      default:
        setMemberData([
          ...memberData.sort((a: any, b: any) =>
            a.nickName > b.nickName ? 1 : -1,
          ),
        ]);
        return [];
    }
  };

  const memberSortHandler = (id: string) => {
    memberSort(memberData, setMemberData, id);
  };

  const getMemberList = async () => {
    const memberRef = await getDocs(collection(db, 'members'));

    try {
      const memberList = memberRef.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as UserDataState),
      }));
      setMemberData(memberList);
    } catch (e) {
      console.log(e);
    }
  };
  useLayoutEffect(() => {
    getMemberList();
  }, []);

  return (
    <>
      {memberData.length > 0 && (
        <>
          <LayoutContainer>
            <ContainerInner>
              <Title>Members</Title>
              <TopMargin />
              <div>
                <MainText>Total • {memberData.length}</MainText>
              </div>
              <MemberPageWrapper>
                <StyledTableCategoryWrapper>
                  <StyledSmallColumn
                    id={'name'}
                    onClick={() => memberSortHandler('name')}
                  >
                    name
                  </StyledSmallColumn>
                  <StyledColumn
                    id={'nickname'}
                    onClick={() => memberSortHandler('nickName')}
                  >
                    nickname
                  </StyledColumn>
                  <StyledLargeColumn onClick={() => memberSortHandler('email')}>
                    email
                  </StyledLargeColumn>
                  <StyledSmallColumn
                    onClick={() => memberSortHandler('position ')}
                  >
                    position
                  </StyledSmallColumn>
                  <StyledSmallColumn
                    onClick={() => memberSortHandler('warning')}
                  >
                    warning
                  </StyledSmallColumn>
                </StyledTableCategoryWrapper>
                <MotionSelector
                  variants={listAnimate}
                  initial={'start'}
                  animate={'end'}
                >
                  {memberData.map((data: any, id) => (
                    <StyledTableWrapper
                      variants={listItemAnimate}
                      whileHover={{
                        backgroundColor: '#efefef',
                        color: '#3886f6',
                      }}
                      key={id}
                      className={
                        (data?.warning as number) == 0
                          ? 'count0'
                          : (data?.warning as number) == 1
                          ? 'count1'
                          : (data?.warning as number) == 2
                          ? 'count2'
                          : (data?.warning as number) < 3 &&
                            (data?.warning as number) > 2
                          ? 'last'
                          : (data?.warning as number) == 3
                          ? 'count3'
                          : ''
                      }
                      onClick={() => {
                        setSelectMember(data);
                        setModal({
                          ...modal,
                          [MODAL_KEY.ADMIN_EDIT_MEMBER]: true,
                        });
                      }}
                    >
                      <StyledSmallColumn>{data.name}</StyledSmallColumn>
                      <StyledColumn>{data.nickName}</StyledColumn>
                      <StyledLargeColumn>{data.email}</StyledLargeColumn>
                      <StyledSmallColumn>{data.position}</StyledSmallColumn>
                      <StyledSmallColumn>{data.warning}</StyledSmallColumn>
                    </StyledTableWrapper>
                  ))}
                </MotionSelector>
                <StyledMobileTableCategoryWrapper>
                  <StyledColumn onClick={() => memberSortHandler('nickName')}>
                    Nickname
                  </StyledColumn>
                  <StyledSmallColumn onClick={() => memberSortHandler('name')}>
                    Name
                  </StyledSmallColumn>
                  <StyledSmallColumn
                    onClick={() => memberSortHandler('position')}
                  >
                    Position
                  </StyledSmallColumn>
                  <StyledSmallColumn
                    onClick={() => memberSortHandler('warning')}
                  >
                    Warn
                  </StyledSmallColumn>
                </StyledMobileTableCategoryWrapper>
                <MotionSelector
                  variants={listAnimate}
                  initial="start"
                  animate="end"
                >
                  {memberData?.map((data: any, id) => (
                    <StyledMobileTableWrapper
                      variants={listItemAnimate}
                      whileHover={{ backgroundColor: '#f2f4f6' }}
                      key={id}
                      className={
                        (data?.warning as number) == 0
                          ? 'count0'
                          : (data?.warning as number) == 1
                          ? 'count1'
                          : (data?.warning as number) == 2
                          ? 'count2'
                          : (data?.warning as number) == 3
                          ? 'count3'
                          : 'none'
                      }
                      onClick={() => {
                        setSelectMember(data);
                        setModal({
                          ...modal,
                          [MODAL_KEY.ADMIN_EDIT_MEMBER]: true,
                        });
                      }}
                    >
                      <StyledColumn>{data.nickName}</StyledColumn>
                      <StyledSmallColumn>{data.name}</StyledSmallColumn>
                      <StyledSmallColumn>{data.position}</StyledSmallColumn>
                      <StyledSmallColumn>{data.warning}</StyledSmallColumn>
                    </StyledMobileTableWrapper>
                  ))}
                  <TopMargin />
                </MotionSelector>
              </MemberPageWrapper>
            </ContainerInner>
          </LayoutContainer>
        </>
      )}
    </>
  );
};

export default AdminMember;
