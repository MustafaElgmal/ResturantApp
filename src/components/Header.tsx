import React, { useState } from "react";
import { Navbar, Container, Image, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/image.png";
import navigation from "../assets/fast-delivery (1).png";
import CheckOutModal from "./CheckOutModal";
import * as Scroll from "react-scroll";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/actions/user.action";
import { cartStateType, userStateType } from "../types";
import { getStateCategory } from "../redux/actions/stateCategory";
import { MDBBadge } from "mdb-react-ui-kit";

const Header = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state: userStateType) => state.user);
  const ordersInCart = useSelector((state: cartStateType) => state.cart);
  const logoutUser = () => {
    dispatch(logout());
    localStorage.removeItem("user");
    dispatch(getStateCategory("popular"));
    navigate("/");
  };

  return (
    <Navbar
      className="fixed-top navbar-expand-lg"
      style={{ backgroundColor: "#303030", height: "4rem" }}
    >
      <Container className="d-flex justify-content-between">
        <div className="d-flex justify-content-start ">
          <Link
            to="/"
            className="fs-1 fw-bold"
            style={{ color: "#FFFFFF", textDecoration: "none" }}
          >
            OBSD
          </Link>
          <Image src={logo} />
        </div>
        <div
          className="d-flex justify-content-end gap-3 "
          style={{ color: "#FFFFFF" }}
        >
          {user.user.type === "user" && user.isLoggedIn ? (
            <>
              <Scroll.Link
                activeClass="active"
                to="menu"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={{ textDecoration: "none", color: "white" ,cursor:'pointer'}}
                className="pt-2"
              >
                Menu
              </Scroll.Link>
              <Scroll.Link
                activeClass="active"
                to="menu"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={{ textDecoration: "none", color: "white" ,cursor:'pointer'}}
                className="pt-2"
                onClick={() => dispatch(getStateCategory("popular"))}
              >
                Most Popular
              </Scroll.Link>
              <div className="mt-2">
                <Image
                  src={navigation}
                  style={{ width: "15%" ,cursor:'pointer'}}
                  onClick={() =>
                    ordersInCart.length > 0 ? setShow(true) : setShow(false)
                  }
                />
                {ordersInCart.length > 0 ? (
                  <MDBBadge color="danger" notification pill>
                    {ordersInCart.length}
                  </MDBBadge>
                ) : null}
              </div>
            </>
          ) : null}
          {user.isLoggedIn ? (
            <Button
              style={{ backgroundColor: "#FF9200", borderColor: "#FF9200" }}
              onClick={logoutUser}
            >
              Logout
            </Button>
          ) : null}
        </div>
      </Container>

      <CheckOutModal show={show} onHide={() => setShow(false)} />
    </Navbar>
  );
};

export default Header;
