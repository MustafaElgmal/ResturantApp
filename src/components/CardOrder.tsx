import React from "react";
import { AppProps } from "../types";
import { Card } from "react-bootstrap";

const CardOrder = ({ order }: AppProps) => {
  const checked = () => {

  };
  return (
    <section className="mt-2 me-2">
      <div className="div"></div>
      <Card style={{ width: "15rem" }}>
        <Card.Header style={{ backgroundColor: "#2fcd17"}} className="p-3"/>
        <Card.Body>
          {order?.map((item) => (
            <div
              className="d-flex justfiy-content-between gap-2"
              key={item.id}
            >
              <input type="checkbox" className="mb-3" onClick={checked} />
              <Card.Text className="fw-bold">{`${item.name}`}</Card.Text>
              <Card.Text>{`Qty: ${item.Qty}`}</Card.Text>
            </div>
          ))}
        </Card.Body>
      </Card>
    </section>
  );
};

export default CardOrder;
