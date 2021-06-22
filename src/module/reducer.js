import { createReducer } from "reduxsauce";
import persist from "./persist";
import { Types } from "./action";

const initialState = {
  homeContent: [],
};

const getDynamicContentSuccess = (state, action) => {
  const {
    payload: { data },
  } = action;

  return { ...state, homeContent: data };
};

const landingReducer = createReducer(initialState, {
  [Types.GET_DYNAMIC_CONTENT_SUCCESS]: getDynamicContentSuccess,
});

export default persist("landing", ["landing"], landingReducer);
