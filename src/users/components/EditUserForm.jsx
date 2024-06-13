import {
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import Form from "../../forms/components/Form";
import Input from "../../forms/components/Input";
import ROUTES from "../../routes/routesModel";
import useAxios from "../../hooks/useAxios";
import { UserContext } from "../providers/UserProvider";
import { getUserData } from "../services/usersApiService";

export default function EditUserForm({
  onSubmit,
  onReset,
  validateForm,
  title,
  errors,
  signUpError,
  data,
  onInputChange,
  handleChangeCheckBox,
}) {
  const { user, token } = useContext(UserContext);
  const [currentUser, setCurrentUser] = useState();
  useAxios();
  const fetchUserData = async (existedUser) => {
    const userData = await getUserData(existedUser._id);
    setCurrentUser(userData);
  };

  useEffect(() => {
    if (user) {
      fetchUserData(user);
    }
  }, [user]);

  if (!user || !currentUser) {
    return <></>;
  }

  return (
    <Form
      onSubmit={onSubmit}
      onReset={onReset}
      validateForm={validateForm}
      title={title}
      styles={{ maxWidth: "800px" }}
      to={ROUTES.ROOT}
    >
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
          <TextField
            value={currentUser.name.first}
            onChange={onInputChange}
            fullWidth
            error={errors.first}
            name="first"
            label="first name"
            sm={6}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            onChange={onInputChange}
            fullWidth
            name="middle"
            label="middle name"
            value={currentUser.name.middle}
            error={errors.middle}
            sm={6}
            required={false}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            onChange={onInputChange}
            value={currentUser.name.last}
            error={errors.last}
            fullWidth
            name="last"
            label="last name"
            sm={6}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            onChange={onInputChange}
            value={currentUser.phone}
            error={errors.phone}
            fullWidth
            name="phone"
            label="phone"
            type="phone"
            sm={6}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            onChange={onInputChange}
            value={currentUser.email}
            error={errors.email}
            fullWidth
            name="email"
            label="email"
            type="email"
            sm={6}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            onChange={onInputChange}
            value={currentUser.image.url}
            error={errors.password}
            fullWidth
            name="url"
            label="image url"
            sm={6}
            required={false}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            onChange={onInputChange}
            value={currentUser.image.alt}
            error={errors.alt}
            fullWidth
            name="alt"
            label="image alt"
            sm={6}
            required={false}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            onChange={onInputChange}
            value={currentUser.address.state}
            error={errors.state}
            fullWidth
            name="state"
            label="state"
            sm={6}
            required={false}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            onChange={onInputChange}
            value={currentUser.address.country}
            error={errors.country}
            fullWidth
            label="country"
            name="country"
            sm={6}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={currentUser.address.city}
            error={errors.city}
            fullWidth
            name="city"
            label="city"
            sm={6}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={currentUser.address.street}
            error={errors.street}
            fullWidth
            name="street"
            label="street"
            sm={6}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={currentUser.address.houseNumber}
            error={errors.houseNumber}
            fullWidth
            name="houseNumber"
            label="house Number"
            type="number"
            sm={6}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={currentUser.address.zip}
            error={errors.zip}
            fullWidth
            name="zip"
            label="zip"
            sm={6}
            required={false}
          />
        </Grid>
      </Grid>
      <Grid item>
        {signUpError && (
          <Typography color="red">User Already Exists</Typography>
        )}
        <FormControlLabel
          onChange={handleChangeCheckBox}
          name="isBusiness"
          control={<Checkbox value={data.isBusiness} color="primary" />}
          label="Signup as business"
        />
      </Grid>
    </Form>
  );
}
