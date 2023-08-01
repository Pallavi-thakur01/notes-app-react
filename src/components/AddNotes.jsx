import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewNote, addNewTodo, editNote, updateNote, updateTodo } from "../redux/actions";
import {MdLibraryAdd} from "react-icons/md";
import {GoPencil} from "react-icons/go";
import{GiArchiveResearch} from "react-icons/gi";
import {BiBookAdd} from "react-icons/bi";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export const AddTodo = () => {
  const [value, setValue] = useState({});
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const isEdit = useSelector((state) => state.todoReducer.isEdit);
  const editNote = useSelector((state) => state.todoReducer.editNote);
  const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


  useEffect(() => {
   
    editNote && setValue(() => editNote );
  }, [editNote]);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!value?.title) {
      setError((error) => ({
        ...error,
        title: "Please enter Something",
      }));
      return;
    }

    if (isEdit) {
      
      dispatch(updateNote(editNote.id, value));
    } else {
      dispatch(addNewNote(value));
    }
    setValue({ title: "" });
    // document.getElementById("todoForm").reset();
  };

  const changeEvent = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
    if (e?.target?.name === "title") {
      setError({
        title: "",
      });
    }
  };

  return (
    <div className="container my-5 py-3  ">
      {/* <form className="mt-3 mb-2" id="todoForm" onSubmit={onSubmit}>
        <div className="row" style={{marginLeft:"400px"}}>
          <div className="col-xl-4"> */}
            {/* <label >Add Notes</label>
            <input
              type="text"
              name="title"
              className="form-control mb-2 w-100 "
              placeholder="Notes "
              defaultValue={value?.title}
              onChange={(e) => changeEvent(e)}
            /> */}
             <nav class="navbar fixed-top navbar-light bg-light">
    <a class="navbar-brand" href="#" className='fs-3 NavbarClass mx-2 fst-italic'><GoPencil className='fs-3  NavbarClass'/>Notesnook</a>
   
 
 <div className='mx-3'>
     
     <button type="button" onClick={handleShow} class="btn btn-light border-0 " data-toggle="modal" data-target="#exampleModalLong"><BiBookAdd className='NavbarClass fs-1 mx-2'/> </button>
   {/* <!-- Modal --> */}
   
  
  
   
    <input class="fs-4 rounded-pill mr-sm-2 mx-2 border border-danger mt-2" type="search" placeholder="Search" aria-label="Search"/>
  <GiArchiveResearch className='fs-1 NavbarClass '/>
  </div>
  
  



  
  </nav> 

           
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add to Notes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={onSubmit}>
            
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Notes</Form.Label>
              <Form.Control as="textarea" rows={3}  defaultValue={value?.title}
              onChange={(e) => changeEvent(e)}
              placeholder="Notes "
              type="text"
              name="title"
              
              />
               <span className="text-danger">{error?.title}</span>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={onSubmit}>
          {isEdit ? "Update" : "Save"}
          </Button>
        </Modal.Footer>
      </Modal>
  
   
            {/* <span className="text-danger">{error?.title}</span> */}
          {/* </div> */}

          <div className="col-3 mt-4 ">
            {/* <button className="btn btn-success mb-2" type="submit">
              {" "}
              {isEdit ? "Update" : <MdLibraryAdd/>}{" "}
            </button> */}
          {/* </div>
        </div>
      </form> */}
    </div>
    </div>
  );
};
