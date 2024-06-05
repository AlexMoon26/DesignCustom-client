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

        <div className="flex justify-between gap-5 w-full">
          <div className=" p-4 w-1/3 min-w-1/3 bg-white border border-gray-200 rounded shadow">
            <h5 className="truncate font-bold leading-none text-gray-500">
              Себестоимость
            </h5>
            <div className="w-full py-5 h-full flex flex-col justify-center items-center">
              <Typography>10 000</Typography>
            </div>
          </div>
          <div className=" p-4 w-1/3 min-w-1/3 bg-white border border-gray-200 rounded shadow">
            <h5 className="truncate font-bold leading-none text-gray-500">
              Выручка
            </h5>
            <div className="w-full py-5 h-full flex flex-col justify-center items-center">
              <Typography>10 000</Typography>
            </div>
          </div>
          <div className=" p-4 w-1/3  min-w-1/3 bg-white border border-gray-200 rounded shadow">
            <h5 className="truncate font-bold leading-none text-gray-500">
              Валовая прибыль
            </h5>
            <div className="w-full py-5 h-full flex flex-col justify-center items-center">
              <Typography>10 000</Typography>
            </div>
          </div>
        </div>

        <Box>
          <LatestCustomers orders={orders} />
        </Box>
      </Box>
    </>
  );
};
