import { cartActionType } from "../../types";
const cart = localStorage.getItem("cart");


const initialState = cart !== null ? JSON.parse(cart) : [];

const reducer = (state = initialState, action: cartActionType) => {
  switch (action.type) {
    case "GETALLITEMSINCART":
      return action.payload;
      case "REMOVEALLITEMSINCART":
        return action.payload
    default:
      return state;
  }
};
export default reducer;
