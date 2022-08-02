import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Buttons from "../components/Buttons";
import Hero from "../components/Hero";
import Item from "../components/Item";
import { getAllItems } from "../redux/actions/item";
import { itemStateType } from "../types";
import { getItems } from "../utils/apis";
import { itemFilter } from "../utils/functions";

const Home = () => {
  let items=useSelector((state:itemStateType)=>state.item)
  const stateCategory=useSelector((state:{stateCategory:string})=>state.stateCategory)
  items=itemFilter(items,stateCategory)
  const dispatch=useDispatch()
  const updateItems=async()=>{
    const res=await getItems()
    dispatch(getAllItems(res?.data.items))
  }
  useEffect(()=>{
    updateItems()
  },[])
  return (
    <section className="min-vh-100">
      <Hero />
      <Buttons />
      <Container className='mt-5'>
        <Row xs={1} md={2} lg={3} className='g-2'>
          {items.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Home;
