import { ref, push, get, update, remove } from "firebase/database";
import { db } from "../lib/firebase";

export const createTodo = (uid, todo) =>
  push(ref(db, `todos/${uid}`), todo);

export const fetchTodos = async (uid) => {
  const snap = await get(ref(db, `todos/${uid}`));
  return snap.exists() ? Object.entries(snap.val()) : [];
};

export const updateTodo = (uid, id, data) =>
  update(ref(db, `todos/${uid}/${id}`), data);

export const deleteTodo = (uid, id) =>
  remove(ref(db, `todos/${uid}/${id}`));

