import React from "react";
import Banner from "./home-contents/Banner";
import Summary from "./home-contents/Summary";
import ClassesSection from "./home-contents/ClassesSection";
import FeedbackSection from "./home-contents/FeedbackSection";
import MessegeSection from "./home-contents/MessegeSection";

const Home = () => {
  return (
    <div>
      <Banner />
      <Summary />
      <ClassesSection />
      <FeedbackSection />
      <MessegeSection />
    </div>
  );
};

export default Home;
