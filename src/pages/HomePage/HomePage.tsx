import { useState } from "react";
import { Navigation } from "../../components/Navigation/Navigation";
import type { TabType } from "../../types/types";
import { Settings } from "../../components/Settings/Settings";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { OpenedChat } from "../../components/OpenedChat/OpenedChat";
import { Modal } from "../../components/Modal/Modal";
import styles from "./HomePage.module.scss";

export const HomePage = () => {
  const [activeTab, setActiveTab] = useState<TabType>("chats");
  const [activeChat, setActiveChat] = useState<number | null>(null);
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className={styles.homePage}>
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />

      <Sidebar
        activeTab={activeTab}
        activeChat={activeChat}
        setActiveChat={setActiveChat}
        openModal={() => setModalOpen(true)}
      />

      <main className={styles.main}>
        {activeTab === "chats" && <OpenedChat activeChat={activeChat} />}
        {activeTab === "settings" && <Settings />}
      </main>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};
