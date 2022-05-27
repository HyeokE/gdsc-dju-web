import React, {
  forwardRef,
  HTMLProps,
  PropsWithChildren,
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { dbService } from '../../../firebase/firebase';
import { useFirestoreQuery } from '../../../hooks/useFirebaseQuery';
import { useRecoilValue } from 'recoil';
import { adminUserState } from '../../../store/localUser';
import { IApplicantChatType } from '../../../types/applicant';
import ChatCard from '../ChatCard';
import {
  ApplicantChatBottomBar,
  ApplicantChatInput,
  ApplicantChatList,
  ApplicantChatSectionWrapper,
  ApplicantChatSendButton,
} from './styled';

interface IApplicantChatProps {
  newMessages: IApplicantChatType[];
}
const ApplicantChat = forwardRef<
  HTMLDivElement,
  PropsWithChildren<IApplicantChatProps>
>((props, ref) => {
  const { newMessages } = props;
  const reversedMessages = [...newMessages].reverse();

  return (
    <ApplicantChatList>
      {reversedMessages.map((message) => (
        <div ref={ref} key={message.id}>
          <ChatCard {...message} />
        </div>
      ))}
    </ApplicantChatList>
  );
});
ApplicantChat.displayName = 'ApplicantChat';

interface IApplicantChatSectionProps {
  applicantId: string;
}

const ApplicantChatSection: React.FC<IApplicantChatSectionProps> = ({
  applicantId,
}) => {
  const [newMessage, setNewMessage] = useState('');
  const chatSectionRef = useRef<HTMLDivElement>(null);
  const adminUser = useRecoilValue(adminUserState);
  const chatRef = dbService.collection(`chats-${applicantId}`);

  const newMessages = useFirestoreQuery(
    chatRef.orderBy('createdAt', 'desc').limit(1000),
  );

  const newMessageHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setNewMessage(e.target.value);
    },
    [],
  );
  const handleOnSubmit = async () => {
    // 입력한 채팅 공백 제거
    const trimmedMessage = newMessage.trim();
    if (trimmedMessage) {
      // Add new message in Firestore
      chatRef.add({
        text: trimmedMessage,
        createdAt: Date.now(),
        uid: adminUser.uid,
        displayName: adminUser.nickname,
        isRead: false,
      });

      // Clear input field
      setNewMessage('');
      // Scroll down to the bottom of the list
    }
  };

  const handleOnKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleOnSubmit();
    }
  };
  useEffect(() => {
    chatSectionRef.current?.scrollIntoView({
      behavior: 'smooth',
    });
  }, [newMessages]);
  return (
    <ApplicantChatSectionWrapper>
      {chatSectionRef && newMessages && (
        <ApplicantChat
          ref={chatSectionRef}
          newMessages={newMessages as IApplicantChatType[]}
        />
      )}
      <ApplicantChatBottomBar>
        <ApplicantChatInput
          onChange={newMessageHandler}
          value={newMessage}
          onKeyPress={handleOnKeyPress}
        />
        <ApplicantChatSendButton onClick={handleOnSubmit}>
          전송
        </ApplicantChatSendButton>
      </ApplicantChatBottomBar>
    </ApplicantChatSectionWrapper>
  );
};

export default ApplicantChatSection;
