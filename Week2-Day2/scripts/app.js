// scripts/app.js

import {
  addBookToDB,
  getBooksFromDB,
  updateBookInDB,
  deleteBookFromDB,
} from "./firebase.js";

import { renderBooks } from "./crud.js";

document.addEventListener("DOMContentLoaded", () => {
  loadBooks();

  document.getElementById("addBookForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const newBook = {
      title: e.target.title.value,
      author: e.target.author.value,
      price: e.target.price.value,
      image: e.target.image.value,
    };

    await addBookToDB(newBook);
    loadBooks();
    e.target.reset();
  });

  document.getElementById("books").addEventListener("click", async (e) => {
    const id = e.target.dataset.id;

    if (e.target.classList.contains("delete-btn")) {
      await deleteBookFromDB(id);
      loadBooks();
    }

    if (e.target.classList.contains("update-btn")) {
      const newAuthor = prompt("Enter new author name:");
      if (newAuthor) {
        await updateBookInDB(id, { author: newAuthor });
        loadBooks();
      }
    }
  });
});

async function loadBooks() {
  const books = await getBooksFromDB();
  renderBooks(books || {});
}
