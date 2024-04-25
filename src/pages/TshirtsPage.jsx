import { Box } from "@mui/material";
import { ItemCardVertical } from "../components/ItemCardVertical";
import { Wrapper } from "../layouts/Wrapper";
import { BreadCrumbs } from "../components/Breadcrumbs";
import { useEffect, useState } from "react";
import axios from "../axios";

export const TshirtsPage = () => {
  const [goods, setGoods] = useState();
  useEffect(() => {
    (async () => {
      const response = await axios.get(`/cloth/getAllCloth`);
      setGoods(response.data.clothes);
    })();
  }, []);
  return (
    <Box>
      <Wrapper>
        <BreadCrumbs />
        <Box className="grid grid-cols-4 max-xl:grid-cols-4 max-md:grid-cols-2 max-lg:grid-cols-3 gap-4">
          {goods &&
            goods
              .filter((item) => item.category === "tshirts")
              .map((item, i) => (
                <ItemCardVertical
                  key={i}
                  _id={item._id}
                  category={item.category}
                  name={item.name}
                  pictures={item.pictures}
                  cost={item.cost}
                />
              ))}
        </Box>
      </Wrapper>
    </Box>
  );
};
