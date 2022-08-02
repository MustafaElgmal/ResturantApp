export interface AppProps{
    item?:ItemTypes,
    show?:boolean,
    onHide?:Function,
    mytimeout?:Function,
    order?:orderType[],
    user?:userType,
}
export interface ItemTypes{
    id:number,
    name:string,
    description:string,
    price:number,
    imgUrl?:string,
    popular:boolean,
    categoryId?:number,
    category?:categoryType
    
}
export interface itemActionType{
    type:string,
    payload:ItemTypes
}
export interface itemStateType{
    item:ItemTypes[]
}
export interface orderType{
    id?:number,
    name?:string,
    description?:string,
    price?:number,
    imgUrl?:string,
    popular?:boolean,
    categoryId?:number,
    category?:categoryType
    Qty:number
}
export interface orderActionType{
    type:string,
    payload:orderType[]
}

export interface orderStateType{
    order:orderType[]
}
export interface userType{
    id?:number
    firstName?:string
    lastName?:string
    email?:string
    password?:string
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

