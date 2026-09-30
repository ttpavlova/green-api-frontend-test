export const getMessageTypeByWebhookType = (typeWebhook: string) => {
  let messageType: "incoming" | "outgoing" | null = null;

  if (typeWebhook === "incomingMessageReceived") {
    messageType = "incoming";
  } else if (
    typeWebhook === "outgoingMessageReceived" ||
    typeWebhook === "outgoingAPIMessageReceived"
  ) {
    messageType = "outgoing";
  }

  return messageType;
};
