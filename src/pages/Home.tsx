import React, { useState } from "react";
import Buttons from "../components/Buttons";
import Hero from "../components/Hero";
import Item from "../components/Item";

const Home = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Seafood",
      description: "Shrimpo squid paper",
      price: 120,
      type: "piza",
      popular: true,
    },
    {
      id: 2,
      name: "Seafood",
      description: "Shrimpo squid paper",
      price: 120,
      type: "piza",
      popular: true,
    },
    {
      id: 3,
      name: "Seafood",
      description: "Shrimpo squid paper",
      price: 120,
      type: "piza",
      popular: true,
    },
    {
      id: 4,
      name: "Seafood",
      description: "Shrimpo squid paper",
      price: 120,
      type: "burger",
      popular: true,
    },
    {
      id: 5,
      name: "Seafood",
      description: "Shrimpo squid paper",
      price: 120,
      type: "burger",
      popular: true,
    },
    {
      id: 6,
      name: "Seafood",
      description: "Shrimpo squid paper",
      price: 120,
      type: "drink",
      popular: true,
    },
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
  return (
    <section className="min-vh-100">
      <Hero />
      <Buttons/>
      <div className="d-flex justify-content-center">
      <div className="flex-wrap d-flex">
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>

      </div>
      
    </section>
  );
};

export default Home;
