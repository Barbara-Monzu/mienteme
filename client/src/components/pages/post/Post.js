import "./Post.css";
// import { MoreVert } from "@material-ui/icons";
// import { useContext, useEffect, useState } from "react";
// import { format } from "timeago.js";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../../context/AuthContext";

export default function Post({ post }) {
  // const [like, setLike] = useState(post.likes.length);
  // const [isLiked, setIsLiked] = useState(false);
  // const [user, setUser] = useState({});
  // const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  // const { user: currentUser } = useContext(AuthContext);

  // useEffect(() => {
  //   setIsLiked(post.likes.includes(currentUser._id));
  // }, [currentUser._id, post.likes]);

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const res = await axios.get(`/users?userId=${post.userId}`);
  //     setUser(res.data);
  //   };
  //   fetchUser();
  // }, [post.userId]);

  // const likeHandler = () => {
  //   try {
  //     axios.put("/posts/" + post._id + "/like", { userId: currentUser._id });
  //   } catch (err) {}
  //   setLike(isLiked ? like - 1 : like + 1);
  //   setIsLiked(!isLiked);
  // };
  return (
    <div className="post">
         
      <div className="postCenter">
          <span className="postText">¿Quieres ir a escalar baby?</span>
       </div>
      
      
    </div>
  );
}
