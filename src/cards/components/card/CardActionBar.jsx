import CallIcon from "@mui/icons-material/Call";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { Box, CardActions, IconButton } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";
import { useUser } from "../../../users/providers/UserProvider";

export default function CardActionBar({
  handleCardLike,
  handleCardDelete,
  cardId,
  isFavorite,
  likes,
  userId,
}) {
  const { user } = useUser();
  // const {user} = useContext(UserContext);
  const navigate = useNavigate();

  const handleCardEdit = (id) => {
    navigate(ROUTES.EDIT_CARD + "/" + id);
  };

  return (
    <CardActions sx={{ paddingTop: 0, justifyContent: "space-between" }}>
      <Box>
        {user && (user.isAdmin || user._id === userId) ? (
          <>
            <IconButton onClick={() => handleCardDelete(cardId)}>
              <DeleteIcon />
            </IconButton>
            <IconButton onClick={() => handleCardEdit(cardId)}>
              <ModeEditIcon />
            </IconButton>
          </>
        ) : null}
      </Box>

      <Box>
        <IconButton>
          <CallIcon />
        </IconButton>
        {user && 
        <IconButton onClick={() => handleCardLike(cardId,user)}>
          {likes.length}<FavoriteIcon sx={{ color: isFavorite ? 'red' : 'gray' }} />
        </IconButton>}
      </Box>
    </CardActions>
  );
}
