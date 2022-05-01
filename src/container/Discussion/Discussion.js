import React, { useEffect, useState } from "react";
import axios from "axios";
import Comment from "../../components/Comment";
import FullComment from "../../components/FullComment";
import NewComment from "../../components/NewComment";
const Discussion = () => {
  const [comments, setComments] = useState([]); //or null
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
  return (
    <main>
      <section className="comments">
        {comments ? (
          comments.map((c) => (
            <Comment key={c.id} name={c.name} email={c.email} />
          ))
        ) : (
          <p>loading ...</p>
        )}
      </section>
      <section>
        <FullComment />
      </section>
      <section>
        <NewComment />
      </section>
    </main>
  );
};

export default Discussion;
