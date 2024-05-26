import { Box, Button, Card, Typography } from "@mui/material";
import axios from "../../axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function OrdersPage() {
  const [orders, setOrders] = useState(null);
  const router = useNavigate();

  useEffect(() => {
    (async () => {
      const response = await axios.get("/orders");
      console.log(response.data);
      setOrders(response.data);
    })();
  }, []);
  return (
    <>
      {orders ? (
        <Box className="flex flex-col gap-5">
          {orders.map((order, i) => (
            <Card key={i} className="flex flex-col gap-5 p-5">
              <Box className="flex justify-between">
                <Typography color="gray">{order._id}</Typography>
                <Typography color="gray">
                  {order.status === "pending" ? "В ожидании" : order.status}
                </Typography>
              </Box>
              <Card className="flex flex-col p-5">
                <Typography color="gray">Товары:</Typography>
                <Box className="flex flex-col justify-between">
                  {order.items.map((item) => (
                    <Box className="flex justify-between">
                      <Typography>{item.cloth.name}</Typography>
                      <Typography>{item.cloth.cost} р</Typography>
                    </Box>
                  ))}
                </Box>
              </Card>
              <Typography textAlign="end">{order.totalPrice} р</Typography>
            </Card>
          ))}
        </Box>
      ) : (
        <div
          className={`flex w-full text-xs md:text-sm xxl:text-lg border-l-[50px] rounded-l shadow relative border-l-gray-400 p-5 rounded bg-white items-center gap-5`}
          role="list"
        >
          Заказов еще не создано!
          <Button
            onClick={() =>
              router("/", { state: { targetElement: "products" } })
            }
          >
            Выбрать товар
          </Button>
        </div>
      )}
    </>
  );
}
