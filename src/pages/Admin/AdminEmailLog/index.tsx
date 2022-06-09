import React, { useRef } from 'react';
import { TemplateEmailWrapper, TemplateText } from '../AdminEmail/styled';
import { TextInput } from '../../../components/common/input/TextInput';
import { GDSCButton } from '../../../components/common/Button';
import { TemplateSelectWrapper } from './styled';
import { useFirestoreQuery } from '../../../hooks/useFirebaseQuery';
import { dbService } from '../../../firebase/firebase';
import { EmailLogTypeWithID } from '../../../types/applicant';
import EmailLogBox from '../../../components/admin/EmailLogBox';
import { ContainerInner, LayoutContainer } from '../../../styles/layouts';

const AdminEmailLog: React.FC<{
  template: string;
  setTemplate: (template: string) => void;
}> = ({ template, setTemplate }) => {
  const templateRef = useRef<HTMLInputElement>(null);
  const emailLogRef = dbService.collection('emailLogs');
  const emailLogs = useFirestoreQuery<EmailLogTypeWithID[]>(
    emailLogRef.orderBy('uploadDate', 'desc').limit(500),
  );

  console.log(emailLogs);

  return (
    <ContainerInner>
      <TemplateSelectWrapper>
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
        />
      </TemplateSelectWrapper>
      <EmailLogBox emailLogs={emailLogs} />
    </ContainerInner>
  );
};

export default AdminEmailLog;
