import { Box, Typography } from "@mui/material";
import { Grapth } from "../../components/Grapth";
import { LatestCustomers } from "../../components/LatestCustomers";
import { orders } from "../../data/data";
export const HomeAdmin = () => {
  return (
    <>
      <Box className="flex flex-col gap-20">
        <Box className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Grapth />
          <div className="w-full p-4 bg-white border border-gray-200 rounded shadow sm:p-8 ">
            <div className="flex items-center justify-between">
              <h5 className="text-xl font-bold leading-none text-gray-600">
                Статистика
              </h5>
            </div>
            <div className="w-full h-full flex flex-col justify-center items-center">
              <Typography>Валовая прибыль: 10 000</Typography>
              <Typography>Выручка: 10 000</Typography>
              <Typography>Себестоимость: 10 000</Typography>
            </div>
          </div>
        </Box>
        <Box>
          <LatestCustomers orders={orders} />
        </Box>
      </Box>
    </>
  );
};
