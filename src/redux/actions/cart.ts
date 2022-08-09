import { ItemTypes } from "../../types";

export const getAllItemsInCart = (items: ItemTypes[]) => {
  return {
    type: "GETALLITEMSINCART",
    payload: items,
  };
};

export const removeAllItemsInCart = () => {
  return {
    type: "REMOVEALLITEMSINCART",
    payload:[],
  };
};
