import React from 'react';
 
const SearchBox = ({searchfield,searchChange} ) =>{

    return (
        <div className="searchBox">
             <input  type="text" placeholder="search  robots.." 
             onChange={searchChange}
             />
        </div>
       
    );
}

export default  SearchBox;