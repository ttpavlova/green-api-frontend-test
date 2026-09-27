import { IoArrowBack } from "react-icons/io5";
import styles from "./OpenedChat.module.scss";

interface OpenedChatProps {
  activeChat: number | null;
}

export const OpenedChat = ({ activeChat }: OpenedChatProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <button className={styles.backBtn}>
          <IoArrowBack size={20} />
        </button>
        <div className={styles.info}>
          <div className={styles.avatar}></div>
          <span className={styles.title}>{activeChat}</span>
        </div>
      </div>
    </div>
  );
};
