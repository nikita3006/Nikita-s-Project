import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import img1 from "../assets/images/Img1.jpg";
import img7 from "../assets/images/Img7.jpg";
import img3 from "../assets/images/Img3.jpg";
import img4 from "../assets/images/Img4.jpg";
import img5 from "../assets/images/Img5.jpg";

const images = [img1, img7, img3, img4, img5];

const Container = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "70vw",
  height: "65vh",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  "@media (max-width: 600px)": {
    height: "40vh",
  },
  "@media (max-width: 320px)": {
    height: "30vh",
  },
}));

const ImageDiv = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  backgroundImage: `url(${images[0]})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  zIndex: 2,
  position: "absolute",
}));

const BackgroundDiv = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  zIndex: 1,
  position: "absolute",
  top: 35,
  bottom: 10,
  left: 45,
  backgroundColor: "whitesmoke",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "flex-end",
  "@media (max-width: 600px)": {
    top: 35,
    bottom: 0,
    left: 30,
  },
}));

const DotContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  right: 15,
  bottom: 60,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  zIndex: 10,
  "@media (max-width: 320px)": {
    right: 12,
    bottom: 30,
  },
}));

const Dot = styled(Box)(({ theme, isActive }) => ({
  width: "10px",
  height: "10px",
  borderRadius: "50%",
  backgroundColor: isActive ? "#26a69a" : "#ccc",
  margin: "5px 0",
  cursor: "pointer",
  "@media (min-width: 300px)": {
    width: "8px",
    height: "8px",
  },
}));

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClickDot = (index) => {
    setActiveIndex(index);
  };

  return (
    <Box
      sx={{
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
        Projects
      </Typography>
      <Container>
        <ImageDiv style={{ backgroundImage: `url(${images[activeIndex]})` }} />
        <BackgroundDiv>
          <DotContainer>
            {images.map((image, index) => (
              <Dot
                key={index}
                isActive={index === activeIndex}
                onClick={() => handleClickDot(index)}
              />
            ))}
          </DotContainer>
          <Typography
            sx={{
              marginRight: "2rem",
              fontSize: "1.2rem",
            }}
          >
            Watch Live
          </Typography>
        </BackgroundDiv>
      </Container>
    </Box>
  );
};

export default Projects;
