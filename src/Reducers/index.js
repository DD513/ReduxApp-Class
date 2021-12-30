import { combineReducers } from "redux";
import message_reducer from "./messageReducer";

const root_reducer = combineReducers({
  message: message_reducer,
});

export default root_reducer;
