import React, { Children, createContext, useState } from "react";
import { useAuth } from "../hook/useAuth";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [userLogin, setUserLogin] = useState(false);
  const [user, setUser] = useState([]);
  const { signInWithGoogle, user: ValorUser } = useAuth();

  const BtnLogin = async () => {
    try {
      await signInWithGoogle();
      LoginUser(ValorUser);
    } catch (error) {
      // Manejar el error de la autenticación
      console.error("Error al autenticar con Google", error);
    }
  };
  const LoginUser = (DataUser) => {
    console.log(DataUser);
    setUser(DataUser);
    setUser(true);
    localStorage.setItem("user", JSON.stringify(DataUser));
  };
  return (
    <AuthContext.Provider value={{ userLogin, user, LoginUser, BtnLogin }}>
      {children}
    </AuthContext.Provider>
  );
};
