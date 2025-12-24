import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Todos() {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data.slice(0, 10)));
  }, []);

  function handleLogout() {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  }

  return (
    <div className="page">
      <h2>Todos</h2>
      <button onClick={handleLogout} className="logout-btn">
        Logout
      </button>

      <div className="todo-list">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="todo-card"
            onClick={() => navigate(`/todos/${todo.id}`)}
          >
            <h4>{todo.title}</h4>
            <p>{todo.completed ? "Completed" : "Not Completed"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todos;
