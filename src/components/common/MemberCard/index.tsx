import React, { useState } from 'react';
import { theme } from '../../../styles/theme';
import styled, { css } from 'styled-components';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import { IMemberCardType } from '../../../types/member';
import { positionColorHandler } from '../../../utils/positionColorHandler';
import { colors } from '../../../styles/colors';

const MemberCardContainer = styled(motion.div)`
  position: relative;
  width: 250px;
  height: 300px;
  border-radius: 16px;
  overflow: hidden;
`;
const MemberCardInner = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const MemberCardImage = styled(motion.img)`
  position: absolute;
  z-index: -1;
  height: 300px;
  background-position-x: 50%;
  background-position-y: 50%;
`;
const Position = styled(motion.p)<{ positionColor?: string }>`
  height: 24px;
  margin: 0 0 8px 0;
  overflow-y: hidden;
  font-size: ${({ theme }) => theme.fontSize.body2};
  line-height: 24px;
  color: ${({ positionColor }) => positionColor};
`;
const Nickname = styled(motion.p)`
  height: 24px;
  margin: 0 0 8px 0;
  overflow-y: hidden;
  font-size: ${({ theme }) => theme.fontSize.h5};
  line-height: 24px;
  color: ${({ theme }) => theme.colors.white};
`;
const Name = styled(motion.p)`
  height: 24px;
  overflow-y: hidden;
  font-size: ${({ theme }) => theme.fontSize.body1};
  line-height: 24px;
  color: ${({ theme }) => theme.colors.white};
`;
const Role = styled(motion.p)`
  height: 24px;
  margin: 0 0 8px 0;
  overflow-y: hidden;
  font-size: ${({ theme }) => theme.fontSize.body2};
  line-height: 24px;
  color: ${({ theme }) => theme.colors.tossBlue};
`;
const CardText = styled(motion.div)`
  margin-top: 8px;
  font-size: ${({ theme }) => theme.fontSize.body1};
  color: ${({ theme }) => theme.colors.white};
  display: block;
`;
const CardTextWrapper = styled(motion.div)<{ isClicked: boolean }>`
  position: absolute;
  padding: 30px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 50%,
    rgba(0, 0, 0, 0.6) 100%
  );
  ${({ isClicked }) =>
    isClicked &&
    css`
      background: rgba(0, 0, 0, 0.4);
      backdrop-filter: blur(2px);
    `}
`;
const memberCardAnimate = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const MemberCard: React.FC<IMemberCardType> = ({
  image,
  position,
  id,
  cardText,
  role,
  nickname,
  name,
}) => {
  const [isClicked, setIsClicked] = useState(false);
  console.log(positionColorHandler('UX/UI Designer'));
  return (
    <AnimatePresence>
      <LayoutGroup>
        <MemberCardContainer
          onClick={() => setIsClicked(!isClicked)}
          variants={memberCardAnimate}
          initial="hidden"
          animate={'visible'}
          exit="exit"
        >
          {!isClicked ? (
            <MemberCardInner layoutId={`member-card-inner-${id}`}>
              <CardTextWrapper isClicked={isClicked}>
                <Nickname layoutId={`member-nickname-${id}`}>
                  {nickname}
                </Nickname>
                <Name layoutId={`member-name-${id}`}>{name}</Name>
                <Role
                  layoutId={`member-role-${id}`}
                  variants={memberCardAnimate}
                >
                  {role}
                </Role>
              </CardTextWrapper>
              <MemberCardImage
                src={image}
                layoutId={`member-background-${id}`}
              />
            </MemberCardInner>
          ) : (
            <MemberCardInner layoutId={`member-card-inner-${id}`}>
              <CardTextWrapper isClicked={isClicked}>
                <Position
                  layoutId={`member-position-${id}`}
                  variants={memberCardAnimate}
                  positionColor={positionColorHandler(position)}
                >
                  {position}
                </Position>
                <Nickname layoutId={`member-nickname-${id}`}>
                  {nickname}
                </Nickname>
                <Name layoutId={`member-name-${id}`}>{name}</Name>
                <CardText
                  layoutId={`member-text-${id}`}
                  variants={memberCardAnimate}
                >
                  {cardText}
                </CardText>
              </CardTextWrapper>
              <MemberCardImage
                src={image}
                layoutId={`member-background-${id}`}
              />
            </MemberCardInner>
          )}
        </MemberCardContainer>
      </LayoutGroup>
    </AnimatePresence>
  );
};

export default MemberCard;
