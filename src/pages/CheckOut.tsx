import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import CheckOutModalItem from "../components/CheckOutModalItem";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  cartStateType,
  ItemTypes,
  orderItemType,
  userStateType,
} from "../types";
import { useFormik } from "formik";
import * as Yup from "yup";
import { createOrder, getAllOrders, getUser } from "../utils/apis";

const CheckOut = () => {
  const [name, setName] = useState<string>();
  let [total, setTotal] = useState<number>(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const itemsInCart = useSelector((state: cartStateType) => state.cart);
  const user = useSelector((state: userStateType) => state.user);
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const formik = useFormik({
    initialValues: {
      mobile: "",
      city: "",
      address: "",
    },
    validationSchema: Yup.object({
      mobile: Yup.string()
        .matches(phoneRegExp, "Phone number is not valid!")
        .required("Phone is required!"),
      city: Yup.string()
        .max(20, "Max character is 20!")
        .required("City is required!"),
      address: Yup.string().required("Address is required!"),
    }),
    onSubmit: async (values) => {
      let orderItems: orderItemType[] = [];
      itemsInCart.forEach((item: ItemTypes) => {
        orderItems.push({ Qty: item.Qty as number, item });
      });
      const order = { ...values, orderItems };
      await createOrder(order, dispatch, user.token, navigate);
      await getAllOrders(dispatch,user.token);
      formik.resetForm();
    },
  });
  const upadateUser = async () => {
    await getUser(user.token,setName);
  };

  useEffect(() => {
    let sum = 0;
    itemsInCart.forEach((item) => (sum += item?.price * (item?.Qty as number)));
    setTotal(sum);
  }, [itemsInCart]);
  useEffect(() => {
    upadateUser();
  }, []);

  return (
    <Container className="d-flex justify-content-between min-vh-100 mt-5 flex-wrap-reverse">
      <div className="card-body p-md-5">
        <div className="row justify-content-start mt-5">
          <div className="col-md-10 col-lg-8 col-xl-8 order-2 order-lg-1">
            <form className="mx-1 mx-md-4 widd">
              <div className="d-flex flex-row align-items-center mb-4">
                <div className="form-outline flex-fill mb-0">
                  <input
                    type="text"
                    id="form3Example1c"
                    className="form-control"
                    name="name"
                    style={{ border: "none", borderBottom: "1px solid gray" }}
                    value={`${name}`}
                    disabled
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
                    value={formik.values.mobile}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.mobile && formik.touched.mobile ? (
                    <p className="text-muted">{formik.errors.mobile}</p>
                  ) : null}
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
                    value={formik.values.city}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.city && formik.touched.city ? (
                    <p className="text-muted">{formik.errors.city}</p>
                  ) : null}
                </div>
              </div>
              <div className="d-flex flex-row align-items-center mb-4">
                <div className="form-outline flex-fill mb-0">
                  <input
                    type="text"
                    id="form3Example2c"
                    className="form-control"
                    name="address"
                    placeholder="Address"
                    style={{ border: "none", borderBottom: "1px solid gray" }}
                    value={formik.values.address}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.address && formik.touched.address ? (
                    <p className="text-muted">{formik.errors.address}</p>
                  ) : null}
                </div>
              </div>
              <div className=" d-flex gap-2">
                <Button variant="danger" onClick={() => formik.handleSubmit()}>
                  Order Now
                </Button>
                <Link to="/" className="btn btn-light">
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="cartt">
        <div className="div"></div>
        {itemsInCart.map((item) => (
          <CheckOutModalItem key={item.id} item={item} onHide={()=>console.log("No hide!")} />
        ))}
        <hr />
        <div className="d-flex justify-content-center">
          <p>SupTotal: LE {total}</p>
        </div>
      </div>
    </Container>
  );
};

export default CheckOut;
