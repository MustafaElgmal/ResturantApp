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
import ProtectedCheckOut from "./components/ProtectedCheckOut";
import AdminPanal from "./pages/AdminPanal";
import Login from "./pages/Login";

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
              {user.user.type === "user" ? <Home />:user.user.type==='admin'?<AdminPanal />:<DashBord />}
            </Protected>
          }
        />
        

        <Route
          path="/checkOut"
          element={
            <Protected>
              <ProtectedCheckOut>
                <CheckOut />
              </ProtectedCheckOut>
            </Protected>
          }
        />
        
        <Route
          path="/orderSuccess/:orderNo"
          element={
            <Protected>
              <OrderSuccess />
            </Protected>
          }
        />
        <Route path="/signUp" element={<SignUp />} />
        <Route path='/signin' element={<Login/>}/>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
