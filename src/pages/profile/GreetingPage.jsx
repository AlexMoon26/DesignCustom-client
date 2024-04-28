import { Button, Typography } from "@mui/material";
import React from "react";
import { LogOut } from "../../Context/AppProvider";
import { useNavigate } from "react-router-dom";

function GreetingPage() {
  const router = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");
    router("/");
  };
  return (
    <div>
      <Typography>
        Добро пожаловать, Эльдар (не Эльдар?{" "}
        <Button variant="text" onClick={handleLogOut}>
          <LogOut />
        </Button>
        )
      </Typography>
      <Typography>
        Из главной страницы аккаунта вы можете посмотреть ваши{" "}
        <span
          className="underline cursor-pointer"
          onClick={() => router("/profile/orders")}
        >
          недавние заказы
        </span>{" "}
        и{" "}
        <span
          className="underline cursor-pointer"
          onClick={() => router("/profile/favorite")}
        >
          избранное
        </span>
        , настроить{" "}
        <span
          className="underline cursor-pointer"
          onClick={() => router("/profile/address")}
        >
          платежный адрес
        </span>
        , а также изменить{" "}
        <span
          className="underline cursor-pointer"
          onClick={() => router("/profile/edit")}
        >
          основную информаaцию
        </span>
      </Typography>
    </div>
  );
}

export default GreetingPage;
