import React from 'react';

const Search = ({notes:todo}) => {

        console.log(todo)
    

  return (
    <div>
      <input type='text' placeholder='search' 
       className="fs-4 rounded-pill mr-sm-2 mx-2 border border-danger mt-2  focusColor"
            aria-label="Search"
     
      />
    


    </div>
  );
}

export default Search;
