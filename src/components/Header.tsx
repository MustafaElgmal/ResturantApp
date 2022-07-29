import React, { useState } from "react";
import { Navbar, Container, Image, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/image.png";
import navigation from "../assets/fast-delivery (1).png";
import CheckOutModal from "./CheckOutModal";

const Header = () => {
  const [show, setShow] = useState(false);
 
  return (
    <Navbar
      className="fixed-top navbar-expand-lg"
      style={{ backgroundColor: "#303030", height: "4rem" }}
    >
      <Container className="d-flex justify-content-between">
        <div className="d-flex justify-content-start ">
          <Link  to="/" className="fs-1 fw-bold" style={{ color: "#FFFFFF",textDecoration:'none' }}>
            OBSD
          </Link>
            <Image src={logo} />
          
        </div>
        <div
          className="d-flex justify-content-end gap-3"
          style={{ color: "#FFFFFF" }}
        >
          <span>Menu</span>
          <span>Most Popular</span>
          <Image
            src={navigation}
            style={{ width: "10%" }}
            onClick={() => setShow(true)}
          />
        </div>
      </Container>

      <CheckOutModal show={show} onHide={() => setShow(false)} />
    </Navbar>
  );
};

export default Header;
