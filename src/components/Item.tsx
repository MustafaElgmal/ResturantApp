import React,{useState} from "react";
import { AppProps } from "../types";
import { Image, Col, Row } from "react-bootstrap";
import pizza from "../assets/—Pngtree—seafood pizza with cheese_4942142.png";
import { captilize } from "../utils/functions";
import plus from "../assets/add.png";
import minus from "../assets/minus.png";
const Item = ({ item }: AppProps) => {
  const name = captilize(item?.name || "");
  const description = captilize(item?.description || "");
  let [count,setCount]=useState(0)
  return (
    <Col>
      <Row>
        <Col xs={5}>
          <Image src={pizza} width="100%" />
        </Col>
        <Col xs={7} className="m0 mt-4">
          <h4>{name}</h4>
          <p>{description}</p>
          <h6>Price:LE {item?.price}</h6>
          <div className="d-flex justfiy-content-between align-items-center gap-3 mt-2">
            <Image src={minus} width="6%" onClick={()=>{count>0?setCount(count-=1):setCount(0)}}/>

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
            <Image src={plus} width="6%" onClick={()=>setCount(count+=1)}/>
          </div>
        </Col>
      </Row>
    </Col>
  );
};

export default Item;
