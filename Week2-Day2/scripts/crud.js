// scripts/crud.js

export function renderBooks(booksObj) {
  const booksContainer = document.getElementById("books");
  booksContainer.innerHTML = "";

  for (let id in booksObj) {
    const book = booksObj[id];

    const card = document.createElement("div");
    card.className = "book-card";

    card.innerHTML = `
      <img src="${book.image}" class="book-img" />
      <h3>${book.title}</h3>
      <p>Author: ${book.author}</p>
      <p>Price: ₹${book.price}</p>

      <button class="update-btn" data-id="${id}">Update Author</button>
      <button class="delete-btn" data-id="${id}">Delete</button>
    `;

    booksContainer.appendChild(card);
  }
}
