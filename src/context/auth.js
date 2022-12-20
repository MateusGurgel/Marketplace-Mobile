import { createContext, useContext, useState } from "react";

export const authContext = createContext([]);

function AuthProvider({ children }) {
  const user = {
    id: "12345",
    name: "Mateus",
    email: "mateusgurgel15@gmail.com",
  };

  return <authContext.Provider value={user}>{children}</authContext.Provider>;
}

function useAuth() {
  const context = useContext(authContext);
  return context;
}

export { AuthProvider, useAuth };
