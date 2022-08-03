import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../redux/actions/category";
import { getStateCategory } from "../redux/actions/stateCategory";
import { categoryStateType } from "../types";
import { getCategories } from "../utils/apis";

const Buttons = () => {
  const categories = useSelector((state: categoryStateType) => state.category);
  const stateCategory = useSelector(
    (state: { stateCategory: string }) => state.stateCategory
  );
  const dispatch = useDispatch();
  const updateCategories = async () => {
    const res = await getCategories();
    dispatch(getAllCategory(res?.data.categories));
  };
  useEffect(() => {
    updateCategories();
  }, []);
  return (
    <section className="d-flex justify-content-center gap-2 mt-5" id="menu">
      <Button
        style={
          stateCategory === "popular"
            ? { background: "#DC3545", color: "white" }
            : {}
        }
        variant="outline-danger"
        onClick={() => dispatch(getStateCategory("popular"))}
      >
        POPULAR
      </Button>
      {categories.map((cate) => (
        <Button
          key={cate.id}
          variant="outline-danger"
          style={
            stateCategory === `${cate.name}`
              ? { background: "#DC3545", color: "white" }
              : {}
          }
          onClick={() => dispatch(getStateCategory(`${cate.name}`))}
        >
          {cate.name.toLocaleUpperCase()}
        </Button>
      ))}
    </section>
  );
};

export default Buttons;
