import axios from "axios";
import { Dispatch } from "redux";
import { getOrders } from "../redux/actions/orders";
import { ItemTypes, orderType, userType } from "../types";

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

export const loginUser = async (user: {
  email: string;
  password: string;
}): Promise<{
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
    const orderr = {
      user: order.user,
      mobile: order.mobile,
      city: order.city,
      address: order.address,
      orderItems: order.orderItems,
    };
    const res = await axios.post(`${baseUrl}/orders`, orderr);
    if (res?.status === 201) {
      alert("Order is created!");
      return res.data.order.orderNo
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
      const orders = { orders: res.data.orders, lengths: res.data.lengths };
      dispatch(getOrders(orders));
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

export const createItem = async (item: ItemTypes) => {
  const { category } = item;
  try {
    const res = await axios.post(`${baseUrl}/items/${category.id}`, item);
    return res;
  } catch (e: any) {
    if (e.status === 500) {
      console.log(e);
    } else {
      alert(e.response.data.message);
    }
  }
};

export const createCategory = async (cate: { name: string }) => {
  try {
    const res = await axios.post(`${baseUrl}/categories`, cate);
    return res;
  } catch (e: any) {
    if (e.status === 500) {
      console.log(e);
    } else {
      alert(e.response.data.message);
    }
  }
};
