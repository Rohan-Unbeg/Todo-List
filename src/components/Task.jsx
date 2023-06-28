import React from "react";

const Task = ({ title, description, deleteTask, index }) => {
  return (
    <div className="task">
      <p>{title}</p>
      <div>
        <span>{description}</span>
        <button onClick={() => deleteTask(index)}>-</button>
      </div>
    </div>
  );
};

export default Task;
