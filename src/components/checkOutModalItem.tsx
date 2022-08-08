import React, { useState } from "react";
import { Container, Image } from "react-bootstrap";
import { AppProps, cartStateType, ItemTypes } from "../types";
import { captilize } from "../utils/functions";
import del from "../assets/icons8-delete-80.png";
import { useSelector, useDispatch } from "react-redux";
import { getAllItemsInCart } from "../redux/actions/cart";
import { editCart, mult } from "../utils/functions";
import { useNavigate } from "react-router";

const CheckOutModalItem = ({ item, onHide }: AppProps) => {
  const total = mult(item?.Qty as number, item?.price as number);
  const name = captilize(item?.name as string);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let [count, setCount] = useState(item?.Qty as number);
  let itemsInCart = useSelector((state: cartStateType) => state.cart);

  const editcart = (num: number) => {
    const result = editCart(num, count, itemsInCart, item as ItemTypes);
    setCount(result.count);
    dispatch(getAllItemsInCart(result.itemsInCart));
    if (itemsInCart.length === 1 && itemsInCart[0].Qty === 0) {
      onHide && onHide();
      navigate("/");
    }
  };

  const deleteItemFromCart = () => {
    itemsInCart = itemsInCart.filter((order) => order.id !== item?.id);
    dispatch(getAllItemsInCart(itemsInCart));
    localStorage.setItem("cart", JSON.stringify(itemsInCart));
    if (itemsInCart.length === 0) {
      onHide && onHide();
      navigate("/");
    }
  };

  return (
    <div className="mb-4">
      <Container className="d-flex justify-content-center align-items-center gap-2">
        <Image src={item?.imgUrl} style={{ width: "70px" }} />
        <div className="m0">
          <p>{name}</p>
          <div className="d-flex justfiy-content-between gap-2 ">
            <span>Qty: {item?.Qty}</span>
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
