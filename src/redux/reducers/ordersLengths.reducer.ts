import { lengthActionTypes } from "../../types";

const reducer = (state = {}, action: lengthActionTypes) => {
  switch (action.type) {
    case "GETLENGTHS":
      return action.payload;
    default:
      return state;
  }
};
export default reducer;
