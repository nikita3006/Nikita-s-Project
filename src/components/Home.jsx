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
    // padding: "0 1rem",
    "@media (max-width: 600px)": {
      marginTop: "4rem",
    },
  });

  const IntroText = styled("span")({
    marginRight: "0.75rem",
    letterSpacing: 1,
    textAlign: "center",

    
    "@media (min-width: 320px)": {
      marginTop: "-4rem",
      marginRight: ".5rem",
      padding: "1.5rem ",
    },
    "@media (min-width: 375px)": {
      marginRight: "2.5rem",
      padding: "1rem",
    },
    "& span": {
      color: "#26a69a",
      marginRight: "0.75rem",
    
    },
  });

  const OuterText = styled("span")({
    color: "#26a69a",
   
    "@media (min-width: 320px)": {
      marginTop: "-2rem",
      padding: "1rem",
    },
    "@media (min-width: 375px)": {
      marginRight: "2rem",
      padding: "1rem",
    },
  });

  const SubText = styled("div")({
    color: "white",
    padding: "2rem",
 
    "@media (max-width: 600px)": {
      padding: "1rem",
      fontSize: "1.2rem",
    },
    "@media (min-width: 375px)": {
      marginRight: "3rem",
    },
    "& h5": {
      "@media (min-width: 375px)": {
        fontSize: "1.2rem",
      },
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
      <Box
        
        sx={{
          color: "white",
          fontSize: "3rem",
          "@media (max-width: 600px)": {
            fontSize: "2rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        <IntroText>
          <span>Hello!</span>
          <div>I'm Nikita Negi, a</div>
        </IntroText>
        <OuterText>
          <TypeAnimation
            sequence={["Developer", 9000, "Designer", 9000]}
            speed={50}
            wrapper="span"
            repeat={Infinity}
          />
        </OuterText>
      </Box>
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
