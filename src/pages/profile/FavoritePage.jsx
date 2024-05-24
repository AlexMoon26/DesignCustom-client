import React, { useEffect, useState } from "react";
import { ItemCardVertical } from "../../components/ItemCardVertical";
import axios from "../../axios";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AppState } from "../../Context/AppProvider";

export default function FavoritePage() {
  const [favorite, setFavorite] = useState(null);
  const { setUser } = AppState();
  const router = useNavigate();

  const handleFetchAgain = async () => {
    const response = await axios.get(`/user/favorite`);
    setFavorite(response.data);
    const fetchUser = await axios.get("/auth/me");
    localStorage.setItem("userInfo", JSON.stringify(fetchUser.data.user));
    setUser(fetchUser.data.user);
    router("/profile/favorite");
  };

  useEffect(() => {
    handleFetchAgain();
  }, []);
  return (
    <Box className="flex flex-col justify-center items-center text-center h-full">
      {favorite && favorite.length > 0 ? (
        favorite.map((item, i) => (
          <ItemCardVertical
            key={i}
            _id={item._id}
            category={item.category}
            name={item.name}
            pictures={item.pictures}
            cost={item.cost}
            handleFetchAgain={handleFetchAgain}
          />
        ))
      ) : (
        <Box className="flex flex-col gap-5">
          <Typography textAlign="center">
            У Вас нет товаров в избранном
          </Typography>
          <Button href="/">Перейти в каталог</Button>
        </Box>
      )}
    </Box>
  );
}
