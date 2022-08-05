export interface AppProps{
    item?:ItemTypes,
    show?:boolean,
    onHide?:Function,
    mytimeout?:Function,
    order?:orderType,
    bool?:boolean,
    orderNo?:string,
    user?:userType,
    orderInCart?:ItemTypes
    orderItemTypes?:orderItemTypes
}
export interface userType{
    id?:number
    firstName?:string
    lastName?:string
    email:string
    password:string
    type?:string
    imgUrl?:string
    dateOfBirth?:Date
}
export interface userActionType{
    type:string,
    payload:{
        user:userType,
        isLoggedIn:boolean
    }
}

export interface userStateType{
    user: {
        user: userType,
        isLoggedIn: boolean
    }
    
}
export interface categoryType{
    id:number,
    name:string
    items:ItemTypes[]
}
export interface categoryActionType{
    type:string,
    payload:categoryType

}

export interface categoryStateType{
    category:categoryType[]
}
export interface ItemTypes{
    id?:number,
    name?:string,
    description?:string,
    price?:number,
    imgUrl?:string,
    popular?:boolean,
    category?:categoryType
    Qty?:number
    
}
export interface itemActionType{
    type:string,
    payload:ItemTypes
}
export interface itemStateType{
    item:ItemTypes[]
}

export interface cartActionType{
    type:string,
    payload:ItemTypes[]
}
export interface cartStateType{
    cart:ItemTypes[]
}

export interface orderItemType{
    itemId:number,Qty:number
}
export interface orderType{
    id?:number,
    userId:number,
    mobile:string,
    city:string,
    address:string,
    items:orderItemType[],
    isCompleted?:boolean,
    orderNo?:string,
    orderItems?:orderItemTypes[],
    createdAt?:Date
   
}
export interface orderActionType{
    type:string,
    payload:orderType[]
}

export interface orderStateType{
    order:orderType[]
}

export interface orderItemTypes{
    id:number,
    Qty:number,
    item:ItemTypes
}

