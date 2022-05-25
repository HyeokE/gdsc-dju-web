import styled from 'styled-components';

export const ApplicantCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 25%;
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
  //row-gap: 10px;
  //column-gap: 30px;
  width: fit-content;
  height: fit-content;
`;
export const ApplicantSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;
