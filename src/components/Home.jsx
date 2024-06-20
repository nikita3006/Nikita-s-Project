import { Button, Typography } from "@mui/material";
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
  });
  const IntroText = styled("span")({
    marginRight: "0.75rem",
    letterSpacing: 1,

    "& span": {
      color: "#26a69a",
      letterSpacing: 1,
      marginRight: "0.75rem",
    },
  });
  const OuterText = styled("span")({
    color: "#26a69a",
  });
  const SubText = styled("div")({
    color: "white",
    padding: "2rem",
  });
  const Social = styled("span")({
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    gap: "4rem",
    padding: "1rem",
  });

  return (
    <Container>
      <Typography
        variant="h3"
        sx={{
          color: "white",
        }}
      >
        <IntroText>
          <span>Hello!</span>
          I'm Nikita Negi, a
        </IntroText>
        <OuterText>
          <TypeAnimation
            sequence={["Developer", 9000, "Designer", 9000]}
            speed={50}
            wrapper="span"
            repeat={Infinity}
          />
        </OuterText>
      </Typography>
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
          <GitHubIcon sx={{ color: "white" }} />
        </a>
        <a href="https://www.linkedin.com/in/nikitanegi3011/">
          <LinkedInIcon sx={{ color: "white" }} />
        </a>
        <a href="https://www.linkedin.com/in/nikitanegi3011/">
          <InstagramIcon sx={{ color: "white" }} />
        </a>
      </Social>
      <Link to="contact">
        <Button sx={{ color: "#26a69a" }}>Let's Connect</Button>
      </Link>
    </Container>
  );
};

export default Home;
