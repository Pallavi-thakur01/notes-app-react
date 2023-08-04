import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addNewNote,
  editNote,
  hideModal,
  showModal,
  updateNote,
  resetStore,
  searchBar
} from "../redux/actions";
import { MdLibraryAdd } from "react-icons/md";
import { GoPencil } from "react-icons/go";
import { GiArchiveResearch } from "react-icons/gi";
import { BiBookAdd } from "react-icons/bi";
import { TfiWrite } from "react-icons/tfi";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const AddNote = () => {
 
  const [value, setValue] = useState({});
  const [error, setError] = useState("");
  var [date,setDate] = useState(new Date());
  // const [SearchBar, setSearchBar] = useState("");
  const dispatch = useDispatch();
  const isEdit = useSelector((state) => state.todoReducer.isEdit);

  const editNotes = useSelector((state) => state?.todoReducer?.editNote);
  const isShowModal = useSelector((state) => state.todoReducer.isShowModal);

  const handleClose = () => dispatch(hideModal());

  const handleShow = () =>{ setValue({ title: "", description: "" });dispatch(showModal())};
  const searchBarr= () =>dispatch(searchBar());
 
  const valuee = useSelector((state) => state.todoReducer.valuee);
  console.log(valuee,"valllll")

  useEffect(() => {
    var timer = setInterval(()=>setDate(new Date()), 1000 )
    return function cleanup() {
        clearInterval(timer)
    }

});


// if(editNote){}

  useEffect(() => {
    console.log(isShowModal, "isShowModal");
    // if(!editNote){
    //   setValue({ title: "", description: "" });

    // }
    // // editNote && setValue(() => editNote) ;
    // // 
    // else {
    //   editNote && setValue(() => {editNote;
    //     setValue({ title: "", description: "" });

      
    //   }) ;
     
    //   // setValue({ title: "", description: "" });
    // }
console.log("----editNote",editNote)  

    editNotes? setValue(() => editNotes) : setValue({ title: "", description: "" });
  }, [editNotes,isShowModal]);








 useEffect(() => {
  setValue({ title: "", description: "" });
    // setValue(JSON.parse(window.localStorage.getItem("Notes")));
      }, []); 


 
  
    
  const onSubmit = (e) => {
    console.log("jhgfdxc");
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
      dispatch(updateNote(editNotes.id, value));
      dispatch(editNote());

      setValue({ title: "", description: "" });
    } else {
      // setValue({});

      dispatch(addNewNote(value));
      // setValue({ title: "", description: "" });
    }
      setValue({ title: "", description: "" });
    //  function reset() {

    //   setValue({ title: "", description: "" });

    // }
    //  reset();

    handleClose();
   
      localStorage.setItem("Notes", JSON.stringify(value));
   
    
    
      // const data = JSON.parse(localStorage.getItem("Notes"));
      // if (data) {
      //   setValue(data);
      // }
     

    // setValue();

    // dispatch(resetStore());
  };

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
   <>
     <div className="container mb-5 py-1">
     
      
      <nav class="navbar fixed-top navbar-light bg-light border border-danger border-top-0 row  ">
     <div className="col-md-3">
        <a
          class="navbar-brand"
          href="#"
          className="fs-3 NavbarClass  fst-italic"
        >
          <GoPencil className="fs-3  NavbarClass" />
          Notesnook
        </a>
        
        
       

        
          <button
            type="button"
            onClick={() => {
              setValue({ title: "", description: "" });
              handleShow();
            //   setValue({ title: "", description: "" });
            }}
            class="btn btn-light border-0 mx-5"
            data-toggle="modal"
            data-target="#exampleModalLong"
          >
            <BiBookAdd className="NavbarClass fs-1" />{" "}
          </button>
          
          </div>
        
        <div className="col-md-5"></div>
        
      
        <div className="col-md-3 ">
          <input
            class="fs-4 rounded-pill  border border-danger focusColor focusColor1"
            type="search"
            placeholder="Search"
            aria-label="Search"
           
            onChange={(e) => searchBarr(e.target.value)}
            value={valuee}
          />
        </div>


        <div className="col-md-1">
          {" "}
          <GiArchiveResearch className="fs-1 NavbarClass  " />
        </div>
        
        
        </nav>
        </div>
     
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
           
            
            {/* <p> Time : {date.toLocaleTimeString()}</p>
            <p> Date : {date.toLocaleDateString()}</p> */}
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
    
      </>
    
  );
};
export default AddNote;
