import { motion } from 'framer-motion';
import styled from 'styled-components';

export const QuestionWrapper = styled(motion.a)`
  cursor: pointer;
  padding: 24px 10px;
  display: flex;
  background: white;
  color: ${(props) => props.theme.colors.grey700};
  flex-direction: column;
  border-radius: 10px;
  font-size: ${({ theme }) => theme.fontSize.h6};
  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
`;
export const QuestionInner = styled.div`
  font-size: ${({ theme }) => theme.fontSize.h6};
  display: flex;
  align-items: center;
  flex-direction: row;
  @media (max-width: 500px) {
    font-size: ${({ theme }) => theme.fontSize.body1};
  }
`;
export const AnswerWrapper = styled(motion.div)`
  box-sizing: border-box;
  padding: 20px 20px;
  padding-top: 0;
  color: ${({ theme }) => theme.colors.grey800};
`;
export const AnswerText = styled.div`
  font-size: ${({ theme }) => theme.fontSize.body1};
  @media (max-width: 500px) {
    font-size: ${({ theme }) => theme.fontSize.body2};
  }
`;
export const QuestionBr = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.grey200};
`;
export const QuestionMark = styled.div`
  height: 100%;
  font-size: ${({ theme }) => theme.fontSize.h6};
  ::before {
    display: flex;
    height: 100%;
    margin-right: 16px;
    margin-bottom: 2px;
    font-weight: 600;
    color: ${(props) => props.theme.colors.grey700};
    content: 'Q';
  }
`;
