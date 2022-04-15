import React, { useState } from 'react';
import { Title } from '../../components/common/Title/title';
import { Banner } from '../../assets/Banner/Banner';
import YellowBanner from '../../assets/Banner/YellowBanner.png';
import {
  BannerWrapper,
  ContainerInner,
  LayoutContainer,
  TopMargin,
} from '../../styles/layouts';

import {
  AnswerText,
  AnswerWrapper,
  QuestionBr,
  QuestionInner,
  QuestionMark,
  QuestionWrapper,
} from './styled';
import { FaqData } from '../../apis/pageData/faq';
import { QuestionCategoryAnimate } from '../../components/common/Variants/Variants';
import { AnimatePresence, motion } from 'framer-motion';

const Faq = () => {
  const [selected, setSelected] = useState<number | null>(null);
  return (
    <>
      <BannerWrapper>
        <Banner src={YellowBanner} />
      </BannerWrapper>
      <LayoutContainer>
        <ContainerInner>
          <TopMargin />
          <Title>자주 묻는 질문</Title>
          <TopMargin />
          <AnimatePresence>
            {FaqData.map((data, id) => (
              <motion.div key={id}>
                <QuestionWrapper
                  variants={QuestionCategoryAnimate}
                  initial={'unHover'}
                  animate={selected === id ? 'hovered' : 'unHover'}
                  onClick={() => {
                    setSelected(id);
                  }}
                >
                  <QuestionInner>
                    <QuestionMark />
                    {data.question}
                  </QuestionInner>
                </QuestionWrapper>

                {selected === id && (
                  <AnswerWrapper
                    exit={{ opacity: 0, transition: { duration: 0.3 } }}
                    animate={{ opacity: 1, transition: { duration: 0.3 } }}
                    initial={{ opacity: 0 }}
                  >
                    {data.answer.split('\n').map((text, id) => (
                      <AnswerText key={id}>{text}</AnswerText>
                    ))}
                  </AnswerWrapper>
                )}
                <QuestionBr />
              </motion.div>
            ))}
          </AnimatePresence>
          <TopMargin />
        </ContainerInner>
      </LayoutContainer>
    </>
  );
};
export default Faq;
