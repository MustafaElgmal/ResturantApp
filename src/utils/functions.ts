import { useDispatch } from "react-redux";
import { ItemTypes } from "../types";
import { getItems } from "./apis";


export const itemFilter=(items:ItemTypes[],type:string)=>{
    let itemsfilter=[]
    if(type==='popular'){
        itemsfilter=items.filter((item)=>item.popular===true)
        

    }else{
        itemsfilter=items.filter((item)=>item.category?.name===type)

    }
    return itemsfilter
}

export const captilize=(name:string="")=>{
    let nameCap=name.split(' ').map((ele)=>ele[0].toLocaleUpperCase()+ele.slice(1)).join(' ')
    return nameCap

}


export const editCart = (num: number,count:number=0,ordersInCart:ItemTypes[]=[],item:ItemTypes={}) => {
    num === -1
      ? count > 0
        ?(count += num)
        : count=0
      : (count += num)
    const orderFind = ordersInCart.find((order) => order.id === item?.id);
    if (orderFind) {
      ordersInCart=ordersInCart.filter((order)=>order.id===item?.id?order.Qty=count:order.Qty)
    } else {
        ordersInCart=[...ordersInCart,{...item,Qty:count}]
    }
    ordersInCart=ordersInCart.filter((order)=>order?.Qty!==0)
    localStorage.setItem('cart',JSON.stringify(ordersInCart))
    return {count,ordersInCart}

  };

  export const mult=(num1:number=0,num2:number=0)=>{
    return num1*num2
  }

  export const updateItems=async()=>{
    const res=await getItems()
    if(res?.status===200){
      return {data:res?.data.items}
    }else{
      console.log("Not get Items")
    }
    return {data:[]}
  }


