import { useParams } from "react-router-dom";
import { Wrapper } from "../layouts/Wrapper";
import { goods } from "../data/data";
import { Box, Typography } from "@mui/material";
import { BreadCrumbs } from "../components/Breadcrumbs";

export const SingleItemPage = () => {
  const { id } = useParams();
  return (
    <>
      <Wrapper>
        <BreadCrumbs item={goods.filter((item) => item.id == id)} />
        {goods
          .filter((item) => item.id == id)
          .map((item, i) => (
            <Box
              key={i}
              className="flex max-md:flex-col justify-between items-center"
            >
              <img src={item.pic} alt="" />
              <Typography>{item.name}</Typography>
            </Box>
          ))}
      </Wrapper>
    </>
  );
};
