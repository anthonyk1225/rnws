import types from './types';
import typesSaga from './typesSaga';

const {
  REPLACE_IS_AUTHENTICATED,
  REPLACE_AUTHORIZING,
} = types;

const {
  INITWS,
} = typesSaga;

export default {
  // ACTIONS THAT DISPATCH TO THE REDUCER
  replaceIsAuthenticated(payload) {
    return { type: REPLACE_IS_AUTHENTICATED, payload };
  },
  replaceAuthorizing(payload) {
    return { type: REPLACE_AUTHORIZING, payload };
  },
  // END OF ACTIONS THAT DISPATCH TO THE REDUCER

  // ACTIONS THAT DISPATCH TO THE SAGA
  initws(payload) {
    return { type: INITWS, payload };
  },
};
