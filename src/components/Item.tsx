import React from "react";
import { AppProps } from "../types";
import { Card, Button, Container, Image } from "react-bootstrap";
import pizza from "../assets/—Pngtree—seafood pizza with cheese_4942142.png";
const Item = ({ item }: AppProps) => {
  return (
    <div>
      <Container className="d-flex justify-content-start col-md-4 align-items-center">
        <Image src={pizza} style={{ width: "200px" }} />
        <div className="m0">
          <h4 >{item?.name}</h4>
          <p>{item?.description}</p>
          <h6>Price:LE{item?.price}</h6>
        </div>
      </Container>
    </div>
  );
};

export default Item;
