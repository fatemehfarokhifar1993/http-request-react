const NewComment = () => {
  return (
    <div className="newComment">
      <h4>Add new comment</h4>
      <input type="text" placeholder="name" name="name" />
      <input type="email" placeholder="email" name="email" />
      <textarea type="textarea" placeholder="content" name="content" />
      <button>add</button>
    </div>
  );
};

export default NewComment;
