import React from "react";
import Header from "../shared-components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../shared-components/Footer";
import { Container } from "@mui/material";

const Root = () => {
  return (
    <div style={{ background: "linear-gradient(45deg, #353A5F, #9EBAF3)" }}>
      <Header />
      <Container maxWidth="xl">
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
};

export default Root;
