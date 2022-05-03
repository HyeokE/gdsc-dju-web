import React from 'react';
import { StyledButton } from '../../../../components/common/Button/styled';
import { useRecoilState } from 'recoil';
import { recruitmentState } from '../../../../store/recruitHandler';
import { useNavigate } from 'react-router-dom';

const RecruitFaqButton = (props: { name: string }) => {
  const { name } = props;
  const [recruit] = useRecoilState(recruitmentState);
  const keyTyped = name as keyof typeof recruit;
  const navigate = useNavigate();
  return (
    <>
      <StyledButton
        onClick={() => {
          navigate('/faq');
        }}
      >
        자주 하는 질문
      </StyledButton>
      {recruit[`${keyTyped}`] ? (
        <StyledButton
          onClick={() => {
            navigate('/recruit/form/' + keyTyped);
          }}
        >
          지원하기
        </StyledButton>
      ) : (
        <StyledButton disable={!recruit[`${keyTyped}`]}>
          지원기간이 아닙니다.
        </StyledButton>
      )}
    </>
  );
};

export default RecruitFaqButton;
