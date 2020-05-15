import types from '../actions/types';
import messages from '../../websocket/messages';

const {
  // CHANNELS_INFO,
  // MESSAGES_INFO,
} = messages;

const {
  REPLACE_AUTHORIZING,
  REPLACE_IS_AUTHENTICATED,
} = types;

const initialState = {
  authorizing: false,
  isAuthenticated: false,
  loading: false,
};

const entryReducer = (state = initialState, action) => {
  switch (action.type) {
    // case MESSAGES_INFO:
    // case CHANNELS_INFO:
    //   return { ...state };
    case REPLACE_IS_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: action.payload,
      };
    case REPLACE_AUTHORIZING:
      return {
        ...state,
        authorizing: action.payload,
      };
    default:
      return state;
  }
};

export default entryReducer;
