import { useContext, useEffect, useState } from "react";
import Post from "../post/Post.js";
// import Share from "../share/Share";
import "./PrivateChat.css";
// import { AuthContext } from "../../context/AuthContext";

export default function PrivateChat({ username }) {
//   const [posts, setPosts] = useState([]);
//   const { user } = useContext(AuthContext);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       const res = username
//         ? await axios.get("/posts/profile/" + username)
//         : await axios.get("posts/timeline/" + user._id);
//       setPosts(
//         res.data.sort((p1, p2) => {
//           return new Date(p2.createdAt) - new Date(p1.createdAt);
//         })
//       );
//     };
//     fetchPosts();
//   }, [username, user._id]);

  return (
    <div className="privateChat">
        <div className="feed">

            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                    
                        <img
                            className="postProfileImg"
                            src={"https://www.soyfutbol.com/__export/1611681055504/sites/debate/img/2021/01/26/ester_exposito_portada_crop1611681042130.jpg_1902800913.jpg"
                            }
                            alt=""
                        />
                    
                            <span className="postUsername">Bárbara</span>
                            <span className="postDate">26 años</span>
                    </div>
                </div>

                <hr></hr>
                
            </div>
                
                
                <div className="feedWrapper">
                    
                    <Post key={123} />

                    
                        <div className="postBottom">
                            
                            
                                <input type="area" className="writeMessage" placeholder="escribe un mensaje..."/>
        
                            <div className="postBottomRight">
                                <span className="postCommentText"> ENVIAR</span>
                            </div>
                        </div>

                     

                </div>
        </div>
        
    </div>
  );
}
