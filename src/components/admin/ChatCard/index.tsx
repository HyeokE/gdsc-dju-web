import React from 'react';
import { IApplicantChatType } from '../../../types/applicant';
import { ChatCardWrapper, ChatDate, ChatText, ChatUser } from './styled';

const ChatCard: React.FC<IApplicantChatType> = ({
  text,
  createdAt,
  uid,
  displayName,
  isRead,
}) => {
  return (
    <ChatCardWrapper>
      <ChatUser>{displayName}</ChatUser>
      <ChatText>{text}</ChatText>
      {/*<p>{uid}</p>*/}
      {/*<p>{isRead}</p>*/}
      {/*<p>{createdAt}</p>*/}
    </ChatCardWrapper>
  );
};

export default ChatCard;
