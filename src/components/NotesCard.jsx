import React,{useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteNote,
  editNote,
  showModal,searchBar} from "../redux/actions";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin2Line } from "react-icons/ri";
import AddNote from "../components/AddNotes";
import Example from "../components/viewModal";

export const NotesCard = () => {
  var [date,setDate] = useState(new Date());
  const notes = useSelector((state) => state.todoReducer.notes);

  const dispatch = useDispatch();

  const handleShow = () => dispatch(showModal());
  const searchBarr= () =>dispatch(searchBar());


  const actionFunction = (data) => {
    if (data && data?.type === "edit") {
      dispatch(handleShow());

      dispatch(editNote(data?.todo?.id));
      
    } else if (data && data?.type === "delete") {
      alert("Are You sure...?");
      dispatch(deleteNote(data?.todo?.id));
    }
  };

  return (
    <>
      <AddNote  />
      <div className="container my-2 ">
        <div class="row">
          { notes && 


              


           notes .map((todo, index) => (
              <div
                class="card col-3 m-5 w-25 border border-danger rounded shadow  cards "
                key={index}
              >
                <div class="card-body ">
                
                  <h4 className="my-2 focusColor">Title:{todo?.title}</h4>
                  <h6 class="card-title focusColor p-2"> {todo?.description}</h6>
                 
            
                  <div class="card-text row mt-3 ">
                   
                    <div className="col p-1 cardClass shadow rounded-pill sticky-bottom">
                      <button
                        type="button"
                        className="btn btn-warning btn-sm ml-5"
                        onClick={() => {
                          actionFunction({ todo: todo, type: "edit" });
                        }}
                      >
                        <BiEditAlt />
                      </button>

                      <button
                        type="button"
                        className="btn btn-danger btn-sm ml-5  mx-2"
                        onClick={() =>
                          actionFunction({ todo: todo, type: "delete" })
                        }
                      >
                        <RiDeleteBin2Line />
                      </button>

                      <Example todo={todo} />

                      {/* <!-- Modal --> */}
                    </div>
                  </div>
                   
                </div>

                <div className="row">
                    <div className="col">
                <p> Time : {date.toLocaleTimeString()}</p>
                </div>
                <div className="col">
            <p> Date : {date.toLocaleDateString()}</p>
            </div>
            </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
