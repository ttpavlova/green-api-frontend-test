import { ChatCard } from "../ChatCard/ChatCard";
import { RxCross2 } from "react-icons/rx";
import { test } from "../../data/data";
import type { TabType } from "../../types/types";
import styles from "./Sidebar.module.scss";

interface SidebarProps {
  activeTab: TabType;
  activeChat: number | null;
  setActiveChat: React.Dispatch<React.SetStateAction<number | null>>;
}

export const Sidebar = ({
  activeTab,
  activeChat,
  setActiveChat,
}: SidebarProps) => {
  const itemsList = test.map((item) => (
    <ChatCard
      key={item.id}
      item={item}
      activeChat={activeChat}
      setActiveChat={setActiveChat}
    />
  ));

  const titleMap = {
    chats: "Chats",
    settings: "Settings",
  };

  return (
    <aside className={styles.aside}>
      <aside className={styles.asideWrapper}>
        <div className={styles.header}>
          <h2 className={styles.title}>{titleMap[activeTab]}</h2>
          {activeTab === "chats" && (
            <button className={styles.addButton}>
              <RxCross2 className={styles.icon} size={16} strokeWidth={0.5} />
            </button>
          )}
        </div>

        <div className={styles.content}>
          {activeTab === "chats" && itemsList}
          {activeTab === "settings" && <p>settingslist</p>}
        </div>
      </aside>
    </aside>
  );
};
