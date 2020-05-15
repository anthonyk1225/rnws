import { all } from 'redux-saga/effects';
import websocketSagas from './websocket';

const saga = function* sagas() {
  yield all([
    websocketSagas(),
  ]);
};

export default saga;
