import { CardMedia } from "@mui/material";
import React from "react";

export default function CardHeaderComponent({ image, showCardDetails }) {
  return (
    <CardMedia
      component="img"
      height={showCardDetails ? "240" : "140"}
      image={image.url}
      alt={image.alt}
    />
  );
}
