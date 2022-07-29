import React from "react";
import { Image } from "react-bootstrap";
import piza from "../assets/png_pizza_15176.png";

const Hero = () => {
  return (
    <section
      className="d-flex justify-content-center align-items-center gap-2"
      style={{ backgroundColor: "#303030", height: "400px", marginTop: "4rem" ,width:'100%'}}
      >
      <div
        style={{ color: "#FFFFFF", lineHeight: "20px" }}
        className="fs-1 fw-bold"
      >
        <p>ENJOY OUR</p>
        <p>
          DELICIOUS<span style={{ color: "#FF9200" }}>FOOD</span>
        </p>
      </div>
      <Image src={piza} style={{ width: "25%" }} />
    </section>
  );
};

export default Hero;