import React from "react";
import { Image } from "react-bootstrap";
import Done from "../assets/checked.png";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getStateCategory } from "../redux/actions/stateCategory";

const OrderSuccess = () => {
  const dispatch=useDispatch()
  const navigate = useNavigate();
  const orderNo=useSelector((state:{orderNo:string})=>state.orderNo)
  function toHome() {
    dispatch(getStateCategory('popular'))
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
      <p className="fs-1 fw-bold">{`Order No ${orderNo} Placed`}</p>
    </div>
  );
};

export default OrderSuccess;
