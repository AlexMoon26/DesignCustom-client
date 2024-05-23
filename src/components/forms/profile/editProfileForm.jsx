import { useFormik } from "formik";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import axios from "../../../axios";
import { toast } from "sonner";

export default function EditProfileForm({ user }) {
  const formik = useFormik({
    initialValues: {
      firstName: user.firstName,
      surName: user.surName,
      email: user.email,
      phone: user.phone,
    },
    onSubmit: async (values) => {
      try {
        const response = await axios.put("/user/profile", { ...values });

        if (!response.data) throw new Error("Ошибка изменения профиля");
        toast.success("Профиль успешно изменен");
      } catch (err) {
        toast.error(`${err}`);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-5 mt-5">
      <FormControl component="fieldset">
        <FormGroup aria-label="position" className="gap-5">
          <TextField
            label="Имя"
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
          />
          <TextField
            label="Фамилия"
            name="surName"
            value={formik.values.surName}
            onChange={formik.handleChange}
          />
          <TextField
            label="Email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <TextField
            label="Номер телефона"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
          />
          {/* <FormControlLabel
            value="Добавить двойную защиту"
            control={<Checkbox />}
            label="Добавить двойную защиту"
          /> */}
        </FormGroup>
      </FormControl>
      <Button fullWidth type="submit">
        Сохранить изменения
      </Button>
    </form>
  );
}
