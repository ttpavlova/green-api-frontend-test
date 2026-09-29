import { RxCross2 } from "react-icons/rx";
import type { TabType } from "../../types/types";
import { ChatList } from "../ChatsList/ChatsList";
import styles from "./Sidebar.module.scss";

interface SidebarProps {
  activeTab: TabType;
  activeChat: string | undefined;
  openModal: () => void;
}

export const Sidebar = ({ activeTab, activeChat, openModal }: SidebarProps) => {
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
            <button className={styles.addButton} onClick={openModal}>
              <RxCross2 className={styles.icon} size={16} strokeWidth={0.5} />
            </button>
          )}
        </div>

        <div className={styles.content}>
          {activeTab === "chats" && <ChatList activeChat={activeChat} />}
          {activeTab === "settings" && (
            <div className={styles.settings}>
              <div className={styles.profile}>Profile</div>
            </div>
          )}
        </div>
      </aside>
    </aside>
  );
};
