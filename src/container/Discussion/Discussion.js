import React, { useEffect, useState } from "react";
import axios from "axios";
import Comment from "../../components/Comment";
import FullComment from "../../components/FullComment";
import NewComment from "../../components/NewComment";
const Discussion = () => {
  const [comments, setComments] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    const getComments = async () => {
      try {
        const response = await axios.get("http://localhost:3001/comments");
        setComments(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getComments();
  }, []);
  const selectCommentHandler = (id) => {
    setSelectedId(id);
  };
  return (
    <main>
      <section className="comments">
        {comments ? (
          comments.map((c) => (
            <Comment
              key={c.id}
              name={c.name}
              email={c.email}
              onClick={() => selectCommentHandler(c.id)}
            />
          ))
        ) : (
          <p>loading ...</p>
        )}
      </section>
      <section>
        <FullComment commentId={selectedId} />
      </section>
      <section>
        <NewComment setComments={setComments} />
      </section>
    </main>
  );
};

export default Discussion;
