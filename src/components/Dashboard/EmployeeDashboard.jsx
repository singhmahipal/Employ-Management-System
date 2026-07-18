import React from "react";
import Header from "../other/Header.jsx";
import TaskListNumbers from "../other/TaskListNumbers.jsx";
import TaskList from "../TaskList/TaskList.jsx";

const EmployeeDashboard = () => {
  return (
    <div className="p-10 bg-[#1c1c1c] h-screen">
      <Header />
      <TaskListNumbers />
      <TaskList />
    </div>
  );
};

export default EmployeeDashboard;
