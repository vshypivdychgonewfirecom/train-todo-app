/* eslint-disable import/no-anonymous-default-export */
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

export default () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="*"
          element={
            <Navigate
              to={
                !localStorage.getItem("newfire-train-todo-app-token") &&
                !sessionStorage.getItem("newfire-train-todo-app-token")
                  ? "/login"
                  : "/dashboard"
              }
              replace
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
