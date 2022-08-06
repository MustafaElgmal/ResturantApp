import { orderActionType } from "../../types";

const reducer = (state = [], action: orderActionType) => {
  switch (action.type) {
    case "GETORDERS":
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
