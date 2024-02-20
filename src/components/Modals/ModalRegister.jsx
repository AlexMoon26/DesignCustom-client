/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Modal,
  TextField,
} from "@mui/material";
import { useScreenWidth } from "../../hooks/useScreenWidth.jsx";
import { useState } from "react";
import { useFormik } from "formik";
import axios from "../../axios.js";

export const ModalRegister = ({ open, handleClose }) => {
  const [isAuthSelected, setIsAuthSelected] = useState(true);
  const [isError, setIsError] = useState(false);
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

  const formikAuth = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        axios.post("/auth/login", values).then((res) => {
          if (res.status == 200) {
            localStorage.setItem("token", res.data.token);
            alert("Успешная авторизация!");
            handleClose();
          } else {
            setIsError(true);
          }
        });
      } catch (err) {
        console.log(err);
      }
    },
  });
  const formikReg = useFormik({
    initialValues: {
      password: "",
      phone: "",
      email: "",
    },
    onSubmit: async (values) => {
      try {
        axios.post("/auth/register", values).then((res) => {
          if (res.status == 201) {
            localStorage.setItem("token", res.data.token);
            alert("Успешная авторизация!");
            handleClose();
          } else {
            setIsError(true);
          }
        });
      } catch (err) {
        console.log(err);
      }
    },
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

        {isAuthSelected ? (
          <form
            onSubmit={formikAuth.handleSubmit}
            className="flex flex-col mt-4 gap-4 items-center"
          >
            <TextField
              fullWidth
              name="email"
              value={formikAuth.values.email}
              onChange={formikAuth.handleChange}
              onBlur={formikAuth.handleBlur}
              error={
                formikAuth.touched.email && Boolean(formikAuth.errors.email)
              }
              helperText={formikAuth.touched.email && formikAuth.errors.email}
              label="Email"
            />
            <TextField
              fullWidth
              name="password"
              value={formikAuth.values.password}
              onChange={formikAuth.handleChange}
              onBlur={formikAuth.handleBlur}
              error={
                formikAuth.touched.password &&
                Boolean(formikAuth.errors.password)
              }
              helperText={
                formikAuth.touched.password && formikAuth.errors.password
              }
              label="Пароль"
            />
            {isError && (
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <p className="text-red-600">Неверный логин или пароль!</p>
              </Box>
            )}
            <Button type="submit" className="w-[50%] mx-auto">
              Войти
            </Button>
          </form>
        ) : (
          <form
            onSubmit={formikReg.handleSubmit}
            className="flex flex-col mt-4 gap-4 items-center"
          >
            <TextField
              fullWidth
              name="email"
              value={formikReg.values.email}
              onChange={formikReg.handleChange}
              onBlur={formikReg.handleBlur}
              error={formikReg.touched.email && Boolean(formikReg.errors.email)}
              helperText={formikReg.touched.email && formikReg.errors.email}
              required
              label="Email"
            />
            <TextField
              fullWidth
              type="password"
              name="password"
              value={formikReg.values.password}
              onChange={formikReg.handleChange}
              onBlur={formikReg.handleBlur}
              error={
                formikReg.touched.password && Boolean(formikReg.errors.password)
              }
              helperText={
                formikReg.touched.password && formikReg.errors.password
              }
              required
              label="Пароль"
            />
            <FormGroup>
              <FormControlLabel
                required
                control={<Checkbox />}
                label="Согласие на обработку персональных данных"
              />
              <FormControlLabel
                required
                control={<Checkbox />}
                label="Согласие на рассылку"
              />
            </FormGroup>
            <Button type="submit" className="w-[50%] mx-auto">
              Войти
            </Button>
          </form>
        )}
      </Box>
    </Modal>
  );
};
