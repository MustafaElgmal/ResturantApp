import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import CreateCatogory from "../components/CreateCatogory";
import CreateItem from "../components/CreateItem";
import CreateUser from "../components/CreateUser";

const AdminPanal = () => {
  const [usershow, setuserShow] = useState<boolean>(false);
  const [itemshow, setitemShow] = useState<boolean>(false);
  const [catshow, setcatShow] = useState<boolean>(false);
  return (
    <section className="d-flex justfiy-content-between gap-4 min-vh-100 mt-5">
      <Container style={{ margin: "15%" }}>
        <Row>
          <Col>
            <Button
              style={{
                width: "50%",
                height: "100%",
                background: "#FF9200",
                borderRadius: "20px",
                borderColor: "#FF9200",
              }}
              onClick={() => setuserShow(true)}
            >
              Add user
            </Button>
          </Col>
          <Col>
            <Button
              style={{
                width: "50%",
                height: "100%",
                background: "#FF9200",
                borderRadius: "20px",
                borderColor: "#FF9200",
              }}
              onClick={() => setcatShow(true)}
            >
              Add category
            </Button>
          </Col>
          <Col>
            <Button
              style={{
                width: "50%",
                height: "100%",
                background: "#FF9200",
                borderRadius: "20px",
                borderColor: "#FF9200",
              }}
              onClick={() => setitemShow(true)}
            >
              Add item
            </Button>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <Button
              style={{
                width: "50%",
                height: "100%",
                background: "#FF9200",
                borderRadius: "20px",
                borderColor: "#FF9200",
              }}
            >
              Delete user
            </Button>
          </Col>
          <Col>
            <Button
              style={{
                width: "50%",
                height: "100%",
                background: "#FF9200",
                borderRadius: "20px",
                borderColor: "#FF9200",
              }}
            >
              Delete category
            </Button>
          </Col>
          <Col>
            <Button
              style={{
                width: "50%",
                height: "100%",
                background: "#FF9200",
                borderRadius: "20px",
                borderColor: "#FF9200",
              }}
            >
              Delete item
            </Button>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <Button
              style={{
                width: "50%",
                height: "100%",
                background: "#FF9200",
                borderRadius: "20px",
                borderColor: "#FF9200",
              }}
            >
              Edit user
            </Button>
          </Col>
          <Col>
            <Button
              style={{
                width: "50%",
                height: "100%",
                background: "#FF9200",
                borderRadius: "20px",
                borderColor: "#FF9200",
              }}
            >
              Edit category
            </Button>
          </Col>
          <Col>
            <Button
              style={{
                width: "50%",
                height: "100%",
                background: "#FF9200",
                borderRadius: "20px",
                borderColor: "#FF9200",
              }}
            >
              Edit item
            </Button>
          </Col>
        </Row>
      </Container>
      <CreateUser show={usershow} onHide={() => setuserShow(false)} />
      <CreateCatogory show={catshow} onHide={() => setcatShow(false)} />
      <CreateItem show={itemshow} onHide={() => setitemShow(false)} />
    </section>
  );
};

export default AdminPanal;
