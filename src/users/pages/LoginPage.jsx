import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { Button, Grid, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import React from "react";
import { Link, Navigate } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import Form from "../../forms/components/Form";
import Input from "../../forms/components/Input";
import useForm from "../../forms/hooks/useForm";
import ROUTES from "../../routes/routesModel";
import initialLoginForm from "../helpers/initialForms/initialLoginForm";
import useUsers from "../hooks/useUsers";
import loginSchema from "../models/loginSchema";
import { useUser } from "../providers/UserProvider";

export default function LoginPage() {
  const { handleLogin, error } = useUsers();

  const { data, errors, handleChange, handleReset, validateForm, onSubmit } =
    useForm(initialLoginForm, loginSchema, handleLogin);

  const { user } = useUser();

  if (user) return <Navigate to={ROUTES.ROOT} replace />;

  return (
    <Container>
      <PageHeader
        title="Welcome to Login page"
        subtitle="here you can log in"
      />
      <Container
        sx={{
          paddingTop: 8,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Form
          title="login"
          styles={{ maxWidth: "450px" }}
          to={ROUTES.ROOT}
          onSubmit={onSubmit}
          onReset={handleReset}
          validateForm={validateForm}
        >
          <Input
            label="email"
            name="email"
            type="email"
            error={errors.email}
            onChange={handleChange}
            data={data}
          />
          <Input
            label="password"
            name="password"
            type="password"
            error={errors.password}
            onChange={handleChange}
            data={data}
          />
          <Grid item xs={12}>
          {error && <Typography color='red'> Invalid Username Or Password</Typography>}
            <Button
              variant="outlined"
              component={Link}
              to={ROUTES.SIGNUP}
              startIcon={<AccountBoxIcon />}
              sx={{ width: "100%" }}
            >
              Sign Up
            </Button>
          </Grid>
        </Form>
      </Container>
    </Container>
  );
}
