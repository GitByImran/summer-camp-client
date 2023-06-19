import React, { useEffect, useState } from "react";
import { Typography, Button, Grid, Box } from "@mui/material";
import About from "./About";

const Banner = () => {
  const [showGrids, setShowGrids] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowGrids(true);
    }, 1000);
  }, []);
  return (
    <div style={{ overflowX: "hidden" }}>
      <Grid
        container
        style={{
          padding: "0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "100px",
          height: "700px",
        }}
        sx={{ width: "100%" }}
      >
        <Grid
          item
          xs={6}
          style={{
            textAlign: "left",
            color: "#fff",
            transform: showGrids ? "translateX(0)" : "translateX(-100px)",
            opacity: showGrids ? 1 : 0,
            transition: "transform 1s linear, opacity 1s linear",
          }}
        >
          <Typography
            variant="h4"
            component="h2"
            color={"#000"}
            sx={{
              fontSize: "50px",
              textTransform: "capitalize",
              fontWeight: 800,
            }}
          >
            let Explore some new
          </Typography>
          <Typography variant="body1" color={"#000"} sx={{ my: 3 }}>
            Welcome to our exciting and diverse summer camp program! Our
            campaign is designed to offer a wide range of educational and
            engaging activities for children and teenagers. With a focus on
            creativity, skill-building, and personal growth, our camp provides
            opportunities for learning and exploration in various fields.
          </Typography>
          <Button
            variant="contained"
            sx={{
              py: 2,
              px: 5,
              fontWeight: 700,
              letterSpacing: 1,
              background: "#fff",
              color: "#000",
              "&:hover": {
                background: "transparent",
                boxShadow: "0px 0px 100px solid #444 !important",
              },
            }}
          >
            Explore More
          </Button>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 3,
            transform: showGrids ? "translateX(0)" : "translateX(100px)",
            opacity: showGrids ? 1 : 0,
            transition: "transform 1s linear, opacity 1s linear",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: 150,
              objectFit: "cover",
              transition: "1s linear",
              "&:hover": {
                transform: "translateX(100px)",
              },
            }}
          >
            <img
              style={{
                height: "100%",
                width: "50%",
                borderRadius: 8,
                boxShadow: "0px 0px 10px #f4f4f4",
                objectFit: "cover",
              }}
              src="https://imgv3.fotor.com/images/blog-cover-image/Image-Upscaler-2.jpg"
              alt=""
            />
          </Box>
          <Box
            sx={{
              width: "100%",
              height: 150,
              objectFit: "cover",
              transform: "translateX(150px)",
              transition: "1s linear",
              "&:hover": {
                transform: "translateX(-50px)",
              },
            }}
          >
            <img
              style={{
                height: "100%",
                width: "50%",
                borderRadius: 8,
                boxShadow: "0px 0px 10px #f4f4f4",
                objectFit: "cover",
              }}
              src="https://f.hellowork.com/bdmtools/2021/10/lets-enhance-1-935x628.png"
              alt=""
            />
          </Box>
          <Box
            sx={{
              width: "100%",
              height: 150,
              objectFit: "cover",
              transition: "1s linear",
              "&:hover": {
                transform: "translateX(100px)",
              },
            }}
          >
            <img
              style={{
                height: "100%",
                width: "50%",
                borderRadius: 8,
                boxShadow: "0px 0px 10px #f4f4f4",
                objectFit: "cover",
              }}
              src="https://st3.depositphotos.com/2078041/14592/i/600/depositphotos_145929761-stock-photo-fashion-woman-in-sunglasses.jpg"
              alt=""
            />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Banner;
// background: "linear-gradient(45deg, #353A5F, #9EBAF3)"
