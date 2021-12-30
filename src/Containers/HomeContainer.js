import { connect } from "react-redux";
import Home from "../Components/HomeComponent";

const mapStateToProps = (state) => ({
  message: state.message.list,
});

export default connect(mapStateToProps)(Home);
