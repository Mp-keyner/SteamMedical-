import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDPgfNaE9JheV0D4isr4RUF67xLtI8rDWo",
  authDomain: "steammedical-92267.firebaseapp.com",
  projectId: "steammedical-92267",
  storageBucket: "steammedical-92267.appspot.com",
  messagingSenderId: "97684973010",
  appId: "1:97684973010:web:6459edd351e2c59970140b",
};

const app = initializeApp(firebaseConfig);

export { app };
