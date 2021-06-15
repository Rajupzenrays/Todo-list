import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddTodo from "./AddTodo";
import TodosFooter from "./TodosFooter";
import TodosHeader from "./TodosHeader";
import TodoItem from "./TodoItem";
import './TodoList.css'
function TodosList() {
  const [todos, setTodos] = useState([]);

  // Add a new todo item
  const addTodo = (title) => {
    let newTodo = {
      id: uuidv4(),
      title, // new in ES6: same as title: title
      completed: false,
    };

    // [...] = spread operator (copy items)
    // Used because we can't (and shouldn't) change state values directly
    setTodos([...todos, newTodo]);
  };

  // Delete a todo item
  const delTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Toggle completed state of todo item
  const markComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="main">
      <TodosHeader />

      <AddTodo addTodo={addTodo} />

      <div className="task-showing-area">
        {todos.length > 0 ? (
          // If there are todo items, show them in a list
          <ol className="ol" data-testid="todos-list">
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                markComplete={markComplete}
                delTodo={delTodo}
              />
            ))}
          </ol>
        ) : (
           
          <p
            className="" 
          >
            Empty Task      </p>
        )}
      </div>

      <TodosFooter
        totalTasks={todos.length}
        doneTasks={todos.filter((todo) => todo.completed).length}
      />
    </div>
  );
}

export default TodosList;
