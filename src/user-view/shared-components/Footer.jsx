import React from "react";
import { Grid, Typography, Link, Container, Box } from "@mui/material";
import Aos from "aos";
Aos.init();

const Footer = () => {
  return (
    <div>
      <footer style={{ padding: "50px 0" }}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6">Website Name</Typography>
              <Typography variant="body2">License</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6">Quick Facts</Typography>
              <Box display="flex" flexDirection="column">
                <Link href="#" underline="none">
                  link 1
                </Link>
                <Link href="#" underline="none">
                  link 2
                </Link>
                <Link href="#" underline="none">
                  link 3
                </Link>
                <Link href="#" underline="none">
                  link 4
                </Link>
                <Link href="#" underline="none">
                  link 5
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6">Short Links</Typography>
              <Box display="flex" flexDirection="column">
                <Link href="#" underline="none">
                  link 1
                </Link>
                <Link href="#" underline="none">
                  link 2
                </Link>
                <Link href="#" underline="none">
                  link 3
                </Link>
                <Link href="#" underline="none">
                  link 4
                </Link>
                <Link href="#" underline="none">
                  link 5
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6">Contact Information</Typography>
              <Typography variant="body2">Address</Typography>
              <Typography variant="body2">Contact Number</Typography>
              <Typography variant="body2">Email</Typography>
            </Grid>
          </Grid>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
