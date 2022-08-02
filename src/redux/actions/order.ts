import { orderType } from "../../types";

export const getAllOrders=(order:orderType)=>{
    return{
        type:'GETALLORDERS',
        payload:order
    }

}