export function createNavbar() {
  const nav = document.createElement("nav");
  nav.className = "navbar";
  nav.style = "display:flex; gap:12px; align-items:center; padding:10px; background:#f5f5f5;";

  const links = document.createElement("div");
  links.innerHTML = `
    <a href="index.html">Home</a>
    <a href="signup.html">Signup</a>
    <a href="login.html">Login</a>
    <a href="todos.html">Todos</a>
  `;
  nav.appendChild(links);

  const userArea = document.createElement("div");
  userArea.style = "margin-left:auto; display:flex; gap:8px; align-items:center;";
  nav.appendChild(userArea);

  function render() {
    userArea.innerHTML = "";
    const logged = JSON.parse(localStorage.getItem("loggedInUser") || "null");
    if (logged) {
      const span = document.createElement("span");
      span.textContent = logged.name || logged.email;
      const outBtn = document.createElement("button");
      outBtn.textContent = "Logout";
      outBtn.style = "cursor:pointer;";
      outBtn.addEventListener("click", () => {
        localStorage.removeItem("loggedInUser");
        // refresh nav
        render();
        // optional redirect to login
        window.location.href = "login.html";
      });
      userArea.appendChild(span);
      userArea.appendChild(outBtn);
    } else {
      const loginLink = document.createElement("a");
      loginLink.href = "login.html";
      loginLink.textContent = "Login";
      userArea.appendChild(loginLink);
    }
  }

  render();

  // allow manual refresh from outside
  nav.refresh = render;
  return nav;
}

