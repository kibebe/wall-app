import GET_MESSAGES from "./../actions/types";

const initialState = {
  messages: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_MESSAGES:
      return {
        ...state,
        messages: action.payload
      };
    default:
      return state;
  }
}
