import {
    ADD_NOTE,
    DELETE_NOTE,
    HANDLE_OPEN_MODAL,
    HANDLE_CLOSE_MODAL,
    EDIT_NOTE,
    UPDATE_NOTE,
    VIEW_NOTE,
    STORE_NAME_RESET,
   
   
  } from "./actionTypes";
  
  export const addNewNote = (note) => {
    return {
      type: ADD_NOTE,
      payload: {
        id: Date.now(),
        title: note?.title,
        description:note?.description,
        
      },
    };
  };
  export const deleteNote = (id) => {
    return {
      type: DELETE_NOTE,
      id,
    };
  };
  
  // export const clearAllnote = () => {
  //   return {
  //     type: CLEAR_ALL_NOTE,
  //   };
  // };
  
  export const editNote = (id) => {
    
    return {
      type: EDIT_NOTE,
      payload: {
        id: id,
      },
      isEdit: true,
      // setShow:true,
    };
  };
  
  export const updateNote = (id, note) => {
    return {
      type: UPDATE_NOTE,
      payload: {
        noteId: id,
        noteTitle: note?.title,
        noteDescription:note?.description,
       
      },
    };
  };

  export const viewNote = (i) => {
    return {
      type: VIEW_NOTE,
     
        payload:{
          i:i,

        }
        
       
      
    };
  };
  export const showModal = () => {
    return {
      type: HANDLE_OPEN_MODAL,
     
        payload:{
          isShowModal:true,

        }
        
       
      
    };
  };


  export const hideModal = () => {
    return {
      type: HANDLE_CLOSE_MODAL,
     
        payload:{
          isShowModal:false,

        }
        
       
      
    };
  };
  
  export const resetStore = () => {
    return{
    type: STORE_NAME_RESET,
  };
};
   
  