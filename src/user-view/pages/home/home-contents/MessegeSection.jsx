import React from "react";
import { Grid, Typography, TextField, Button } from "@mui/material";
import SectionTitle from "../../../shared-components/SectionTitle";
import { useForm } from "react-hook-form";
import Aos from "aos";
Aos.init();

const MessageSection = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Handle form submission
    console.log(data);
  };

  return (
    <div
      style={{
        background: "",
        margin: "50px 0",
        paddingBottom: "50px",
      }}
      data-aos="zoom-in"
      data-aos-duration="2000"
    >
      <SectionTitle title="Message Section" />
      <Grid container spacing={2} display="flex" justifyContent="center">
        <Grid item xs={12} sm={6}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h6">Contact Form</Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Name"
                  fullWidth
                  {...register("name", { required: true })}
                  error={!!errors.name}
                  helperText={errors.name && "Name is required"}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Email"
                  fullWidth
                  {...register("email", { required: true })}
                  error={!!errors.email}
                  helperText={errors.email && "Email is required"}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Phone"
                  fullWidth
                  {...register("phone", { required: true })}
                  error={!!errors.phone}
                  helperText={errors.phone && "Phone is required"}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Message"
                  fullWidth
                  multiline
                  rows={4}
                  {...register("message", { required: true })}
                  error={!!errors.message}
                  helperText={errors.message && "Message is required"}
                />
              </Grid>
              <Grid item xs={12}>
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
                  Send
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default MessageSection;
