import React, { useState } from "react";


function Card({ id, image, info, price, name,removeTour }) {
    const [readmore, setReadmore] = useState(false)

    const description = `${info.substring(0,40)}....`

    function readmoreHandler() {
        setReadmore(!readmore);
      
    }

    return (
        <div className="card">
            <img src={image} className="image"></img>

            <div className="tourInfo">
                <div className="tourDetails">
                <h4 className="tourName">{name}</h4>
                    <h4 className="tourPrice">Rs. {price}</h4>
                    
                </div>
                <div className="description">
                    {readmore ? info : description}
                    <span className="readMore" onClick={readmoreHandler}>
                        {readmore ? `show less` : `read more`}
                    </span>
                </div>
            </div>
            <button   className="btnRed" onClick={() => removeTour(id)}>
                Not Interested
            </button>
        </div>
    )
}

export default Card;