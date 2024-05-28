import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import axios from "../../../axios";
import { useFormik } from "formik";
import { toast } from "sonner";

export default function ChangeStatusForm({
  order,
  closeModal,
  handleFetchAgain,
}) {
  const formik = useFormik({
    initialValues: { status: order?.status || "" },
    onSubmit: async (values) => {
      try {
        const response = await axios.patch(`/orders/${order._id}/status`, {
          ...values,
        });
        if (response.status !== 200) {
          throw new Error("Ошибка изменения статуса заказа");
        }
        toast.success("Статус заказа успешно изменен");
        closeModal();
        handleFetchAgain();
      } catch (err) {
        toast.error(`${err}`);
      }
    },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col h-full justify-between gap-5 py-5"
    >
      <FormControl fullWidth>
        <InputLabel id="status-select-label">Статус</InputLabel>
        <Select
          labelId="status-select-label"
          id="status"
          name="status"
          value={formik.values.status}
          label="status"
          onChange={(e) => formik.setFieldValue("status", e.target.value)}
        >
          <MenuItem value="pending">В ожидании</MenuItem>
          <MenuItem value="accepted">Принят</MenuItem>
          <MenuItem value="confirmed">Подтвержден</MenuItem>
          <MenuItem value="delivering">Отправляется</MenuItem>
          <MenuItem value="received">Получен</MenuItem>
        </Select>
      </FormControl>
      <Button type="submit">Изменить</Button>
    </form>
  );
}
