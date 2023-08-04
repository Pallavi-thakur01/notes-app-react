import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {BsEyeFill } from "react-icons/bs";
import { TfiWrite } from "react-icons/tfi";

function Example({todo}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button  onClick={handleShow} className="btn btn-light btn-sm ml-5  mx-1 ">
      <BsEyeFill />
      </Button>

      <Modal show={show} onHide={handleClose}  className='fst-italic'>
        <Modal.Header closeButton>
          <Modal.Title><TfiWrite className='NavbarClass '/></Modal.Title>
        </Modal.Header>
        <Modal.Body className='p-5'>
          <h1> Title:{todo.title}</h1>
          <p className='p-2'> Note: {todo.description}</p>
        </Modal.Body>
       
      </Modal>
    </>
  );
}

export default Example;