import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import history from "./history";
import landing from "./reducer";

export default combineReducers({
  router: connectRouter(history),
  landing,
});
