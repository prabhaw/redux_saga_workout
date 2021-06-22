import { api } from "./service";

export const getDynamicText = (params) => {
  return api.get("/posts");
};
