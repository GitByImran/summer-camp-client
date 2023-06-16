import { Box, MenuItem, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const NavMenu = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box sx={{ display: isMobile ? "" : "flex", color: "#fff" }}>
      <MenuItem component={Link} to="" color="inherit">
        Home
      </MenuItem>
      <MenuItem component={Link} to="" color="inherit">
        Instructors
      </MenuItem>
      <MenuItem component={Link} to="" color="inherit">
        Classes
      </MenuItem>
    </Box>
  );
};

export default NavMenu;