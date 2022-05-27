import { Field } from 'formik';
import styled, { css } from 'styled-components';

export const StyledInput = styled(Field)<{ disabled?: boolean }>`
  padding: 0 18px;
  margin: 2px 0;
  border: 0;
  border-radius: 10px;
  height: 48px;
  font-size: ${(props) => props.theme.fontSize.body1};
  outline: none;
  flex-grow: 1;
  background: none;
  font-weight: 400;
  color: ${(props) => props.theme.colors.grey700};
  &::placeholder {
    color: ${(props) => props.theme.colors.grey400};
    font-weight: 300;
  }
  ${(props) =>
    props.disabled &&
    css`
      background: ${(props) => props.theme.colors.grey100};
      color: ${(props) => props.theme.colors.grey400};
    `}
`;
export const StyledFileInput = styled.div`
  color: ${(props) => props.theme.colors.grey500};
  cursor: pointer;
  overflow: hidden;
  white-space: nowrap;
  flex-grow: 1;
  font-weight: 300;
  font-size: ${(props) => props.theme.fontSize.body1};
  padding: 0 18px;
`;

export const StyledInputWrapper = styled.div<{
  color?: string;
  disabled?: boolean;
  error?: boolean;
}>`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1px auto 0;
  height: 48px;
  background: #fff;
  border: solid 0;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: inset 0 0 0 1px ${(props) => props.theme.colors.grey300};
  cursor: pointer;
  &:hover {
    box-shadow: inset 0 0 0 2px ${(props) => props.theme.colors.tossBlue200};
    ${(props) =>
      props.error &&
      css`
        box-shadow: inset 0 0 0 2px ${props.theme.colors.tossRed};
      `}
  }
  .formInput:focus {
    box-sizing: border-box;
    box-shadow: inset 0 0 0 2px ${(props) => props.theme.colors.tossBlue500};
    ${(props) =>
      props.error &&
      css`
        box-shadow: inset 0 0 0 2px ${props.theme.colors.tossRed}!important;
      `}
  }
  ${(props) =>
    !props.disabled &&
    css`
      &:hover {
        box-shadow: none;
      }
    `}
  ${(props) =>
    props.error &&
    css`
      box-shadow: inset 0 0 0 2px ${props.theme.colors.tossRed};
    `}
  transition: 0.3s;
`;
export const InputImageWrapper = styled.div`
  height: 20px;
  width: 20px;
  margin: 0 -8px 0 18px;
  display: flex;
  align-items: center;
`;
export const ErrorBox = styled.div`
  height: 20px;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.tossRed};
  font-size: ${(props) => props.theme.fontSize.body2};
  padding-left: 5px;
`;
export const StyledDefaultInput = styled.input<{
  color?: string;
  disabled?: boolean;
  error?: boolean;
}>`
  padding: 0 14px;
  margin: 2px 0;
  border: 0;
  border-radius: 10px;
  height: 40px;
  font-size: ${(props) => props.theme.fontSize.body1};
  outline: none;
  flex-grow: 1;
  background: none;
  font-weight: 400;
  color: ${(props) => props.theme.colors.grey700};
  box-sizing: border-box;
  box-shadow: inset 0 0 0 1px ${(props) => props.theme.colors.grey300};
  cursor: pointer;
  &:hover {
    box-shadow: inset 0 0 0 2px
      ${(props) => props.theme.colors.tossBlue200}!important;
    ${(props) =>
      props.error &&
      css`
        box-shadow: inset 0 0 0 2px ${props.theme.colors.tossRed};
      `}
  }
  &:focus {
    box-sizing: border-box;
    box-shadow: inset 0 0 0 2px ${(props) => props.theme.colors.tossBlue500};
    ${(props) =>
      props.error &&
      css`
        box-shadow: inset 0 0 0 2px ${props.theme.colors.tossRed}!important;
      `}
  }
  ${(props) =>
    !props.disabled &&
    css`
      &:hover {
        box-shadow: none;
      }
    `}
  ${(props) =>
    props.error &&
    css`
      box-shadow: inset 0 0 0 2px ${props.theme.colors.tossRed};
    `}
  transition: 0.3s;
`;
