import {
  call,
  fork,
  put,
  take,
  takeEvery,
} from 'redux-saga/effects';
import typesSaga from '../redux/actions/typesSaga';
import websocket from '../websocket';
import actions from '../redux/actions';
// import { socketError } from '../modules/Alerts';

const { watchMessages, websocketUrl } = websocket;
const { entryActions } = actions;
const {
  replaceAuthorizing,
  replaceIsAuthenticated,
} = entryActions;
const { INITWS } = typesSaga;

const initWatchMessages = function* initWatchMessages(args) {
  while (true) {
    const {
      channel,
    } = args;
    const { action, eventName } = yield take(channel);

    switch (eventName) {
      case 'onopen':
        yield put(replaceAuthorizing(false));
        yield put(replaceIsAuthenticated(true));
        break;
      case 'onclose': {
        yield put(replaceAuthorizing(false));
        yield put(replaceIsAuthenticated(false));
        break;
      }
      case 'onmessage': {
        yield put(action);
        break;
      }
      case 'onerror': {
        // socketError();
        break;
      }
      default:
        break;
    }
  }
};

const initWebsocket = function* initWebsocket(action) {
  const token = "6ca7d0b59914269ecfd08841dbe92d7b1979f68dd48928a3b0ae4113fe687e7dc6b75518481c382a7b4ef5c9835482e8c4994d69b80ab8b1b4c43751670cbac6d63aa9ac247961eeebee9ee220c53e515ec89d108b800b423037bd395ff447546031c4708942ecab84dbc02926b4df1efbf34609dbdec4392e257f2f6932d6ea01f143200534b669033e0bd662cbabf90571e10baa4c8980067b2091aaf7db36237acec81443d8a7cda6eac0cb83da92d7a95ecf54cde9c49c6f1282c6d0896657aca161b7e6312b7811625dc1449f11b6f0771cd31b2044e791bb63efc6618363ac29aac7fed310263391af005281edc2395d4c7e6a86bb19aa91bd9c7236b1";
  try {
    const ws = new WebSocket(`${websocketUrl}?token=${token}`);
    const channel = yield call(watchMessages, ws);

    yield fork(
      initWatchMessages,
      {
        channel,
      },
    );
  } catch (e) {
    console.log(e, 'There was an error in initializing ws saga');
  }
};

const saga = function* sagas() {
  yield takeEvery(INITWS, initWebsocket);
};

export default saga;
