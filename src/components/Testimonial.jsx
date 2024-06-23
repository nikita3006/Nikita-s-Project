import React from "react";
import { Box, Typography, Card, Avatar } from "@mui/material";
import comma from "../assets/images/comma.png";

const Testimonial = () => {
  return (
    <Box
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
          padding: "5px 5px",
          textAlign: "center",
          marginTop: "-4rem",
        }}
      >
        Testimonials
      </Typography>
      <Card
        sx={{
          display: "flex",
          maxWidth: 380,
          padding: 2,
          flexDirection: "column",
          marginTop: "2rem",
          height: "300px",
          backgroundColor: "whitesmoke",
          border: "0px solid black",
          boxShadow: "9px 11px 3px 0px rgba(0, 0, 0, 0.2)",
          borderRadius: "25px",
        }}
      >
        <Box
          sx={{
            width: "10px",
            height: "10px",
            // border: "1px solid red",
            position: "relative",
            overflow: "hidden",
            padding: "0.50rem",
          }}
        >
          <img
            src={comma}
            alt="comma"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </Box>
        <Typography
          sx={{ fontSize: "19px", fontFamily: "Roboto", textAlign: "center" }}
        >
          I will suggest Nikita to anyone who is looking for a dedicated and
          disciplined Front end developer. She is a hard working, well mannered
          and committed girl who can be a great asset to any team. She
          understands the application needs very well and starts developing the
          application in a professional way. I suggest any one who is looking
          for a front end developer to go with her.
        </Typography>
        <Box>
          <Typography
            component="span"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              marginTop: "10px",
              color: "#26a69a",
            }}
          >
            <span>Harsh Kumar</span>
            <Typography component="div" sx={{ fontSize: "10px" }}>
              SEO Analyst GeeksforGeeks
            </Typography>
          </Typography>
        </Box>
      </Card>
    </Box>
  );
};

export default Testimonial;
