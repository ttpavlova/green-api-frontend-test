import type { ChatStore, Message } from "./types";

export const selectIsAuth = (state: ChatStore) => state.isAuth;
export const selectSignIn = (state: ChatStore) => state.signIn;
export const selectSignOut = (state: ChatStore) => state.signOut;
export const selectAddChat = (state: ChatStore) => state.addChat;
export const selectChats = (state: ChatStore) => state.chats;
export const selectUpdateChatHistory = (state: ChatStore) =>
  state.updateChatHistory;
export const selectChatMessages =
  (chatId: string) =>
  (state: ChatStore): Message[] =>
    state.chats[chatId] ?? [];
