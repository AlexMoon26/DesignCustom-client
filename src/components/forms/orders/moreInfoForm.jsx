import { Box, Input, Typography } from "@mui/material";
import React from "react";
import { ItemCard } from "../../ItemCard";
import dayjs from "dayjs";

export default function MoreInfoForm({ closeModal, order }) {
  return (
    <Box
      id="modal-modal-description"
      sx={{ mt: 2 }}
      className="flex flex-col gap-10"
    >
      <Box className="flex flex-col">
        <Box className="flex justify-between gap-4">
          <Input value="Россия" disabled fullWidth />
          <Input
            value={dayjs(order.createdAt).format("DD.MM.YYYY")}
            disabled
            fullWidth
          />
        </Box>
        <Box className="flex justify-between gap-4">
          <Input
            placeholder="Имя"
            fullWidth
            value={order.user.firstName}
            disabled
          />
          <Input
            placeholder="Фамилия"
            value={order.user.surName}
            fullWidth
            disabled
          />
        </Box>
        <Box className="flex justify-between gap-4">
          <Input
            placeholder="Почта"
            value={order.user.email}
            fullWidth
            disabled
          />
          <Input
            placeholder="Телефон"
            value={order.user.phone}
            fullWidth
            disabled
          />
        </Box>
        <Input placeholder="Населенный пункт (область)" disabled />
        <Input placeholder="Город" disabled />
        <Input placeholder="Почтовый индекс" disabled />
        <Input placeholder="Адрес" disabled />
      </Box>

      <Box height={280} className="overflow-y-scroll">
        {order.items.map((item, i) => (
          <ItemCard
            key={i}
            name={item.cloth.name}
            colors={item.colors}
            sizes={item.size}
            pictures={item.cloth.pictures}
            cost={item.cloth.cost}
          />
        ))}
      </Box>
      <Box className="flex flex-col justify-between px-5">
        <Typography>
          {`Общая прибыль: ${order.items
            .map((item) => item.cloth.cost)
            .reduce((acc, item) => acc + item, 0)} руб.`}
        </Typography>
        {/* <Typography>
            {`Общая себестоимость: ${order.items
              .map((item) => item.outlay)
              .reduce((acc, item) => acc + item, 0)} руб.`}
          </Typography> */}
      </Box>
    </Box>
  );
}
