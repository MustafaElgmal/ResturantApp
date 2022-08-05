import { ItemTypes } from "../../types";

export const getAllItems=(item:ItemTypes)=>{
    return{
        type:'GETITEMS',
        payload:item
    }

}