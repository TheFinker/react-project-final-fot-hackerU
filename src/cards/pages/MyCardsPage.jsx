import React, { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import { useUser } from "../../users/providers/UserProvider";

import AddNewCardButton from "../components/AddNewCardButton";
import CardsFeedback from "../components/CardsFeedback";
import useCards from "../hooks/useCards";

export default function MyCardsPage() {
  const {
    myCards,
    error,
    isLoading,
    getAllMyCards,
    handleCardLike,
    handleCardDelete,
  } = useCards();
  const { search } = useUser();

  useEffect(() => {
    getAllMyCards();
  }, [getAllMyCards]);

  return (
    <div>
      <PageHeader
        title="My Cards"
        subtitle="On this page you can find all bussines cards you created"
      />
      <CardsFeedback
        cards={myCards?.filter((card) => card.title.includes(search))}
        handleDelete={handleCardDelete}
        handleLike={handleCardLike}
        isLoading={isLoading}
        error={error}
      />
      <AddNewCardButton />
    </div>
  );
}
