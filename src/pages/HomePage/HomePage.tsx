import { useState } from "react";
import { Navigation } from "../../components/Navigation/Navigation";
import type { TabType } from "../../types/types";
import { Settings } from "../../components/Settings/Settings";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { OpenedChat } from "../../components/OpenedChat/OpenedChat";
import { Modal } from "../../components/Modal/Modal";
import { useParams } from "react-router";
import { usePolling } from "../../hooks/usePolling";
import styles from "./HomePage.module.scss";

export const HomePage = () => {
  const [activeTab, setActiveTab] = useState<TabType>("chats");
  const [isModalOpen, setModalOpen] = useState(false);
  const { chatId } = useParams();

  usePolling();

  return (
    <div className={styles.homePage}>
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />

      <Sidebar
        activeTab={activeTab}
        activeChat={chatId}
        openModal={() => setModalOpen(true)}
      />

      <main className={styles.main}>
        {activeTab === "chats" && (
          <div className={styles.wrapper}>
            {chatId && <OpenedChat activeChat={chatId} />}
          </div>
        )}

        {activeTab === "settings" && <Settings />}
      </main>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};
