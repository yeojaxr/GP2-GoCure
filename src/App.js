import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./login-page/Login"
import MainPage from "./login-page/MainPage";
import Register from "./login-page/Register"

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
