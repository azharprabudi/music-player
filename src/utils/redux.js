import { combineReducers, createStore, applyMiddleware } from "redux";
import { createEpicMiddleware } from "redux-observable";
import reduxLogger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import artistStore from "reducers/artist";

const reducers = combineReducers({
  artist: artistStore
});
const reduxObservableMiddleware = createEpicMiddleware();

const middlewares = [
  reduxObservableMiddleware,
  ...(process.env.NODE_ENV === "development" && [reduxLogger])
];

const makeStore = () => {
  const store = createStore(
    reducers,
    // process.env.NODE_ENV === "development"
    composeWithDevTools(applyMiddleware(...middlewares))
    //   : applyMiddleware(middlewares)
  );
  return store;
};

export default makeStore;
