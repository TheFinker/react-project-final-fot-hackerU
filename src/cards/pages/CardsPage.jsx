import React, { useEffect } from "react";
import PageHeader from "../../components/PageHeader";

import { useUser } from "../../users/providers/UserProvider";
import AddNewCardButton from "../components/AddNewCardButton";
import CardsFeedback from "../components/CardsFeedback";
import useCards from "../hooks/useCards";

export default function CardsPage() {
  const {
    cards,
    error,
    isLoading,
    getAllCards,
    handleCardLike,
    handleCardDelete,
  } = useCards();
  const { user, search} = useUser();

  useEffect(() => {
    getAllCards();
  }, [getAllCards]);

  return (
    <div>
      <PageHeader
        title="Cards"
        subtitle="On this page you can find all bussines cards from all categories"
      />
      <CardsFeedback
        cards={cards?.filter(card => card.title.includes(search))}
        handleDelete={handleCardDelete}
        handleLike={handleCardLike}
        isLoading={isLoading}
        error={error}
      />

{(user && (user.isBusiness || user.isAdmin) &&<AddNewCardButton />)}
    </div>
  );
}
