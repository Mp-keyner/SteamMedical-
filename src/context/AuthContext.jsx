import React, { Children, createContext, useState } from "react";
import { useAuth } from "../hook/useAuth";
import { useLogin } from "../hook/useLogin";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const { signInWithGoogle } = useAuth();
  const { LoginUser, user, userLogin } = useLogin();

  return (
    <AuthContext.Provider
      value={{ userLogin, user, LoginUser, signInWithGoogle }}
    >
      {children}
    </AuthContext.Provider>
  );
};
