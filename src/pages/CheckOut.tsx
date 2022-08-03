import React,{useState,useEffect} from "react";
import { Container,Button } from "react-bootstrap";
import CheckOutModalItem from "../components/CheckOutModalItem";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartStateType, ItemTypes, orderItemType, userStateType } from "../types";
import { useFormik } from "formik";
import * as Yup from 'yup'
import { createOrder } from "../utils/apis";
import { getAllOrdersInCart } from "../redux/actions/cart";

const CheckOut = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const ordersInCart=useSelector((state:cartStateType)=>state.cart)
  const user=useSelector((state:userStateType)=>state.user)
  const name=`${user.user.firstName} ${user.user.lastName}`
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const formik=useFormik({
    initialValues:{
      mobile:"",
      city:"",
      address:""
    },
    validationSchema:Yup.object({
      mobile:Yup.string().matches(phoneRegExp, 'Phone number is not valid!').required('Phone is required!'),
      city:Yup.string().max(20,'Max character is 20!').required('City is required!'),
      address:Yup.string().required('Address is required!')

    }),
    onSubmit:async(values)=>{
      let items:orderItemType[]=[]
      ordersInCart.forEach((order:ItemTypes)=>{
        items.push({itemId:order.id||0,Qty:order.Qty||0})
      })
      const order={...values,userId:user.user.id||0,items}
      const res=await createOrder(order)
      if(res?.status===500){
        alert('Order not created!')
      }else{
        alert(res?.data.message)
      }
      dispatch(getAllOrdersInCart([]))
      localStorage.removeItem('cart')
      formik.resetForm()
      navigate('/')
    }

  })
  let [total, setTotal] = useState(0);
  useEffect(() => {
    let sum = 0;
    ordersInCart.forEach((order) => (sum += ((order?.price || 0) * (order?.Qty||0))));
    setTotal(sum);
  }, [ordersInCart]);
  
  return (
    <div className="d-flex justify-content-between min-vh-100 mt-5">
      <Container className="card-body p-md-5 ms-5">
        <div className="row justify-content-start">
          <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
            <form className="mx-1 mx-md-4">
              <div className="d-flex flex-row align-items-center mb-4">
                <div className="form-outline flex-fill mb-0">
                  <input
                    type="text"
                    id="form3Example1c"
                    className="form-control"
                    name="name"
                    style={{ border: "none", borderBottom: "1px solid gray" }}
                    value={name}
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
                  {formik.errors.mobile&&formik.touched.mobile?<p className="text-muted">{formik.errors.mobile}</p>:null}
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
                  {formik.errors.city&&formik.touched.city?<p className="text-muted">{formik.errors.city}</p>:null}
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
                  {formik.errors.address&&formik.touched.address?<p className="text-muted">{formik.errors.address}</p>:null}
                </div>
              </div>
              <div className=" d-flex gap-2">
                <Button variant="danger" onClick={()=>formik.handleSubmit()}>
                  Order Now
                </Button>
                <Link to="/" className="btn btn-light">
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        </div>
      </Container>

      <div style={{ borderLeft: "3px  solid  gray ", width: "25%" }}>
        <div className="div"></div>
        {ordersInCart.map((order) => (
          <CheckOutModalItem key={order.id} orderInCart={order} />
        ))}
        <hr />
        <div className="d-flex justify-content-center">
          <p>SupTotal: LE {total}</p>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
