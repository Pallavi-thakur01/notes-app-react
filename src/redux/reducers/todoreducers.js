import {
    ADD_NOTE,
    DELETE_NOTE,
    
    EDIT_NOTE,
    UPDATE_NOTE,
    
  } from "../actions/actionTypes";
  
  const initialState = {
    notes: [
      {
        id: 1,
        title: "This is first notee",
        description: "Note 1-It is a long established fact that a reader will be distracted by the readable content  English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
       
       
      },
      {
        id: 2,
        title: "This is second note",
         description    : "Note 2-It is a long established fact that a reader will be distracted by the readable content of  English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
        
        
      },
      
    ],
    isEdit: false,
    editnoteId: "",
  };
  
  const noteReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_NOTE:
        const { id, title,description} = action.payload;
        return {
          ...state,
          notes: [
            ...state.notes,
            {
              id: id,
              title: title,
              description: description,
             
              
            },
          ],
          isEdit: action.isEdit,
        };
      case DELETE_NOTE:
        const newnoteList = state.notes.filter((item) => item.id != action.id);
        return {
          ...state,
          notes: newnoteList,
        };
  
      case EDIT_NOTE:
        const editNote = action.payload;
        let newEditNote = state?.notes?.find((item) => item?.id === editNote?.id);
        return {
          ...state,
          isEdit: action.isEdit,
          editNote: newEditNote,
        };
  
      case UPDATE_NOTE:
        const { noteId, noteTitle, noteDescription } = action.payload;
        const notes = state.notes.filter((note) => {
          return note.id !== noteId;
        });
  
        const note = state.notes.find((note) => note?.id === noteId);
        note.title = noteTitle;
        note.description = noteDescription;
       
        notes.push(note);
  
        return {
          ...state,
          notes: [...notes],
          isEdit: false,
        };
  
     
        // return {
        //   ...state,
        //   notes: [...allnotes],
        //   isEdit: false,
        // };
  
    
      default:
        return state;
    }
  };
  export default noteReducer;