import React,{useState}from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteNote,  editNote } from "../redux/actions";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin2Line } from "react-icons/ri";
import AddNotes from "../components/AddNotes";

export const NotesCard = () => {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const notes = useSelector((state) => state.todoReducer.notes);
  const dispatch = useDispatch();


  const actionFunction = (data) => {
    if (data && data?.type === "edit") {
      handleShow();
      dispatch(editNote(data?.todo?.id));
    } else if (data && data?.type === "delete") {
      alert("Are You sure...?");
      dispatch(deleteNote(data?.todo?.id));
    }
  };

  return (
    <div className="container my-2 ">
      <div class="row">
        {notes &&
          notes.map((todo, index) => (
            <div class="card col-3 m-5 w-25 border border-danger rounded shadow  cards " key={index}>
              <div class="card-body">
              <h4 className="my-2">Title:{todo?.title}</h4>
                <h6 class="card-title">  {todo?.description}</h6>
                {/* <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                <div class="card-text row mt-3 ">
                  {/* <p>{todo?.description}</p> */}
                  {" "}
                  <div className="col p-1 cardClass shadow rounded-pill sticky-bottom">
                  <button
                    className="btn btn-warning btn-sm ml-5"
                    onClick={() => { 
                      
                      actionFunction({ todo: todo, type: "edit" });
                     

                   }}
                  >
                    <BiEditAlt />
                  </button>
                  
                  <button
                    className="btn btn-danger btn-sm ml-5  mx-2"
                    onClick={() =>
                      actionFunction({ todo: todo, type: "delete" })
                    }
                  >
                    <RiDeleteBin2Line />
                  </button>
                  </div>
                </div>

               
              </div>
            </div>
            
          ))}
      </div>
    </div>
  );
};
