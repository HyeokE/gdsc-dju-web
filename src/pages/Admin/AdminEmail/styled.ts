import styled from 'styled-components';

export const CheckboxSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  min-width: 600px;
  box-sizing: border-box;
  width: 100%;
`;
export const CheckboxWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: fit-content;
  margin-bottom: 10px;
  @media (min-width: 1180px) {
    width: 100%;
  }
  @media (min-width: 1760px) {
    width: 50%;
  }
  @media (min-width: 2300px) {
    width: 32%;
  }
`;
export const SelectedBoxSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  flex-direction: column;
  justify-content: space-between;
`;
export const TemplateSelectorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
  justify-content: flex-end;
`;
export const TemplateEmailWrapper = styled.div`
  width: 300px;
`;
export const TemplateText = styled.div`
  font-size: ${({ theme }) => theme.fontSize.h7};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 200px;
`;
export const EmailRightWrapper = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
`;
export const EmailRightInner = styled.div`
  padding: 30px 40px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`;
export const EmailLeftWrapper = styled.div`
  flex: 1;
  align-items: center;
  flex-direction: column;
`;
export const EmailLeftInner = styled.div`
  padding: 30px 20px;
  margin: 0 auto;
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 20px;
`;
export const EmailCategory = styled.div`
  font-size: ${({ theme }) => theme.fontSize.h7};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 50px;
`;
