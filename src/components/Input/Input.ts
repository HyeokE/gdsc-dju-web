import styled from 'styled-components';

export const StyledInput = styled.input`
  display: flex;
  box-sizing: border-box;
  border-width: 2px;
  border-color: #e5e8eb;
  border-radius: 15px;
  width: 100%;
  height: 50px;
  border-style: solid;
  padding: 0px 20px;
  font-size: 20px;
  @media (max-width: 500px) {
    font-size: 17px;
  }
  @media (max-width: 320px) {
    font-size: 15px;
  }
`;
