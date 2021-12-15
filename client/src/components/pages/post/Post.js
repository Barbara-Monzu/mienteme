import React, { useContext } from 'react'
import UserContext from '../../services/UserContext'
import "./Post.css";

export default function Post({ message }) {

  const { loggedUser } = useContext(UserContext)

  

  return (

    <>
      {(message?.sender === loggedUser._id) ?
        (<div className="post">

          <div className="postCenter">
            <span className="postText">{message.message}</span>
          </div>

        </div>) :
        (<div className="post">

          <div className="postCenter">
            <span className="postText">{message.message}</span>
          </div>

        </div>)}

    </>
  );
}


