import React, {
  forwardRef,
  HTMLProps,
  PropsWithChildren,
  RefObject,
  useCallback,
  useRef,
  useState,
} from 'react';
import { dbService } from '../../../firebase/firebase';
import { useFirestoreQuery } from '../../../hooks/useFirebaseQuery';
import { useRecoilValue } from 'recoil';
import { adminUserState } from '../../../store/localUser';
import { IApplicantChatType } from '../../../types/applicant';

interface IApplicantChatProps {
  newMessages: IApplicantChatType[];
}
const ApplicantChat = forwardRef<
  HTMLDivElement,
  PropsWithChildren<IApplicantChatProps>
>((props, ref) => {
  return <div ref={ref as RefObject<HTMLDivElement>}>asds</div>;
});
ApplicantChat.displayName = 'ApplicantChat';

interface IApplicantChatSectionProps {
  applicantId: string;
}

const ApplicantChatSection: React.FC<IApplicantChatSectionProps> = ({
  applicantId,
}) => {
  const chatRef = dbService.collection(`chats-${applicantId}`);
  const chatSectionRef = useRef<HTMLDivElement>(null);
  const newMessages = useFirestoreQuery(
    chatRef.orderBy('createdAt', 'desc').limit(1000),
  );
  console.log(newMessages);
  const [newMessage, setNewMessage] = useState('');
  const adminUser = useRecoilValue(adminUserState);

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
        displayName: adminUser.name,
        isRead: false,
      });

      // Clear input field
      setNewMessage('');
      // Scroll down to the bottom of the list
      chatSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {chatSectionRef && newMessages && (
        <ApplicantChat
          ref={chatSectionRef}
          newMessages={newMessages as IApplicantChatType[]}
        />
      )}
      <input onChange={newMessageHandler} value={newMessage} />
      <button onClick={handleOnSubmit}>보내기</button>
    </div>
  );
};

export default ApplicantChatSection;
