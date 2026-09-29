export interface Message {
  messageId: string;
  senderName: string;
  text: string;
  timestamp: number;
}

export type ChatState = Record<string, Message[]>;
