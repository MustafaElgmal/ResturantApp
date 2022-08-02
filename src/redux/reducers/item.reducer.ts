import { itemActionType } from "../../types";

const reducer = (state = [], action: itemActionType) => {
  switch (action.type) {
    case "GETITEMS":
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
