import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import createStore from "./redux/store";
import "./index.css"

import App from "./App";

import { PersistGate } from "redux-persist/integration/react";

const { store, persistor } = createStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
