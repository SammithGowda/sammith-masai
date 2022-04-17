import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Login } from "./Components/Login";
import { Signup } from "./Components/Signup";
import { Add_teacher } from "./Components/Add_teacher";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./Components/Home";
import { useSelector } from "react-redux";
import { NavbAr } from "./Components/Navbar";
import { Viewpagesingle } from "./Components/Viewpage";
const PrivateRoute = ({ isauth, children }) => {
  return isauth ? children : <Navigate to="/login" />;
};
function App() {
  const { isauth } = useSelector((state) => state.login);
  // console.log(isauth);
  return (
    <div className="App">
      <NavbAr />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute isauth={isauth}>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/add_teacher"
          element={
            <PrivateRoute>
              {" "}
              <Add_teacher />
            </PrivateRoute>
          }
        />
        <Route path="/viewpage/:id" element={<Viewpagesingle />} />
      </Routes>
    </div>
  );
}

export default App;
