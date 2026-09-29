export const formatPhone = (phone: string) => {
  if (phone.startsWith("8") && phone.length === 11) {
    phone = "7" + phone.slice(1);
  }

  return phone;
};

export const getChatIdFromPhone = (phone: string) => `${phone}@c.us`;
