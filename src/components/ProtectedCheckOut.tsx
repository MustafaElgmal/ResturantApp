import React from 'react'
import { useSelector } from 'react-redux';
import Home from '../pages/Home';
import { orderStateType} from '../types';

const ProtectedCheckOut = ({children }:any) => {
    const ordersInCart=useSelector((state:orderStateType)=>state.order)

    return <div>{ordersInCart.length>0 ? children : <Home/>}</div>;
}

export default ProtectedCheckOut