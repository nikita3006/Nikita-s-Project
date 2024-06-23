import React from "react";
import { Box, Typography, Card, Avatar } from "@mui/material";
import img1 from "../assets/images/Img1.jpg";

const Testimonial = () => {
  return (
    <Box
      mt={4}
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          color: "#26a69a",
          fontFamily: "Roboto",
          padding: "5px 10px",
          marginBottom: "1rem",
          textAlign: "center",
        }}
      >
        Testimonials
      </Typography>
      <Card
        sx={{
          display: "flex",
          maxWidth: 250,
          padding: 2,
          flexDirection: "column",
          marginTop: "2rem",
          height: "250px",
        }}
      >
        <Typography variant="body2" color="text.secondary" mb={2}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          convallis libero id urna fringilla, vel ultricies erat scelerisque.
          Fusce ut ipsum elit. Sed dapibus urna eu tellus posuere, et volutpat
          mauris congue. Aliquam sed ullamcorper dolor.
          ipsum elit. Sed dapibus urna eu tellus posuere, 
        </Typography>
        <Box
          sx={{
            display: "flex",
           
          }}
        >
          <Avatar
            src={img1}
            alt="testimonial"
            sx={{
              width: 50,
              height: 50,
              marginRight: 2,
              borderRadius: "50%",
            }}
          />
          <Typography
            component="span"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            John Doe
          </Typography>
        </Box>
      </Card>
    </Box>
  );
};

export default Testimonial;
