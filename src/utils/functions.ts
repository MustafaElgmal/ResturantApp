import { ItemTypes } from "../types";

export const itemFilter=(items:ItemTypes[],type:string)=>{
    let itemsfilter=[]
    if(type==='popular'){
        itemsfilter=items.filter((item)=>item.popular===true)
        

    }else{
        itemsfilter=items.filter((item)=>item.category?.name===type)

    }
    return itemsfilter
}

export const captilize=(name:string)=>{
    let nameCap=name.split(' ').map((ele)=>ele[0].toLocaleUpperCase()+ele.slice(1)).join(' ')
    return nameCap

}