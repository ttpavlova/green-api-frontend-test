import { useState } from "react";
import { Navigation } from "../../components/Navigation/Navigation";
import type { TabType } from "../../types/types";
import { Settings } from "../../components/Settings/Settings";
import styles from "./HomePage.module.scss";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { OpenedChat } from "../../components/OpenedChat/OpenedChat";

export const HomePage = () => {
  const [activeTab, setActiveTab] = useState<TabType>("chats");
  const [activeChat, setActiveChat] = useState<number | null>(null);

  return (
    <div className={styles.homePage}>
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />

      <Sidebar
        activeTab={activeTab}
        activeChat={activeChat}
        setActiveChat={setActiveChat}
      />

      <main className={styles.main}>
        {activeTab === "chats" && <OpenedChat activeChat={activeChat} />}
        {activeTab === "settings" && <Settings />}
      </main>
    </div>
  );
};
