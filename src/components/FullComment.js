import { BiTrash } from "react-icons/bi";
const FullComment = () => {
  return (
    <div className="fullComment">
      <div>
        <h3>name</h3>
        <h4>email</h4>
      </div>
      <p className="fullComment-context"></p>
      <button>
        <BiTrash />
      </button>
    </div>
  );
};

export default FullComment;
