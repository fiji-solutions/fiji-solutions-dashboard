import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "@styles/header.css";

const Header: React.FC = () => {
  return (
    <AppBar
      position="static"
      className="header"
      sx={{ backgroundImage: "none" }} // Remove any background image
    >
      <Toolbar>
        <Box display="flex" alignItems="center" gap={2} flexGrow={1}>
          <Typography variant="h6" style={{ fontWeight: "bold" }}>
            Fiji Solutions Dashboard
          </Typography>
          <Box display="flex" gap={2} className="header-nav">
            <Typography className="header-nav-item">TLX & Toros</Typography>
            <Typography className="header-nav-item">Liquidity</Typography>
            <Typography className="header-nav-item">Indicators</Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
