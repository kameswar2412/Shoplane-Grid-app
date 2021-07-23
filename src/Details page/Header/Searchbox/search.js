import React, { useState } from 'react';
const Searchbox = () => {
    const {keyword, setKeyword}=useState("")


    const onSearch=()=>{
    console.log(keyword)

    }
   

    return ( 
        <div className="d-flex">      
         <input className="form-control me-2"

        type="search"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        
        placeholder="Search"
         aria-label="Search" />
        <button onClick={onSearch} className="btn btn-outline-success" type="button" >Search</button>
        </div>
 
     );
}
 
export default Searchbox;