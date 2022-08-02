import { categoryActionType } from "../../types";

const reducer = (state = [], action: categoryActionType) => {
  switch (action.type) {
    case "GETCATEGORY":
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
