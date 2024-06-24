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
import Contact from "./components/Contact.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<App />}>
          <Route index element={<><Home /><About /><Projects /><WorkFlow/><Testimonial/><Contact/></>} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="workflow" element={<WorkFlow />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
