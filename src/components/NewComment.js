import axios from "axios";
import { useState } from "react";
const NewComment = ({ setComments }) => {
  const [comment, setComment] = useState({
    name: "",
    email: "",
    body: "",
  });
  const changeHandler = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };
  const postCommentHandler = () => {
    axios
      .post("http://localhost:3001/comments", { ...comment })
      .then((response) => axios.get("http://localhost:3001/comments"))
      .then((response) => setComments(response.data))
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="newComment">
      <h4>Add new comment</h4>
      <input
        type="text"
        placeholder="name"
        name="name"
        onChange={changeHandler}
      />
      <input
        type="email"
        placeholder="email"
        name="email"
        onChange={changeHandler}
      />
      <textarea
        type="textarea"
        placeholder="body"
        name="body"
        onChange={changeHandler}
      />
      <button onClick={postCommentHandler}>add</button>
    </div>
  );
};

export default NewComment;
