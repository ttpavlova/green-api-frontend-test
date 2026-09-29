import type { StateCreator } from "zustand";
import type { Chat, ChatState } from "./types";

export interface ChatsSlice {
  chats: ChatState;
  addChat: (chatId: string, chatInfo: Chat) => void;
}

export const createChatsSlice: StateCreator<ChatsSlice> = (set) => ({
  chats: {},
  addChat: (chatId, chatInfo) =>
    set((state) => {
      return { ...state.chats, [chatId]: chatInfo };
    }),
});
