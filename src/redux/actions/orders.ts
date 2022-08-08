import { lengthTypes } from './../../types';
import { orderType } from "../../types";

export const getOrders = (orders: {orders:orderType[],lengths:lengthTypes}) => {
  return {
    type: "GETORDERS",
    payload: orders,
  };
};
