import { useChatStore } from "./chatStore";

export const getIsAuth = () => useChatStore.getState().isAuth;
export const getLogIn = () => useChatStore.getState().logIn;
