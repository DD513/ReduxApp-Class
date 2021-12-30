import { connect } from "react-redux";
import Message from "../Components/MessageComponent";
import { setMessage } from "../Actions/messageAction";

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  add: (message, number) => {
    dispatch(setMessage(message, number));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Message);
