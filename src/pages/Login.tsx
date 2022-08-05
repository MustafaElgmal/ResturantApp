import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Image } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import piza from "../assets/200120161356-cnn-worlds-best-new-restaurants---madera---simon-brown-photography-1-1.jpg";
import { userType } from "../types";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/user.action";
import { loginUser } from "../utils/apis";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required("Please Enter your Email"),
      password: Yup.string().required("Please Enter your password"),
    }),
    onSubmit: async (values: userType) => {
      const res = await loginUser(values);
      if (res.status !== 200) {
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
          <div className="col-lg-12 col-xl-11">
            <div
              className="card text-black mt-4"
              style={{ borderRadius: "25px" }}
            >
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Login
                    </p>

                    <form className="mx-1 mx-md-4">
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
                          Login
                        </Button>
                        <Link to="/signUp" className="mt-2 ms-2 text-black">
                          Don't Have an Account?
                        </Link>
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

export default Login;
