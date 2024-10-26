import React from "react";
import Box from "@mui/material/Box";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <Box
      sx={{
        paddingLeft: "24px",
        paddingRight: "24px",
        margin: "0 auto", // Center content horizontally
      }}
    >
      {children}
    </Box>
  );
};

export default Container;
