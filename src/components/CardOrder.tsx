import React,{useEffect, useState} from "react";
import { AppProps, orderType } from "../types";
import { Card, Row, Col, Button } from "react-bootstrap";
import { captilize, orderColor } from "../utils/functions";
import { getAllOrders, getOrder, updateOrder } from "../utils/apis";
import { useDispatch } from "react-redux";
import moment from "moment";



const CardOrder = ({ orderId, bool }: AppProps) => {
  const dispatch=useDispatch()
  const [order,setOrder]=useState({} as orderType)

  const orderFinshed = async() => {
   const res=await updateOrder(orderId as number)
   if(res?.status===200){
    setOrder(res.data.order)
  }
   await getAllOrders(dispatch)
  };

  const findOrder=async()=>{
    const res=await getOrder(orderId as number)
    if(res?.status===200){
      setOrder(res.data.order)
    }
  }

  useEffect(()=>{
    findOrder()
  },[])


  return (
    <section className="mt-2 me-2">
      <div className="div"></div>
      {order.isCompleted===bool? 
      <Card style={{ width: "22rem" }}>
        <Card.Header style={orderColor(order,bool as boolean)} className="p-3">
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
      </Card>:null}
     
      
    </section>
  );
};

export default CardOrder;
