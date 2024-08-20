import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/login";
import Signup from "./pages/Signup";
import React, { useState } from "react";
import RefrshHandler from "./RefrshHandler";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const PrivateRoute = ({element})=>{
    return isAuthenticated ? element : <Navigate to='/login'/>
  }
  return (
    <div className="App">
      <RefrshHandler setIsAuthenticated={setIsAuthenticated}/>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<PrivateRoute element={<Home />}/>} />
      </Routes>
    </div>
  );
}

export default App;
