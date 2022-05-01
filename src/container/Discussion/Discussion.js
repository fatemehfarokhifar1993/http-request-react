import React, { useEffect, useState } from "react";
import axios from "axios";
import Comment from "../../components/Comment";
import FullComment from "../../components/FullComment";
import NewComment from "../../components/NewComment";
const Discussion = () => {
  const [comments, setComments] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [error,setError]=useState(false);

  useEffect(() => {
    const getComments = async () => {
      try {
        const response = await axios.get("http://localhost:3001/comments");
        setComments(response.data);
      } catch (error) {
        setError(true)
      }
    };

    getComments();
  }, []);
  const selectCommentHandler = (id) => {
    setSelectedId(id);
  };
  const renderComments = () => {
    let renderValue = <p>loading ...</p>;
    if(error) renderValue=<p>fetching data failed !</p>
    if (comments && !error) {
      renderValue = comments.map((c) => (
        <Comment
          key={c.id}
          name={c.name}
          email={c.email}
          onClick={() => selectCommentHandler(c.id)}
        />
      ));
    }
    return renderValue;
  };
  return (
    <main>
      <section className="comments">{renderComments()}</section>
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
