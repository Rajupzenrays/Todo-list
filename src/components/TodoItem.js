import { FaTrashAlt } from "react-icons/fa";
import './TodoItem.css'
function TodoItem(props) {

  return (
    <li
      className=""
      >
      <input
        name="completed-checkbox"
        type="checkbox"
        className="checkbox"
        checked={props.todo.completed}
        value={props.todo.completed}
        onChange={() => props.markComplete(props.todo.id)}
       
      />
      <span className="spans">
        {props.todo.title}
      </span>
      <button
        onClick={() => props.delTodo(props.todo.id)}
        className=""
       
      >
        <FaTrashAlt />
      </button>
    </li>
  );
}

export default TodoItem;
