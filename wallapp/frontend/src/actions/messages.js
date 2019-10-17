import axios from "axios";
import { GET_MESSAGES } from "./types";

export const getMessages = () => dispatch => {
  axios
    .get("api/messages/")
    .then(res => {
      dispatch({
        type: GET_MESSAGES,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
