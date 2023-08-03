import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteNote, editNote, showModal} from "../redux/actions";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin2Line } from "react-icons/ri";
import AddNote from "../components/AddNotes";
import { BsEyeFill } from "react-icons/bs";
import { reset } from "redux-form";
import Example from "./Viewmodal";

export const NotesCard = () => {
  // const handleClose = () => setShow(false);
  const notes = useSelector((state) => state.todoReducer.notes);

  const dispatch = useDispatch();

  const handleShow = () => dispatch(showModal());

  const actionFunction = (data) => {
    if ( data?.type === "edit") {
      dispatch(handleShow());

      dispatch(editNote(data?.todo?.id));
      reset();
    } else if (data && data?.type === "delete") {
      alert("Are You sure...?");
      
      dispatch(deleteNote(data?.todo?.id));
    }
  };

  //ViewFunction
 

  return (
    <>
      <AddNote />
      <div className="container  ">
        <div class="row">
          {notes &&
            notes.map((todo, index) => (
              <div
                class="card col-3 m-2 w-25 border border-danger rounded shadow  cards "
                key={index}
              >

                <div class="card-body">
                  <h4 className="my-2 focusColor">Title:{todo?.title}</h4>
                  <h6 class="card-title focusColor"> {todo?.description}</h6>
                  {/* <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                  <div class="card-text row mt-3 ">
                    {/* <p>{todo?.description}</p> */}{" "}
                    <div className="col p-1 cardClass shadow rounded-pill sticky-bottom">
                    {/* <div className="modal-footer"> */}
                      <button
                        type="button"
                        className="btn btn-warning btn-sm "
                        onClick={() => {
                          actionFunction({ todo: todo, type: "edit" });
                        }}
                      >
                        <BiEditAlt />
                      </button>

                      <button
                        type="button"
                        className="btn btn-danger btn-sm   mx-2"
                        onClick={() =>
                          actionFunction({ todo: todo, type: "delete" })
                        }
                      >
                        <RiDeleteBin2Line />
                      </button>
                  
                      <Example todo={todo}></Example>
                      {/* </div> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
