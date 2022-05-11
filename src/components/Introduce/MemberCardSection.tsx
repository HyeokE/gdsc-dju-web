import React, { lazy, Suspense, useState } from 'react';
import { CardList } from '../../styles/layouts';
import { listAnimate, memberCardAnimate } from '../common/Variants/Variants';
import { memberList } from '../../apis/pageData/MemberList';
import { AnimatePresence, LayoutGroup } from 'framer-motion';
import { MemberCardWrapper } from '../../pages/Introduce/styled';

import MemberCardModal from '../common/Modal/MemberCardModal';
import { memberDataType } from '../../types/member';

const MemberCard = lazy(() =>
  import('../../components/common/card/MemberCard').then((module) => ({
    default: module.default,
  })),
);

const MemberCardSection = () => {
  const [selectedId, setSelectedId] = useState<number | undefined>(undefined);
  const [selectedData, setSelectedData] = useState<memberDataType>({
    memberImg: '',
    nickname: '',
    name: '',
    introduce: '',
    role: '',
  });
  return (
    <LayoutGroup>
      <CardList variants={listAnimate}>
        {memberList.map((memberInfo, id) => (
          <AnimatePresence key={id + 1}>
            <MemberCardWrapper
              variants={memberCardAnimate}
              initial={'start'}
              whileInView={'end'}
              viewport={{ once: true }}
              onClick={() => {
                setSelectedId(id + 1);
                setSelectedData(memberInfo);
              }}
            >
              <Suspense fallback={<>loading</>}>
                <MemberCard {...memberInfo} id={id + 1} />
              </Suspense>
            </MemberCardWrapper>
          </AnimatePresence>
        ))}
      </CardList>
      <AnimatePresence>
        {selectedId && selectedData && (
          <MemberCardModal
            {...selectedData}
            setSelectedId={setSelectedId}
            id={selectedId}
          />
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
};

export default MemberCardSection;
