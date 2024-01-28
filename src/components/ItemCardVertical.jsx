/* eslint-disable react/prop-types */
import { Box, IconButton, Typography } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { useState } from "react";

export const ItemCardVertical = ({ name, price, pic }) => {
  const [likedItem, setLikedItem] = useState(false);
  return (
    <div
      className={`flex flex-col text-xs md:text-sm xxl:text-lg rounded-l hover:shadow hover:bg-gray-50 p-5 rounded bg-white`}
      role="list"
    >
      <Box className="items-center justify-center">
        <img className="rounded-md" src={pic} alt="" />
      </Box>

      <Box className="flex justify-between mt-5">
        <Box className="flex flex-col">
          <Typography fontWeight="bold">{name}</Typography>
          <Typography>{price} Р</Typography>
        </Box>
        <Box>
          <IconButton
            onClick={() => setLikedItem(!likedItem)}
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
    </div>
  );
};
