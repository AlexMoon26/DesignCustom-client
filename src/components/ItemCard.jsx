/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import { useScreenWidth } from "../hooks/useScreenWidth";
import { Checkbox } from "@mui/material";
import { Circle } from "@mui/icons-material";

export const ItemCard = ({
  name,
  cost,
  colors,
  pictures,
  sizes,
  selectedItems,
  handleItemSelection,
  itemId,
}) => {
  const { isDesktop } = useScreenWidth();
  return (
    <div
      className={`flex justify-between relative w-full text-xs md:text-sm xxl:text-lg rounded-l shadow p-5 rounded bg-white min-h-[300px]`}
      role="list"
    >
      {itemId && (
        <Checkbox
          className="absolute w-2 h-2"
          checked={selectedItems.includes(itemId)}
          onChange={() => handleItemSelection(itemId)}
          onClick={(e) => {
            e.stopPropagation();
          }}
        />
      )}
      <Box className="flex items-center justify-center">
        <img
          className="rounded-md"
          width={isDesktop ? "200" : "100"}
          src={pictures}
          alt="Фото товара"
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
          <Box className="bg-slate-200 p-3">
            <Typography>Цвета:</Typography>
            {Array.isArray(sizes) && colors.length > 0 ? (
              <>
                {colors.map((color, i) => (
                  <Circle key={i} htmlColor={color} />
                ))}
              </>
            ) : (
              <Circle htmlColor={colors} />
            )}
          </Box>
          <Box className="bg-slate-200 p-3">
            <Typography>Размеры:</Typography>
            {Array.isArray(sizes) && sizes.length > 0 ? (
              <div className="flex gap-2">
                {sizes.map((size, i) => (
                  <div
                    key={i}
                    className="size-10 bg-white rounded-full flex justify-center items-center"
                  >
                    {size}
                  </div>
                ))}
              </div>
            ) : (
              <div className="size-10 bg-white rounded-full flex justify-center items-center">
                {sizes}
              </div>
            )}
          </Box>
          <div className="flex justify-end">
            <Typography className="truncate">{cost} Р</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};
