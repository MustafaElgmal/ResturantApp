import { useFormik } from "formik";
import React from "react";
import { Modal, Button } from "react-bootstrap";
import { AppProps, userStateType } from "../types";
import * as Yup from "yup";
import { createCategory } from "../utils/apis";
import { useSelector } from "react-redux";

const CreateCatogory = ({ show, onHide }: AppProps) => {
  const user = useSelector((state: userStateType) => state.user);
  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Please Enter CategoryName!"),
    }),
    onSubmit: async (values) => {
      await createCategory(values, user.token);
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
        <Modal.Title id="example-modal-sizes-title-lg">
          Add Category
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <input
            type="text"
            id="form3Example1c"
            className="form-control"
            name="name"
            value={formik.values.name}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            placeholder="name"
          />
          <p className="text-muted">
            {formik.errors.name && formik.touched.name
              ? formik.errors.name
              : null}
          </p>
          <Button
            style={{
              background: "#FF9200",
              borderRadius: "20px",
              borderColor: "#FF9200",
            }}
            onClick={() => formik.handleSubmit()}
            className="mt-3"
          >
            Add Category
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default CreateCatogory;
