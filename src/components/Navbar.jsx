import React ,{ useState }from 'react';
import {GoPencil} from "react-icons/go";
import{GiArchiveResearch} from "react-icons/gi";
import {BiBookAdd} from "react-icons/bi";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Navbarr() {

  
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // const changeEvent = (e) => {
    //   setValue({
    //     ...value,
    //     [e.target.name]: e.target.value,
    //   });
    //   if (e?.target?.name === "title") {
    //     setError({
    //       title: "",
    //     });
    //   }
    // };
  
  
  return (
    <div className='mb-5'>
        <nav class="navbar fixed-top navbar-light bg-light">
    <a class="navbar-brand" href="#" className='fs-3 NavbarClass mx-2 fst-italic'><GoPencil className='fs-1  NavbarClass'/>Notesnook</a>
   
 
 <div className='mx-3'>
     
     <button type="button" onClick={handleShow} class="btn btn-light border-0 " data-toggle="modal" data-target="#exampleModalLong"><BiBookAdd className='NavbarClass fs-1 mx-2'/></button>
   {/* <!-- Modal --> */}
   
   <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add to Notes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Notes</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Save 
          </Button>
        </Modal.Footer>
      </Modal>
  
   
    <input class="fs-4 rounded-pill mr-sm-2 mx-2 border border-danger" type="search" placeholder="Search" aria-label="Search"/>
  <GiArchiveResearch className='fs-1 NavbarClass '/>
  </div>
  
  



  
  </nav> 
  </div>
  )
}

export default Navbarr;