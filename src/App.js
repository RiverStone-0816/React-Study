import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [todoData, setTodoData1] = useState([
    { id: 1, title: "Study", completed: false },
    { id: 2, title: "Clean", completed: false },
  ]);

  const handleClick = (dataId) => {
    const newTodoData = todoData.filter((x) => x.id !== dataId);
    setTodoData1(newTodoData);
    console.log("newTodoData", newTodoData);
  };

  return (
    <div className="todo-container">
      {todoData.length > 0 ? (
        todoData.map((item) => (
          <div key={item.id} className="todo-item">
            <span>{item.title}</span>
            <button className="check" onClick={() => handleClick(item.id)}>
              x
            </button>
          </div>
        ))
      ) : (
        <p>No more tasks left!</p>
      )}
    </div>
  );
}
