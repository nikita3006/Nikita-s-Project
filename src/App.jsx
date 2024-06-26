import React from "react";
import Navbar from "./components/Navbar.jsx";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <Box >
      <Navbar />
      <Outlet />
      <Footer/>
    </Box>
  );
}

export default App;
