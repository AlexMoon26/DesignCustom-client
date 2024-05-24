/* eslint-disable react/prop-types */
import { Box, IconButton, Typography } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../axios";
import { toast } from "sonner";

export const ItemCardVertical = ({
  name,
  category,
  cost,
  pictures,
  _id,
  liked = false,
  handleFetchAgain,
}) => {
  const [likedItem, setLikedItem] = useState(liked);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${category}/${_id}`);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleLike = async () => {
    try {
      const response = await axios.get(`/cloth/${_id}/like`);
      if (!response) throw new Error("Ошибка взаимодействия с товаром");
      setLikedItem(!likedItem);
      toast.success(response.data);
      handleFetchAgain && handleFetchAgain();
    } catch (err) {
      toast.error(`${err}`);
    }
  };

  useEffect(() => {
    (async () => {
      const response = await axios.get("/auth/me");
      setUser(response.data.user);
    })();
  }, []);

  useEffect(() => {
    if (user && user.likedClothes) {
      setLikedItem(user.likedClothes.includes(_id));
    }
  }, [user, _id]);
  return (
    <Box
      onClick={() => handleClick()}
      className={`flex flex-col justify-between text-xs md:text-sm xxl:text-lg rounded-l hover:shadow hover:bg-gray-50 cursor-pointer p-5 rounded bg-white`}
      role="list"
    >
      <Box className="items-center justify-center">
        <img className="rounded-md" src={pictures} alt="" />
      </Box>

      <Box>
        <Box className="flex flex-col">
          <Typography fontWeight="bold">{name}</Typography>
          <Typography>{cost} Р</Typography>
          <Box className="flex justify-end">
            <IconButton
              onClick={(e) => {
                e.stopPropagation();
                handleLike();
              }}
              size="large"
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
            >
              {likedItem ? <Favorite /> : <FavoriteBorder />}
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
