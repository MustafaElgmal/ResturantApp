import React from 'react'
import { Button } from 'react-bootstrap'

const Buttons = () => {
  return (
    <section className="d-flex justify-content-center gap-2 mt-5">
        <Button variant="outline-danger">POPULAR</Button>
        <Button variant="outline-danger">PIZZA</Button>
        <Button variant="outline-danger">BURGER</Button>
        <Button variant="outline-danger">CREPE</Button>
        <Button variant="outline-danger">DRINKS</Button>
    </section>
  )
}

export default Buttons
