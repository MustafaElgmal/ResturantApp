import React from "react";
import { useSelector } from "react-redux";
import Login from "../pages/Login";
import { stateType } from "../types";

const Protected = ({ children }: any) => {
  const user = useSelector((state: stateType) => state.user);
  return <div>{user.isLoggedIn ? children : <Login />}</div>;
};

export default Protected;
