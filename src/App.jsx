import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login.jsx";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard.jsx";
import AdminDashboard from "./components/Dashboard/AdminDashboard.jsx";
import { AuthContext } from "./context/AuthProvider.jsx";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  const authData = useContext(AuthContext);

  useEffect(() => {
    if (authData) {
      const LoggedInUser = localStorage.getItem("LoggedInUser");
      if (LoggedInUser) {
        setUser(LoggedInUser.role);
      }
    }
  }, [authData]);

  const handleLogin = (email, password) => {
    if (
      authData &&
      authData.admin.find((a) => email == a.email && password == a.password)
    ) {
      setUser("admin");
      localStorage.setItem("LoggedInUser", JSON.stringify({ role: "admin" }));
    } else if (
      authData &&
      authData.employees.find((e) => email == e.email && password == e.password)
    ) {
      const employee = authData.employees.find(
        (e) => e.email === email && e.password === password,
      );
      if (employee) {
        setLoggedInUserData(employee);
      }
      setUser("employee");
      localStorage.setItem(
        "LoggedInUser",
        JSON.stringify({ role: "employee" }),
      );
    } else {
      alert("invalid credentials");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? (
        <AdminDashboard changeUser={setUser} />
      ) : user == "employee" ? (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
      ) : null}
    </>
  );
};

export default App;
