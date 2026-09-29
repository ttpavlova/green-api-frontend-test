import { useNavigate } from "react-router";
import styles from "./ChatCard.module.scss";
import cn from "classnames";

interface ChatCardProps {
  item: string;
  isActive: boolean;
}

export const ChatCard = ({ item, isActive }: ChatCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`${item}`);
  };

  return (
    <div className={cn(styles.card, { [styles.selected]: isActive })}>
      <button className={styles.cardBtn} onClick={handleClick}>
        <div className={styles.avatar}></div>
        <h3 className={styles.title}>{item}</h3>
        {/* <span className={styles.text}>{item.text}</span>
        <div className={styles.meta}>{item.meta}</div> */}
      </button>
    </div>
  );
};
