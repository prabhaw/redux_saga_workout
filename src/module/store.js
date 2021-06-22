import { applyMiddleware, compose, createStore } from "redux";
import { routerMiddleware } from "connected-react-router";
import createMiddleware from "redux-saga";
import { persistStore } from "redux-persist";
import history from "./history";
import reducers from "./combineReducer";
import rootSaga from "./Rootsagas";

const initialState = {};
const sagaMiddleware = createMiddleware();

export default function configureStore() {
  const middleware = [sagaMiddleware, routerMiddleware(history)];
  const ENV = process.env.NODE_ENV;
  let composeEnhancer = compose;

  if (ENV !== "production") {
    const composeWithDevToolsExtension =
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    if (typeof composeWithDevToolsExtension === "function") {
      composeEnhancer = composeWithDevToolsExtension;
    }
  }

  const store = createStore(
    reducers,
    initialState,
    composeEnhancer(applyMiddleware(...middleware))
  );
  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    module.hot.accept("./combineReducer", () => {
      const nextRootReducer = require("./combineReducer").default;
      store.replaceReducer(nextRootReducer);
    });
  }

  const persistor = persistStore(store);
  return { persistor, store };
}
