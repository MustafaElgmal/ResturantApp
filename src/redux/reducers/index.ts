import { combineReducers } from "redux";
import user from "./user.reducer";
import category from "./categories.reducer";
import item from "./items.reducer";
import stateCategory from "./stateCategory.reducer";
import cart from "./cart.reducer";
import orderNo from "./orderNo.reducer";
import order from "./order.reducer";
import lengths from "./ordersLengths.reducer";
export const reducers = combineReducers({
  user,
  category,
  item,
  stateCategory,
  cart,
  order,
  orderNo,
  lengths,
});
