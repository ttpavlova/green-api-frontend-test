import { useChatStore } from "../../store/chatStore";
import { selectChats } from "../../store/selectors";
import { ChatCard } from "../ChatCard/ChatCard";

interface ChatListProps {
  activeChat: string | undefined;
}

export const ChatList = ({ activeChat }: ChatListProps) => {
  const chats = useChatStore(selectChats);
  const chatIds = Object.keys(chats);

  const chatList = chatIds.map((item) => (
    <ChatCard
      key={item}
      item={item.split("@")[0]}
      isActive={item.split("@")[0] === activeChat}
    />
  ));

  return <>{chatList}</>;
};
