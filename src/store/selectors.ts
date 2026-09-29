import { useChatStore } from "./chatStore";

export const getIsAuth = () => useChatStore.getState().isAuth;
export const getSignIn = () => useChatStore.getState().signIn;
export const getSignOut = () => useChatStore.getState().signOut;
