import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

export function ProfilePage() {
  const router = useNavigate();
  return (
    <Box sx={{ px: { xs: 2, lg: 10 } }}>
      <Typography fontSize={30} align="center">
        Мой аккаунт
      </Typography>
      <Box className="flex max-md:flex-col">
        <Box className="flex flex-col md:w-1/2 gap-5 p-5">
          <Box className="flex w-full justify-between">
            <Box className="size-28 bg-gray-500 rounded-md" />
            <Box className="flex flex-col justify-between">
              <Typography>Эльдар</Typography>
              <Typography>eldedy@mail.ru</Typography>
              <Button className="w-28">Выйти</Button>
            </Box>
          </Box>
          <Box className="flex flex-col gap-5">
            <Button onClick={() => router("/profile/orders")}>Заказы</Button>
            <Button onClick={() => router("/profile/favorite")}>
              Избранное
            </Button>
            <Button onClick={() => router("/profile/address")}>
              Платежный адрес
            </Button>
            <Button onClick={() => router("/profile/edit")}>
              Изменить аккаунт
            </Button>
          </Box>
        </Box>
        <Box className="md:w-1/2">
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
