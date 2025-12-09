// scripts/firebase.js

export const BASE_URL =
  "https://bookmanagement1-firebase-default-rtdb.asia-southeast1.firebasedatabase.app/";

export async function addBookToDB(book) {
  return await fetch(`${BASE_URL}books.json`, {
    method: "POST",
    body: JSON.stringify(book),
  });
}

export async function getBooksFromDB() {
  const response = await fetch(`${BASE_URL}books.json`);
  return await response.json();
}

export async function updateBookInDB(id, updatedBook) {
  return await fetch(`${BASE_URL}books/${id}.json`, {
    method: "PATCH",
    body: JSON.stringify(updatedBook),
  });
}

export async function deleteBookFromDB(id) {
  return await fetch(`${BASE_URL}books/${id}.json`, {
    method: "DELETE",
  });
}
