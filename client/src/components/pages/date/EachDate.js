import { Link } from "react-router-dom";
import "./Date.css"

export default function EachDate({ nameDate, description, creator, day }) {

    return (
        <>

            <Link to={`/match/${creator._id}`} style={{ marginLeft: "500px", textDecoration: "none", color: "black" }}>
               
                    <div className="alldates">
                        <div className="">
                            <p style={{ margin: "10px" }}><strong>{creator.username}</strong>, {creator.age}</p>
                            <img className="imag-date" src={creator.profileImages} alt="" />

                        </div>
                        <div className="description-date">
                            <p className="name-date-bycat"><strong>{nameDate}</strong></p>
                            <p className="name-date-bycat">{description}</p>
                            <p className="name-date-bycat">{day}</p>
                        </div>
                    </div>
            
                <hr></hr>
            </Link>
        </>

    );
}
