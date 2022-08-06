import { lengthTypes } from "../../types";

export const getLengths = (lengths: lengthTypes) => {
  return {
    type: "GETLENGTHS",
    payload: lengths,
  };
};
