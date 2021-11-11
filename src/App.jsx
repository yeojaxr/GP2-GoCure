import React from "react";
import { Routes, Route } from "react-router-dom";

import Article from "./pages/Article";
import Blog from "./pages/Blog";
import Expert from "./pages/Expert";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Videos from "./pages/Video"
import Videoplay from "./pages/Videoplay"

function App() {
  return (
    <>
      {/* <LandingPage /> */}
      {/* <Article /> */}
      {/* <Login /> */}
      {/* <Register /> */}
      <Blog />
      {/* <Expert /> */}
    </>
  );
}

export default App;
