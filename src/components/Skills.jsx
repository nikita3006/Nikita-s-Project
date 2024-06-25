import React from "react";
import { Box, Typography, Chip } from "@mui/material";
import { useInView } from "react-intersection-observer";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { motion } from "framer-motion";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#26afa",
    },
    background: {
      default: "#000000",
    },
  },
});

const skills = {
  frontend: ["React", "JavaScript", "HTML"],
  backend: ["Node.js", "Express.js"],
  libraries: ["Tailwind", "MUI5", "Bootstrap", "CSS"],
};

const SkillsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
      },
    }),
  };

  return (
    <ThemeProvider theme={theme}>
      <Box ref={ref} sx={{ p: 4, backgroundColor: "background.default" }}>
        <Typography variant="h4" gutterBottom color="#26a69a">
          Skills
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {Object.entries(skills).map(([category, skillsList], index) => (
            <Box key={category}>
              <Typography variant="h6" gutterBottom color="#26a69a">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Typography>
              <motion.div
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={variants}
                custom={index}
              >
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {skillsList.map((skill) => (
                    <Chip key={skill} label={skill} color="primary" />
                  ))}
                </Box>
              </motion.div>
            </Box>
          ))}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default SkillsSection;
