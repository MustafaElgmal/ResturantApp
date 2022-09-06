import { NavigateFunction } from "react-router";
import { Dispatch } from "redux";
import { getAllItemsInCart } from "../redux/actions/cart";

import { ItemTypes, orderType } from "../types";
import { getAllOrders, updateOrder } from "./apis";

export const itemFilter = (items: ItemTypes[], type: string) => {
  let itemsfilter = [];
  if (type === "popular") {
    itemsfilter = items.filter((item) => item.popular === true);
  } else {
    itemsfilter = items.filter((item) => item.category?.name === type);
  }
  return itemsfilter;
};

export const captilize = (name: string) => {
  let nameCap = name
    .split(" ")
    .map((ele) => ele[0].toLocaleUpperCase() + ele.slice(1))
    .join(" ");
  return nameCap;
};

export const mult = (num1: number, num2: number) => {
  return num1 * num2;
};

export const orderColor = (order: orderType, bool: boolean) => {
  const now = new Date(Date.now()).getTime();
  const then = new Date(order.createdAt as Date).getTime();
  const diff = Math.round(now - then);
  if (!bool) {
    if (diff < 900000) {
      return { backgroundColor: "#2fcd17", color: "white", time: diff };
    } else if (diff < 1800000) {
      return { backgroundColor: "#FF9200", color: "white", time: diff };
    } else {
      return { backgroundColor: "#CD2F17", color: "white", time: diff };
    }
  }
  return { backgroundColor: "#303030", color: "white", time: diff };
};

export const editCart = (
  num: number,
  count: number,
  itemsInCart: ItemTypes[],
  item: ItemTypes,
  setCount: Function,
  dispatch: Dispatch,
  onHide: Function,
  navigate: NavigateFunction
) => {
  num === -1 ? (count > 0 ? (count += num) : (count = 0)) : (count += num);
  const itemFind = itemsInCart.find((order) => order.id === item?.id);
  if (itemFind) {
    itemsInCart = itemsInCart.filter((order) =>
      order.id === item?.id ? (order.Qty = count) : order.Qty
    );
  } else {
    itemsInCart = [...itemsInCart, { ...item, Qty: count }];
  }
  itemsInCart = itemsInCart.filter((order) => order?.Qty !== 0);
  localStorage.setItem("cart", JSON.stringify(itemsInCart));
  setCount(count);
  dispatch(getAllItemsInCart(itemsInCart));
  if (itemsInCart.length === 0) {
    navigate("/");
    onHide && onHide()
  }
};

export const editCartOutsideForm= (
  num: number,
  count: number,
  itemsInCart: ItemTypes[],
  item: ItemTypes,
  setCount: Function,
  dispatch: Dispatch,
) => {
  num === -1 ? (count > 0 ? (count += num) : (count = 0)) : (count += num);
  const itemFind = itemsInCart.find((order) => order.id === item?.id);
  if (itemFind) {
    itemsInCart = itemsInCart.filter((order) =>
      order.id === item?.id ? (order.Qty = count) : order.Qty
    );
  } else {
    itemsInCart = [...itemsInCart, { ...item, Qty: count }];
  }
  itemsInCart = itemsInCart.filter((order) => order?.Qty !== 0);
  localStorage.setItem("cart", JSON.stringify(itemsInCart));
  setCount(count);
  dispatch(getAllItemsInCart(itemsInCart));
};

export const deleteItemFromCart = (
  itemsInCart: ItemTypes[],
  item: ItemTypes,
  dispatch: Dispatch,
  onHide: Function,
  navigate: NavigateFunction
) => {
  itemsInCart = itemsInCart.filter((order) => order.id !== item?.id);
  dispatch(getAllItemsInCart(itemsInCart));
  localStorage.setItem("cart", JSON.stringify(itemsInCart));
  if (itemsInCart.length === 0) {
    onHide && onHide()
    navigate("/");
  }
};

export  const orderFinshed = async (orderId:number,setOrder:Function,dispatch:Dispatch,token:string) => {
 await updateOrder(orderId,setOrder,token);
 await getAllOrders(dispatch,token);
};
