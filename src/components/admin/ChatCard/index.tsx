import React from 'react';
import { IApplicantChatType } from '../../../types/applicant';
import { ChatCardInner, ChatText, ChatUser } from './styled';

interface IChatCardProps extends IApplicantChatType {
  adminUser: string;
}

const ChatCard: React.FC<IChatCardProps> = ({
  text,
  createdAt,
  uid,
  displayName,
  isRead,
  adminUser,
}) => {
  console.log(adminUser);
  console.log(uid);
  return (
    <ChatCardInner isUser={adminUser === uid}>
      <ChatUser>{displayName}</ChatUser>
      <ChatText>{text}</ChatText>
      {/*<p>{uid}</p>*/}
      {/*<p>{isRead}</p>*/}
      {/*<p>{createdAt}</p>*/}
    </ChatCardInner>
  );
};

export default ChatCard;
