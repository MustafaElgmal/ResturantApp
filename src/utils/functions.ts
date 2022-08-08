import { getAllItems } from './../redux/actions/items';
import moment from "moment";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { ItemTypes, orderType } from "../types";
import { getItems } from "./apis";

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

export const editCart = (
  num: number,
  count: number,
  itemsInCart: ItemTypes[],
  item: ItemTypes
) => {
  num === -1 ? (count > 0 ? (count += num) : (count = 0)) : (count += num);
  const orderFind = itemsInCart.find((order) => order.id === item?.id);
  if (orderFind) {
    itemsInCart = itemsInCart.filter((order) =>
      order.id === item?.id ? (order.Qty = count) : order.Qty
    );
  } else {
    itemsInCart = [...itemsInCart, { ...item, Qty: count }];
  }
  itemsInCart = itemsInCart.filter((order) => order?.Qty !== 0);
  localStorage.setItem("cart", JSON.stringify(itemsInCart));
  return { count, itemsInCart };
};

export const mult = (num1: number, num2: number ) => {
  return num1 * num2;
};

export const updateItems = async (dispatch:Dispatch) => {
  const res = await getItems();
  if (res?.status === 200) {
    dispatch(getAllItems(res.data.items))
  }else{
    console.log("Not get Items");
  }
};

export const orderColor=(order:orderType,bool:boolean)=>{
  const now=new Date(Date.now()).getTime()
  const then=new Date(order.createdAt as Date).getTime()
   const diff=Math.round((now -then))
  if(!bool){
    if(diff<900000){
      return { backgroundColor:"#2fcd17",color:'white',time:diff}
    }else if(diff<1800000){
      return { backgroundColor:"#FF9200",color:'white',time:diff}
    }else{
      return { backgroundColor:"#CD2F17",color:'white',time:diff}
    }

  }
  return { backgroundColor:"#303030",color:'white',time:diff}

}


