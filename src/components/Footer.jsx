import React from "react";
import { Container, Box, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#f5f5f5", p: 2, mt: 4 }}>
      <Container maxWidth="lg">
        <Box sx={{ display: "flex", justifyContent: "center", gap: 12 }}>
          <Typography variant="body1" gutterBottom>
            <Link href="/home" color="inherit" sx={{ textDecoration: "none" }}>
              Home
            </Link>
          </Typography>
          <Typography variant="body1" gutterBottom>
            <Link href="/about" color="inherit" sx={{ textDecoration: "none" }}>
              About Me
            </Link>
          </Typography>
          <Typography variant="body1" gutterBottom>
            <Link
              href="/portfolio"
              color="inherit"
              sx={{ textDecoration: "none" }}
            >
              My Experience
            </Link>
          </Typography>
          <Typography variant="body1" gutterBottom>
            <Link
              href="/contact"
              color="inherit"
              sx={{ textDecoration: "none" }}
            >
              Contact
            </Link>
          </Typography>
        </Box>
        <Box mt={2} textAlign="center">
          <Typography variant="body2" color="textSecondary">
            &copy; {new Date().getFullYear()} Nikita Negi. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
