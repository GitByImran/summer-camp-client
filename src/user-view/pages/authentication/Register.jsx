import React from "react";
import { useForm } from "react-hook-form";
import { Grid, Paper, TextField, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Register = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Grid
      container
      spacing={2}
      display="flex"
      justifyContent="center"
      alignItems="center"
      my={5}
    >
      <Grid item xs={12} md={6}>
        <Paper sx={{ padding: 2, boxShadow: "none" }}>
          <Typography variant="h6">Register</Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              label="Full Name"
              fullWidth
              margin="normal"
              {...register("name", { required: "name is required" })}
              error={!!errors.name}
              helperText={errors.name && errors.name.message}
            />
            <TextField
              label="Email"
              fullWidth
              margin="normal"
              {...register("email", { required: "Email is required" })}
              error={!!errors.email}
              helperText={errors.email && errors.email.message}
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              {...register("password", { required: "Password is required" })}
              error={!!errors.password}
              helperText={errors.password && errors.password.message}
            />
            <Button variant="contained" type="submit">
              Register
            </Button>
          </form>
          <Typography mt={3} fontWeight={800}>
            Already have an account,
            <Link
              to="/login"
              style={{ marginLeft: 5, textDecoration: "none", color: "blue" }}
            >
              login now
            </Link>{" "}
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <img
          src="https://svgshare.com/i/ubs.svg"
          alt="Register Image"
          style={{ width: "100%", height: "100%" }}
        />
      </Grid>
    </Grid>
  );
};

export default Register;
