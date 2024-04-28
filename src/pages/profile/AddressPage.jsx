import { Box, Button, Typography } from "@mui/material";
import React from "react";

export default function AddressPage() {
  return (
    <div>
      <Typography textAlign="center">
        Данный адрес будет использоваться по умолчанию при оформлении заказов
      </Typography>
      <Typography fontWeight="bold">Платежный адрес</Typography>
      <Box className="flex flex-col w-48 items-left gap-3">
        <Box className="bg-gray-300 size-48 rounded" />
        <Button>Изменить</Button>
      </Box>
    </div>
  );
}