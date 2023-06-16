import { Box, MenuItem, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const UserMenu = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box sx={{ display: isMobile ? "" : "flex", color: "#fff" }}>
      <MenuItem component={Link} to="">
        Login
      </MenuItem>
    </Box>
  );
};

export default UserMenu;
