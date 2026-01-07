import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import {
  createTodo,
  fetchTodos,
  updateTodo,
  deleteTodo,
} from "../services/todo.service";
import { Button } from "@/components/ui/button";
import UpdateTodoModal from "../components/todos/UpdateTodoModal";

export default function Todos() {
  const { user } = useAuth();
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetchTodos(user.uid).then(setTodos);
  }, [user.uid]);

  const filteredTodos = todos.filter(([_, t]) =>
    filter === "all"
      ? true
      : filter === "completed"
      ? t.completed
      : !t.completed
  );

  return (
    <div className="p-6">
      <div className="space-x-2">
        <Button onClick={() => setFilter("all")}>All</Button>
        <Button onClick={() => setFilter("completed")}>Completed</Button>
        <Button onClick={() => setFilter("pending")}>Pending</Button>
      </div>

      <div className="mt-4 flex gap-2">
        <input
          className="border p-2"
          placeholder="New Todo"
          onChange={(e) => setTitle(e.target.value)}
        />
        <Button
          onClick={() =>
            createTodo(user.uid, { title, completed: false }).then(() =>
              fetchTodos(user.uid).then(setTodos)
            )
          }
        >
          Add
        </Button>
      </div>

      <ul className="mt-6 space-y-2">
        {filteredTodos.map(([id, todo]) => (
          <li key={id} className="flex justify-between border p-2">
            <span
              className={todo.completed ? "line-through" : ""}
              onClick={() =>
                updateTodo(user.uid, id, {
                  completed: !todo.completed,
                }).then(() => fetchTodos(user.uid).then(setTodos))
              }
            >
              {todo.title}
            </span>
            <div className="space-x-2">
              <UpdateTodoModal
                todo={todo}
                onSave={(newTitle) =>
                  updateTodo(user.uid, id, { title: newTitle }).then(() =>
                    fetchTodos(user.uid).then(setTodos)
                  )
                }
              />
              <Button
                variant="destructive"
                onClick={() =>
                  deleteTodo(user.uid, id).then(() =>
                    fetchTodos(user.uid).then(setTodos)
                  )
                }
              >
                Delete
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

