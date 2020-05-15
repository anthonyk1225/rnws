import { eventChannel } from 'redux-saga';

let websocket = null;
const websocketUrl = "wss://ws.oldrocket.xyz/";

const watchMessages = ws => eventChannel((emitter) => {
  const socket = ws;
  websocket = socket;

  socket.onopen = (event) => {
    console.log('ON OPEN');
    emitter({
      event,
      eventName: 'onopen',
    });
  };

  socket.onerror = (event) => {
    console.log('ON ERROR');
    emitter({
      event,
      eventName: 'onerror',
    });
  };

  socket.onclose = (event) => {
    console.log('ON CLOSE');
    emitter({
      event,
      eventName: 'onclose',
    });
  };

  socket.onmessage = (event) => {
    const {
      data,
      type,
    } = JSON.parse(event.data);

    const eventName = data && data.error ? 'onerror' : 'onmessage';

    console.log(`ON MESSAGE :: getting passed as ${eventName}, ${type}`);

    if (eventName === 'onerror') console.log(`ERROR MESSAGE :: ${data.error}`);

    emitter({
      event,
      eventName,
      action: { type, payload: data },
    });
  };

  return () => {
    socket.close();
  };
});

export default {
  getws: () => websocket,
  closews: () => {
    if (websocket) websocket.close();
    websocket = null;
  },
  watchMessages,
  websocketUrl,
};