import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#ffffff",
    },
  },
  typography: {
    fontFamily: ["Montserrat", "Open Sans", "Roboto"].join(","),
  },
});
export default theme;
