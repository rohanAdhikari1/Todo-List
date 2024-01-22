import React from "react";

const TodoTitle = () => {
  return (
    <div className="pt-5">
      <h3 style={{ fontFamily: 'Allan' }}>TODO LIST</h3>
      <button className="btn btn-primary mt-4"><i className="fa-solid fa-plus"></i> Add Task</button>
    </div>
  );
};

export default TodoTitle;
