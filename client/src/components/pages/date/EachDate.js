
import { useEffect, useState } from "react";
import ServiceMessages from '../../services/messages.service';
import { Link, useParams  } from "react-router-dom";

export default function EachDate({ nameDate, description, creator, day }) {



    return (
        <>
                <div className="conversation">

                    <div className="chatOnlineImgContainer">
                        <p>{nameDate}</p>
                        <p>{description}</p>
            <Link to={`/match/${creator._id}`} style={{ marginLeft: "500px", textDecoration: "none" }}>
                        <p>{creator.username}</p>
    
                        <p>{creator.age}</p>

            </Link>
                    </div>
                    <div className="date">
                        <p>{day}</p>

                    </div>
                </div>

            <hr></hr>
        </>

    );
}
