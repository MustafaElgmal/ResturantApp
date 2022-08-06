import { ItemTypes } from "../../types";

export const getAllItemsInCart = (items: ItemTypes[]) => {
  return {
    type: "GETALLITEMSINCART",
    payload: items,
  };
};
