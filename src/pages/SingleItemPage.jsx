import { useParams } from "react-router-dom";
import { Wrapper } from "../layouts/Wrapper";
import { Box, Typography } from "@mui/material";
import { BreadCrumbs } from "../components/Breadcrumbs";
import { useEffect, useState } from "react";
import axios from "../axios";

export const SingleItemPage = () => {
  const { id } = useParams();
  const [goods, setGoods] = useState();
  useEffect(() => {
    (async () => {
      const response = await axios.get(`/cloth/getAllCloth`);
      setGoods(response.data.clothes);
    })();
  }, []);
  return (
    <>
      <Wrapper>
        <BreadCrumbs item={goods && goods.filter((item) => item._id == id)} />
        {goods &&
          goods
            .filter((item) => item._id == id)
            .map((item, i) => (
              <Box
                key={i}
                className="flex max-md:flex-col justify-between items-center"
              >
                <img src={item.pictures} alt="фото одежды" />
                <Typography>{item.name}</Typography>
              </Box>
            ))}
      </Wrapper>
    </>
  );
};
