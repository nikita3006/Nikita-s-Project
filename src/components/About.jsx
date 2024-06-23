import React from "react";
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import pic from "../assets/images/pic.jpg";

const About = () => {
  const ContainerBox = styled("Box")({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    margin: "0 auto",
    padding: "20px",
    marginTop:'5rem',

    "& h6": {
      margin: "20px 30px",
      padding: "20px 35px",
      fontFamily: "Roboto",
    },
    "& img": {
      width: "25vw",
      height: "auto",
      borderRadius: "50%",
      padding: "20px 15px",
      margin: "2rem",
    },
    "@media (max-width: 600px)": {
      "& img": {
        width: "50vw",
        marginTop: "2rem",
      },
      "& h6": {
        margin: "0px 30px",
        padding: "0px 5px",
      },
    },
  });

  const ContentBox = styled("Box")({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "left",

    "@media (max-width: 600px)": {
      flexDirection: "column",
      textAlign: "center",
      "& img": {
        marginBottom: "1rem",
      },
      "& h6": {
        margin: "0px 30px",
        padding: "0px 5px",
      },
    },
  });

  return (
    <>
      <ContainerBox>
        <Typography
          variant="h3"
          sx={{
            color: "#26a69a",
            fontFamily: "Roboto",
            marginBottom: "0rem",
          }}
        >
          About Me
        </Typography>
        <ContentBox>
          <Box>
            <img src={pic} alt="Profile" />
          </Box>
          <Typography variant="h6" sx={{ color: "white" }}>
            I'm a dedicated web developer with a passion for crafting seamless
            user experiences through modern web technologies. It all started
            with a simple 'Hello, World!' project that sparked my interest in
            web development. Since then, I have continuously refined my skills
            and expanded my expertise to deliver high-quality digital solutions.
            With 1 year of experience in the industry, I have successfully
            completed over 8 projects, delivering exceptional results and
            exceeding client expectations. I believe in a user-centered approach
            to development, ensuring that every project not only meets technical
            requirements but also provides an intuitive and engaging experience
            for users. I am committed to continuous learning and staying updated
            with the latest industry trends.
          </Typography>
        </ContentBox>
      </ContainerBox>
    </>
  );
};

export default About;
