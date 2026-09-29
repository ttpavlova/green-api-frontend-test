import { request } from "../helpers/request";
import type { Credentials } from "../types/types";

const apiUrl = import.meta.env.VITE_API_URL;
const idInstance = import.meta.env.VITE_ID_INSTANCE;
const apiTokenInstance = import.meta.env.VITE_API_TOKEN_INSTANCE;

export const greenApi = {
  sendMessage: (chatId: string, message: string) => {
    return request(
      `${apiUrl}/waInstance${idInstance}/sendMessage/${apiTokenInstance}`,
      {
        method: "POST",
        body: JSON.stringify({ chatId, message }),
      },
    );
  },

  receiveNotification: () => {
    return request(
      `${apiUrl}/waInstance${idInstance}/receiveNotification/${apiTokenInstance}`,
    );
  },

  deleteNotification: (receiptId: number) => {
    return request(
      `${apiUrl}/waInstance${idInstance}/deleteNotification/${apiTokenInstance}/${receiptId}`,
      { method: "DELETE" },
    );
  },

  getStateInstance: (
    idInstance: Credentials["idInstance"],
    apiTokenInstance: Credentials["apiTokenInstance"],
  ) => {
    return request(
      `${apiUrl}/waInstance${idInstance}/getStateInstance/${apiTokenInstance}`,
    );
  },

  checkWhatsapp: (chatId: string) => {
    return request(
      `${apiUrl}/waInstance${idInstance}/checkWhatsapp/${apiTokenInstance}`,
      { method: "POST", body: JSON.stringify({ chatId }) },
    );
  },

  getChatHistory: (chatId: string, count = 10) => {
    return request(
      `${apiUrl}/waInstance${idInstance}/getChatHistory/${apiTokenInstance}`,
      {
        method: "POST",
        body: JSON.stringify({ chatId, count }),
      },
    );
  },
};
