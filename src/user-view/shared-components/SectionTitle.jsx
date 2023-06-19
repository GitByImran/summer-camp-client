import { Box, Typography } from "@mui/material";
import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <Box sx={{ width: "100%", textAlign: "center", pt: 10, pb: 5 }}>
      <Typography variant="h4" textTransform={"capitalize"} fontWeight={"bold"}>
        {title}
      </Typography>
    </Box>
  );
};

export default SectionTitle;
