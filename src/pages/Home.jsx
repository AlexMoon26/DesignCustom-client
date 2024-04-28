import { Box } from "@mui/material";
import { ItemCardVertical } from "../components/ItemCardVertical";
import { SlideBar } from "../components/SlideBar";
import { useEffect, useRef, useState } from "react";
import axios from "../axios";
import { useLocation } from "react-router-dom";

export const Home = () => {
  const [goods, setGoods] = useState();

  const location = useLocation();
  const targetElementRef = useRef(null);

  useEffect(() => {
    if (
      targetElementRef.current &&
      location.state?.targetElement === "products"
    ) {
      const elementHeight = targetElementRef.current.offsetHeight;
      const scrollToPosition =
        targetElementRef.current.offsetTop + elementHeight / 1000;

      window.scrollTo({
        top: scrollToPosition,
        behavior: "smooth",
      });
    }
  }, [targetElementRef, location, goods]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(`/cloth/getAllCloth`);
      setGoods(response.data.clothes);
    })();
  }, []);
  return (
    <>
      <SlideBar />
      <Box className="pt-10" sx={{ px: { xs: 2, lg: 10 } }}>
        <Box
          ref={targetElementRef}
          className="grid grid-cols-4 max-xl:grid-cols-4 max-md:grid-cols-2 max-lg:grid-cols-3 gap-4"
        >
          {goods &&
            goods.map((item, i) => (
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
      </Box>
    </>
  );
};
