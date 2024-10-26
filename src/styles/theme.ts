import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#100C2A" }, // Dark purple/blue for the main accent
    background: {
      default: "#100C2A", // Consistent with primary for a deep dark theme
      paper: "#1A1A2E", // Slightly lighter, but still dark background for cards and containers
    },
    text: {
      primary: "#B9B8CE", // Light grayish-purple for main text
      secondary: "#8A899B", // Slightly softer gray for less prominent text
    },
    error: { main: "#e53935" }, // Bright red for errors, to maintain visual alertness
    success: { main: "#00c853" }, // Bright green for success
    warning: { main: "#ffb300" }, // Yellow for warnings
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

export default darkTheme;
