import React from "react";
import { AppProps } from "../types";
import { Card } from "react-bootstrap";
import { captilize } from "../utils/functions";

const CardOrder = ({ order }: AppProps) => {
  return (
    <section className="mt-2 me-2">
      <div className="div"></div>
      <Card style={{ width: "15rem" }}>
        <Card.Header style={{ backgroundColor: "#2fcd17"}} className="p-3"/>
        <Card.Body>
          {order?.orderItems?.map((item)=>(
             <div key={item.id} className="d-flex justfiy-content-between gap-2">
             <input type="checkbox" className="mb-3" />
             <Card.Text className="fw-bold">{`${captilize(item.item.name)}`}</Card.Text>
             <Card.Text>{`Qty: ${item.Qty}`}</Card.Text>
       </div>
          ))}
       
          
        </Card.Body>
      </Card>
    </section>
  );
};

export default CardOrder;
