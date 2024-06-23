import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import styled from "@emotion/styled";

const TabsControlsStyles = styled("ul")({
  position: "relative",
  zIndex: 10,
  display: "flex",
  justifyContent: "center",
  alignItems: "stretch",
  width: "100%",
  maxWidth: "800px",
  margin: "0 auto",
  boxSizing: "border-box",
  padding: "50px 0",
  listStyleType: "none",
  "@media (max-width: 600px)": {
    flexDirection: "column",
  },
});

const tabsLinkStyles = (active) => ({
  position: "relative",
  display: "block",
  padding: "16px 32px",
  fontSize: "20px",
  fontWeight: 500,
  fontFamily: "Roboto",
  // color: "#26a69a",
  color:'whitesmoke',
  textTransform: "uppercase",
  textDecoration: "none",
  cursor: "pointer",
  ...(active && {
    "&::after": {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      display: "block",
      width: "100%",
      height: "4px",
      backgroundColor: "#423E37",
      borderRadius: "2px",
      margin: "auto",
      content: '""',
    },
  }),
});

const cardsContainerStyles = {
  position: "relative",
  zIndex: 1,
  width: "500px",
  height: "calc(100vh - 270px)",
  margin: "0 auto",
  "@media (max-width: 800px)": {
    height: "calc(100vh - 220px)",
  },
  "@media (max-width: 600px)": {
    height: "calc(100vh - 180px)",
  },
};

const cardStyles = (hidden, zIndex, translateX, translateY) => ({
  position: "absolute",
  width: "500px",
  height: "200px",
  backgroundColor: hidden ? "#fff" : "#EDEBD7",
  border: "0px solid #423E37",
  borderRadius: "25px",
  boxShadow: "9px 11px 3px 0px rgba(0, 0, 0, 0.2)",
  boxSizing: "border-box",
  padding: "40px",
  transform: `translateX(${translateX}) translateY(${translateY})`,
  zIndex: zIndex,
  opacity: hidden ? 0 : 1,
  transition: hidden
    ? "color 0.5s, background-color 0.5s, transform 1s, opacity 0.2s 0.4s"
    : "transform 0.3s, opacity 0.2s",
  color: hidden ? "#fff" : "black",

  "@media (max-width: 600px)": {
    width: "380px",
    height: "150px",
    padding: "22px",
  },
});

const tabsData = [
  {
    id: 1,
    title: "Project Proposal",
    content:
      "The first step will be to understand the requirements. If everything aligns well, then we can schedule a meeting.",
  },
  {
    id: 2,
    title: "First Meeting",
    content:
      "As the starting point of our partnership, we will discuss the details of our project and determine our next steps if everything aligns well.",
  },
  {
    id: 3,
    title: "Project Estimation",
    content:
      "It this i'll examining the project blueprint or specifications to estimate how much it will cost and what resources will be needed to finish the project.",
  },
  {
    id: 4,
    title: " Project Execution",
    content:
      "I will commence project implementation and schedule necessary meetings as required. My goal will be to complete the project within the designated timeframe.",
  },
  {
    id: 5,
    title: "Website Deployment",
    content:
      "In this phase, I will present the final website, review all project details, and make it live using a hosting platform such as Netlify or Vercel.",
  },
];

const WorkFlow = () => {
  const [currentId, setCurrentId] = useState(1);
  const [oldId, setOldId] = useState(null);

  const handleClick = (id) => {
    if (currentId !== id) {
      setOldId(currentId);
      setCurrentId(id);
    }
  };

  return (
    <Box sx={{ fontFamily: "'Open Sans', sans-serif" }}>
      <Typography
        variant="h3"
        sx={{
          color: "#26a69a",
          fontFamily: "Roboto",
          textAlign: "center",
        }}
      >
        My WorkFlow
      </Typography>
      <TabsControlsStyles>
        {tabsData.map((tab) => (
          <li key={tab.id} className="tabs-controls__item">
            <a
              style={tabsLinkStyles(currentId === tab.id)}
              className={
                currentId === tab.id
                  ? "tabs-controls__link tabs-controls__link--active"
                  : "tabs-controls__link"
              }
              onClick={() => handleClick(tab.id)}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </TabsControlsStyles>
      <Box sx={cardsContainerStyles}>
        {tabsData.map((tab, index) => (
          <Box
            key={tab.id}
            sx={cardStyles(
              currentId - 1 > index,
              tabsData.length - index,
              `${index * 10}px`,
              `${index * 10}px`
            )}
            className={currentId - 1 > index ? "card hidden" : "card"}
          >
            <Typography
              variant="h4"
              sx={{
                color: "#26a69a",
                "@media (max-width: 600px)": {
                  fontSize: "1.5rem",
                },
              }}
            >
              {tab.title}
            </Typography>
            <Typography
              sx={{
                "@media (max-width: 600px)": {
                  fontSize: "0.90rem",
                },
              }}
            >
              {tab.content}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default WorkFlow;
