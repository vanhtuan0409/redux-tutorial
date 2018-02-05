import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import createReduxStore from "./modules/store";
import App from "./components/App";
import "./index.css";

const store = createReduxStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
