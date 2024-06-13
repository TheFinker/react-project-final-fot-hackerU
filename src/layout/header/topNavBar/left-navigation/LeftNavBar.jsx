import { Box } from "@mui/material";
import React from "react";
import NavItem from "../../../../routes/components/NavItem";
import ROUTES from "../../../../routes/routesModel";
import { useUser } from "../../../../users/providers/UserProvider";
import Logo from "../logo/Logo";
import LogoIcon from "../logo/LogoIcon";

/**
 * 
 * @returns user has 3 types 
 */
export default function LeftNavBar() {
  const { user } = useUser();
  return (
    <Box>
      <LogoIcon />
      <Logo />
      <NavItem to={ROUTES.ABOUT} label={"About"} />
      {user && (
        <>
          <NavItem to={ROUTES.FAV_CARDS} label={"Favorites"} />
          {(user.isAdmin || user.isBusiness) && <NavItem to={ROUTES.MY_CARDS} label={"My Cards"} />}
          {user.isAdmin && <NavItem to={ROUTES.SANDBOX} label={"Sandbox"} />}
        </>
      )}
    </Box>
  );
}
