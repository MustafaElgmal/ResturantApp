import React, { useEffect } from "react";
import { Image } from "react-bootstrap";
import Done from "../assets/checked.png";
import { useNavigate, useParams } from "react-router";
import { useDispatch } from "react-redux";
import { getStateCategory } from "../redux/actions/stateCategory";

const OrderSuccess = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { orderNo } = useParams();

  useEffect(() => {
    setTimeout(() => {
      dispatch(getStateCategory("popular"));
      navigate("/");
    }, 4000);
  }, []);
  return (
    <div
      className="d-flex flex-column justify-content-center min-vh-100 align-items-center mt-5"
      style={{ minHeight: "80vh" }}
    >
      <div className="div"></div>
      <Image src={Done} style={{ width: "10rem" }} />
      <div className="d-flex flex-wrap">
        <p className="fs-1 fw-bold">{`Order ${orderNo} Placed`}</p>
      </div>
    </div>
  );
};

export default OrderSuccess;
