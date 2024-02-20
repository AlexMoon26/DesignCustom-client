import { Box } from "@mui/material";
import { goods } from "../data/data";
import { ItemCardVertical } from "../components/ItemCardVertical";

export const BasketPage = () => {
  return (
    <Box className="pt-10" sx={{ px: { xs: 2, lg: 10 } }}>
      <Box className="grid grid-cols-4 max-xl:grid-cols-4 max-md:grid-cols-2 max-lg:grid-cols-3 gap-4">
        {goods.map((item, i) => (
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
    </Box>
  );
};
