import React from "react";
import { Routes, Route } from "react-router-dom";

import Article from "./pages/Article";
import Blog from "./pages/Blog";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Videos from "./pages/Video"
import Videoplay from "./pages/Videoplay"
import Expert from "./pages/Expert";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path="/blogs" element={<Blog />}/>
          <Route path="/blogs/:id" element={<Article />}/>
          <Route path="/videos" element={<Videos />}/>
          <Route path="/videos/:id" element={<Videoplay />}/>
          <Route path="/experts" element={<Expert />}/>
          <Route path="/experts/:id" element={<Expert />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/profile" element={<Profile />}/>
        </Routes>
      </main>

    </>
  );
}

export default App;
