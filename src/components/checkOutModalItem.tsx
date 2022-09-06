import React, { useState } from "react";
import { Container, Image } from "react-bootstrap";
import { AppProps, cartStateType } from "../types";
import { captilize, deleteItemFromCart } from "../utils/functions";
import del from "../assets/icons8-delete-80.png";
import { useSelector, useDispatch } from "react-redux";
import { editCart, mult } from "../utils/functions";
import { useNavigate } from "react-router";

const CheckOutModalItem = ({ item, onHide }: AppProps) => {
  const total = mult(item?.Qty!, item?.price!);
  const name = captilize(item?.name!);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let [count, setCount] = useState<number>(item?.Qty!);
  let itemsInCart = useSelector((state: cartStateType) => state.cart);

  return (
    <div className="mb-4">
      <Container className="d-flex justify-content-center align-items-center gap-2">
        <Image src={item?.imgUrl} style={{ width: "70px" }} />
        <div className="m0">
          <p>{name}</p>
          <div className="d-flex justfiy-content-between gap-2 ">
            <span>Qty: {item?.Qty}</span>
            <span onClick={() => editCart(-1,count,itemsInCart,item!,setCount,dispatch,onHide!,navigate)} style={{cursor:'pointer'}}>-</span>
            <span onClick={() => editCart(1,count,itemsInCart,item!,setCount,dispatch,onHide!,navigate)} style={{cursor:'pointer'}}>+</span>
          </div>
          <div className="d-flex justfiy-content-between gap-3">
            <p>Total: LE {total}</p>
            <Image
              src={del}
              style={{ width: "20px",height:'20px',cursor:'pointer'}}
              onClick={() => deleteItemFromCart(itemsInCart,item!,dispatch,onHide!,navigate)}
              
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CheckOutModalItem;
