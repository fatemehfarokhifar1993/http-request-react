const NewComment = () => {
  return (
    <div className="newComment">
      <input type="text" placeholder="name" />
      <input type="email" placeholder="email" />
      <textarea type="textarea" placeholder="context" />
    </div>
  );
};

export default NewComment;
