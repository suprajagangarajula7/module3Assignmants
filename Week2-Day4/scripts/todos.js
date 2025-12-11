import { createNavbar } from "../components/navbar.js";
import { createFooter } from "../components/footer.js";
import { displayTodos } from "./displayTodos.js";

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("site-header").appendChild(createNavbar());
  document.getElementById("site-footer").appendChild(createFooter());

  // Protect route
  const logged = JSON.parse(localStorage.getItem("loggedInUser") || "null");
  if (!logged) {
    alert("Please login first.");
    window.location.href = "login.html";
    return;
  }

  const info = document.getElementById("logged-user");
  if (info) info.textContent = `Logged in as: ${logged.name || logged.email}`;

  const container = document.getElementById("todosContainer");
  const loading = document.createElement("p");
  loading.textContent = "Loading todos...";
  container.appendChild(loading);

  fetch("https://jsonplaceholder.typicode.com/todos?_limit=50")
    .then(res => res.json())
    .then(data => {
      container.removeChild(loading);
      displayTodos(data, container);
    })
    .catch(err => {
      console.error(err);
      container.textContent = "Failed to load todos.";
    });
});

loadTodos();
