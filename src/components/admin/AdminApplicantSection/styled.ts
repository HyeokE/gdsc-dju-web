import styled from 'styled-components';

export const ApplicantCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  margin-bottom: 1%;
  @media (max-width: 1950px) {
    width: 33.33%;
  }
  @media (max-width: 1525px) {
    width: 50%;
  }
`;

export const ApplicantCardSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;
export const ApplicantSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;
