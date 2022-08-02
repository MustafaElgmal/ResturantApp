import React from "react";
import { Image } from "react-bootstrap";
import Done from "../assets/checked.png";
import { AppProps } from "../types";
import { useNavigate } from "react-router";

const OrderSuccess = ({ mytimeout }: AppProps) => {
  const navigate = useNavigate();
  function toHome() {
    navigate("/");
  }
  setTimeout(toHome, 4000);
  return (
    <div
      className="d-flex flex-column justify-content-center min-vh-100 align-items-center mt-5"
      style={{ minHeight: "80vh" }}
    >
      <div className="div"></div>
      <Image src={Done} style={{ width: "10rem" }} />
      <p className="fs-1 fw-bold">Order Placed</p>
    </div>
  );
};

export default OrderSuccess;
