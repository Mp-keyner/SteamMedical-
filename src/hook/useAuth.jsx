import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../Auth/FireBase";
import { useState } from "react";

export const useAuth = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState({});

  const signInWithGoogle = async () => {
    return signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
      })
      .catch((error) => {
        // Manejo personalizado del error
        console.error(error);
        throw error; // Puedes propagar el error para que otros puedan manejarlo
      });
  };

  return {
    signInWithGoogle,
    user,
  };
};
