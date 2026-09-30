import type { AuthSlice } from "./authSlice";
import type { ChatsSlice } from "./chatsSlice";

export type ChatStore = AuthSlice & ChatsSlice;
export interface Message {
  id: string;
  sender: string;
  senderName: string;
  type: "incoming" | "outgoing";
  text: string;
  timestamp: number;
}

export type ChatState = Record<string, Message[]>;
