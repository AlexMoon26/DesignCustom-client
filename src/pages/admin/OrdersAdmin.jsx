import {
  Box,
  Button,
  Select,
  MenuItem,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import { OrderCard } from "../../components/OrderCard";
import axios from "../../axios";

const filterOptions = [
  { value: "all", label: "Все" },
  { value: "fulfilled", label: "Выполненные" },
  { value: "unfulfilled", label: "Невыполненные" },
  { value: "dateAsc", label: "По дате" },
  { value: "nameAsc", label: "По алфавиту" },
];

export const OrdersAdmin = () => {
  const [orders, setOrders] = useState(null);
  const [filterOption, setFilterOption] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const handleCreateOrder = () => {
    console.log("Create Order button clicked");
  };

  const filteredData =
    orders &&
    orders
      .filter((order) => {
        const searchTextLower = searchTerm.toLowerCase();
        return order.user.firstName.toLowerCase().includes(searchTextLower);
      })
      .filter((order) => {
        switch (filterOption) {
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
        switch (filterOption) {
          case "dateAsc":
            return new Date(a.date) - new Date(b.date);
        }
      });

  const handleFetchAgain = async () => {
    const response = await axios.get("/orders");
    setOrders(response.data);
  };

  useEffect(() => {
    handleFetchAgain();
  }, []);

  return (
    <Box className="flex max-lg:flex-col justify-between gap-4 w-full">
      <Box className="w-1/2 max-lg:w-full">
        <Box className="flex justify-between w-full gap-5 mb-4">
          <TextField
            className="w-full"
            label="Поиск"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Select
            className="w-1/2"
            value={filterOption}
            onChange={(e) => setFilterOption(e.target.value)}
          >
            {filterOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
          <Button className="w-1/2" onClick={handleCreateOrder}>
            Создать заказ
          </Button>
        </Box>
        <Box className="grid grid-cols-1 gap-4">
          {orders && filteredData?.length > 0
            ? filteredData.map((order, i) => (
                <OrderCard
                  key={i}
                  order={order}
                  handleFetchAgain={handleFetchAgain}
                />
              ))
            : "Таких заказов не найдено"}
        </Box>
      </Box>
      <Box className="flex flex-col xl:w-1/2 gap-4">
        <Box className="grid grid-cols-1 gap-4">
          {orders &&
            orders
              .filter((item) => item.status === "unfulfilled")
              .map((order, i) => <OrderCard key={i} order={order} />)}
        </Box>
      </Box>
    </Box>
  );
};
