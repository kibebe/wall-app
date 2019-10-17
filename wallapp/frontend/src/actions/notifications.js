import { ADD_NOTIFICATION, GET_ERRORS } from "./../actions/types";

export const addNotification = note => {
    return {
        type: ADD_NOTIFICATION,
        payload: note
    }
}

export const returnErrors = (msg, status) => {
  return {
    type: GET_ERRORS,
    payload: { msg, status }
  };
};
