import { Box, MenuItem, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const UserMenu = ({ scrollBackground }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      sx={{
        display: isMobile ? "" : "flex",
        color: scrollBackground ? "#fff" : "#000",
      }}
    >
      <MenuItem component={Link} to="/login" sx={{ fontSize: 18 }}>
        Login
      </MenuItem>
    </Box>
  );
};

export default UserMenu;
