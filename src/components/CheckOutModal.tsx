import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AppProps } from "../types";
import CheckOutModalItem from "./checkOutModalItem";

const CheckOutModal = ({ show, onHide, item }: AppProps) => {
  const [items, setItems] = useState([
    {
      id: 7,
      name: "Seafood",
      description: "Shrimpo squid paper",
      price: 120,
      type: "drink",
      popular: true,
    },
    {
      id: 8,
      name: "Seafood",
      description: "Shrimpo squid paper",
      price: 120,
      type: "drink",
      popular: true,
    },
    {
      id: 9,
      name: "Seafood",
      description: "Shrimpo squid paper",
      price: 120,
      type: "drink",
      popular: true,
    },
  ]);
  let [total, setTotal] = useState(0);
  useEffect(() => {
    let sum = 0;
    items.forEach((item) => (sum += item.price));
    setTotal(sum);
  }, [items]);
  return (
    <Modal
      size="sm"
      show={show}
      onHide={() => {
        onHide && onHide();
      }}
      aria-labelledby="example-modal-sizes-title-sm"
      style={{ marginLeft: "37%", marginTop: "3%" }}
      scrollable={true}
      className='min-vh-100'
    >
      <Modal.Body>
        {items.map((item) => (
          <CheckOutModalItem key={item.id} item={item} />
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
          >
            CheckOut
          </Link>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CheckOutModal;
