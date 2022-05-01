const Comment = ({ name, email, onClick }) => {
  return (
    <div className="comment" onClick={onClick}>
      <h4>name: {name}</h4>
      <p>email: {email}</p>
    </div>
  );
};

export default Comment;
