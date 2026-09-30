import { getChatIdFromPhone } from "../../helpers/formatPhone";
import { useChatStore } from "../../store/chatStore";
import { selectChatMessages } from "../../store/selectors";
import cn from "classnames";
import styles from "./ChatHistory.module.scss";

interface ChatHistoryProps {
  activeChat: string;
}

export const ChatHistory = ({ activeChat }: ChatHistoryProps) => {
  const formattedChatId = getChatIdFromPhone(activeChat);
  const messages = useChatStore(selectChatMessages(formattedChatId));

  const items = messages.map((item) => (
    <div className={styles.item} key={item.id}>
      <div
        className={cn(styles.bubbleWrapper, {
          [styles.outgoing]: item.type === "outgoing",
        })}
      >
        <div className={styles.bubble}>{item.text}</div>
      </div>
    </div>
  ));

  return <div className={styles.history}>{items}</div>;
};
