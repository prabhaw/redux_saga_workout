import { all } from "redux-saga/effects";
import landingWatcher from "./sagas";
function* rootSaga() {
  yield all([landingWatcher()]);
}

export default rootSaga;
