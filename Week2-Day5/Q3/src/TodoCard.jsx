import React from "react";

function TodoCard({ userId, title, completed }) {
  return (
    <div style={{ border: "1px solid black", margin: "8px", padding: "8px" }}>
      <p>User ID: {userId}</p>
      <p>Title: {title}</p>
      <p>Status: {completed ? "Completed" : "Not Completed"}</p>
    </div>
  );
}

export default TodoCard;

