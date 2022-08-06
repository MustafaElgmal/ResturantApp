import { orderType } from "../../types";

export const getOrders = (orders: orderType[]) => {
  return {
    type: "GETORDERS",
    payload: orders,
  };
};
