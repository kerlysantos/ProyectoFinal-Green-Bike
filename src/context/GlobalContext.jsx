import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const login = (token) => {
    localStorage.setItem("token", token);
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setUser({});
  };

  return (
    <GlobalContext.Provider value={{ isLoggedIn, user, setUser, login, logout }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
