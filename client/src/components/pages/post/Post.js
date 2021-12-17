import React, { useContext } from 'react'
import UserContext from '../../services/UserContext'
import "./Post.css";

export default function Post({ message }) {
  console.log(message, "ALGOOOOOO")
  const { loggedUser } = useContext(UserContext)

  console.log("SENDER", message?.sender)

  return (

    <>
      {(message?.sender._id === loggedUser._id) ?
        (<div className="ave">

          <div className="post-loggedUser">
            <div className="postCenter">
              <span className="postText">{message.message}</span>
              <span className="postText">{message.createAt}</span>

            </div>

          </div>

        </div>

        )
        :

        (
          <div className="ave2">

            <div className="post-match">
              <div className="profile-pic-chat">
                <img className="picture-chat" src={message.sender.profileImages} alt="" />
              </div>
              <div className="">
                <span className="postText-match">{message.message}</span>
              </div>

            </div>
          </div>
        )
      }

    </>
  );
}
