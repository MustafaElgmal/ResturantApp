import axios from "axios";
import { Dispatch } from "redux";
import { getOrderNo } from "../redux/actions/orderNo";
import { getOrders } from "../redux/actions/orders";
import { getLengths } from "../redux/actions/ordersLengths";
import { orderType, userType } from "../types";

const baseUrl = "http://localhost:5000";

export const createUser = async (
  user: userType
): Promise<{
  user?: userType;
  status?: number;
  message?: string;
  error?: string;
}> => {
  try {
    const res = await axios.post(`${baseUrl}/users`, user);
    return {
      user: res.data.user,
      status: res.status,
    };
  } catch (e: any) {
    if (e.status !== 500) {
      return {
        status: e.status,
        message: e.response.data.message,
      };
    } else {
      return {
        status: e.status,
        error: e.response.data.error,
      };
    }
  }
};

export const loginUser = async (
  user: userType
): Promise<{
  user?: userType;
  status?: number;
  message?: string;
  error?: string;
}> => {
  try {
    const res = await axios.post(`${baseUrl}/users/login`, user);
    return {
      user: res.data.user,
      status: res.status,
    };
  } catch (e: any) {
    if (e.status !== 500) {
      return {
        status: e.status,
        message: e.response.data.message,
      };
    } else {
      return {
        status: e.status,
        error: e.response.data.error,
      };
    }
  }
};

export const getCategories = async () => {
  try {
    const res = await axios.get(`${baseUrl}/categories`);
    return res;
  } catch (e) {
    console.log(e);
  }
};

export const getItems = async () => {
  try {
    const res = await axios.get(`${baseUrl}/items`);
    return res;
  } catch (e) {
    console.log("Not get Items");
  }
};

export const createOrder = async (order: orderType, dispatch: Dispatch) => {
  try {
    const res = await axios.post(`${baseUrl}/orders`, order);
    if (res?.status === 201) {
      alert("Order is created!");
      dispatch(getOrderNo(res?.data.order.orderNo));
    } else {
      alert("Order is not created!");
    }
  } catch (e) {
    console.log(e);
  }
};

export const getAllOrders = async (dispatch: Dispatch) => {
  try {
    const res = await axios.get(`${baseUrl}/orders`);
    if (res.status === 200) {
      dispatch(getOrders(res.data.orders));
      dispatch(getLengths(res.data.lengths));
    }
  } catch (e) {
    console.log(e);
  }
};

export const updateOrder = async (orderId: number) => {
  try {
    const res = await axios.patch(`${baseUrl}/orders/${orderId}`);
    return res;
  } catch (e) {
    console.log(e);
  }
};

export const getOrder = async (orderId: number) => {
  try {
    const res = await axios.get(`${baseUrl}/orders/${orderId}`);
    return res;
  } catch (e) {
    console.log(e);
  }
};
