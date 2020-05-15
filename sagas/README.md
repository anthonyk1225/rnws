# Sagas

### Intro
Sagas help out with the handling of the websocket connection. In conjuction with redux, we can have our screens and components update seamlessly, without having to add repetitive logic.

### The websocket
Outside the scope of this folder we have `rnws/websocket/index.js`. This is where we keep the `ws` stored. We use `eventChannel` from the package `redux-saga` so that we can subscribe to the 4 socket events. The 4 events we subscribe to are `onopen`, `onerror`, `onclose` and `onmessage`. When we receive a message from one of the events, we call the `emitter` which is the parameter being passed from `eventChannel` subscriber function.

### The websocket saga
Looking at `rnws/sagas/websocket` you will see two generator functions. `initWebsocket` and `initWatchMessages`.

##### initWebsocket
In this function, we attempt to establish a connection with the backend. We interpolate the url and a token or whatever else it needs and try to create `new WebSocket`. If this is successful, we attempt to start the `eventChannel` function named `watchMessages` from the file mentioned above under the title `The websocket`. When this is created using `yield fork` we will then receive the message any time a new event gets emitted.

##### initWatchMessages
In this function, we receive the emittion from `watchMessages` and switch on the `eventName`.

- `onopen` will update our redux store to reflect that the user is currently not trying to connect to ws and has successfully opened a connection.
- `onclose` will update our redux store to reflect that the user is currently not trying to connect to ws and does not have a connection open.
- `onmessage` will take the `action` and pass it into `yield put`. This works with our other sagas as well as our redux reducers. It will go to any cases where the message name matches.
- `onerror` will render an alert, native to the user's OS. It's a generic alert that can be customizable.

### Using this to build some logic
We can use this setup to our advantage. One example to take note of is what we do in `rnws/entry.js`. There's a `useEffect` function that fires everytime that component receives updates from the `isAuthenticated` field in our redux store. Because we update this field on `onopen` and `onclose`, we can set up some logic so that throughout our app, it will act accordingly depending on the connection of ws, no matter where we are within the app.