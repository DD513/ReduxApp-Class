export const setMessage = (message, number) => {
  const key = "m_" + number;
  return {
    type: "SAVE_MESSAGE",
    payload: { message, key },
  };
};
