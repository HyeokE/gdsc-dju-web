import React, { useRef } from 'react';
import { TemplateEmailWrapper, TemplateText } from '../AdminEmail/styled';
import { TextInput } from '../../../components/common/input/TextInput';
import { GDSCButton } from '../../../components/common/Button';

const AdminEmailLog: React.FC<{
  template: string;
  setTemplate: (template: string) => void;
}> = ({ template, setTemplate }) => {
  const templateRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      <TemplateText>
        {template !== '템플릿이 없어요 :(' && '선택한 템플릿 '}
        {template}
      </TemplateText>
      <TemplateEmailWrapper>
        <TextInput ref={templateRef} placeholder={'템플릿을 입력해주세요.'} />
      </TemplateEmailWrapper>
      <GDSCButton
        color={'googleBlue'}
        text={'템플릿 선택'}
        onClick={() => setTemplate(templateRef.current?.value ?? '')}
        type={'button'}
      />
    </div>
  );
};

export default AdminEmailLog;
