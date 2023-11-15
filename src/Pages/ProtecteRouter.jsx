import React, { useEffect } from "react";
import { useLogin } from "../hook/useLogin";
import { useNavigate } from "react-router-dom";

const ProtectedRouter = ({ children }) => {
  const { userLogin } = useLogin();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userLogin) {
      navigate("/login");
    }
  }, [userLogin, navigate]);

  return <>{children}</>;
};

export default ProtectedRouter;
