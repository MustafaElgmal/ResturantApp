import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CheckOut from "./pages/CheckOut";
import OrderSuccess from "./pages/OrderSuccess";
import { Routes, Route } from "react-router-dom";
import DashBord from "./pages/DashBord";
import SignUp from "./pages/SignUp";
import { userStateType } from "./types";
import { useSelector } from "react-redux";
import Protected from "./components/Protected";

function App() {
  const user = useSelector((state: userStateType) => state.user);

  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Protected>
              {user.user.type !== "user" ? <DashBord /> : <Home />}
            </Protected>
          }
        />
        <Route
          path="/orderSuccess"
          element={
            <Protected>
              <OrderSuccess />
            </Protected>
          }
        />
        <Route
          path="/checkOut"
          element={
            <Protected>
              <CheckOut />
            </Protected>
          }
        />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
