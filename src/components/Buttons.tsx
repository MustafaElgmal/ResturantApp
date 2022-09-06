import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getStateCategory } from "../redux/actions/stateCategory";
import { categoryStateType, userStateType } from "../types";
import { getCategories } from "../utils/apis";

const Buttons = () => {
  const user = useSelector((state: userStateType) => state.user);
  const categories = useSelector((state: categoryStateType) => state.category);
  const stateCategory = useSelector(
    (state: { stateCategory: string }) => state.stateCategory
  );
  const dispatch = useDispatch();
  const updateCategories = async () => {
    await getCategories(dispatch, user.token);
  };
  useEffect(() => {
    updateCategories();
  }, []);
  return (
    <section
      className="d-flex flex-wrap justify-content-center gap-2 mt-5"
      id="menu"
    >
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
