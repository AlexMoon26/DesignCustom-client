/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import { useScreenWidth } from "../hooks/useScreenWidth";

export const ItemCard = ({ name, price, pictires }) => {
  const { isDesktop } = useScreenWidth();
  return (
    <div
      className={`flex justify-between w-full text-xs md:text-sm xxl:text-lg rounded-l shadow p-5 rounded bg-white`}
      role="list"
    >
      <Box className="items-center justify-center">
        <img
          className="rounded-md"
          width={isDesktop ? "200" : "100"}
          src={pictires}
          alt=""
        />
      </Box>

      <div className="flex flex-col justify-between w-1/2">
        <div className="flex flex-col justify-around h-full">
          <div className="flex justify-end">
            <Typography
              className="truncate"
              fontWeight="bold"
              textAlign="right"
            >
              {name}
            </Typography>
          </div>
          <div className="flex justify-end">
            {" "}
            <Typography className="truncate">{price} Р</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};
