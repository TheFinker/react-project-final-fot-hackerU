
import React, { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import { useUser } from "../../users/providers/UserProvider";

import CardsFeedback from "../components/CardsFeedback";
import useCards from "../hooks/useCards";

export default function FavoriteCardsPage() {

  const { user } = useUser();
  const {
    cards,
    error,
    isLoading,
    getAllCards,
    handleCardLike,
    handleCardDelete,
  } = useCards();
  const { search } = useUser();

  useEffect(() => {
    getAllCards();
  }, [getAllCards]);
  const userId = user._id;
  const favoritesCards = cards.filter((card) => {
    const isUserExistInLikesArray = card.likes.some((like) => like === userId)
    return isUserExistInLikesArray
  })

  return (
    <div>
      <PageHeader
        title="Favorites Cards Page"
        subtitle="Here you can find all your favorites business cards"
      />
      <CardsFeedback
        cards={favoritesCards?.filter((card) => card.title.includes(search))}
        handleDelete={handleCardDelete}
        handleLike={handleCardLike}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
}
