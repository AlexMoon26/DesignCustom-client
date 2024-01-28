import { Box, IconButton, Typography } from "@mui/material";
import { listNav } from "../../data/data.js";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <Box mt={10} className="border py-20">
      <Box
        className="flex justify-between w-full"
        sx={{ px: { xs: 2, lg: 10 } }}
      >
        <Box className="flex flex-col justify-end">
          <Box>
            <IconButton size="large">
              <img src="/icons/visa.svg" alt="Visa" className="w-10 h-10" />
            </IconButton>
            <IconButton size="large">
              <img
                src="/icons/mastercard.svg"
                alt="Visa"
                className="w-10 h-10"
              />
            </IconButton>
          </Box>
          <Box>
            <IconButton size="large">
              <Link to="https://vk.com" target="_blank">
                <img src="/icons/vk.svg" alt="VK" className="w-10 h-10" />
              </Link>
            </IconButton>
            <IconButton size="large">
              <Link to="https://web.telegram.org" target="_blank">
                <img
                  src="/icons/telegram.svg"
                  alt="Telegram"
                  className="w-10 h-10"
                />
              </Link>
            </IconButton>
          </Box>
        </Box>
        <Box className="flex flex-col gap-5">
          {listNav.map((nav, i) => (
            <Link key={i} to={nav.link}>
              <Typography className="hover:text-red-600">{nav.name}</Typography>
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
