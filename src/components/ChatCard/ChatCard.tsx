import styles from "./ChatCard.module.scss";
import cn from "classnames";

interface Item {
  id: number;
  title: string;
  text: string;
  meta: string;
}

interface ChatCardProps {
  item: Item;
  activeChat: number | null;
  setActiveChat: React.Dispatch<React.SetStateAction<number | null>>;
}

export const ChatCard = ({
  item,
  activeChat,
  setActiveChat,
}: ChatCardProps) => {
  return (
    <div
      className={cn(styles.card, { [styles.selected]: item.id === activeChat })}
    >
      <button className={styles.cardBtn} onClick={() => setActiveChat(item.id)}>
        <div className={styles.avatar}></div>
        <h3 className={styles.title}>{item.title}</h3>
        <span className={styles.text}>{item.text}</span>
        <div className={styles.meta}>{item.meta}</div>
      </button>
    </div>
  );
};
