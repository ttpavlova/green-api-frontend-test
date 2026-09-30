import type { StateCreator } from "zustand";
import type { Message, ChatState } from "./types";

export interface ChatsSlice {
  chats: ChatState;
  addChat: (chatId: string) => void;
  updateChatHistory: (chatId: string, message: Message) => void;
}

export const createChatsSlice: StateCreator<ChatsSlice> = (set) => ({
  chats: {},
  addChat: (chatId) => {
    set((state) => ({
      chats: {
        ...state.chats,
        [chatId]: [],
      },
    }));
  },
  updateChatHistory: (chatId, newMessage) =>
    set((state) => {
      const messages = state.chats[chatId] ?? [];

      if (messages.some((m) => m.id === newMessage.id)) {
        return state;
      }

      return {
        chats: {
          ...state.chats,
          [chatId]: [...messages, newMessage],
        },
      };
    }),
});
