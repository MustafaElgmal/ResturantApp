import React, { useEffect, useState } from "react";
import { AppProps, orderType, userStateType } from "../types";
import { Card, Row, Col, Button } from "react-bootstrap";
import { captilize, orderColor, orderFinshed } from "../utils/functions";
import { getOrder } from "../utils/apis";
import { useDispatch, useSelector } from "react-redux";
import Clock from "react-live-clock";
import moment from "moment";

const CardOrder = ({ orderId, bool }: AppProps) => {
  const user = useSelector((state: userStateType) => state.user);
  const dispatch = useDispatch();
  const [order, setOrder] = useState<orderType>();

  const findOrder = async () => {
    await getOrder(orderId!, user.token, setOrder);
  };

  useEffect(() => {
    findOrder();
  }, []);

  return (
    <section className="mt-2 me-2">
      <div className="div"></div>
      {order?.isCompleted === bool ? (
        <Card style={{ width: "22rem" }}>
          <Card.Header
            style={orderColor(order as orderType, bool as boolean)}
            className="p-2"
          >
            {!bool ? (
              <Clock
                format={"H:mm:ss"}
                ticking={true}
                timezone={"Africa/Cairo"}
                date={
                  orderColor(order as orderType, bool as boolean).time - 7200000
                }
              />
            ) : (
              <p style={{ margin: "0px" }}>
                {moment(order?.updatedAt?.toString()).format(
                  "DD MM YY HH:mm:ss"
                )}
              </p>
            )}
          </Card.Header>
          <Card.Body>
            {order?.orderItems?.map((item) => (
              <Row
                key={item.id}
                className={`d-flex justfiy-content-between ${
                  bool ? "decoration" : null
                }`}
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
            {!bool ? (
              <Row>
                <Button
                  style={{
                    width: "20%",
                    marginLeft: "75%",
                    backgroundColor: "#303030",
                    borderColor: "#303030",
                  }}
                  onClick={() =>
                    orderFinshed(orderId!, setOrder, dispatch, user.token)
                  }
                >
                  Done
                </Button>
              </Row>
            ) : null}
          </Card.Body>
        </Card>
      ) : null}
    </section>
  );
};

export default CardOrder;
