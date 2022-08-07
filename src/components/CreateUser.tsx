import { useFormik } from "formik";
import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { AppProps } from "../types";
import * as Yup from "yup";
import { createUser } from "../utils/apis";

const CreateUser = ({ show, onHide }: AppProps) => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      type: "admin",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Please Enter Your firstName"),
      lastName: Yup.string().required("Please Enter Your lastName"),
      email: Yup.string().email().required("Please Enter your Email"),
      password: Yup.string().required("Please Enter your password"),
    }),
    onSubmit: async (values) => {
      const res = await createUser(values);
      if (res.status !== 201) {
        if (res.status === 500) alert(res.error);
        else alert(res.message);
      } else {
        alert(`${values.type} is created!`);
      }
      onHide && onHide();
      formik.resetForm();
    },
  });
  return (
    <Modal
      size="lg"
      show={show}
      onHide={() => {
        formik.resetForm();
        onHide && onHide();
      }}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">Add User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
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

          <Form.Select
            name="type"
            value={formik.values.type}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          >
            <option value="admin">admin</option>
            <option value="employee">employee</option>
            <option value="user">user</option>
          </Form.Select>

          <Button
            style={{
              background: "#FF9200",
              borderRadius: "20px",
              borderColor: "#FF9200",
            }}
            onClick={() => formik.handleSubmit()}
            className="mt-3"
          >
            Add user
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default CreateUser;
