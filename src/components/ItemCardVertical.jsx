/* eslint-disable react/prop-types */
import { Box, IconButton, Typography } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ItemCardVertical = ({ name, category, price, pic, id }) => {
  const [likedItem, setLikedItem] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${category}/${id}`);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Box
      onClick={() => handleClick()}
      className={`flex flex-col text-xs md:text-sm xxl:text-lg rounded-l hover:shadow hover:bg-gray-50 cursor-pointer p-5 rounded bg-white`}
      role="list"
    >
      <Box className="items-center justify-center">
        <img className="rounded-md" src={pic} alt="" />
      </Box>

      <Box className="flex justify-between mt-5">
        <Box className="flex flex-col ">
          <Typography fontWeight="bold">{name}</Typography>
          <Typography>{price} Р</Typography>
          <Box className="flex justify-end">
            <IconButton
              onClick={(e) => {
                e.stopPropagation();
                setLikedItem(!likedItem);
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
