import {
    ADD_NOTE,
    DELETE_NOTE,
    CLEAR_ALL_NOTE,
    EDIT_NOTE,
    UPDATE_NOTE,
   
  } from "./actionTypes";
  
  export const addNewNote = (note) => {
    return {
      type: ADD_NOTE,
      payload: {
        id: Date.now(),
        title: note?.title,
        
      },
    };
  };
  export const deleteNote = (id) => {
    return {
      type: DELETE_NOTE,
      id,
    };
  };
  
  export const clearAllnote = () => {
    return {
      type: CLEAR_ALL_NOTE,
    };
  };
  
  export const editNote = (id) => {
    
    return {
      type: EDIT_NOTE,
      payload: {
        id: id,
      },
      isEdit: true,
    };
  };
  
  export const updateNote = (id, note) => {
    return {
      type: UPDATE_NOTE,
      payload: {
        noteId: id,
        noteTitle: note?.title,
       
      },
    };
  };
  
  // export const marknoteCompleted = (id) => {
  //   return {
  //     type: MARK_COMPLETED,
  //     payload: {
  //       selectednoteId: id
  //     }
  //   }
  // }
  