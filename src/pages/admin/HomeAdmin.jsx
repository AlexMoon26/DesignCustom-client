import { Box, Button, Typography } from "@mui/material";
import { Grapth } from "../../components/Grapth";
import { LatestCustomers } from "../../components/LatestCustomers";
import { orders } from "../../data/data";
import { useState } from "react";
export const HomeAdmin = () => {
  const [dataItems, setDataItems] = useState([1, 2, 3]);
  return (
    <>
      <Box className="flex flex-col gap-20">
        <Box className="flex gap-5">
          <Button onClick={() => setDataItems([1, 2, 3])}>Сегодня</Button>
          <Button onClick={() => setDataItems([10, 20, 50])}>Вчера</Button>
          <Button onClick={() => setDataItems([40, 30, 100])}>
            За последнюю неделю
          </Button>
        </Box>
        <Grapth dataItems={dataItems && dataItems} />
        <div className="w-full p-4 bg-white border border-gray-200 rounded shadow sm:p-8 ">
          <div className="flex items-center justify-between">
            <h5 className="text-xl truncate font-bold leading-none text-gray-600">
              Статистика
            </h5>
          </div>
          <div className="w-full h-full flex flex-col justify-center items-center">
            <Typography>Валовая прибыль: 10 000</Typography>
            <Typography>Выручка: 10 000</Typography>
            <Typography>Себестоимость: 10 000</Typography>
          </div>
        </div>

        <Box>
          <LatestCustomers orders={orders} />
        </Box>
      </Box>
    </>
  );
};
