import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AppProps, cartStateType } from "../types";
import { mult } from "../utils/functions";
import CheckOutModalItem from "./CheckOutModalItem";

const CheckOutModal = ({ show, onHide }: AppProps) => {
  const itemsInCart = useSelector((state: cartStateType) => state.cart);

  let [total, setTotal] = useState(0);

  const setTotalMoneyOfCart = () => {
    let sum = 0;
    itemsInCart.forEach((item) => (sum += mult(item.Qty as number, item.price)));
    setTotal(sum);
  };
  useEffect(() => {
    setTotalMoneyOfCart();
  }, [itemsInCart]);
  return (
    <Modal
      size="sm"
      show={show}
      onHide={() => {
        onHide && onHide();
      }}
      aria-labelledby="example-modal-sizes-title-sm"
      scrollable={true}
      className="min-vh-100  mg"
    >
      <Modal.Body>
        {itemsInCart.map((item) => (
          <CheckOutModalItem
            key={item.id}
            item={item}
            onHide={onHide}
          />
        ))}
        <hr />
        <div className="d-flex justify-content-center">
          <p>SupTotal: LE {total}</p>
        </div>
        <div className="d-flex justify-content-center">
          <Link
            to="/checkOut"
            className="btn btn-warning"
            onClick={() => {
              onHide && onHide();
            }}
            style={{ backgroundColor: "#FF9200", borderColor: "#FF9200" }}
          >
            CheckOut
          </Link>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CheckOutModal;
