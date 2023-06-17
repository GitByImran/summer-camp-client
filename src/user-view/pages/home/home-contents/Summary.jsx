import { Box, Grid, Typography } from "@mui/material";
import Aos from "aos";
import React from "react";
import "aos/dist/aos.css";
import CountUp from "react-countup";
import CategoryIcon from "@mui/icons-material/Category";
import { FaChalkboardTeacher } from "react-icons/fa";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import "../Home.css";
Aos.init();

const Summary = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid
          item
          md={3}
          sm={6}
          xs={12}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <Box
            sx={{
              background: "transparent",
              boxShadow: "5px 5px 10px #ffffff36",
              p: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Box
              sx={{
                height: 50,
                width: 50,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "100%",
                border: "1px solid #fff",
              }}
            >
              <CategoryIcon sx={{ fontSize: "30px", color: "#fff" }} />
            </Box>
            <Typography variant="h2" fontWeight={800} color={"#fff"}>
              <CountUp end={50} duration={2} />
            </Typography>
            <Typography variant="body1" color={"#fff"}>
              Categories Available
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          md={3}
          sm={6}
          xs={12}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <Box
            sx={{
              background: "transparent",
              boxShadow: "5px 5px 10px #ffffff36",
              p: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Box
              sx={{
                height: 50,
                width: 50,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "100%",
                border: "1px solid #fff",
                fontSize: "30px",
                color: "#fff",
              }}
            >
              <FaChalkboardTeacher />
            </Box>

            <Typography variant="h2" fontWeight={800} color={"#fff"}>
              <CountUp end={60} duration={2} />
            </Typography>
            <Typography variant="body1" color={"#fff"}>
              Instructors are Teaching
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          md={3}
          sm={6}
          xs={12}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <Box
            sx={{
              background: "transparent",
              boxShadow: "5px 5px 10px #ffffff36",
              p: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Box
              sx={{
                height: 50,
                width: 50,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "100%",
                border: "1px solid #fff",
              }}
            >
              <LocalLibraryIcon sx={{ fontSize: "30px", color: "#fff" }} />
            </Box>

            <Typography variant="h2" fontWeight={800} color={"#fff"}>
              <CountUp end={70} duration={2} />
            </Typography>
            <Typography variant="body1" color={"#fff"}>
              Students are Learning
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          md={3}
          sm={6}
          xs={12}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <Box
            sx={{
              background: "transparent",
              boxShadow: "5px 5px 10px #ffffff36",
              p: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Box
              sx={{
                height: 50,
                width: 50,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "100%",
                border: "1px solid #fff",
              }}
            >
              <AccessTimeFilledIcon sx={{ fontSize: "30px", color: "#fff" }} />
            </Box>

            <Typography variant="h2" fontWeight={800} color={"#fff"}>
              <CountUp end={80} duration={2} />
            </Typography>
            <Typography variant="body1" color={"#fff"}>
              Days of Training
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Summary;
