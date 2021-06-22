import { call, put, takeLatest } from "redux-saga/effects";
import { getDynamicText } from "./apiservices";
import landingAction, { Types } from "./action";

export function* getDynamicContentRequest(action) {
  const { params } = action;
  try {
    const response = yield call(getDynamicText);
    yield put(landingAction.getDynamicContentSuccess({ data: response.data }));
  } catch (err) {
    yield put(landingAction.getDynamicContentFailure());
  } finally {
  }
}

function* landingWatch() {
  yield takeLatest(Types.GET_DYNAMIC_CONTENT_REQUEST, getDynamicContentRequest);
}

export default landingWatch;
