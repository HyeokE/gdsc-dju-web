import React, { ChangeEvent, forwardRef } from 'react';

import {
  ErrorBox,
  StyledField,
  StyledInput,
  StyledInputWrapper,
} from './styled';
import { FormikErrors, FormikTouched } from 'formik';

export interface TextInputProps {
  name?: string;
  error?:
    | string
    | string[]
    | FormikErrors<any>
    | FormikErrors<any>[]
    | undefined;
  touched?: boolean | FormikTouched<any> | FormikTouched<any>[] | undefined;
  placeholder?: string;
  image?: string;
  file?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  value?: string | null;
  checkError?: (props: boolean) => void;
  disabled?: boolean;
}
const FormikTextInput: React.FC<TextInputProps> = ({
  name,
  placeholder,
  onChange,
  type,
  disabled,
  error,
  touched,
}) => {
  const errorToggle = error != undefined && error != '필수입력란입니다.';

  return (
    <>
      <StyledInputWrapper error={errorToggle} disabled={!disabled}>
        <StyledField
          className={'formInput'}
          name={name}
          type={type}
          onChange={onChange && onChange}
          placeholder={placeholder}
          disabled={disabled}
        />
      </StyledInputWrapper>
      <ErrorBox>{errorToggle && <>{error}</>}</ErrorBox>
    </>
  );
};
const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ name, placeholder, onChange, type, disabled, error, touched }, ref) => {
    const errorToggle = error != undefined && error != '필수입력란입니다.';

    return (
      <>
        <StyledInputWrapper error={errorToggle} disabled={!disabled}>
          <StyledInput
            className={'formInput'}
            name={name}
            type={type}
            onChange={onChange && onChange}
            placeholder={placeholder}
            disabled={disabled}
            ref={ref}
          />
        </StyledInputWrapper>
        <ErrorBox>{errorToggle && <>{error}</>}</ErrorBox>
      </>
    );
  },
);

export { FormikTextInput, TextInput };
