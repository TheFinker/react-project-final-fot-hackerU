import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Error from "../../components/Error";
import PageHeader from "../../components/PageHeader";
import Spinner from "../../components/Spinner";
import CardComponent from "../components/card/CardComponent";
import useCards from "../hooks/useCards";

export default function CardDetailsPage() {
  const { id } = useParams();
  const { card, error, isLoading, getCardById } = useCards();

  useEffect(() => {
    getCardById(id);
  }, [id, getCardById]);

  const handleCardDelete = () => {};
  const handleCardLike = () => {};

  if (isLoading) return <Spinner />;
  if (error) return <Error errorMessage={error} />;
  return (
    <Container>
      <PageHeader
        title="Card details"
        subtitle="Here you can find all the details about specific card"
      />
      {/* <Typography>details of card {id}</Typography>
      <Typography>details of card {card.title}</Typography> */}
      <Box sx={{justifyContent: 'center', display: 'flex'}}>
        <CardComponent
          card={card}
          showCardDetails
          handleCardDelete={handleCardDelete}
          handleCardLike={handleCardLike}
        />
      </Box>
    </Container>
  );
}
