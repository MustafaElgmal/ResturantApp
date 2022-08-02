import { orderActionType } from "../../types";

const reducer = (state = [], action: orderActionType) => {
  switch (action.type) {
    case "GETALLORDERS":
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
