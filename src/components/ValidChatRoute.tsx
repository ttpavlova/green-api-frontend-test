import { useParams, Navigate } from "react-router";
import { useChatStore } from "../store/chatStore";
import { HomePage } from "../pages/HomePage/HomePage";
import { selectChats } from "../store/selectors";

export const ValidChatRoute = () => {
  const { chatId } = useParams<{ chatId: string }>();
  const chats = useChatStore(selectChats);

  const chatIds = Object.keys(chats).map((id) => id.split("@")[0]);

  if (chatId && !chatIds.includes(chatId)) {
    return <Navigate to="/" replace />;
  }

  return <HomePage />;
};
