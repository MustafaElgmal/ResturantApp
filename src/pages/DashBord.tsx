import React, { useEffect, useState } from "react";
import CardOrder from "../components/CardOrder";
import DashBordBar from "../components/DashBordBar";
import { orderType } from "../types";
import { getAllOrders } from "../utils/apis";

const DashBord = () => {
  const NotComlitedOrders=localStorage.getItem('NotComlitedOrders')
  const initial=NotComlitedOrders!==null?JSON.parse(NotComlitedOrders):[]
  const [notComlitedOrders, setNotComlitedOrders] = useState(initial);
  const getOrders = async () => {
    const res = await getAllOrders();
    if (res?.status === 200) {
      const notComlitedOrders = res?.data.orders.filter(
        (order: orderType) => !order.isComplited
      );
      setNotComlitedOrders(notComlitedOrders);
      localStorage.setItem(
        "NotComlitedOrders",
        JSON.stringify(notComlitedOrders)
      );
    } else {
      console.log(res?.data.message);
    }
  };
  useEffect(() => {
    getOrders();
  }, []);
  return (
    <section className="d-flex justfiy-content-between gap-4">
      <DashBordBar />
      <div className="d-flex justify-content-center">
        <div className="flex-wrap d-flex">
        {notComlitedOrders.map((order:orderType) => {
            if (!order.isComplited) {
              return <CardOrder key={order.id} order={order} />;
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default DashBord;
