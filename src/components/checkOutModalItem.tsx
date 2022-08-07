import React, { useState } from "react";
import { Container, Image } from "react-bootstrap";
import { AppProps, cartStateType } from "../types";
import { captilize } from "../utils/functions";
import del from "../assets/icons8-delete-80.png";
import { useSelector, useDispatch } from "react-redux";
import { getAllItemsInCart } from "../redux/actions/cart";
import { editCart, mult } from "../utils/functions";
import { useNavigate } from "react-router";

const CheckOutModalItem = ({ orderInCart, onHide }: AppProps) => {
  const total = mult(orderInCart?.Qty, orderInCart?.price);
  const name = captilize(orderInCart?.name);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let [count, setCount] = useState(orderInCart?.Qty || 0);
  let ordersInCart = useSelector((state: cartStateType) => state.cart);

  const editcart = (num: number) => {
    const result = editCart(num, count, ordersInCart, orderInCart);
    setCount(result.count);
    dispatch(getAllItemsInCart(result.ordersInCart));
    if (ordersInCart.length === 1 && ordersInCart[0].Qty === 0) {
      onHide && onHide();
      navigate("/");
    }
  };

  const deleteItemFromCart = () => {
    ordersInCart = ordersInCart.filter((order) => order.id !== orderInCart?.id);
    dispatch(getAllItemsInCart(ordersInCart));
    localStorage.setItem("cart", JSON.stringify(ordersInCart));
    if (ordersInCart.length === 0) {
      onHide && onHide();
      navigate("/");
    }
  };

  return (
    <div className="mb-4">
      <Container className="d-flex justify-content-center align-items-center gap-2">
        <Image src={orderInCart?.imgUrl} style={{ width: "70px" }} />
        <div className="m0">
          <p>{name}</p>
          <div className="d-flex justfiy-content-between gap-2 ">
            <span>Qty: {orderInCart?.Qty}</span>
            <span onClick={() => editcart(-1)} style={{cursor:'pointer'}}>-</span>
            <span onClick={() => editcart(1)} style={{cursor:'pointer'}}>+</span>
          </div>
          <div className="d-flex justfiy-content-between gap-3">
            <p>Total: LE {total}</p>
            <Image
              src={del}
              style={{ width: "20px",height:'20px',cursor:'pointer'}}
              onClick={() => deleteItemFromCart()}
              
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CheckOutModalItem;
