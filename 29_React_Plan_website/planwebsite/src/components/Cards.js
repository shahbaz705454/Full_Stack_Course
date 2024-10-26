
import { useState } from "react";

function Cards({ id, image, info, price, name ,removeTour}) {

    const [readmore, setReadMore] = useState(false);

    function readmoreHandler() {
        setReadMore(!readmore);

    }

    

 

    const description =readmore ?info : `${info.substring(0, 200)}....`;
    return (
        <div className="card">
            <img src={image} className="image"></img>

            <div className="tour-info">

                <div className="tour-details">
                    <h4 className="tour-price">₹ {price}</h4>
                    <h4 className="tour-name">{name}</h4>

                </div>
                <div className="description">
                    {description}
                    <span onClick={readmoreHandler} className="read-more">
                        {readmore ? ' Show Less' : ' Read More'};
                    </span>
                </div>
            </div>




            <button className="btn-red" onClick={()=>removeTour(id)}>Not Interested</button>






        </div>
    )
}

export default Cards;