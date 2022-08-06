import React, { useEffect, useState } from "react";
import { Badge, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import CardOrder from "../components/CardOrder";
import { lengthStateTypes, orderStateType, orderType } from "../types";
import { getAllOrders } from "../utils/apis";

const DashBord = () => {
  const dispatch=useDispatch()
  const [bool, SetBool] = useState(false)
  const Orders=useSelector((state:orderStateType)=>state.order)
  const lengths=useSelector((state:lengthStateTypes)=>state.lengths)

  const updateOrders=async()=>{
    await getAllOrders(dispatch)
  }

  useEffect(()=>{
    updateOrders()
  },[])
 
  return (
    <section className="d-flex justfiy-content-between gap-4 min-vh-100 mt-5">
      <Col xs={1} md={2} lg={2} style={{ background: "#303030" }}>
        <Row style={{ color: "white" }} className="mt-4 pt-3">
          <p style={{ textAlign: "center" }}>DASHBOARD</p>
          <hr />
        </Row>
        <Row style={{ color: "white" }}>
          <p style={{ textAlign: "center",cursor:'pointer' }} onClick={() => SetBool(false)}>
            Pending Orders
            <Badge bg="danger" className="ms-3">{lengths.pendingOrdersLength}</Badge>
          </p>
          <hr />
        </Row>
        <Row style={{ color: "white" }}>
          <p style={{ textAlign: "center",cursor:'pointer' }} onClick={() => SetBool(true)}>
            Completed Orders
            <Badge bg="danger" className="ms-2">{lengths.completedOrdersLength}</Badge>
          </p>
          <hr />
        </Row>
      </Col>

      <div className="d-flex justify-content-center">
        <div className="flex-wrap d-flex align-content-start">
          {Orders.map((order: orderType) => {
              if (order.isCompleted===bool) {
                return <CardOrder key={order.id} orderId={order.id} bool={bool}/>;
              }
          })}
        </div>
      </div>

    </section>
  );
};

export default DashBord;
