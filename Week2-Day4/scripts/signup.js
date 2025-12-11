import { createNavbar } from "../components/navbar.js";
import { createFooter } from "../components/footer.js";
import { addUserToDB, getUsersFromDB } from "./firebase.js";

document.addEventListener("DOMContentLoaded", () => {
  // inject nav/footer
  document.getElementById("site-header").appendChild(createNavbar());
  document.getElementById("site-footer").appendChild(createFooter());

  const form = document.getElementById("signupForm");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim().toLowerCase();
    const password = document.getElementById("password").value;

    if (!email || !password) {
      alert("Please provide email and password.");
      return;
    }

    // check duplicate email
    try {
      const data = await getUsersFromDB();
      const usersArray = data ? Object.entries(data).map(([id, u]) => ({ id, ...u })) : [];
      if (usersArray.some(u => u.email === email)) {
        alert("User with this email already exists. Please login.");
        return;
      }

      const newUser = { name, email, password };
      await addUserToDB(newUser);

      alert("Signup successful — please login.");
      window.location.href = "login.html";
    } catch (err) {
      console.error(err);
      alert("Signup failed. Check console for details.");
    }
  });
});

