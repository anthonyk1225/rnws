import { combineReducers } from 'redux';
import entryReducer from './reducers/entryReducer';

const rootReducer = combineReducers({
  entryReducer,
});

export default rootReducer;
