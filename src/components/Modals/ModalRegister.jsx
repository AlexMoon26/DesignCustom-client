/* eslint-disable react/prop-types */
import { Box, Button, Modal, TextField } from "@mui/material";
import { useScreenWidth } from "../../hooks/useScreenWidth.jsx";
import { useState } from "react";

export const ModalRegister = ({ open, handleClose }) => {
  const [isAuthSelected, setIsAuthSelected] = useState(true);
  const { isDesktop } = useScreenWidth();

  const BoxStyle = () => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    width: isDesktop ? "500px" : "100vw",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  });
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={BoxStyle}>
        <Box className="w-full flex justify-center">
          <Button
            onClick={() => setIsAuthSelected(true)}
            style={{ backgroundColor: `${isAuthSelected ? "black" : ""}` }}
            sx={{
              borderRadius: "borderRadius",
              "&.MuiButton-root": {
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
              },
            }}
          >
            Авторизоваться
          </Button>
          <Button
            onClick={() => setIsAuthSelected(false)}
            style={{ backgroundColor: `${isAuthSelected ? "" : "black"}` }}
            sx={{
              borderRadius: "borderRadius",
              "&.MuiButton-root": {
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
              },
            }}
          >
            Регистрация
          </Button>
        </Box>
        <form className="flex flex-col mt-4 gap-4 items-center">
          {isAuthSelected ? (
            <>
              <TextField fullWidth label="Номер телефона" />
              <TextField fullWidth label="Пароль" />
              <Button className="w-[50%] mx-auto">Войти</Button>
            </>
          ) : (
            <></>
          )}
        </form>
      </Box>
    </Modal>
  );
};
