import { createActions } from "reduxsauce";

export const { Types, Creators } = createActions(
  {
    getDynamicContentRequest: null,
    getDynamicContentSuccess: ["payload"],
    getDynamicContentFailure: null,
  },
  {
    prefix: "Landing/",
  }
);

export default Creators;
