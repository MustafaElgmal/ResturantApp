import {ItemTypes } from "../../types"

export const getAllOrdersInCart=(orders:ItemTypes[])=>{
    return{
        type:'GETALLORDERSINCART',
        payload:orders
    }

}