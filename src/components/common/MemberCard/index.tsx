import React, { memo, useState } from 'react';
import styled, { css } from 'styled-components';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import { IMemberCardType } from '../../../types/member';
import { positionColorHandler } from '../../../utils/positionColorHandler';

const MemberCardContainer = styled(motion.div)<{ isSquare: boolean }>`
  position: relative;
  width: 250px;
  height: 300px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 0 5px ${({ theme }) => theme.colors.grey600};
  ${({ isSquare }) =>
    isSquare &&
    css`
      height: 250px;
    `}
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
  margin: 0 0 8px 0;
  overflow-y: hidden;
  font-size: ${({ theme }) => theme.fontSize.h5};
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
const CardTextWrapper = styled(motion.div)<{ isClicked?: boolean }>`
  position: absolute;
  padding: 30px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  ${({ isClicked }) =>
    isClicked
      ? css`
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(2px);
        `
      : css`
          background: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0) 40%,
            rgba(0, 0, 0, 0.5) 100%
          );
          transition: background 0.2s ease-in-out;
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
interface IMemberCardProps {
  member: IMemberCardType;
  isSquare?: boolean;
}

const MemberCard: React.FC<IMemberCardProps> = ({
  member,
  isSquare = false,
}) => {
  const { name, nickname, role, image, position, text } = member;
  const [isClicked, setIsClicked] = useState(false);
  return (
    <AnimatePresence>
      <LayoutGroup>
        <MemberCardContainer
          onClick={() => setIsClicked(!isClicked)}
          variants={memberCardAnimate}
          initial="hidden"
          animate={'visible'}
          exit="exit"
          isSquare={isSquare}
        >
          <MemberCardInner layoutId={`member-card-inner-${nickname}`}>
            <CardTextWrapper isClicked={isClicked}>
              {!isClicked ? (
                <>
                  <Nickname layoutId={`member-nickname-${nickname}`}>
                    {nickname}
                  </Nickname>
                  <Name layoutId={`member-name-${nickname}`}>{name}</Name>
                  <Role
                    layoutId={`member-role-${nickname}`}
                    variants={memberCardAnimate}
                  >
                    {role}
                  </Role>
                </>
              ) : (
                <>
                  <Position
                    layoutId={`member-position-${nickname}`}
                    variants={memberCardAnimate}
                    positionColor={positionColorHandler(position)}
                  >
                    {position}
                  </Position>
                  <Nickname layoutId={`member-nickname-${nickname}`}>
                    {nickname}
                  </Nickname>
                  <Name layoutId={`member-name-${nickname}`}>{name}</Name>
                  <CardText
                    layoutId={`member-text-${nickname}`}
                    variants={memberCardAnimate}
                  >
                    {text}
                  </CardText>
                </>
              )}
            </CardTextWrapper>
            <MemberCardImage
              src={image}
              layoutId={`member-background-${nickname}`}
            />
          </MemberCardInner>
        </MemberCardContainer>
      </LayoutGroup>
    </AnimatePresence>
  );
};

export default memo(MemberCard);
