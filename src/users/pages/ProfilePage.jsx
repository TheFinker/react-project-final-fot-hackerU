import { Box, Container, Grid, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import { UserContext } from "../providers/UserProvider";
import { getUserData } from "../services/usersApiService";

export default function ProfilePage() {
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
  var usertype=""
  if (currentUser.isAdmin) {
    usertype = "Admin";
  } else if (currentUser.isBusiness) {
    usertype = "Business";
  } else {
    usertype = "Regular";
  }

  return (
    <Container
      sx={{
        paddingTop: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        component="form"
        autoComplete="off"
        noValidate
        sx={{ mt: 2, p: { xs: 1, sm: 2 }, maxWidth: "800px" }}
      >
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <TextField
              value={currentUser.name.first}
              fullWidth
              name="first"
              label="first name"
              disabled
              sm={6}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              name="middle"
              label="middle name"
              value={currentUser.name.middle}
              disabled
              sm={6}
              required={false}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              value={currentUser.name.last}
              fullWidth
              name="last"
              label="last name"
              disabled
              sm={6}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              value={currentUser.phone}
              fullWidth
              name="phone"
              label="phone"
              type="phone"
              disabled
              sm={6}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              value={currentUser.email}
              fullWidth
              name="email"
              label="email"
              type="email"
              disabled
              sm={6}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              value={currentUser.image.url}
              fullWidth
              name="url"
              label="image url"
              disabled
              sm={6}
              required={false}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              value={currentUser.image.alt}
              fullWidth
              name="alt"
              label="image alt"
              disabled
              sm={6}
              required={false}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              value={currentUser.address.state}
              fullWidth
              name="state"
              label="state"
              disabled
              sm={6}
              required={false}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              value={currentUser.address.country}
              fullWidth
              label="country"
              name="country"
              disabled
              sm={6}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              value={currentUser.address.city}
              fullWidth name="city" label="city" disabled sm={6} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
            value={currentUser.address.street}
            fullWidth name="street" label="street" disabled sm={6} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
            value={currentUser.address.houseNumber}
              fullWidth
              name="houseNumber"
              label="house Number"
              type="number"
              disabled
              sm={6}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
            value={currentUser.address.zip}
              fullWidth
              name="zip"
              label="zip"
              disabled
              sm={6}
              required={false}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              value={usertype}
              fullWidth
              name="usertype"
              label="user type"
              disabled
              sm={6}
              required={false}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
    // </Form>
  );
}
