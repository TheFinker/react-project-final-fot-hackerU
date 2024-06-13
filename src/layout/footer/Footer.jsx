import Favorite from "@mui/icons-material/Favorite";
import InfoIcon from "@mui/icons-material/Info";
import StyleIcon from "@mui/icons-material/Style";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { useUser } from "../../users/providers/UserProvider";
import { Home } from "@mui/icons-material";

export default function Footer() {
  const { user } = useUser();
  const navigate = useNavigate();

  return (
    <Paper
      elevation={3}
      sx={{ position: "sticky", bottom: 0, left: 0, right: 0 }}
    >
      <BottomNavigation showLabels>
        <BottomNavigationAction
          label="Home"
          icon={<Home />}
          onClick={() => navigate(ROUTES.CARDS)}
        />
        <BottomNavigationAction
          label="About"
          icon={<InfoIcon />}
          onClick={() => navigate(ROUTES.ABOUT)}
        />
        {user && (
          <BottomNavigationAction
            label="Favorites"
            icon={<Favorite />}
            onClick={() => navigate(ROUTES.FAV_CARDS)}
          />
        )}
        {(user && (user.isBusiness || user.isAdmin) && (
            <BottomNavigationAction
              label="My Cards"
              icon={<StyleIcon />}
              onClick={() => navigate(ROUTES.MY_CARDS)}
            />
          ))}
      </BottomNavigation>
    </Paper>
  );
}
