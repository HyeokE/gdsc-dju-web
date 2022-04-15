import React, {forwardRef, ForwardRefRenderFunction, useState} from 'react';
import Folder from '../../../../assets/Folder';
import {
  InputImageWrapper,
  StyledFileInput,
  StyledInputWrapper,
} from '../TextInput/styled';

export interface Iprops {
  defaultPlaceholder: string;
  uploadFiles?: (file: HTMLInputElement) => void;
  errorToggle?: boolean;
  disabled?: boolean;
}

const FileInput = (props: Iprops, ref: React.RefObject<HTMLInputElement>) => {
  const { defaultPlaceholder, uploadFiles, errorToggle, disabled } = props;
  const [placeholder, setPlaceholder] = useState(
    defaultPlaceholder || 'Choose a file',
  );

  return (
    <StyledInputWrapper
      error={errorToggle}
      disabled={!disabled}
      onClick={() => {
        ref.current && ref.current.click();
      }}
    >
      <InputImageWrapper>
        <Folder />
      </InputImageWrapper>
      <StyledFileInput>{placeholder}</StyledFileInput>
      <input
        ref={ref}
        type={'file'}
        style={{ display: 'none' }}
        name={'fileName'}
        onChange={(e) => {
          e.target.files && setPlaceholder(e.target.files[0].name);
        }}
      />
    </StyledInputWrapper>
  );
};

export default forwardRef(FileInput as ForwardRefRenderFunction<HTMLInputElement, Iprops>);
