import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Divider,
  IconButton,
  Input,
  Typography,
} from "@mui/material";
import axios from "../../../axios";
import { Circle } from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export function CreateOrderForm({
  handleFetchAgain,
  closeModal,
  setItems,
  user,
  items,
}) {
  const formik = useFormik({
    initialValues: {
      region: user?.address?.region || "",
      city: user?.address?.city || "",
      index: user?.address?.index || "",
      address: user?.address?.address || "",
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
        console.log(123);
        const response = await axios.post("/orders/create", { ...values });
        console.log(response);
        if (response.status === 201) {
          handleFetchAgain();
          closeModal();
          setItems(null);
          toast.success("Заказ успешно сформирован");
        }
      } catch (err) {}
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-5 mt-5">
      <Box className="flex flex-col gap-5 border p-5">
        <Typography fontWeight="bold">Оплата и доставка</Typography>
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
      </Box>
      <Box className="border">
        <Accordion className="flex flex-col gap-5  p-5">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="description"
            id="description-header"
          >
            <Typography fontWeight="bold">Товары</Typography>
          </AccordionSummary>
          <Divider className="w-full" />
          <AccordionDetails className="flex flex-col gap-5">
            {items &&
              items.length > 0 &&
              items.map((item, i) => (
                <div
                  key={i}
                  className={`flex justify-between relative lg:w-[550px] text-xs md:text-sm xxl:text-lg rounded-l shadow p-5 rounded bg-white min-h-[300px]`}
                >
                  <Box className="flex items-center justify-center">
                    <img
                      className="rounded-md w-44 h-44"
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
          </AccordionDetails>
        </Accordion>
      </Box>
      <Typography>Доставка: 1499 р.</Typography>
      <Typography>
        {`Общая стоимость: ${items
          .map((item) => item.item.cost)
          .reduce((acc, item) => acc + item, 1499)} руб.`}
      </Typography>
      {Object.values(formik.errors).map((error, index) => (
        <Typography fontSize="small" key={index} color="error">
          {error}
        </Typography>
      ))}
      <Button type="submit">Подтвердить заказ</Button>
    </form>
  );
}
