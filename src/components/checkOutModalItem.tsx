import React from 'react'
import { Container,Image } from 'react-bootstrap'
import { AppProps } from '../types'
import pizza from '../assets/—Pngtree—seafood pizza with cheese_4942142.png'

const checkOutModalItem = ({item}:AppProps) => {
  return (
    <div className='mb-4'>
    <Container className="d-flex justify-content-center align-items-center gap-2">
      <Image src={pizza} style={{ width: "60px" }} />
      <div className='m0'>
        <p>{item?.name}</p>
        <p>{item?.description}</p>
        <p>Price:LE{item?.price}</p>
      </div>
    </Container>
  </div>
  )
}

export default checkOutModalItem
