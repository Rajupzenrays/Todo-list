import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import './AddTodo.css'
function AddTodo(props) {
  const [title, setTitle] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    // Validate todo text
    if (!title) {
      alert("Description is not Inserted");
      return;
    }

    props.addTodo(title);

    // Clear task text in component state
    setTitle("");
  };

  return (
    <div className="mainDiv">
      <form onSubmit={onSubmit} className="">
        <input
          name="task-title"
          type="text"
          placeholder="Add new Task . . ."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className=""
          data-testid="task-input-field"
          max="5"
        />
        <button
          type="submit"
          className=""
          data-testid="task-submit-btn">
          <FaEdit />
        </button>
      </form>
    </div>
  );
}


export default AddTodo;
