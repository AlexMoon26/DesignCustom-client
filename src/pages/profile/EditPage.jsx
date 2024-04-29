import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import React from "react";

export default function EditPage() {
  return (
    <form className="flex flex-col gap-5">
      <FormControl component="fieldset">
        <FormGroup aria-label="position" className="gap-5">
          <TextField label="Имя" />
          <TextField label="Фамилия" />
          <TextField label="Email" />
          <TextField label="Номер телефона" />
          <FormControlLabel
            value="Добавить двойную защиту"
            control={<Checkbox />}
            label="Добавить двойную защиту"
          />
        </FormGroup>
      </FormControl>
      <Box className="flex justify-between">
        <Button>Сохранить изменения</Button>
        <Button>Изменить пароль</Button>
      </Box>
    </form>
  );
}
