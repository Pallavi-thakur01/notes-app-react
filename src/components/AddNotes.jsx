import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "redux-form";
import {
  addNewNote,
  editNote,
  hideModal,
  showModal,
  updateNote,
  resetStore,
} from "../redux/actions";
import { MdLibraryAdd } from "react-icons/md";
import { GoPencil } from "react-icons/go";
import { GiArchiveResearch } from "react-icons/gi";
import { BiBookAdd } from "react-icons/bi";
import { TfiWrite } from "react-icons/tfi";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Search from './Search';

const AddNote = ({notes}) => {
  const [value, setValue] = useState({});
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const isEdit = useSelector((state) => state.todoReducer.isEdit);
  const editNote = useSelector((state) => state.todoReducer.editNote);
  const isShowModal = useSelector((state) => state.todoReducer.isShowModal);

  const handleClose = () => dispatch(hideModal());

  const handleShow = () => dispatch(showModal());

  useEffect(() => {
    // debugger
  
    editNote && setValue(() => editNote)&&
    onSubmit()
  }, [editNote, isShowModal]);


  const onSubmit = (e) => {
    e.preventDefault();
    console.log("jhgfd");
    // handleShow();
    if (!value?.title) {
      setError((error) => ({
        ...error,
        title: "Please enter Something",
        description: "Notes Missing !!!!!!!!!!1",
      }));
      return;
    }

    if (isEdit) {
      // debugger;
      dispatch(updateNote(editNote.id, value));
      setValue({ title: "", description: "" });
      reset();
    } else {
      dispatch(addNewNote(value));
    }
    setValue({ title: "", description: "" });

    reset();
    handleClose();
    // dispatch(resetStore());
    setValue({
      title:"",
      description:""
    })
  };

  console.log(value);

  const changeEvent = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
    if (e?.target?.name === "title") {
      setError({
        title: "",
        description: "",
      });
    }
  };

  return (
    <div className="container my-5 py-3  ">
      <nav class="navbar fixed-top navbar-light bg-light border border-danger border-top-0 ">
        <a
          class="navbar-brand"
          href="/"
          className="fs-3 NavbarClass mx-2 fst-italic"
        >
          <GoPencil className="fs-3  NavbarClass" />
          Notesnook
        </a>

        <div className="mx-5">
          <button
            type="button"
            onClick={handleShow}
            className="btn btn-light border-0 "
            data-toggle="modal"
            data-target="#exampleModalLong"
          >
            <BiBookAdd className="NavbarClass fs-1 mx-2" />
          </button>
        </div>
        {/* <!-- Modal --> */}
        <div className="searchbarMargin">
          {/* <input
            className="fs-4 rounded-pill mr-sm-2 mx-2 border border-danger mt-2  focusColor"
            type="search"
            placeholder="Search"
            aria-label="Search"
          /> */}

        <Search todo={notes}/>
        </div>
       
        <div className="mx-2">
          {" "}
          <GiArchiveResearch className="fs-1 NavbarClass  " />
        </div>
      </nav>

      <Modal show={isShowModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <TfiWrite className="NavbarClass" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                defaultValue={value?.title}
                onChange={(e) => changeEvent(e)}
                name="title"
                placeholder="Tittle"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Notes</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                defaultValue={value?.description}
                onChange={(e) => changeEvent(e)}
                placeholder="Notes "
                type="text"
                name="description"
              />
              <span className="text-danger">{error?.title}</span>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="button" variant="danger" onClick={onSubmit}>
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
export default AddNote;
