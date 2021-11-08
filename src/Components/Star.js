
import ReactStars from "react-rating-stars-component";
import React from "react"; 

const star = ({newRating}) => {

    
       
      return(
        <ReactStars
          count={10}
          onChange={newRating}
          size={25}
          activeColor="#ffd700"
          
        />
             )
            
      }

export default star