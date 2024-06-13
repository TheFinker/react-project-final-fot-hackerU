import React from "react";
import { Divider, Typography } from "@mui/material";

export default function PageHeader({ title, subtitle }) {
  return (
    <>
      <Typography variant="h2" component="h1">
        {title}
      </Typography>
      <Typography variant="h5" component="h2">
        {subtitle}
      </Typography>
      <Divider sx={{ my: 2 }} />
    </>
  );
}
