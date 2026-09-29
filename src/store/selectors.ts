import { useChatStore } from "./chatStore";

export const getIsAuth = () => useChatStore.getState().isAuth;
export const getSignIn = () => useChatStore.getState().signIn;
export const getSignOut = () => useChatStore.getState().signOut;
export const getAddChat = () => useChatStore.getState().addChat;
export const getChats = () => useChatStore.getState().chats;
