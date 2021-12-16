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
        (
          <div className="post-loggedUser">
            <div className="postCenter">
              <span className="postText">{message.message}</span>
              <span className="postText">{message.createAt}</span>

            </div>

          </div>) :
        (<div className="post-match">
          <div className="profile-pic-chat">
            <img className="picture-chat" src={message.sender.profileImages} alt="" />
          </div>
          <div className="">
            <span className="postText-match">{message.message}</span>
          </div>

        </div>)}

    </>
  );
}



{/* <div class="chat">
  
  <div class="chat-texts">
    
    <div class="text">
      <div class="profile-pic"> <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt=""> </div>
      <div class="text-content">
          <h5>Joannie</h5>
        Lorem ipsum dolor sit amet.<span class="timestamp">12:00hrs</span></div>
    </div>
    
    <div class="text sent">
      <div class="profile-pic"><img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt=""></div>
      <div class="text-content"><h5>Laurie</h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, saepe?<span class="timestamp">12:00hrs</span></div>
    </div>
    
  </div>
  
  <div class="send-message">
    <div class="message-text">
      <div class="smiley"><i class="lni lni-smile"></i></div>
       <input type="text" placeholder="Send Message">
      <div class="attachment"><i class="lni lni-upload"></i></div>
    </div>
    <button><i class="lni lni-arrow-right-circle"></i></button>
  </div>
  
  
</div> */}