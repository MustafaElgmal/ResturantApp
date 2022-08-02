import React, { useState } from "react";
import CardOrder from "../components/CardOrder";
import DashBordBar from "../components/DashBordBar";

const DashBord = () => {
  const [orders, setOrder] = useState([
    [
      { id: 1, name: "Seafood", Qty: 1 },
      { id: 2, name: "Seafood", Qty: 1 },
      { id: 3, name: "Seafood", Qty: 1 },
    ],
    [
      { id: 1, name: "Seafood", Qty: 1 },
      { id: 2, name: "Seafood", Qty: 1 },
      { id: 3, name: "Seafood", Qty: 1 },
      { id: 4, name: "Seafood", Qty: 1 },
    ],
    [
      { id: 1, name: "Seafood", Qty: 1 },
      { id: 2, name: "Seafood", Qty: 1 },
      { id: 3, name: "Seafood", Qty: 1 },
      { id: 4, name: "Seafood", Qty: 1 },
    ],
    [
      { id: 1, name: "Seafood", Qty: 1 },
      { id: 2, name: "Seafood", Qty: 1 },
      { id: 3, name: "Seafood", Qty: 1 },
      { id: 4, name: "Seafood", Qty: 1 },
    ],
  ]);
  return (
    <section className="d-flex justfiy-content-between gap-4">
      <DashBordBar />
      <div className="d-flex justify-content-center">
        <div className="flex-wrap d-flex">
          {orders.map((order, index) => (
            <CardOrder key={index} order={order} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DashBord;
