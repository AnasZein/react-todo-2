import { useState } from "react";
import TodoItem from "./todoItem";

const Todolist = () => {
  const [todo, setTodo] = useState({});
  const [todos, setTodos] = useState([]);
  const handleAddTodo = () => {
    setTodos([...todos, todo]);
    setTodo({ name: "", isDone: false });
  };
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setTodo({ name: e.target.value, isDone: false })}
        value={todo.name}
      />
      <button onClick={handleAddTodo}>Add</button>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          todos={todos}
          setTodos={setTodos}
          index={index}
        />
      ))}
    </div>
  );
};

export default Todolist;
