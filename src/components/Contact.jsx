import React from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const ContactUs = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      padding={2}
    >
      <Typography
        variant="h3"
        sx={{
          color: "#26a69a",
          fontFamily: "Roboto",
          marginBottom: "3rem",
        }}
      >
        Contact Me
      </Typography>
      <Box
        width={{ xs: "100%", sm: 500 }}
        bgcolor="white"
        boxShadow={3}
        borderRadius={2}
        overflow="hidden"
        sx={{ border: "1px solid #26a69a" }}
      >
        <Box
          display="flex"
          flexDirection={isSmallScreen ? "column" : "row"}
          height="100%"
          flexWrap={isSmallScreen ? "wrap" : "nowrap"}
        >
          <Box flex={1} bgcolor="#000000" padding={3}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ color: "#26a69a" }}
              mb={2}
            >
              Let's get in touch
            </Typography>
            <Box
              display="flex"
              alignItems="center"
              marginBottom={2}
              sx={{ color: "#26a69a" }}
            >
              <EmailIcon />
              <Typography marginLeft={1} variant="body2">
                nikitanegi3011@gmail.com
              </Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              marginBottom={2}
              sx={{ color: "#26a69a" }}
            >
              <LocationOnIcon />
              <Typography marginLeft={1} variant="body2">
                Uttarakhand, India
              </Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              marginBottom={2}
              sx={{ color: "#26a69a" }}
            >
              <PhoneIcon />
              <Typography marginLeft={1} variant="body2">
                +91 7248464914
              </Typography>
            </Box>

            <Box
              mt={8}
              display="flex"
              justifyContent="space-between"
              maxWidth={200}
            >
              <IconButton>
                <a href="https://www.linkedin.com/in/nikitanegi3011/">
                  <LinkedInIcon sx={{ color: "white" }} />
                </a>
              </IconButton>
              <IconButton>
                <a href="https://github.com/nikita3006">
                  <GitHubIcon sx={{ color: "white" }} />
                </a>
              </IconButton>
              <IconButton>
                <a href="https://twitter.com/nikitanegi3011">
                  <TwitterIcon sx={{ color: "white" }} />
                </a>
              </IconButton>
              <IconButton>
                <a href="https://www.instagram.com/nikitanegi3011/">
                  <InstagramIcon sx={{ color: "white" }} />
                </a>
              </IconButton>
            </Box>
          </Box>
          <Box flex={1} padding={3}>
            <Typography variant="h6" gutterBottom mb={2}>
              Contact with us
            </Typography>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              margin="dense"
              size="small"
            />
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              margin="dense"
              size="small"
            />
            <TextField
              fullWidth
              label="Message"
              variant="outlined"
              margin="dense"
              multiline
              rows={1}
              size="small"
            />
            <Button
              variant="contained"
              size="small"
              sx={{ marginTop: "0.85rem", backgroundColor: "#26a69a" }}
            >
              Send
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactUs;
