import React, { useState, useEffect } from "react";
import { Typography, Button, Grid } from "@mui/material";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Banner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "https://i.ibb.co/n0y8tqd/vecteezy-futuristic-wonders-discover-the-world-of-ai-generated-small-24238439-569.png",
    "https://i.ibb.co/60j27MR/vecteezy-innovative-marvels-small-robots-generated-by-ai-for-a-24238433-672.png",
    "https://i.ibb.co/SVwG4GS/vecteezy-ai-generated-small-robots-futuristic-marvels-of-artificial-24238434-254.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Grid
      container
      style={{
        padding: "16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "500px",
      }}
    >
      <Grid item xs={6} style={{ textAlign: "center" }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontSize: "50px",
            textTransform: "capitalize",
            fontWeight: 800,
          }}
        >
          let Explore some new
        </Typography>
        <Typography variant="body1">
          Some text describing the banner.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          style={{ marginTop: "16px" }}
          startIcon="go"
        >
          Button
        </Button>
      </Grid>
      {/* <Grid
        item
        xs={6}
        sx={{ height: "500px", width: "auto", overflow: "hidden" }}
      >
        <img
          src={images[currentImageIndex]}
          alt="Banner"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "8px",
            objectFit: "contain",
          }}
        />
      </Grid> */}
    </Grid>
  );
};

export default Banner;
