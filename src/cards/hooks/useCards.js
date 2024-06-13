import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { useSnack } from "../../providers/SnackbarProvider";
import ROUTES from "../../routes/routesModel";
import normalizeCard from "../helpers/normalization/normalizeCard";
import {
  changeLikeStatus,
  createCard,
  deleteCard,
  editCard,
  getCard,
  getCards,
  getMyCards,
} from "../services/cardsApiService";

export default function useCards() {
  const [card, setCard] = useState(null);
  const [myCards, setMyCards] = useState(null);
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const navigate = useNavigate();
  const setSnack = useSnack();

  useAxios();

  const getAllCards = useCallback(async () => {
    try {
      setError(null);
      setIsLoading(true);
      const data = await getCards();
      setCards(data);
      setSnack("success", "All the cards are here");
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, [setSnack]);

  const getAllMyCards = useCallback(async () => {
    try {
      setError(null);
      setIsLoading(true);
      const data = await getMyCards();
      setMyCards(data);
      setSnack("success", "All my cards are here");
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, [setSnack]);

  const getCardById = useCallback(async (id) => {
    try {
      setError(null);
      setIsLoading(true);
      const data = await getCard(id);
      setCard(data);
      setIsLoading(false);
      return data;
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  }, []);

  const handleCreateCard = useCallback(
    async (cardFromClient) => {
      setError(null);
      setIsLoading(true);

      try {
        const card = await createCard(normalizeCard(cardFromClient));
        setCard(card);
        setSnack("success", "A new business card has been created");
        setTimeout(() => {
          navigate(ROUTES.ROOT);
        }, 1000);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    },
    [setSnack, navigate]
  );

  const handleUpdateCard = useCallback(
    async (cardId, cardFromClient) => {
      setIsLoading(true);

      try {
        const card = await editCard(cardId, normalizeCard(cardFromClient));
        setCard(card);
        setSnack("success", "The business card has been successfully updated");
        setTimeout(() => {
          navigate(ROUTES.ROOT);
        }, 1000);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    },
    [setSnack, navigate]
  );

  const handleCardDelete = useCallback((id) => {
    deleteCard(id)
    console.log("you deleted card no" + id);
  }, []);

  const handleCardLike = useCallback(async (id, user) => {
    const response = await changeLikeStatus(id);
    if (response.status === 200) {
      setCards((prevCards) =>
        prevCards.map((card) => {
          if (card._id === id) {
            if (!card.likes.includes(user._id)) {
              card.likes.push(user._id);
            } else {
              card.likes = card.likes.filter((like) => like !== user._id);
            }
          }
          return card;
        })
      );
    }
    console.log("you liked card no" + id);
  }, []);

  return {
    card,
    cards,
    error,
    isLoading,
    myCards,
    getAllMyCards,
    getAllCards,
    getCardById,
    handleCardDelete,
    handleCardLike,
    handleCreateCard,
    handleUpdateCard,
  };
}
