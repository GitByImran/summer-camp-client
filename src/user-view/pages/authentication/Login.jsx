import React from "react";
import { useForm } from "react-hook-form";
import { Grid, Paper, TextField, Button, Typography } from "@mui/material";

const Login = () => {
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
    >
      <Grid item xs={12} md={6}>
        <Paper sx={{ padding: 2, boxShadow: "none" }}>
          <Typography variant="h6">Login</Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
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
              Login
            </Button>
          </form>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <img
          src="https://svgshare.com/i/uac.svg"
          alt="Login Image"
          style={{ width: "100%", height: "100%" }}
        />
      </Grid>
    </Grid>
  );
};

export default Login;
