import Container from "@mui/material/Container";
import React from "react";
import useForm from "../../forms/hooks/useForm";
import initialSignupForm from "../helpers/initialForms/initialSignupForm";
import useUsers from "../hooks/useUsers";
import signupSchema from "../models/signupSchema";
import { useUser } from "../providers/UserProvider";
import EditUserForm from "../components/EditUserForm";

export default function EditUserPage() {
  const { handleEditUser, error: signUpError} = useUsers();

  const {
    data,
    errors,
    handleChange,
    handleReset,
    validateForm,
    onSubmit,
    handleChangeCheckBox,
  } = useForm(initialSignupForm, signupSchema, handleEditUser);

  const { user } = useUser();

//   if (user) return <Navigate to={ROUTES.ROOT} replace />;
  return (
    <Container
      sx={{
        paddingTop: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <EditUserForm
        onSubmit={onSubmit}
        onReset={handleReset}
        validateForm={validateForm}
        title={"register form"}
        errors={errors}
        signUpError={signUpError}
        data={data}
        onInputChange={handleChange}
        handleChangeCheckBox={handleChangeCheckBox}
      />
    </Container>
  );
}
