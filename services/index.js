import websocket from '../websocket';

const { getws } = websocket;

const sendUserInput = function(message) {
  const socket = getws();
  socket.send(JSON.stringify(message));
};

export {
  sendUserInput,
};
