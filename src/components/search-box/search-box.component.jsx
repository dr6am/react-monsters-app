import React from 'react';
import './search-box.style.css';

export const SearchBox = (props)=>{
    return(
        <input type="search" className={"search"} onChange={props.handleChange} placeholder={props.placeholder} />
        )
}

//