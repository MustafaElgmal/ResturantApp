import React from "react";
import { Button, Image } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import piza from "../assets/200120161356-cnn-worlds-best-new-restaurants---madera---simon-brown-photography-1-1.jpg";
import { createUser } from "../utils/apis";
import { userType } from "../types";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/user.action";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      type: "user",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Please Enter Your firstName"),
      lastName: Yup.string().required("Please Enter Your lastName"),
      email: Yup.string().email().required("Please Enter your Email"),
      password: Yup.string().required("Please Enter your password"),
    }),
    onSubmit: async (values: userType) => {
      const res = await createUser(values);
      if (res.status !== 201) {
        if (res.status === 500) alert(res.error);
        else alert(res.message);
      } else {
        const user = res.user;
        if (user) {
          dispatch(login(user));
          localStorage.setItem(
            "user",
            JSON.stringify({ user, isLoggedIn: true })
          );
          formik.resetForm();
          navigate("/");
        }
      }
      formik.resetForm();
    },
  });
  return (
    <section className="mt-5 min-vh-100">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="div"></div>
          <div className="col-lg-12 col-xl-11">
            <div
              className="card text-black mt-4"
              style={{ borderRadius: "25px" }}
            >
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Sign up
                    </p>

                    <form className="mx-1 mx-md-4">
                      <div className="d-flex flex-row align-items-center mb-4">
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="form3Example1c"
                            className="form-control"
                            name="firstName"
                            value={formik.values.firstName}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            placeholder="FirstName"
                          />
                          <p className="text-muted">
                            {formik.errors.firstName && formik.touched.firstName
                              ? formik.errors.firstName
                              : null}
                          </p>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="form3Example2c"
                            className="form-control"
                            name="lastName"
                            value={formik.values.lastName}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            placeholder="lastName"
                          />
                          <p className="text-muted">
                            {formik.errors.lastName && formik.touched.lastName
                              ? formik.errors.lastName
                              : null}
                          </p>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="email"
                            id="form3Example3c"
                            className="form-control"
                            name="email"
                            value={formik.values.email}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            placeholder="Email"
                          />
                          <p className="text-muted">
                            {formik.errors.email && formik.touched.email
                              ? formik.errors.email
                              : null}
                          </p>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="form3Example4c"
                            className="form-control"
                            name="password"
                            value={formik.values.password}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            placeholder="Password"
                          />
                          <p className="text-muted">
                            {formik.errors.password && formik.touched.password
                              ? formik.errors.password
                              : null}
                          </p>
                        </div>
                      </div>

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <Button
                          style={{
                            backgroundColor: "#FF9200",
                            borderColor: "#FF9200",
                          }}
                          onClick={() => formik.handleSubmit()}
                        >
                          Register
                        </Button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <Image
                      src={piza}
                      className="img-fluid"
                      alt="Sample image"
                      style={{ height: "100%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
