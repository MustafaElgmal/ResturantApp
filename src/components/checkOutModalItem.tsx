import React, { useState } from "react";
import { Container, Image } from "react-bootstrap";
import { AppProps, cartStateType } from "../types";
import pizza from "../assets/—Pngtree—seafood pizza with cheese_4942142.png";
import { captilize } from "../utils/functions";
import plus from "../assets/add.png";
import minus from "../assets/minus.png";
import del from "../assets/icons8-delete-80.png"
import { useSelector,useDispatch } from "react-redux";
import { getAllOrdersInCart } from "../redux/actions/cart";
import { editCart,mult} from "../utils/functions";

const CheckOutModalItem = ({ orderInCart }:AppProps) => {
  const total=mult(orderInCart?.Qty,orderInCart?.price)
  const name=captilize(orderInCart?.name)
  const dispatch = useDispatch();
  let [count, setCount] = useState(orderInCart?.Qty||0);
  let ordersInCart = useSelector((state: cartStateType) => state.cart);
  

  const editcart=(num:number)=>{
    const result=editCart(num,count,ordersInCart,orderInCart)
    setCount(result.count)
    dispatch(getAllOrdersInCart(result.ordersInCart))

  }

  const deleteItemFromCart=()=>{
    ordersInCart=ordersInCart.filter((order)=>order.id!==orderInCart?.id)
    dispatch(getAllOrdersInCart(ordersInCart))
    localStorage.setItem('cart',JSON.stringify(ordersInCart))
  }

  return (
    <div className="mb-4">
      <Container className="d-flex justify-content-center align-items-center gap-2">
        <Image src={orderInCart?.imgUrl} style={{ width: "70px" }} />
        <div className="m0">
          <p>{name}</p>
          <div className='d-flex justfiy-content-between gap-3'>
          <p>Qty: {orderInCart?.Qty}</p>
          <Image src={minus} style={{width:'9px'}} onClick={()=>editcart(-1)}/>
          <Image src={plus} style={{width:'9px'}} onClick={()=>editcart(1)}/>
          </div>
          <div className='d-flex justfiy-content-between gap-3'>
          <p>Total: LE {total}</p>
          <Image src={del} style={{width:'20px'}} onClick={()=>deleteItemFromCart()}/>

          </div>
          
          
        </div>
      </Container>
    </div>
  );
};

export default CheckOutModalItem;
