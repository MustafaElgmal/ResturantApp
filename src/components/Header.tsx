import React, { useEffect, useState } from "react";
import { Navbar, Container, Image, Button, Nav } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/image.png";
import navigation from "../assets/fast-delivery (1).png";
import CheckOutModal from "./CheckOutModal";
import * as Scroll from "react-scroll";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/actions/user.action";
import { cartStateType, userStateType } from "../types";
import { getStateCategory } from "../redux/actions/stateCategory";
import { MDBBadge } from "mdb-react-ui-kit";
import { removeAllItemsInCart } from "../redux/actions/cart";

const Header = () => {
  const [show, setShow] = useState<boolean>(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state: userStateType) => state.user);
  const itemsInCart = useSelector((state: cartStateType) => state.cart);
  const logoutUser = () => {
    dispatch(logout());
    localStorage.removeItem("user");
    dispatch(removeAllItemsInCart());
    localStorage.removeItem("cart");
    dispatch(getStateCategory("popular"));
    navigate("/");
  };
  return (
    <Navbar
      className="fixed-top navbar navbar-dark"
      style={{ backgroundColor: "#303030",height:'80px' }}
    >
      <Container>
        <Navbar.Brand>
          <Link
            to="/"
            className="fs-1 fw-bold"
            style={{ color: "#FFFFFF", textDecoration: "none" }}
          >
            OBSD
          </Link>
          <Image src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ps-2 gap-3">
            {user.type === "user" && user.isLoggedIn ? (
              <>
                {location.pathname === "/" ? (
                  <>
                    {" "}
                    <Scroll.Link
                      activeClass="active"
                      to="menu"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      style={{
                        textDecoration: "none",
                        color: "white",
                        cursor: "pointer",
                      }}
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
                      style={{
                        textDecoration: "none",
                        color: "white",
                        cursor: "pointer",
                      }}
                      className="pt-2"
                      onClick={() => dispatch(getStateCategory("popular"))}
                    >
                      Most Popular
                    </Scroll.Link>
                  </>
                ) : null}

                <div className="mt-2">
                  <Image
                    src={navigation}
                    style={{ width: "20px", cursor: "pointer" }}
                    onClick={() =>
                      itemsInCart.length > 0 ? setShow(true) : setShow(false)
                    }
                  />
                  {itemsInCart.length > 0 ? (
                    <MDBBadge color="danger" notification pill>
                      {itemsInCart.length}
                    </MDBBadge>
                  ) : null}
                </div>
              </>
            ) : null}

            {user.isLoggedIn ? (
              <Nav.Link>
                <Button
                  style={{
                    backgroundColor: "#FF9200",
                    borderColor: "#FF9200",
                  }}
                  onClick={logoutUser}
                >
                  Logout
                </Button>
              </Nav.Link>
            ) : null}
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CheckOutModal show={show} onHide={() => setShow(false)} />
    </Navbar>
  );
};

export default Header;
