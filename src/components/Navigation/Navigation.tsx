import type { TabType } from "../../types/types";
import { IoChatboxEllipses, IoSettingsSharp } from "react-icons/io5";
import styles from "./Navigation.module.scss";
import cn from "classnames";

interface NavigationProps {
  activeTab: TabType;
  setActiveTab: React.Dispatch<React.SetStateAction<TabType>>;
}

export const Navigation = ({ activeTab, setActiveTab }: NavigationProps) => {
  return (
    <nav className={styles.navigation}>
      <button
        className={cn(styles.allChatsBtn, {
          [styles.active]: activeTab === "chats",
        })}
        onClick={() => setActiveTab("chats")}
      >
        <span className={styles.icon}>
          <IoChatboxEllipses size={24} />
        </span>
        <span className={styles.title}>All</span>
      </button>

      <button
        className={cn(styles.settingsBtn, {
          [styles.active]: activeTab === "settings",
        })}
        onClick={() => setActiveTab("settings")}
      >
        <span className={styles.icon}>
          <IoSettingsSharp size={24} />
        </span>
        <span className={styles.title}>Settings</span>
      </button>
    </nav>
  );
};
