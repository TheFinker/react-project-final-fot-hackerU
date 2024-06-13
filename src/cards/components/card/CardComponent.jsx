import { Card, CardActionArea } from "@mui/material";
import React from "react";

import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";
import CardActionBar from "./CardActionBar";
import CardBody from "./CardBody";
import CardHeaderComponent from "./CardHeaderComponent";

import { useUser } from "../../../users/providers/UserProvider";

export default function CardComponent({
  card,
  handleCardLike,
  handleCardDelete,
  showCardDetails,
}) {
  const navigate = useNavigate();
  const { user } = useUser();
  return (
    <Card sx={{ width: showCardDetails ? 450 : 250, m: 2 }}>
      <CardActionArea
        onClick={() => navigate(ROUTES.CARD_INFO + "/" + card._id)}
      >
        <CardHeaderComponent
          showCardDetails={showCardDetails}
          image={card.image}
        />
        <CardBody
          showCardDetails={showCardDetails}
          card={card}
          title={card.title}
          subtitle={card.subtitle}
          phone={card.phone}
          address={card.address}
          cardNumber={card.bizNumber}
        />
      </CardActionArea>
      <CardActionBar
        likes={card.likes}
        handleCardLike={handleCardLike}
        handleCardDelete={handleCardDelete}
        cardId={card._id}
        isFavorite={user ? card.likes.includes(user._id) : false}
        userId={card.user_id}
      />
    </Card>
  );
}
