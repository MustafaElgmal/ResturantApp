import React from "react";
import { ModalFooter, Container, Image } from "react-bootstrap";
import logo from "../assets/image.png";

const Footer = () => {
  return (
    <ModalFooter style={{ backgroundColor: "#303030" }}>
      <Container className="d-flex justify-content-between">
        <div className="d-flex align-items-center ">
          <h6 style={{ color: "#FFFFFF" }} className="mt-1">
            OBSD
          </h6>
          <Image src={logo} style={{ width: "20px" }} />
        </div>
        <div
          style={{ color: "#FFFFFF" ,marginRight:'25%'}}
        >
          <p>&copy; 2022 OBSD-All Rights Reserved.</p>
        </div>
        <div></div>
      </Container>
    </ModalFooter>
  );
};

export default Footer;
