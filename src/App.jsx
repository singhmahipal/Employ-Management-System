import React, { useEffect } from "react";
import Login from "./components/Auth/Login.jsx";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard.jsx";
import AdminDashboard from "./components/Dashboard/AdminDashboard.jsx";
import { setLocalStorage } from "./utils/localStorage.jsx";

const App = () => {
  useEffect(() => {
    setLocalStorage();
  });

  return (
    <>
      {/* <Login /> */}
      {/* <EmployeeDashboard /> */}
      <AdminDashboard />
    </>
  );
};

export default App;
