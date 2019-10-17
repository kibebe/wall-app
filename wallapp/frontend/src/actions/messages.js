import axios from "axios";
import { GET_MESSAGES, ADD_MESSAGE, GET_ERRORS } from "./types";
import { addNotification } from "./notifications"
import { tokenConfig } from "./auth"

// get messages
export const getMessages = () => dispatch => {
  axios
    .get("api/messages/")
    .then(res => {
      dispatch({
        type: GET_MESSAGES,
        payload: res.data
      });
    })
    .catch(err => {
        const errors = {
            msg: err.response.data,
            status: err.response.status
        };
        dispatch({
            type: GET_ERRORS,
            payload: errors
        })
    });
};

// add message
export const addMessage = data => (dispatch, getState) => {
  axios
    .post("api/messages/", data, tokenConfig(getState))
    .then(res => {
      dispatch(addNotification({messageAdded: "Message added"}));  
      dispatch({
        type: ADD_MESSAGE,
        payload: res.data
      });
    })
    .catch(err => {
        const errors = {
            msg: err.response.data,
            status: err.response.status
        };
        dispatch({
            type: GET_ERRORS,
            payload: errors
        })
    });
};
