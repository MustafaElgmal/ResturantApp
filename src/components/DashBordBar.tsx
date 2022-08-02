import React from "react";
import { Col, Row } from "react-bootstrap";

const DashBordBar = () => {
  return (
    <Col xs={3} md={2} lg={1}
      style={{
        backgroundColor: "#303030",
        color: "white",
        minHeight: "100vh",
      }}
    >
      <div className="div"></div>
      <Col >
        <Row className="p-3" xs={3} md={2} lg={1}>DASHBORD</Row>
        <hr />
        <Row className="p-3" onClick={() => console.log("jdkj")} xs={3} md={2} lg={1}>
          Pending Orders
        </Row>
        <hr />
        <Row className="p-3" onClick={() => console.log("jdkj")} xs={3} md={2} lg={1}>
          Completed Orders
        </Row>
        <hr />
      </Col>
    </Col>
  );
};

export default DashBordBar;
