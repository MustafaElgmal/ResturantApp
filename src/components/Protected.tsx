import React from "react";
import { useSelector } from "react-redux";
import Login from "../pages/Login";
import { userStateType } from "../types";

const Protected = ({ children }: any) => {
  const user = useSelector((state: userStateType) => state.user);
  return <div>{user.isLoggedIn ? children : <Login />}</div>;
};

export default Protected;
