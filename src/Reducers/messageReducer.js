export default (state = { list: [] }, action) => {
  switch (action.type) {
    case "SAVE_MESSAGE":
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    default:
      return state;
  }
};
