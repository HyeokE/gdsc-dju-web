import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';

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
  width: 100%;
  height: 100%;
  background-image: url(${({ image }) => image});
  -webkit-background-size: cover;
  background-size: cover;
  border-radius: 16px;
  transition: all 0.2s ease-in-out;
  ${({ isClicked }) =>
    isClicked &&
    css`
      -webkit-filter: blur(10px) brightness(0.7);
    `}
`;
const Position = styled(motion.p)`
  height: 24px;
  margin: 0 0 8px 0;
  overflow-y: hidden;
  font-size: ${({ theme }) => theme.fontSize.body2};
  line-height: 24px;
  color: ${({ theme }) => theme.colors.tossBlue};
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
  color: ${({ theme }) => theme.colors.tossBlue200};
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

const MemberCard = (props: { image: string; id: number }) => {
  const { image, id } = props;
  const [isClicked, setIsClicked] = useState(false);
  return (
    <AnimatePresence>
      <AnimateSharedLayout>
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
              <Nickname layoutId={`member-nickname-${id}`}>Jason</Nickname>
              <Name layoutId={`member-name-${id}`}>정준혁</Name>
              <Role layoutId={`member-role-${id}`} variants={memberCardAnimate}>
                Lead
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
                Frontend Lead
              </Position>
              <Nickname layoutId={`member-nickname-${id}`}>Jason</Nickname>
              <Name layoutId={`member-name-${id}`}>정준혁</Name>
              <CardText
                layoutId={`member-text-${id}`}
                variants={memberCardAnimate}
              >
                안녕안녕안녕안녕 안녕안녕안녕안녕 안녕안녕안녕안녕
                안녕안녕안녕안녕
              </CardText>
            </MemberCardInner>
          )}
        </MemberCardContainer>
      </AnimateSharedLayout>
    </AnimatePresence>
  );
};

export default MemberCard;
