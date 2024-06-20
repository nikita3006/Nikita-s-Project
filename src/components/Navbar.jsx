import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import theme from "../theme/Theme.jsx";
import { ThemeProvider } from "@mui/material";

const pages = ["Home", "About", "Projects", "Testimonial"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "transparent", boxShadow: "none" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <img
              src={logo}
              alt="Logo"
              width="150px"
              style={{ display: { xs: "none", md: "flex" } }}
            />

            {/* mobile view */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Link to={page === "Home" ? "/" : `/${page.toLowerCase()}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                      <Button
                        sx={{
                          color: "black",
                          fontSize: "1rem",
                          fontWeight: "500",
                          "&:hover": {
                            backgroundColor: "#26a69a",
                            color: "white",
                          },
                        }}
                      >
                        {page}
                      </Button>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {/* desktop view */}
            <Box sx={{ display: { xs: "none", md: "flex" }, ml: "auto" }}>
              {pages.map((page) => (
                <Link to={page === "Home" ? "/" : `/${page.toLowerCase()}`} style={{ textDecoration: 'none', color: 'inherit' }} key={page}>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      mx: 4,
                      color: "white",
                      fontSize: "1rem",
                      fontWeight: "500",
                      "&:hover": { backgroundColor: "#26a69a", color: "white" },
                    }}
                  >
                    {page}
                  </Button>
                </Link>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default Navbar;
