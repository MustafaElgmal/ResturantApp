export interface AppProps {
  item?: ItemTypes;
  show?: boolean;
  onHide?: Function;
  mytimeout?: Function;
  order?: orderType;
  orderId?: number;
  bool?: boolean;
  orderNo?: string;
  user?: userType;
  orderInCart?: ItemTypes;
}

export interface userType {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  type: string;
  imgUrl?: string;
  dateOfBirth?: Date;
}
export interface userActionType {
  type: string;
  payload: {
    user: userType;
    isLoggedIn: boolean;
  };
}

export interface userStateType {
  user: {
    user: userType;
    isLoggedIn: boolean;
  };
}
export interface categoryType {
  id: number;
  name: string;
}
export interface categoryActionType {
  type: string;
  payload: categoryType[];
}

export interface categoryStateType {
  category: categoryType[];
}
export interface ItemTypes {
  id?: number;
  name: string;
  description: string;
  price: number;
  imgUrl: string;
  popular: boolean;
  category: categoryType;
  Qty?: number;
}
export interface itemActionType {
  type: string;
  payload: ItemTypes[];
}
export interface itemStateType {
  item: ItemTypes[];
}

export interface cartActionType {
  type: string;
  payload: ItemTypes[];
}
export interface cartStateType {
  cart: ItemTypes[];
}

export interface orderItemType {
  id?: number;
  Qty: number;
  item: ItemTypes;
}
export interface orderType {
  id?: number;
  mobile: string;
  city: string;
  address: string;
  user: userType;
  orderItems: orderItemType[];
  isCompleted?: boolean;
  orderNo?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
export interface lengthTypes {
  pendingOrdersLength: number;
  completedOrdersLength: number;
}
export interface orderActionType {
  type: string;
  payload:{ orders: orderType[]; lengths: lengthTypes };
}

export interface orderStateType {
  order: { orders: orderType[]; lengths: lengthTypes };
}
