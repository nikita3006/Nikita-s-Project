import React from "react";
import Navbar from "./components/Navbar.jsx";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

function App() {
  return (
    <Box >
      <Navbar />
      <Outlet />
    </Box>
  );
}

export default App;
