import { combineReducers } from "redux";
import messages from "./messages";
import errors from "./errors";
import notifications from "./notifications";
import auth from "./auth";

export default combineReducers({
  messages,
  errors,
  notifications,
  auth
});
