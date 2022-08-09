import { itemActionType } from './../../types';
import { ItemTypes } from "../../types";

export const getAllItems = (items:ItemTypes[]):itemActionType => {
  return {
    type: "GETITEMS",
    payload: items,
  };
};
