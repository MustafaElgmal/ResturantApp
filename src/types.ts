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

export interface userCreate {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  type: string;
}
export interface userType extends userCreate{
  id:number,
  imgUrl:string|null,
  dateOfBirth:Date|null,
  orders:orderType[]|null
}
export interface userActionType {
  type: string;
  payload: {
    token:string,
    type:string,
    isLoggedIn: boolean;
  };
}

export interface userStateType {
  user: {
    token:string;
    type:string
    isLoggedIn: boolean;
  };
}
export interface type{
  name: string;
  description: string;
  price: number;
  imgUrl: string;
  popular: boolean;
}
export interface itemCreate extends type{
  categoryId:number;
}
export interface ItemTypes extends type {
  id: number;
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
