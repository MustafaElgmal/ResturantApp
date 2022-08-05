import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import CardOrder from "../components/CardOrder";
import { orderType } from "../types";
import { getAllOrders } from "../utils/apis";

const DashBord = () => {
  const AllOrders = localStorage.getItem("AllOrders");
  const initialOrders = AllOrders !== null ? JSON.parse(AllOrders) : [];
  const [Orders, SetAllOrders] = useState(initialOrders);
  const [bool, SetBool] = useState(false);
  const getOrders = async () => {
    const res = await getAllOrders();
    if (res?.status === 200) {
      SetAllOrders(res.data.orders);
      localStorage.setItem("AllOrders", JSON.stringify(res.data.orders));
    } else {
      if (res?.status === 500) {
        console.log(res?.data.error);
      } else {
        console.log(res?.data.message);
      }
    }
  };
  useEffect(() => {
    getOrders();
  }, []);
  return (
    <section className="d-flex justfiy-content-between gap-4 min-vh-100 mt-5">
      <Col xs={1} md={2} lg={2} style={{ background: "#303030" }}>
        <Row style={{ color: "white" }} className="mt-4 pt-3">
          <p style={{ textAlign: "center" }}>DASHBOARD</p>
          <hr />
        </Row>
        <Row style={{ color: "white" }}>
          <p style={{ textAlign: "center" }} onClick={() => SetBool(false)}>
            Pending Orders
          </p>
          <hr />
        </Row>
        <Row style={{ color: "white" }}>
          <p style={{ textAlign: "center" }} onClick={() => SetBool(true)}>
            Completed Orders
          </p>
          <hr />
        </Row>
      </Col>

      <div className="d-flex justify-content-center">
        <div className="flex-wrap d-flex align-content-start">
          {Orders.map((order: orderType) => {
              if (order.isCompleted===bool) {
                return <CardOrder key={order.id} order={order} bool={bool} />;
              }
          })}
        </div>
      </div>
    </section>
  );
};

export default DashBord;
