import { Box, Button, IconButton, Typography } from "@mui/material";
import { BreadCrumbs } from "../components/Breadcrumbs";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import { Link } from "react-router-dom";
import { AppState } from "../Context/AppProvider";
import { useEffect, useState } from "react";
import axios from "../axios";
import { useScreenWidth } from "../hooks/useScreenWidth";
import { Circle, Delete } from "@mui/icons-material";
import { toast } from "sonner";

export const BasketPage = () => {
  const { user, setUser } = AppState();
  const [items, setItems] = useState(null);
  const [totalCost, setTotalCost] = useState(0);
  const { isDesktop } = useScreenWidth();

  const handleFetchAgain = async () => {
    const fetchUser = await axios.get("/auth/me");
    localStorage.setItem("userInfo", JSON.stringify(fetchUser.data.user));
    setUser(fetchUser.data.user);
  };

  const handleDeleteItemFromCart = async (_id) => {
    const response = await axios.delete(`/user/cart/${_id}`);
    console.log(response);
    if (response.data) {
      setItems(response.data);
      toast.success("Товар успешно удален с корзины");
      handleFetchAgain();
    }
  };

  const handleCreateOrder = async () => {
    const response = await axios.post("/orders/create");
    if (response.status === 201) {
      handleFetchAgain();
      setItems(null);
      toast.success("Заказ успешно сформирован");
    }
  };

  useEffect(() => {
    (async () => {
      const response = await axios.get("/auth/me");
      setItems(response.data.user.cart);
      localStorage.setItem("userInfo", JSON.stringify(response.data.user));
    })();
  }, []);
  useEffect(() => {
    if (items) {
      const total = items.reduce(
        (sum, item) => sum + item.item.cost * item.quantity,
        0
      );
      setTotalCost(total);
    }
  }, [items]);
  return (
    <Box sx={{ px: { xs: 2, lg: 10 } }}>
      <BreadCrumbs />
      <Typography textAlign="center" fontSize={40}>
        Корзина
      </Typography>
      {user ? (
        <>
          {items && items.length > 0 ? (
            <>
              <Box className="flex max-lg:flex-col flex-wrap  gap-5 w-full">
                {items.map((item, i) => (
                  <div
                    key={i}
                    className={`flex justify-between relative lg:w-[550px] text-xs md:text-sm xxl:text-lg rounded-l shadow p-5 rounded bg-white min-h-[300px]`}
                  >
                    <IconButton
                      className="absolute w-5 h-5 top-2 right-2"
                      onClick={() => handleDeleteItemFromCart(item._id)}
                      size="large"
                      aria-label="account of current user"
                      aria-controls="primary-search-account-menu"
                      aria-haspopup="true"
                      color="inherit"
                    >
                      <Delete />
                    </IconButton>
                    <Box className="flex items-center justify-center">
                      <img
                        className="rounded-md"
                        width={isDesktop ? "200" : "100"}
                        src={item.item.pictures}
                        alt="Фото товара"
                      />
                    </Box>

                    <div className="flex flex-col justify-between w-1/2">
                      <div className="flex flex-col justify-around h-full">
                        <div className="flex justify-end">
                          <Typography
                            className="truncate"
                            fontWeight="bold"
                            textAlign="right"
                          >
                            {item.item.name}
                          </Typography>
                        </div>
                        {item.colors && item.colors.length > 0 && (
                          <Box className="bg-slate-200 p-3">
                            <Typography>Цвет:</Typography>

                            <Circle key={i} htmlColor={item.colors} />
                          </Box>
                        )}
                        {item.sizes && item.sizes.length > 0 && (
                          <Box className="bg-slate-200 p-3">
                            <Typography>Размер:</Typography>
                            <div className="flex gap-2">
                              <div
                                key={i}
                                className="size-10 bg-white rounded-full flex justify-center items-center"
                              >
                                {item.sizes}
                              </div>
                            </div>
                          </Box>
                        )}
                        <div className="flex justify-end">
                          <Typography className="truncate">
                            {item.item.cost} Р
                          </Typography>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Box>
              <Typography textAlign="center" fontSize={24} mt={4}>
                Общая стоимость: {totalCost} Р
              </Typography>
              <Button onClick={handleCreateOrder}>Купить</Button>
            </>
          ) : (
            <Box className="flex flex-col items-center justify-center gap-4">
              <Box
                className={`flex items-center gap-10 mt-5 w-[75vw] border-l-[10px] rounded-l shadow border-l-black p-5 rounded bg-gray-200`}
                role="list"
              >
                <ErrorOutlineOutlinedIcon fontSize="large" />
                <Typography textAlign="center" className="font-normal">
                  Ваша корзина пока пуста!
                </Typography>
              </Box>
              <Box className="mt-5">
                <Link to="/">
                  <Button color="primary">Вернуться в магазин</Button>
                </Link>
              </Box>
            </Box>
          )}
        </>
      ) : (
        <Box>Авторизуйтесь!</Box>
      )}
    </Box>
  );
};
