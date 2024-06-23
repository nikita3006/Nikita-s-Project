import { Box, Button, Typography } from "@mui/material";
import React from "react";
import styled from "@emotion/styled";
import { TypeAnimation } from "react-type-animation";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";

const Home = () => {
  const Container = styled("div")({
    marginTop: "8rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    letterSpacing: 1,
    "@media (max-width: 600px)": {
      marginTop: "4rem",
    },
  });

  const IntroTextContainer = styled(Box)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "white",
    fontSize: "3rem",
    "@media (max-width: 600px)": {
      fontSize: "2rem",
      flexDirection: "column",
    },
  });

  const IntroText = styled("div")({
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    letterSpacing: 1,
    textAlign: "center",
    "@media (min-width: 320px)": {
      padding: "1.5rem",
    },
    "@media (min-width: 375px)": {
      padding: "1rem",
    },
    "& span": {
      color: "#26a69a",
    },
  });

  const OuterText = styled("span")({
    color: "#26a69a",
    "@media (max-width: 600px)": {
      display: "block",
      marginTop: "0.5rem",
    },
  });

  const SubText = styled("div")({
    color: "white",
    padding: "2rem",
    textAlign: "center",
    "@media (max-width: 600px)": {
      padding: "2rem",
      fontSize: "1.2rem",
    },
  });

  const Social = styled("span")({
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    gap: "4rem",
    padding: "1rem",
    "@media (max-width: 600px)": {
      gap: "2rem",
    },
    "@media (min-width: 375px)": {
      marginRight: "3rem",
    },
  });

  return (
    <Container>
      <IntroTextContainer>
        <IntroText>
          <span>Hello! </span>
          <div style={{ display: "inline-block", marginLeft: "0.5rem" }}>
            {" "}
            I'm Nikita Negi a
          </div>
        </IntroText>
        <OuterText>
          <TypeAnimation
            sequence={["Developer", 5000, "Designer", 5000]}
            speed={50}
            wrapper="span"
            repeat={Infinity}
          />
        </OuterText>
      </IntroTextContainer>
      <SubText>
        <Typography variant="h5">
          <TypeAnimation
            sequence={[
              " Bringing creativity and functionality to every project",
              400,
            ]}
            speed={40}
            wrapper="div"
            repeat={1}
          />
        </Typography>
      </SubText>
      <Social>
        <a href="https://github.com/nikita3006">
          <GitHubIcon sx={{ color: "white", fontSize: "2rem" }} />
        </a>
        <a href="https://www.linkedin.com/in/nikitanegi3011/">
          <LinkedInIcon sx={{ color: "white", fontSize: "2rem" }} />
        </a>
        <a href="https://www.linkedin.com/in/nikitanegi3011/">
          <InstagramIcon sx={{ color: "white", fontSize: "2rem" }} />
        </a>
      </Social>
      <Link to="contact">
        <Button
          sx={{
            color: "#26a69a",
            "@media (min-width: 375px)": {
              marginRight: "3rem",
            },
          }}
        >
          Hire Me
        </Button>
      </Link>
    </Container>
  );
};

export default Home;
