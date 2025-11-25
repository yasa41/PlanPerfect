import React from "react";

export default function ToDoList({ todos }) {
  return (
    <>
      <h3 className="text-2xl font-bold text-brown mb-6">To-Do List</h3>
      <ul className="space-y-4">
        {todos.map((todo, idx) => (
          <li key={idx} className="flex items-center justify-between bg-offwhite rounded-xl px-6 py-4 shadow">
            <span className="text-lg text-brown">{todo.task}</span>
            <span className={`px-4 py-2 rounded font-bold text-base ${
              todo.status === "Done" ? "bg-green-200 text-green-800" : "bg-yellow-200 text-yellow-800"
            }`}>{todo.status}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
