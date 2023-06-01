/* eslint-disable react/prop-types */
const TodoItem = ({ todo, todos, setTodos, index }) => {
  const handleDelete = () => {
    setTodos(todos.filter((item) => item !== todos[index]));
  };
  const handleMarkAsComplete = () => {
    const newTodos = todos.map((element) => {
      if (element === todos[index]) {
        return { ...todo, isDone: !todo.isDone };
      }
      return element;
    });
    setTodos(newTodos);
  };
  return (
    <div>
      <h1 className={todo.isDone ? "text-decoration-line-through" : ""}>
        {todo.name}
      </h1>
      <div>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleMarkAsComplete}>
          {todo.isDone ? "Mark as incomplete" : "Mark as complete"}
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
