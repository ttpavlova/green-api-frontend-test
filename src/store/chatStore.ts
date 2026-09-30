import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import { createAuthSlice } from "./authSlice";
import { createChatsSlice } from "./chatsSlice";
import type { ChatStore } from "./types";

export const useChatStore = create<ChatStore>()(
  devtools(
    persist(
      (...args) => ({
        ...createAuthSlice(...args),
        ...createChatsSlice(...args),
      }),
      {
        name: "chatStore",
        partialize: (state) => ({
          idInstance: state.idInstance,
          apiTokenInstance: state.apiTokenInstance,
          isAuth: state.isAuth,
          chats: state.chats,
        }),
      },
    ),
    {
      name: "chatStore",
    },
  ),
);
