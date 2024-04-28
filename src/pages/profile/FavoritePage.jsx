import React, { useEffect, useState } from "react";
import { ItemCardVertical } from "../../components/ItemCardVertical";
import axios from "../../axios";
import { Box } from "@mui/material";

export default function FavoritePage() {
  const [favorite, setFavorite] = useState();
  useEffect(() => {
    (async () => {
      const response = await axios.get(`/cloth/getAllCloth`);
      setFavorite(response.data.clothes);
    })();
  }, []);
  return (
    <Box>
      {favorite &&
        favorite.map((item, i) => (
          <ItemCardVertical
            key={i}
            _id={item._id}
            category={item.category}
            name={item.name}
            pictures={item.pictures}
            cost={item.cost}
            liked
          />
        ))}
    </Box>
  );
}
