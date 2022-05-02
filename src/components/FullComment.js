import axios from "axios";
import { BiTrash } from "react-icons/bi";
import React, { useEffect, useState } from "react";

const FullComment = ({ commentId, setComments, setSelectedId }) => {
  const [comment, setComment] = useState(null);
  useEffect(() => {
    if (commentId) {
      axios
        .get(`http://localhost:3001/comments/${commentId}`)
        .then((response) => {
          setComment(response.data);
        })
        .catch();
    }
  }, [commentId]);
  const deleteHandler = async () => {
    try {
      await axios.delete(`http://localhost:3001/comments/${commentId}`);
      const response = await axios.get("http://localhost:3001/comments");
      setComments(response.data);
      setSelectedId(null);
      setComment(null);
    } catch (error) {}
  };
  let commentDetail = (
    <p
      style={{
        background: "#ddbea9",
        padding: "1rem",
        borderRadius: "5px",
        margin: "1rem",
      }}
    >
      please select a comment !
    </p>
  );

  if (commentId) commentDetail = <p>loading ...</p>;
  if (comment) {
    commentDetail = (
      <div className="fullComment">
        <div>
          <h3>{comment.name}</h3>
          <h4>{comment.email} </h4>
        </div>
        <p className="fullComment-context">{comment.body}</p>
        <button onClick={deleteHandler}>
          <BiTrash />
        </button>
      </div>
    );
  }
  return commentDetail;
};

export default FullComment;
