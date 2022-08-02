import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import CheckOutModalItem from "../components/checkOutModalItem";
import { Link } from "react-router-dom";

const CheckOut = () => {
  const [items, setItems] = useState([
    {
      id: 7,
      name: "Seafood",
      description: "Shrimpo squid paper",
      price: 120,
      type: "drink",
      popular: true,
    },
    {
      id: 8,
      name: "Seafood",
      description: "Shrimpo squid paper",
      price: 120,
      type: "drink",
      popular: true,
    },
    {
      id: 9,
      name: "Seafood",
      description: "Shrimpo squid paper",
      price: 120,
      type: "drink",
      popular: true,
    },
  ]);
  let [total, setTotal] = useState(0);
  useEffect(() => {
    let sum = 0;
    items.forEach((item) => (sum += item.price));
    setTotal(sum);
  }, [items]);
  return (
    <div className="d-flex justify-content-between min-vh-100 mt-5">
      <Container className="card-body p-md-5 ms-5">
        <div className="row justify-content-start">
          <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
            <form className="mx-1 mx-md-4">
              <div className="d-flex flex-row align-items-center mb-4">
                <div className="form-outline flex-fill mb-0">
                  <input
                    type="text"
                    id="form3Example1c"
                    className="form-control"
                    name="name"
                    placeholder="Name"
                    style={{ border: "none", borderBottom: "1px solid gray" }}
                  />
                </div>
              </div>
              <div className="d-flex flex-row align-items-center mb-4">
                <div className="form-outline flex-fill mb-0">
                  <input
                    type="text"
                    id="form3Example2c"
                    className="form-control"
                    name="mobile"
                    placeholder="Mobile"
                    style={{ border: "none", borderBottom: "1px solid gray" }}
                  />
                </div>
              </div>
              <div className="d-flex flex-row align-items-center mb-4">
                <div className="form-outline flex-fill mb-0">
                  <input
                    type="text"
                    id="form3Example2c"
                    className="form-control"
                    name="address"
                    placeholder="Adress"
                    style={{ border: "none", borderBottom: "1px solid gray" }}
                  />
                </div>
              </div>
              <div className="d-flex flex-row align-items-center mb-4">
                <div className="form-outline flex-fill mb-0">
                  <input
                    type="text"
                    id="form3Example2c"
                    className="form-control"
                    name="city"
                    placeholder="City"
                    style={{ border: "none", borderBottom: "1px solid gray" }}
                  />
                </div>
              </div>
              <div className=" d-flex gap-2">
                <Link to="/orderSuccess" className="btn btn-danger">
                  Order Now
                </Link>
                <Link to="/" className="btn btn-light">
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        </div>
      </Container>

      <div style={{ borderLeft: "3px  solid  gray ", width: "25%" }}>
        <div className="div"></div>
        {items.map((item) => (
          <CheckOutModalItem key={item.id} item={item} />
        ))}
        <hr />
        <div className="d-flex justify-content-center">
          <p>SupTotal: LE {total}</p>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
