import React, { memo, useEffect, useState } from 'react';

import { ErrorBox, StyledInput, StyledInputWrapper } from './styled';
import { FormikErrors, FormikTouched } from 'formik';

export interface Iprops {
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
  onChange?: (e: any) => void;
  type?: string;
  value?: string | null;
  checkError?: (props: boolean) => void;
  disabled?: boolean;
}
const TextInput = (props: Iprops) => {
  const { name, placeholder, onChange, type, disabled, error, touched } = props;
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
        />
      </StyledInputWrapper>
      <ErrorBox>{errorToggle && <>{error}</>}</ErrorBox>
    </>
  );
};

export default memo(TextInput);
