import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop"
import { UserProvider } from "./context/user-context";
import { BlogProvider } from "./context/blog-context";
import { VideoProvider } from "./context/video-context";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <BlogProvider>
          <VideoProvider>
            <ScrollToTop />
            <App />
          </VideoProvider>
        </BlogProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
