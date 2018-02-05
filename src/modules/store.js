import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

export default function createReduxStore() {
  const middlewares = [thunk];
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    reducers,
    composeEnhancers(applyMiddleware(...middlewares))
  );
}
