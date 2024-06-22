import React from "react";
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import pic from "../assets/images/pic.jpg";

const About = () => {
  const ContainerBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",

    "& h6": {
      margin: "40px 30px",
      padding: "50px 35px",
      fontFamily: "Roboto",
      textAlign: "center",
    },
    "& img": {
      width: "25vw",
      height: "50vh",
      borderRadius: "50%",
      padding: "20px 15px",
      margin: "2rem",
    },
    "@media (min-width: 601px)": {
      flexDirection: "row",

      "& h6": {
        textAlign: "left",
      },
    },
    "@media (max-width: 600px)": {
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      margin: "0rem",
      "& img": {
        width: "50vw",
        height: "auto",
        marginTop: "2rem",
      },
      "& h6": {
        margin: "0px 30px",
        padding: "0px 5px",
      },
    },
  });

  return (
    <ContainerBox>
      <Box>
        <img src={pic} alt="Profile" />
      </Box>
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
    </ContainerBox>
  );
};

export default About;
