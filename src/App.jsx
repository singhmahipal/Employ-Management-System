import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login.jsx";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard.jsx";
import AdminDashboard from "./components/Dashboard/AdminDashboard.jsx";
import { AuthContext } from "./context/AuthProvider.jsx";

const App = () => {
  const [user, setUser] = useState(null);

  const data = useContext(AuthContext);

  const handleLogin = (email, password) => {
    if (email == "admin@a.a" && password == "a") {
      setUser("admin");
    } else if (email == "employee@a.a" && password == "a") {
      setUser("employee");
    } else {
      alert("invalid credentials");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "employee" ? <EmployeeDashboard /> : <AdminDashboard />}
    </>
  );
};

export default App;
