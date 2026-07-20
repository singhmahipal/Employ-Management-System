import { createContext, useEffect, useState } from "react";
import { getLocalStorage } from "../utils/localStorage.jsx";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  const data = getLocalStorage();

  return (
    <div>
      <AuthContext.Provider value={"mahi"}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
