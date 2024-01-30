import { Box } from "@mui/material";
import { goods } from "../data/data";
import { ItemCardVertical } from "../components/ItemCardVertical";
import { Wrapper } from "../layouts/Wrapper";
import { BreadCrumbs } from "../components/Breadcrumbs";

export const TshirtsPage = () => {
  return (
    <Box>
      <Wrapper>
        <BreadCrumbs />
        <Box className="grid grid-cols-4 max-xl:grid-cols-4 max-md:grid-cols-2 max-lg:grid-cols-3 gap-4">
          {goods
            .filter((item) => item.category === "tshirts")
            .map((item, i) => (
              <ItemCardVertical
                key={i}
                id={item.id}
                category={item.category}
                name={item.name}
                pic={item.pic}
                price={item.price}
              />
            ))}
        </Box>
      </Wrapper>
    </Box>
  );
};
