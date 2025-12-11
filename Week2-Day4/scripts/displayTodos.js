export function displayTodos(todos, container) {
  if (!container) throw new Error("Container element required");
  container.innerHTML = "";

  const list = document.createElement("div");
  list.style = "display:grid; gap:8px;";

  todos.forEach(t => {
    const card = document.createElement("div");
    card.style = "padding:10px; border:1px solid #ddd; border-radius:6px; background:#fff;";
    const title = document.createElement("div");
    title.textContent = t.title;
    title.style = "font-weight:500;";
    const meta = document.createElement("div");
    meta.textContent = `ID: ${t.id} • UserId: ${t.userId} • ${t.completed ? "Completed" : "Pending"}`;
    meta.style = "font-size:12px; color:#666; margin-top:6px;";
    card.appendChild(title);
    card.appendChild(meta);
    list.appendChild(card);
  });

  container.appendChild(list);
}

