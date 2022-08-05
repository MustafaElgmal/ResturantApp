import React, { useEffect, useState } from "react";
import { AppProps, cartStateType, ItemTypes } from "../types";
import { Image, Col, Row } from "react-bootstrap";
import pizza from "../assets/—Pngtree—seafood pizza with cheese_4942142.png";
import { captilize, editCart } from "../utils/functions";
import plus from "../assets/add.png";
import minus from "../assets/minus.png";
import { useDispatch, useSelector } from "react-redux";
import { getAllItemsInCart } from "../redux/actions/cart";

const Item = ({ item }: AppProps) => {
  const name = captilize(item?.name);
  const description = captilize(item?.description);
  const dispatch = useDispatch();
  
  let [count, setCount] = useState(0);
  let ordersInCart = useSelector((state: cartStateType) => state.cart);
  const editcart=(num:number)=>{
    const result=editCart(num,count,ordersInCart,item)
    setCount(result.count)
    dispatch(getAllItemsInCart(result.ordersInCart))

  }
 
  useEffect(()=>{
    const itemFind=ordersInCart.find((itemm)=>itemm?.id===item?.id)
    if(itemFind){
      setCount(itemFind.Qty as number)
    }else{
      setCount(0)
    }
   
  },[ordersInCart])
  return (
    <Col>
      <Row>
        <Col xs={5}>
          <Image src={item?.imgUrl} width="100%" />
        </Col>
        <Col xs={7} className="m0 mt-4">
          <h4>{name}</h4>
          <p>{description}</p>
          <h6>Price:LE {item?.price}</h6>
          <div className="d-flex justfiy-content-between align-items-center gap-3 mt-2">
            <Image src={minus} width="6%" onClick={() => editcart(-1)} />

            <span
              className="rounded"
              style={{
                minWidth: "10%",
                color: "black",
                background: "#E1DFDF",
                textAlign: "center",
              }}
            >
              {count}
            </span>
            <Image src={plus} width="6%" onClick={() => editcart(1)} />
          </div>
        </Col>
      </Row>
    </Col>
  );
};

export default Item;
