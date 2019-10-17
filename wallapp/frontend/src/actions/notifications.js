import { ADD_NOTIFICATION } from "./../actions/types";

export const addNotification = note => {
    return {
        type: ADD_NOTIFICATION,
        payload: note
    }
}
