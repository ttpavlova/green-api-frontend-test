import { getCredentials } from "../helpers/getCredentials";
import { request } from "../helpers/request";
import type { Credentials } from "../types/types";

const apiUrl = import.meta.env.VITE_API_URL;

export const greenApi = {
  sendMessage: (chatId: string, message: string) => {
    const { idInstance, apiTokenInstance } = getCredentials();

    return request(
      `${apiUrl}/waInstance${idInstance}/sendMessage/${apiTokenInstance}`,
      {
        method: "POST",
        body: JSON.stringify({ chatId, message }),
      },
    );
  },

  receiveNotification: () => {
    const { idInstance, apiTokenInstance } = getCredentials();

    return request(
      `${apiUrl}/waInstance${idInstance}/receiveNotification/${apiTokenInstance}`,
    );
  },

  deleteNotification: (receiptId: number) => {
    const { idInstance, apiTokenInstance } = getCredentials();

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
    const { idInstance, apiTokenInstance } = getCredentials();

    return request(
      `${apiUrl}/waInstance${idInstance}/checkWhatsapp/${apiTokenInstance}`,
      { method: "POST", body: JSON.stringify({ chatId }) },
    );
  },

  getChatHistory: (chatId: string, count = 10) => {
    const { idInstance, apiTokenInstance } = getCredentials();

    return request(
      `${apiUrl}/waInstance${idInstance}/getChatHistory/${apiTokenInstance}`,
      {
        method: "POST",
        body: JSON.stringify({ chatId, count }),
      },
    );
  },
};
