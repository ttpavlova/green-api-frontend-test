export interface Message {
  id: string;
  sender: string;
  senderName: string;
  type: "incoming" | "outgoing";
  text: string;
  timestamp: number;
}

export type ChatState = Record<string, Message[]>;
