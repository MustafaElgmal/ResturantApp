import React from 'react'
import { Modal } from 'react-bootstrap';
import { AppProps } from '../types';

const CreateItem = ({show,onHide}:AppProps) => {
  return (
    <Modal
    size="lg"
    show={show}
    onHide={() =>{
        onHide && onHide();
    }}
    aria-labelledby="example-modal-sizes-title-lg"
  >
    <Modal.Header closeButton>
      <Modal.Title id="example-modal-sizes-title-lg">
        Add Item
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>...</Modal.Body>
  </Modal>
  )
}

export default CreateItem