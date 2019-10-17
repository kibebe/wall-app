import { ADD_NOTIFICATION } from "./../actions/types";

const initialState = {};

export default function(state = initialState, action){
    switch(action.type){
        case ADD_NOTIFICATION:
            return state = action.payload
        default:
            return state;
    }
}
