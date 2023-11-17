import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import ProtecteRouter from "./Pages/ProtecteRouter";
import Login from "./Pages/auth/Login";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <ProtecteRouter>
              <Layout />
            </ProtecteRouter>
          }
        />
      </Routes>
    </>
  );
};

export default App;
