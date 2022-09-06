import React, { useEffect, useState } from "react";
import { AppProps, cartStateType } from "../types";
import { Image, Col, Row } from "react-bootstrap";
import { captilize, editCartOutsideForm } from "../utils/functions";
import plus from "../assets/add.png";
import minus from "../assets/minus.png";
import { useDispatch, useSelector } from "react-redux";

const Item = ({ item }: AppProps) => {
  const name = captilize(item?.name as string);
  const description = captilize(item?.description as string);
  const dispatch = useDispatch();
  let [count, setCount] = useState(0);
  let itemsInCart = useSelector((state: cartStateType) => state.cart);

  useEffect(() => {
    const itemFind = itemsInCart.find((itemm) => itemm?.id === item?.id);
    if (itemFind) {
      setCount(itemFind.Qty as number);
    } else {
      setCount(0);
    }
  }, [itemsInCart]);

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
            <Image
              src={minus}
              width="6%"
              onClick={() =>
                editCartOutsideForm(
                  -1,
                  count,
                  itemsInCart,
                  item!,
                  setCount,
                  dispatch
                )
              }
              style={{ cursor: "pointer" }}
            />

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
            <Image
              src={plus}
              width="6%"
              onClick={() =>
                editCartOutsideForm(
                  1,
                  count,
                  itemsInCart,
                  item!,
                  setCount,
                  dispatch
                )
              }
              style={{ cursor: "pointer" }}
            />
          </div>
        </Col>
      </Row>
    </Col>
  );
};

export default Item;
