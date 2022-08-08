import React from 'react'
import { useSelector } from 'react-redux';
import Home from '../pages/Home';
import { cartStateType} from '../types';

const ProtectedCheckOut = ({children }:any) => {
    const ordersInCart=useSelector((state:cartStateType)=>state.cart)
    return <div>{ordersInCart.length>0 ? children : <Home/>}</div>;
}

export default ProtectedCheckOut