import { useState } from "react";
import { Box, Checkbox, FormControlLabel } from "@mui/material";
import { orders } from "../../data/data";
import { OrderCard } from "../../components/OrderCard";

export const OrdersAdmin = () => {
  // Состояния для отслеживания выбранных опций сортировки
  const [showActiveOrders, setShowActiveOrders] = useState(true);
  const [showInactiveOrders, setShowInactiveOrders] = useState(true);
  const [showCompletedOrders, setShowCompletedOrders] = useState(true);

  // Функции для обработки изменений состояния чекбоксов
  const handleActiveOrdersChange = () => {
    setShowActiveOrders(!showActiveOrders);
  };

  const handleInactiveOrdersChange = () => {
    setShowInactiveOrders(!showInactiveOrders);
  };

  const handleCompletedOrdersChange = () => {
    setShowCompletedOrders(!showCompletedOrders);
  };

  return (
    <Box>
      <FormControlLabel
        control={
          <Checkbox
            checked={showActiveOrders}
            onChange={handleActiveOrdersChange}
          />
        }
        label="Показать активные заказы"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={showInactiveOrders}
            onChange={handleInactiveOrdersChange}
          />
        }
        label="Показать неактивные заказы"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={showCompletedOrders}
            onChange={handleCompletedOrdersChange}
          />
        }
        label="Показать выполненные заказы"
      />
      <Box className="grid grid-cols-2 max-lg:grid-cols-1 gap-4">
        {orders.map((order, i) => {
          if (
            (showActiveOrders && order.status === "Выполняется") ||
            (showInactiveOrders && order.status === "В ожидании") ||
            (showCompletedOrders && order.status === "Выполнен")
          ) {
            return (
              <OrderCard
                key={i}
                clientName={order.customerName}
                status={order.status}
                date={order.date}
                email={order.email}
                phone={order.phone}
                price={order.price}
              />
            );
          } else {
            return null;
          }
        })}
      </Box>
    </Box>
  );
};
