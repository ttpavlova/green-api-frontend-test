import { useNavigate } from "react-router";
import { ChatInput } from "../ChatInput/ChatInput";
import { ChatHistory } from "../ChatHistory/ChatHistory";
import { IoArrowBack } from "react-icons/io5";
import styles from "./OpenedChat.module.scss";

interface OpenedChatProps {
  activeChat: string | null;
}

export const OpenedChat = ({ activeChat }: OpenedChatProps) => {
  const navigate = useNavigate();

  if (!activeChat) return;

  return (
    <div className={styles.openedChat}>
      <div className={styles.header}>
        <button className={styles.backBtn} onClick={() => navigate("/")}>
          <IoArrowBack size={20} />
        </button>
        <div className={styles.info}>
          <div className={styles.avatar}></div>
          <span className={styles.title}>{activeChat}</span>
        </div>
      </div>

      <div className={styles.history}>
        <div className={styles.scrollable}>
          <ChatHistory activeChat={activeChat} />
        </div>
        <div className={styles.inputWrapper}>
          <ChatInput activeChat={activeChat} />
        </div>
      </div>
    </div>
  );
};
