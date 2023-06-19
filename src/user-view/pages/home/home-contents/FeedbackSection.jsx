import React from "react";
import { Typography, Box, Paper } from "@mui/material";
import SectionTitle from "../../../shared-components/SectionTitle";
import "../Home.css";
import Carousel from "react-material-ui-carousel";

const feedbackData = [
  {
    image: "https://i.ibb.co/PYRJfhn/image.png",
    name: "John Doe",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    image: "https://i.ibb.co/jf8h0hC/image.png",
    name: "Jane Smith",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
  },
  {
    image: "https://i.ibb.co/BtMZV4v/photo-1534528741775-53994a69daeb.jpg",
    name: "David Johnson",
    text: "Ut enim ad minima veniam, quis nostrum exercitationem ullam.",
  },
  {
    image: "https://i.ibb.co/jf8h0hC/image.png",
    name: "Jane Smith",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
  },
  {
    image: "https://i.ibb.co/BtMZV4v/photo-1534528741775-53994a69daeb.jpg",
    name: "David Johnson",
    text: "Ut enim ad minima veniam, quis nostrum exercitationem ullam.",
  },
];

const FeedbackSection = () => {
  return (
    <div>
      <SectionTitle title={"let's hear feedback from our student"} />
      <Carousel autoPlay={true} animation="slide" interval={3000}>
        {feedbackData.map((feedback, index) => (
          <Paper
            key={index}
            sx={{
              p: 2,
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              maxWidth: "500px",
              margin: "0 auto",
              boxShadow: "none",
            }}
            className="feedback-paper"
          >
            <Box
              display="flex"
              justifyContent="center"
              mb={2}
              height="100px"
              width="100px"
              overflow="hidden"
              borderRadius="100%"
            >
              <img
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
                src={feedback.image}
                alt={feedback.name}
              />
            </Box>
            <Typography variant="h6">{feedback.name}</Typography>
            <Typography variant="body2">{feedback.text}</Typography>
          </Paper>
        ))}
      </Carousel>
    </div>
  );
};

export default FeedbackSection;
