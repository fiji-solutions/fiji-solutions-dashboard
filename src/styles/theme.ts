import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#ffffff" }, // Dark purple/blue for primary accents
    background: {
      default: "#ffffff", // Pure white background for a clean look
      paper: "#f5f5f5", // Light gray for cards, panels, and containers
    },
    text: {
      primary: "#333333", // Dark gray for primary text, ensuring readability
      secondary: "#555555", // Slightly softer gray for secondary text
    },
    error: { main: "#e53935" }, // Red for error messages
    success: { main: "#00c853" }, // Green for success
    warning: { main: "#ffb300" }, // Yellow for warnings
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

export default lightTheme;
