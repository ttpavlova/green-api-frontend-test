export interface Chat {
  sender: string;
  text: string;
}

export type ChatState = Record<string, Chat>;
