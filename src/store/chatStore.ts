import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

import { createAuthSlice, type AuthSlice } from "./authSlice";
import { createChatsSlice, type ChatsSlice } from "./chatsSlice";

export const useChatStore = create<AuthSlice & ChatsSlice>()(
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
