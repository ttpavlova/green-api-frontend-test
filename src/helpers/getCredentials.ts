import { useChatStore } from "../store/chatStore";

export const getCredentials = () => {
  const { idInstance, apiTokenInstance } = useChatStore.getState();

  if (!idInstance || !apiTokenInstance) {
    throw new Error("Green-API credentials are missing");
  }

  return {
    idInstance,
    apiTokenInstance,
  };
};
