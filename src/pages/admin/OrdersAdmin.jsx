import { Box, Button, Select, MenuItem, Card } from "@mui/material";
import { useState } from "react";
import { orders } from "../../data/data"; // Assuming 'orders' is an array of order objects
import { OrderCard } from "../../components/OrderCard";

const filterOptions = [
  { value: "all", label: "Все" },
  { value: "fulfilled", label: "Выполненные" },
  { value: "unfulfilled", label: "Невыполненные" },
  { value: "dateAsc", label: "По дате" },
  { value: "nameAsc", label: "По алфавиту" },
];

export const OrdersAdmin = () => {
  const [filteredOrders, setFilteredOrders] = useState(orders);
  const [filterOption, setFilterOption] = useState("all");

  const handleCreateOrder = () => {
    console.log("Create Order button clicked");
  };

  const handleFilterChange = (e) => {
    const selectedOption = e.target.value;
    setFilterOption(selectedOption);

    if (selectedOption === "all") {
      setFilteredOrders(orders);
      return;
    }

    const filteredData = orders
      .filter((order) => {
        switch (selectedOption) {
          case "fulfilled":
            return order.status === "fulfilled";
          case "unfulfilled":
            return order.status === "unfulfilled";
          case "nameAsc":
            return orders.sort((a, b) =>
              a.customerName.localeCompare(b.customerName)
            )[0];
          default:
            return true;
        }
      })
      .sort((a, b) => {
        switch (selectedOption) {
          case "dateAsc":
            return new Date(a.date) - new Date(b.date);
        }
      });
    setFilteredOrders(filteredData);
  };

  return (
    <Box className="flex max-lg:flex-col justify-between gap-4 w-full">
      <Box>
        <Box className="flex justify-between items-center mb-4">
          <Button onClick={handleCreateOrder}>Создать заказ</Button>
          <Select value={filterOption} onChange={handleFilterChange}>
            {filterOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </Box>
        <Box className="grid grid-cols-1 xl:grid-cols-2 gap-4">
          {filteredOrders.map((order, i) => (
            <OrderCard key={i} order={order} />
          ))}
        </Box>
      </Box>
      <Box className="flex flex-col xl:w-1/2 gap-4">
        <Box className="flex justify-center items-centerz bg-white h-[343px] shadow-md p-5 w-full rounded-md">
          Создать заказ
        </Box>
        <Box className="grid grid-cols-1 xl:grid-cols-2 gap-4">
          {orders
            .filter((item) => item.status === "unfulfilled")
            .map((order, i) => (
              <OrderCard key={i} order={order} />
            ))}
        </Box>
      </Box>
    </Box>
  );
};
