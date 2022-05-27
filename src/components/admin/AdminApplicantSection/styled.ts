import styled from 'styled-components';

export const ApplicantCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 25%;
  margin-bottom: 1%;
  @media (max-width: 2450px) {
    width: 25%;
  }
  @media (max-width: 1950px) {
    width: 33.33%;
  }
  @media (max-width: 1525px) {
    width: 50%;
  }
  @media (max-width: 1100px) {
    width: 100%;
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
