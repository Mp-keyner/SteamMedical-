import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Layout from "./components/Layout";
import ProtecteRouter from "./components/ProtecteRouter";

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
