import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import About from "./components/About.jsx";
import Home from "./components/Home.jsx";
import Projects from "./components/Projects.jsx";
import Testimonial from "./components/Testimonial.jsx";
import "./index.css";
import WorkFlow from "./components/WorkFlow.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<App />}>
          <Route index element={<><Home /><About /><Projects /><WorkFlow/><Testimonial/></>} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="testimonial" element={<Testimonial />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
