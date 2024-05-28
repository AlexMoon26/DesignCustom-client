import { Button, Input, Typography } from "@mui/material";
import * as Yup from "yup";
import { useFormik } from "formik";
import React from "react";
import axios from "../../axios";
import { toast } from "sonner";

export default function AddressForm({ closeModal, address, handleFetchAgain }) {
  const formik = useFormik({
    initialValues: {
      region: address.region || "",
      city: address.city || "",
      index: address.index || "",
      address: address.address || "",
    },
    validationSchema: Yup.object({
      region: Yup.string().required("Регион обязателен"),
      city: Yup.string().required("Город обязателен"),
      index: Yup.string()
        .required("Индекс обязателен")
        .matches(/^\d{6}$/, "Индекс должен состоять из 6 цифр"),
      address: Yup.string().required("Адрес обязателен"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.put("/user/address", values);
        if (!response) throw new Error("Ошибка обновления платежного адреса");
        toast.success(`${response.data.message}`);
        closeModal();
        handleFetchAgain();
      } catch (err) {
        toast.error(`${err}`);
      }
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-5 mt-5">
      <Input
        placeholder="Населенный пункт (область)"
        name="region"
        value={formik.values.region}
        onChange={formik.handleChange}
        error={formik.errors.region && Boolean(formik.errors.region)}
      />
      <Input
        placeholder="Город"
        name="city"
        value={formik.values.city}
        onChange={formik.handleChange}
        error={formik.errors.city && Boolean(formik.errors.city)}
      />
      <Input
        placeholder="Почтовый индекс"
        name="index"
        value={formik.values.index}
        onChange={formik.handleChange}
        error={formik.errors.index && Boolean(formik.errors.index)}
      />
      <Input
        placeholder="Адрес"
        name="address"
        value={formik.values.address}
        onChange={formik.handleChange}
        error={formik.errors.address && Boolean(formik.errors.address)}
      />
      {Object.values(formik.errors).map((error, index) => (
        <Typography fontSize="small" key={index} color="error">
          {error}
        </Typography>
      ))}
      <Button type="submit">{address ? "Изменить" : "Создать"}</Button>
    </form>
  );
}
