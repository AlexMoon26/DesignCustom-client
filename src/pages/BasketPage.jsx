import { Box, Button, Typography } from "@mui/material";
import { BreadCrumbs } from "../components/Breadcrumbs";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AppState } from "../Context/AppProvider";

export const BasketPage = () => {
  const { user } = AppState();
  return (
    <Box sx={{ px: { xs: 2, lg: 10 } }}>
      <BreadCrumbs />
      <Box className="flex flex-col justify-center items-center w-full">
        <Typography fontSize={40}>Корзина</Typography>
        <Box>
          {user ? (
            <>
              <Box className=" gap-4">
                <Box
                  className={`flex items-center gap-10 mt-5 w-[75vw] border-l-[10px] rounded-l shadow border-l-black p-5 rounded bg-gray-200`}
                  role="list"
                >
                  <ErrorOutlineOutlinedIcon fontSize="large" />
                  <Typography className="font-normal">
                    Ваша корзина пока пуста!
                  </Typography>
                </Box>
                <Box className="mt-5">
                  <Link to="/">
                    <Button color="primary">Вернуться в магазин</Button>
                  </Link>
                </Box>
              </Box>
            </>
          ) : (
            <Box>Авторизуйтесь!</Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};
