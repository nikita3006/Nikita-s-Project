import React from "react";
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import pic from "../assets/images/pic.jpg";

const About = () => {
  const ContainerBox = styled("Box")({
    display: "flex",

    "& h6": {
      margin: "40px 30px 40px 30px",
      padding: "50px 35px",
      fontFamily: "Roboto",
    },
    "& img": {
      width: "25vw",
      height: "50vh",
      borderRadius: "50%",
      marginTop: "5rem",
    },
  });
  return (
    <ContainerBox>
      <Typography variant="h6" sx={{ color: "white" }}>
        I'm a dedicated web developer with a passion for crafting seamless user
        experiences through modern web technologies. It all started with a
        simple 'Hello, World!' project that sparked my interest in web
        development. Since then, I have continuously refined my skills and
        expanded my expertise to deliver high-quality digital solutions. With 1
        year of experience in the industry, I have successfully completed over 8
        projects, delivering exceptional results and exceeding client
        expectations. I believe in a user-centered approach to development,
        ensuring that every project not only meets technical requirements but
        also provides an intuitive and engaging experience for users. I am
        committed to continuous learning and staying updated with the latest
        industry trends.
      </Typography>
      <Box sx={{ marginRight: "4rem" }}>
        <img src={pic} />
      </Box>
    </ContainerBox>
  );
};

export default About;
