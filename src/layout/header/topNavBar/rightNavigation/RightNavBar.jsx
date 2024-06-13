import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import SearchIcon from "@mui/icons-material/Search";
import { Box, IconButton, TextField } from "@mui/material";
import React from "react";
import { useTheme } from "../../../../providers/CustomThemeProvider";
import { useUser } from "../../../../users/providers/UserProvider";
import Logged from "./Logged";
import MoreButton from "./MoreButton";
import NotLogged from "./NotLogged";
import SearchBar from './SearchBar';

export default function RightNavBar() {
  const { user } = useUser();
  const { isDark, toggleDarkMode } = useTheme();
  return (
    <>
      <Box
        sx={{
          display: { xs: "none", md: "inline-flex" },
          alignItems: "center",
        }}
      >
        <SearchBar></SearchBar>
        <IconButton sx={{ ml: 1 }} onClick={toggleDarkMode}>
          {isDark ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>

        {user && <Logged />}
        {!user && <NotLogged />}
      </Box>
      <MoreButton />
    </>
  );
}
