const Comment = ({ name, email }) => {
  return (
    <div className="comment">
      <h4>name: {name}</h4>
      <p>email: {email}</p>
    </div>
  );
};

export default Comment;
