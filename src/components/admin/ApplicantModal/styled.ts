import styled from 'styled-components';

export const ApplicantModalWrapper = styled.div`
  z-index: 1000;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.7);
`;
export const ApplicantModalInner = styled.div`
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;

  width: 1300px;
  height: 800px;
  border-radius: 20px;
`;
export const ApplicantInfoWrapper = styled.div`
  background: ${({ theme }) => theme.colors.grey100};
  height: 100%;
  width: 280px;
  padding: 10px 10px;
  box-sizing: border-box;
  border-radius: 20px 0 0 20px;
`;
export const ApplicantInfoInner = styled.div`
  padding: 20px 18px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 14px;
  border: 1px solid ${({ theme }) => theme.colors.grey300};
  border-radius: 14px;
  justify-content: flex-start;
  background: ${({ theme }) => theme.colors.white};
`;
export const ApplicantNameWrapper = styled.div`
  width: 100%;
`;
export const ApplicantName = styled.p`
  font-size: ${({ theme }) => theme.fontSize.body1};
  color: ${({ theme }) => theme.colors.grey900};
  font-weight: bold;
`;
export const ApplicantInfoTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const ApplicantInfoText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.body3};
  color: ${({ theme }) => theme.colors.grey900};
  min-width: 60px;
`;
