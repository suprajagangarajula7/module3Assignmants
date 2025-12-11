import { createNavbar } from "../components/navbar.js";
import { createFooter } from "../components/footer.js";
import { getUsersFromDB } from "./firebase.js";

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("site-header").appendChild(createNavbar());
  document.getElementById("site-footer").appendChild(createFooter());

  const form = document.getElementById("loginForm");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value.trim().toLowerCase();
    const password = document.getElementById("password").value;

    if (!email || !password) {
      alert("Enter email and password.");
      return;
    }

    try {
      const data = await getUsersFromDB();
      const usersArray = data ? Object.entries(data).map(([id, u]) => ({ id, ...u })) : [];
      const found = usersArray.find(u => u.email === email && u.password === password);
      if (!found) {
        alert("Invalid credentials.");
        return;
      }

      // store safe info in localStorage (avoid storing password)
      const safeUser = { id: found.id, name: found.name, email: found.email };
      localStorage.setItem("loggedInUser", JSON.stringify(safeUser));

      // navigate
      window.location.href = "todos.html";
    } catch (err) {
      console.error(err);
      alert("Login failed. See console.");
    }
  });
});

