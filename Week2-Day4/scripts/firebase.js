const BASE_URL = "https://todos-display-default-rtdb.asia-southeast1.firebasedatabase.app/";

export async function addUserToDB(data) {
  return await fetch(`${BASE_URL}users.json`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}

export async function getUsersFromDB() {
  const response = await fetch(`${BASE_URL}users.json`);
  return response.json(); // may be object or null
}

export async function updateUserInDB(id, updatedUser) {
  return await fetch(`${BASE_URL}users/${id}.json`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedUser),
  });
}

export async function deleteUserFromDB(id) {
  return await fetch(`${BASE_URL}users/${id}.json`, {
    method: "DELETE",
  });
}
