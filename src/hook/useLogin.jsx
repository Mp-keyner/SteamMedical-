import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export const useLogin = () => {
  const c=useContext(AuthContext);
  const [userLogin, setUserLogin] = useState(false);
  const [user, setUser] = useState([]);
  const LoginUser = (DataUser) => {
    console.log(DataUser);
    setUser(DataUser);
    setUser(true);
    localStorage.setItem("user", JSON.stringify(DataUser));
  };
  const singin=()=>{
    c.signInWithGoogle()
  }
  //console.log(p)
  useEffect(() => {
    // Verificar si el usuario está almacenado en el localStorage al cargar la página
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setUserLogin(true);
    }
  }, []);
  return {
    LoginUser,
    user,
    userLogin,
    singin,
  };
};
