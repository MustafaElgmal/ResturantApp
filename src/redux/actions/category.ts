import { categoryType } from "../../types";

export const getAllCategory=(category:categoryType)=>{
    return{
        type:'GETCATEGORY',
        payload:category
    }

}