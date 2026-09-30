import { useEffect } from "react";
import { greenApi } from "../api/greenApi";
import { useChatStore } from "../store/chatStore";
import { getUpdateChatHistory } from "../store/selectors";
import { getMessageTypeByWebhookType } from "../helpers/getMessageTypeByWebhookType";

export const usePolling = () => {
  const updateChatHistory = useChatStore(getUpdateChatHistory);

  useEffect(() => {
    const interval = setInterval(async () => {
      const notification = await greenApi.receiveNotification();

      if (!notification) return;

      const { typeWebhook } = notification.body;

      const messageType = getMessageTypeByWebhookType(typeWebhook);

      if (messageType) {
        const { idMessage, timestamp, senderData, messageData } =
          notification.body;
        updateChatHistory(senderData.chatId, {
          id: idMessage,
          sender: senderData.sender,
          senderName: senderData.senderName,
          text: messageData.extendedTextMessageData.text,
          type: messageType,
          timestamp,
        });
      }

      await greenApi.deleteNotification(notification.receiptId);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
};
