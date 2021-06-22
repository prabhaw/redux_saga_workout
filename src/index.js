import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ConnectedRouter } from "connected-react-router";
import configureStore from "./module/store";
import history from "./module/history";

function render(Component) {
  const { persistor, store } = configureStore();
  ReactDOM.render(
    <Suspense fallback={<div>Loading...</div>}>
      <Provider store={store}>
        <PersistGate loading={<div>Loading......</div>} persistor={persistor}>
          <ConnectedRouter history={history}>
            <Component />
          </ConnectedRouter>
        </PersistGate>
      </Provider>
    </Suspense>,

    document.getElementById("root")
  );
}

render(App);
if (module.hot) {
  module.hot.accept("./App", () => {
    // eslint-disable-next-line global-require
    const NextApp = require("./App").default;
    render(NextApp);
  });
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
