import { captilize } from "./functions";
import { itemCreate } from "./../types";
import { login } from "./../redux/actions/user.action";

import axios from "axios";
import { Dispatch } from "redux";
import { getOrders } from "../redux/actions/orders";
import { orderType, userCreate } from "../types";
import { NavigateFunction } from "react-router";
import { getAllItems } from "../redux/actions/items";
import { getAllItemsInCart } from "../redux/actions/cart";
import { getAllCategories } from "../redux/actions/categories";

const baseUrl = "https://resturant-apis.onrender.com";

export const signUpUser = async (
  user: userCreate,
  dispatch: Dispatch,
  navigate: NavigateFunction
) => {
  try {
    const res = await axios.post(`${baseUrl}/users`, user);
    dispatch(login(res.data.token, res.data.type));
    localStorage.setItem(
      "user",
      JSON.stringify({
        token: res.data.token,
        type: res.data.type,
        isLoggedIn: true,
      })
    );
    navigate("/");
  } catch (e: any) {
    if (e.status !== 500) {
      alert(e.response.data.message);
    } else {
      console.log(e);
    }
  }
};

export const loginUser = async (
  user: {
    email: string;
    password: string;
  },
  dispatch: Dispatch,
  navigate: NavigateFunction
) => {
  try {
    const res = await axios.post(`${baseUrl}/users/signin`, user);
    dispatch(login(res.data.token, res.data.type));
    localStorage.setItem(
      "user",
      JSON.stringify({
        token: res.data.token,
        type: res.data.type,
        isLoggedIn: true,
      })
    );
    navigate("/");
  } catch (e: any) {
    if (e.status !== 500) {
      alert(e.response.data.message);
    } else {
      console.log(e);
    }
  }
};

export const getCategories = async (dispatch: Dispatch, token: string) => {
  try {
    const res = await axios.get(`${baseUrl}/categories`, {
      headers: { authorization: token },
    });
    dispatch(getAllCategories(res.data.categories));
  } catch (e) {
    console.log(e);
  }
};

export const getItems = async (token: string, dispatch: Dispatch) => {
  try {
    const res = await axios.get(`${baseUrl}/items`, {
      headers: { authorization: token },
    });
    dispatch(getAllItems(res.data.items));
  } catch (e: any) {
    if (e.status !== 500) {
      console.log("Items not get!");
    } else {
      console.log(e);
    }
  }
};

export const createOrder = async (
  order: orderType,
  dispatch: Dispatch,
  token: string,
  navigate: NavigateFunction
) => {
  try {
    const orderr = {
      mobile: order.mobile,
      city: order.city,
      address: order.address,
      orderItems: order.orderItems,
    };
    const res = await axios.post(`${baseUrl}/orders`, orderr, {
      headers: { authorization: token },
    });
    alert("Order is created!");
    dispatch(getAllItemsInCart([]));
    localStorage.removeItem("cart");
    navigate(`/orderSuccess/${res.data.order.orderNo}`);
  } catch (e: any) {
    console.log(e)
    if (e.status !== 500) {
      alert(e.response.data.message);
    } else {
      console.log(e);
    }
  }
};

export const getAllOrders = async (dispatch: Dispatch, token: string) => {
  try {
    const res = await axios.get(`${baseUrl}/orders`, {
      headers: { authorization: token },
    });
    const orders = { orders: res.data.orders, lengths: res.data.lengths };
    dispatch(getOrders(orders));
  } catch (e) {
    console.log(e);
  }
};

export const updateOrder = async (
  orderId: number,
  setOrder: Function,
  token: string
) => {
  try {
    const res = await axios.patch(`${baseUrl}/orders/${orderId}`)
    setOrder(res.data.order);
  } catch (e) {
    console.log(e);
  }
};

export const getOrder = async (
  orderId: number,
  token: string,
  setOrder: Function
) => {
  try {
    const res = await axios.get(`${baseUrl}/orders/${orderId}`, {
      headers: { authorization: token },
    });
    setOrder(res.data.order);
  } catch (e) {
    console.log(e);
  }
};

export const createItem = async (item: itemCreate, token: string) => {
  try {
    await axios.post(`${baseUrl}/items/${item.categoryId}`, item);
    alert("Item is created!");
  } catch (e: any) {
    if (e.status === 500) {
      console.log(e);
    } else {
      alert(e.response.data.message);
    }
  }
};

export const createCategory = async (
  category: { name: string },
  token: string
) => {
  try {
    await axios.post(`${baseUrl}/categories`, category, {
      headers: { authorization: token },
    });
    alert("Category is created!");
  } catch (e: any) {
    if (e.status === 500) {
      console.log(e);
    } else {
      alert(e.response.data.message);
    }
  }
};
export const createUser = async (user: userCreate) => {
  try {
    await axios.post(`${baseUrl}/users`, user);
    alert(`${user.type} is created!`);
  } catch (e: any) {
    if (e.status !== 500) {
      alert(e.response.data.message);
    } else {
      console.log(e);
    }
  }
};

export const getUser = async (token: string, setName: Function) => {
  try {
    const res = await axios.get(`${baseUrl}/users/profile`, {
      headers: { authorization: token },
    });
    setName(captilize(`${res.data.user.firstName} ${res.data.user.lastName}`));
  } catch (e) {
    console.log(e);
  }
};
