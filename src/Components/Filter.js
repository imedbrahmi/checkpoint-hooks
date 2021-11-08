import React from 'react'
import Star from './Star'
const Filter = ({setSearch,setRating}) => {

    return (
        <div className="filter">
            <input className="byn" type="text"placeholder="Search By Name " 
            onChange= {(e)=>setSearch(e.target.value)} />
            
    
            </div>
              
    )
     
}


export default Filter
