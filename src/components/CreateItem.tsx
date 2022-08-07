import { useFormik } from "formik";
import React, { useEffect } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { AppProps, categoryStateType, categoryType, ItemTypes } from "../types";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { createItem, getCategories } from "../utils/apis";
import { getAllCategories } from "../redux/actions/categories";

const CreateItem = ({ show, onHide }: AppProps) => {
  const categories = useSelector((state: categoryStateType) => state.category);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      price: "",
      popular: "",
      imgUrl: "https://review2020.s3.amazonaws.com/Tawwr/%E2%80%94Pngtree%E2%80%94seafood+pizza+with+cheese_4942142.png",
      categoryId: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Please Enter name of Item!"),
      description: Yup.string().required("Please Enter description of Item!"),
      price: Yup.number().required("Please Enter price of Item!"),
      popular: Yup.string().required("Please select popular of Item!"),
      categoryId: Yup.number().required("Please select category of Item!"),
    }),
    onSubmit: async (values) => {
      const item = {
        name: values.name,
        description: values.description,
        price: parseInt(values.price as string),
        categoryId: parseInt(values.categoryId as string),
        imgUrl: values.imgUrl,
        popular: Boolean(values.popular),
      };

      const res = await createItem(item);
      if (res?.status === 201) {
        alert("Item is created!");
      }

      onHide && onHide();
      formik.resetForm();
    },
  });
  const updateCategories = async () => {
    const res = await getCategories();
    dispatch(getAllCategories(res?.data.categories));
  };

  useEffect(() => {
    updateCategories();
  }, []);
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
        <Modal.Title id="example-modal-sizes-title-lg">Add Item</Modal.Title>
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

          <input
            type="text"
            id="form3Example2c"
            className="form-control"
            name="description"
            value={formik.values.description}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            placeholder="description"
          />
          <p className="text-muted">
            {formik.errors.description && formik.touched.description
              ? formik.errors.description
              : null}
          </p>

          <input
            type="text"
            id="form3Example3c"
            className="form-control"
            name="price"
            value={formik.values.price}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            placeholder="price"
          />
          <p className="text-muted">
            {formik.errors.price && formik.touched.price
              ? formik.errors.price
              : null}
          </p>

          <input
            type="text"
            id="form3Example4c"
            className="form-control"
            name="imgUrl"
            value={formik.values.imgUrl}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            placeholder="imgUrl"
          />
          <p className="text-muted">
            {formik.errors.imgUrl && formik.touched.imgUrl
              ? formik.errors.imgUrl
              : null}
          </p>

          <Form.Select
            name="popular"
            value={formik.values.popular}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          >
            <option>Popular</option>
            <option value="false">false</option>
            <option value="true">true</option>
          </Form.Select>
          <p className="text-muted">
            {formik.errors.popular && formik.touched.popular
              ? formik.errors.popular
              : null}
          </p>

          <Form.Select
            name="categoryId"
            value={formik.values.categoryId}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            className="mt-3"
          >
            <option>Select categoryId of Item</option>
            {categories.map((cate: categoryType) => (
              <option key={cate.id} value={cate.id}>
                {cate.name}
              </option>
            ))}
          </Form.Select>
          <p className="text-muted">
            {formik.errors.categoryId && formik.touched.categoryId
              ? formik.errors.categoryId
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
            Add Item
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default CreateItem;
