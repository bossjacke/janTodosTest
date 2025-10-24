import React from "react";
import "./todolist.css"

const TodoList = ({ todos, onDelete, onEdit }) => {
  if (!todos || todos.length === 0) {
    return <p className="empty-text">No todos found</p>;
  }

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <div className="todo-item" key={todo._id}>
          <div className="todo-content">
            <h3>{todo.title}</h3>
            <p>{todo.description || "No description"}</p>
          </div>

          <div className="todo-actions">
            <button className="edit-btn" onClick={() => onEdit(todo)}>
              ✏️ Edit
            </button>
            <button className="delete-btn" onClick={() => onDelete(todo._id)}>
              🗑️ Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;