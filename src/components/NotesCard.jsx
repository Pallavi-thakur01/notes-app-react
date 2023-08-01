import React,{useState}from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteNote,  editNote } from "../redux/actions";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin2Line } from "react-icons/ri";

export const TodoLists = () => {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const notes = useSelector((state) => state.todoReducer.notes);
  const dispatch = useDispatch();


  const actionFunction = (data) => {
    if (data && data?.type === "edit") {
      dispatch(editNote(data?.todo?.id));
    } else if (data && data?.type === "delete") {
      dispatch(deleteNote(data?.todo?.id));
    }
  };

  return (
    <div className="container my-2 ">
      <div class="row">
        {notes &&
          notes.map((todo, index) => (
            <div class="card col-3 m-5 w-25 border border-danger rounded shadow " key={index}>
              <div class="card-body">
                <h5 class="card-title">{todo?.title}</h5>
                {/* <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                <p class="card-text">
                  {" "}
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() =>  actionFunction({ todo: todo, type: "edit" })
                   }
                  >
                    <BiEditAlt />
                  </button>
                  <button
                    className="btn btn-danger btn-sm ml-1  mx-2"
                    onClick={() =>
                      actionFunction({ todo: todo, type: "delete" })
                    }
                  >
                    <RiDeleteBin2Line />
                  </button>
                </p>
                <a href="#" class="card-link">
                  Card link
                </a>
                <a href="#" class="card-link">
                  Another link
                </a>
              </div>
            </div>
            
          ))}
      </div>
    </div>
  );
};
