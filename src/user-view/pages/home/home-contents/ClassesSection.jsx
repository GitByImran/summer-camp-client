import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Button,
} from "@mui/material";
import SectionTitle from "../../../shared-components/SectionTitle";
import Aos from "aos";
import { Link } from "react-router-dom";
Aos.init();

const classesData = [
  {
    image: "https://i.ibb.co/CQxJmd5/images-1.jpg",
    name: "Class 1",
    totalClasses: 10,
    totalInstructors: 2,
    totalStudents: 30,
    duration: 75,
  },
  {
    image: "https://i.ibb.co/WypR7Ff/images-2.jpg",
    name: "Class 2",
    totalClasses: 8,
    totalInstructors: 1,
    totalStudents: 20,
    duration: 75,
  },
  {
    image: "https://i.ibb.co/Xtr6zb1/images-3.jpg",
    name: "Class 3",
    totalClasses: 8,
    totalInstructors: 1,
    totalStudents: 20,
    duration: 75,
  },
  {
    image: "https://i.ibb.co/vx7gT6w/images-4.jpg",
    name: "Class 4",
    totalClasses: 8,
    totalInstructors: 1,
    totalStudents: 20,
    duration: 75,
  },
  {
    image: "https://i.ibb.co/BtSpC8t/images-5.jpg",
    name: "Class 5",
    totalClasses: 8,
    totalInstructors: 1,
    totalStudents: 20,
    duration: 75,
  },
  {
    image: "https://i.ibb.co/NmQkYYv/images-6.jpg",
    name: "Class 6",
    totalClasses: 8,
    totalInstructors: 1,
    totalStudents: 20,
    duration: 75,
  },
];

const ClassesSection = () => {
  return (
    <div>
      <SectionTitle title={"classes"} />
      <Grid container spacing={2}>
        {classesData.map((classData, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={4}>
            <Card data-aos="fade-up" data-aos-duration="1000">
              <CardContent sx={{ p: 0 }}>
                <Box
                  sx={{ height: "200px", width: "auto", overflow: "hidden" }}
                >
                  <img
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                    }}
                    src={classData.image}
                    alt={classData.name}
                  />
                </Box>
                <Box sx={{ p: 2, pb: 0 }}>
                  <Typography variant="h6">{classData.name}</Typography>
                  <Box display="flex" justifyContent="space-between" mb={1}>
                    <Typography variant="body2">Total Classes:</Typography>
                    <Typography variant="body2">
                      {classData.totalClasses}
                    </Typography>
                  </Box>
                  <Box display="flex" justifyContent="space-between" mb={1}>
                    <Typography variant="body2">Total Instructors:</Typography>
                    <Typography variant="body2">
                      {classData.totalInstructors}
                    </Typography>
                  </Box>
                  <Box display="flex" justifyContent="space-between" mb={1}>
                    <Typography variant="body2">Total Students:</Typography>
                    <Typography variant="body2">
                      {classData.totalStudents}
                    </Typography>
                  </Box>
                  <Box display="flex" justifyContent="space-between">
                    <Typography variant="body2">Duration (Days):</Typography>
                    <Typography variant="body2">
                      {classData.duration}
                    </Typography>
                  </Box>
                  <Button
                    variant="contained"
                    sx={{
                      mt: 2,
                      pt: 1,
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
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ClassesSection;
