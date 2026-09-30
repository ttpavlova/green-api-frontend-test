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
  updateChatHistory: (chatId, message) =>
    set((state) => ({
      chats: {
        ...state.chats,
        [chatId]: [...state.chats[chatId], message],
      },
    })),
});
