import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "@mui/material";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Функция для обновления состояния user из localStorage
  const updateUserFromLocalStorage = () => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);
  };

  useEffect(() => {
    // Загрузка пользователя при инициализации
    updateUserFromLocalStorage();

    // Обработчик события изменения localStorage
    const handleStorageChange = (event) => {
      if (event.key === "userInfo") {
        updateUserFromLocalStorage();
      }
    };

    // Добавляем слушатель события storage
    window.addEventListener("storage", handleStorageChange);

    // Удаляем слушатель при размонтировании компонента
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};

export const AppState = () => {
  return useContext(AppContext);
};

export const LogOut = () => {
  const { setUser } = useContext(AppContext);

  const handleLogOut = () => {
    localStorage.removeItem("userInfo");
    setUser(null);
  };

  return (
    <div>
      <Button onClick={handleLogOut}>Выйти</Button>
    </div>
  );
};

export default AppProvider;
