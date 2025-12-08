
// Fetch Todos (only first 20)
async function fetchTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  const first20 = data.slice(0, 20);

  storeTodos(first20);
  renderTodos();
}

// -------------------------------
// Store in Local Storage
// -------------------------------
function storeTodos(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// -------------------------------
// Get todos from Local Storage
// -------------------------------
function getStoredTodos() {
  return JSON.parse(localStorage.getItem("todos")) || [];
}

// -------------------------------
// Render Todos on UI
// -------------------------------
function renderTodos() {
  const container = document.getElementById("todo-container");
  const todos = getStoredTodos();

  container.innerHTML = ""; // clear UI

  if (todos.length === 0) {
    container.innerHTML = "<p>No Todos Available</p>";
    return;
  }

  todos.forEach((todo) => {
    const div = document.createElement("div");
    div.className = "todo";

    const title = document.createElement("span");
    title.textContent = todo.title;
    if (todo.completed) title.classList.add("completed");

    // Toggle button
    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = todo.completed ? "Not Done" : "Complete";
    toggleBtn.onclick = () => toggleStatus(todo.id);

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => deleteTodo(todo.id);

    div.appendChild(title);
    div.appendChild(toggleBtn);
    div.appendChild(deleteBtn);

    container.appendChild(div);
  });
}

// Delete Todo
function deleteTodo(id) {
  let todos = getStoredTodos();
  todos = todos.filter((todo) => todo.id !== id);
  storeTodos(todos);
  renderTodos(); // update UI without refresh
}

// Toggle completed status
function toggleStatus(id) {
  let todos = getStoredTodos();
  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
  storeTodos(todos);
  renderTodos();
}

// Initialize App
if (!localStorage.getItem("todos")) {
  fetchTodos();
} else {
  renderTodos();
}

