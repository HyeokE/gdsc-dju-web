import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import { IMemberCardType } from '../../../types/member';

const MemberCardContainer = styled(motion.div)`
  position: relative;
  width: 250px;
  height: 300px;
`;
const MemberCardInner = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 30px;
  box-sizing: border-box;
  overflow: hidden;
  cursor: pointer;
  border-radius: 16px;
`;
const MemberCardImage = styled(motion.div)<{
  image: string;
  isClicked: boolean;
}>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 250px;
  height: 300px;
  background-image: url(${({ image }) => image});
  -webkit-background-size: cover;
  background-size: cover;
  border-radius: 16px;
  transition: all 0.2s ease-in-out;

  ${({ isClicked }) =>
    isClicked &&
    css`
      -webkit-filter: blur(10px) brightness(0.6);
    `}
`;
const Position = styled(motion.p)`
  height: 24px;
  margin: 0 0 8px 0;
  overflow-y: hidden;
  font-size: ${({ theme }) => theme.fontSize.body2};
  line-height: 24px;
  color: ${({ theme }) => theme.colors.googleYellow};
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
  color: ${({ theme }) => theme.colors.blue400};
`;
const CardText = styled(motion.div)`
  margin-top: 8px;
  font-size: ${({ theme }) => theme.fontSize.body1};
  color: ${({ theme }) => theme.colors.white};
  display: block;
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
              <MemberCardImage
                image={image}
                isClicked={false}
                layoutId={`member-background-${id}`}
              />
              <Nickname layoutId={`member-nickname-${id}`}>{nickname}</Nickname>
              <Name layoutId={`member-name-${id}`}>{name}</Name>
              <Role layoutId={`member-role-${id}`} variants={memberCardAnimate}>
                {role}
              </Role>
            </MemberCardInner>
          ) : (
            <MemberCardInner layoutId={`member-card-inner-${id}`}>
              <MemberCardImage
                image={image}
                isClicked={isClicked}
                layoutId={`member-background-${id}`}
              />
              <Position
                layoutId={`member-position-${id}`}
                variants={memberCardAnimate}
              >
                {position}
              </Position>
              <Nickname layoutId={`member-nickname-${id}`}>{nickname}</Nickname>
              <Name layoutId={`member-name-${id}`}>{name}</Name>
              <CardText
                layoutId={`member-text-${id}`}
                variants={memberCardAnimate}
              >
                {cardText}
              </CardText>
            </MemberCardInner>
          )}
        </MemberCardContainer>
      </LayoutGroup>
    </AnimatePresence>
  );
};

export default MemberCard;
