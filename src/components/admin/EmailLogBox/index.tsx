import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { EmailLogTypeWithID } from '../../../types/applicant';
import { uploadDate } from '../../../utils/timeFilter';
import StatusBadge from '../Statusbadge';

interface IEmailLogBoxProps {
  emailLogs: EmailLogTypeWithID[];
}
interface IEmailLogProps {
  emailLog: EmailLogTypeWithID;
  lastDate: string;
  setLastDate?: (date: string) => void;
}

const StyledRowLine = styled.div`
  background: ${({ theme }) => theme.colors.grey400};
  width: 220px;
  height: 1px;
`;
const 구분선 = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  box-sizing: border-box;
  padding: 4px 20px;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.body2};
  color: ${({ theme }) => theme.colors.grey700};
`;
const EmailLogCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  font-size: ${({ theme }) => theme.fontSize.body2};
  color: ${({ theme }) => theme.colors.grey700};
  width: 530px;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 14px 20px;
  box-shadow: 0 2px 12px 0 ${({ theme }) => theme.colors.grey300};
  border-radius: 10px;
`;
const EmailLogText = styled.div<{ email?: boolean }>`
  width: 70px;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  text-overflow: ellipsis;
  font-size: ${({ theme }) => theme.fontSize.body2};
  ${({ email }) =>
    email &&
    css`
      width: 100px;
    `}
`;

const EmailLogSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 600px;
  align-items: center;
  margin: 0 auto;
  gap: 10px;
`;
const EmailLogBox: React.FC<IEmailLogBoxProps> = ({ emailLogs }) => {
  const currentDate = uploadDate(new Date().getTime() / 1000).Y_M_D;
  return (
    <EmailLogSection>
      <구분선>
        <StyledRowLine />
        {currentDate}
        <StyledRowLine />
      </구분선>
      {emailLogs &&
        emailLogs.map((log, index) => {
          const number = index == 0 ? 0 : index - 1;
          const lastDate = uploadDate(
            emailLogs[number].uploadDate.seconds,
          ).Y_M_D;
          return (
            <EmailLog emailLog={log} lastDate={lastDate ?? ''} key={log.id} />
          );
        })}
    </EmailLogSection>
  );
};
const EmailLog: React.FC<IEmailLogProps> = ({
  emailLog,
  lastDate,
  setLastDate,
}) => {
  const date = uploadDate(emailLog.uploadDate.seconds).Y_M_D;

  return (
    <>
      {date !== lastDate && (
        <구분선>
          <StyledRowLine />
          {date}
          <StyledRowLine />
        </구분선>
      )}
      <EmailLogCard key={emailLog.id}>
        <EmailLogText>{emailLog.name}</EmailLogText>
        <EmailLogText email={true}>{emailLog.email}</EmailLogText>
        <EmailLogText>{emailLog.sender}</EmailLogText>
        <EmailLogText>
          {uploadDate(emailLog.uploadDate.seconds).time}
        </EmailLogText>
        <StatusBadge status={emailLog.applicantStatus} />
      </EmailLogCard>
    </>
  );
};

export default EmailLogBox;
