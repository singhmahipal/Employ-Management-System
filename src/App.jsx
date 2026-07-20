import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login.jsx";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard.jsx";
import AdminDashboard from "./components/Dashboard/AdminDashboard.jsx";
import { AuthContext } from "./context/AuthProvider.jsx";

const App = () => {
  const [user, setUser] = useState(null);

  const authData = useContext(AuthContext);

  const handleLogin = (email, password) => {
    if (
      authData &&
      authData.admin.find((a) => email == a.email && password == a.password)
    ) {
      setUser("admin");
    } else if (
      authData &&
      authData.employees.find((e) => email == e.email && password == e.password)
    ) {
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
