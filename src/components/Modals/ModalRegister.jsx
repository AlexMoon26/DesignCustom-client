/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputAdornment,
  InputLabel,
  Modal,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { useScreenWidth } from "../../hooks/useScreenWidth.jsx";
import { useState } from "react";
import { useFormik } from "formik";
import axios from "../../axios.js";
import { AppState } from "../../Context/AppProvider.jsx";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export const ModalRegister = ({ open, handleClose }) => {
  const [isAuthSelected, setIsAuthSelected] = useState(true);
  const [isError, setIsError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { isDesktop } = useScreenWidth();
  const { setUser } = AppState();

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

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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
            localStorage.setItem("userInfo", JSON.stringify(res.data.user));
            setUser(JSON.stringify(res.data.user));
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
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Пароль
              </InputLabel>
              <OutlinedInput
                fullWidth
                id="outlined-adornment-password"
                name="password"
                value={formikAuth.values.password}
                onChange={formikAuth.handleChange}
                onBlur={formikAuth.handleBlur}
                error={
                  formikAuth.touched.password &&
                  Boolean(formikAuth.errors.password)
                }
                label="Пароль"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
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
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Пароль
              </InputLabel>
              <OutlinedInput
                fullWidth
                id="outlined-adornment-password"
                name="password"
                value={formikReg.values.password}
                onChange={formikReg.handleChange}
                onBlur={formikReg.handleBlur}
                error={
                  formikReg.touched.password &&
                  Boolean(formikReg.errors.password)
                }
                label="Пароль"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormGroup>
              <FormControlLabel
                required
                control={<Checkbox />}
                label="Согласие на обработку персональных данных"
              />
              <FormControlLabel
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
