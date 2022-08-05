import React, { useEffect, useState } from "react";
import { AppProps, orderType } from "../types";
import { Card, Row, Col, Button } from "react-bootstrap";
import { captilize } from "../utils/functions";
import { updateOrder } from "../utils/apis";
import moment from 'moment'


const CardOrder = ({ order, bool }: AppProps) => {
  const [clockState,setClockState]=useState('')
 
  const orderFinshed = async() => {
   await updateOrder(order as orderType)
  };
  const d=order?.createdAt||''
  const date=moment().format()
  console.log(d)
 

  

  return (
    <section className="mt-2 me-2">
      <div className="div"></div>
      <Card style={{ width: "22rem" }}>
        <Card.Header style={{ backgroundColor:`${bool?'#303030':"#2fcd17"}`,color:'white'}} className="p-3">
          {clockState}
        </Card.Header>
        <Card.Body>
          {order?.orderItems?.map((item) => (
            <Row
              key={item.id}
              className={`d-flex justfiy-content-between ${bool?'decoration':null}`}
              
            >
              <Col xs={6} md={6} lg={6}>
                <Card.Text className="fw-bold">{`${captilize(
                  item.item.name
                )}`}</Card.Text>
              </Col>
              <Col>
                <Card.Text>{`Qty: ${item.Qty}`}</Card.Text>
              </Col>
            </Row>
          ))}
          {!bool? (
            <Row>
              <Button
                style={{
                  width: "20%",
                  marginLeft: "75%",
                  backgroundColor: "#303030",
                  borderColor: "#303030",
                }}
                onClick={() => orderFinshed()}
              >
                Done
              </Button>
            </Row>
          ) : null}
        </Card.Body>
      </Card>
    </section>
  );
};

export default CardOrder;
