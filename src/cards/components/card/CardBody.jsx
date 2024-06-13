import { CardContent, CardHeader, Divider, Link, Typography } from "@mui/material";
import React from "react";

export default function CardBody({
  title,
  subtitle,
  phone,
  address,
  cardNumber,
  showCardDetails,
  card,
}) {
  return (
    
    <>
      <CardHeader title={title} subheader={subtitle} />

      <Divider variant="middle" />
      <CardContent>
      {showCardDetails && (
            <Typography variant="body2" color="text.secondary">
            <strong>description: </strong>
            {card.description}
          </Typography>)}
        <Typography variant="body2" color="text.secondary">
          <strong>Phone: </strong>
          {phone}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Address: </strong>
          {address.city} {address.street} {address.houseNumber}
        </Typography>
        {showCardDetails && (
          <>
            <Typography variant="body2" color="text.secondary">
              •<strong>Country: </strong>
              {address.country}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              •<strong>State: </strong>
              {address.state}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              •<strong>Zip: </strong>
              {address.zip}
            </Typography>
          </>
        )}
        <Typography variant="body2" color="text.secondary">
          <strong>Card Number: </strong>
          {cardNumber}
        </Typography>
        {showCardDetails && (
          <>
            <Typography variant="body2" color="text.secondary">
              <strong>Email: </strong>
              {card.email}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>Web: </strong>
              <Link>{card.web}</Link>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>Date of creation: </strong>
              {card.createdAt}
            </Typography>
          </>
        )}
      </CardContent>
      
    </>
  );
}
