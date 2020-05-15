import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './RootReducer';
import sagas from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const middleware = [
  sagaMiddleware,
];

const store = createStore(
  reducers,
  applyMiddleware(...middleware),
);

sagaMiddleware.run(sagas);

export default store;
