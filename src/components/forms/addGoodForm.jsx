import React, { useEffect, useState } from "react";

import { Box, TextField, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import * as Yup from "yup";
import { useFormik } from "formik";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export const AddGoodForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      cost: 0,
      images: [],
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Заполните название!"),
      cost: Yup.number()
        .required("Заполните стоимость!")
        .min(1, "Стоимость должна быть целым положительным числом!"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (!files.length) return;

    const newImageUrls = [...formik.values.images];
    console.log(newImageUrls);
    for (const file of files) {
      const reader = new FileReader();
      reader.onload = () => {
        newImageUrls.push(reader.result);
        formik.setFieldValue("images", newImageUrls);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <form onSubmit={formik.handleSubmit}>
      <Box className="flex flex-col gap-5 mt-3">
        {formik.values.images.map((imageUrl) => (
          <Box key={imageUrl}>
            <img src={imageUrl} alt="Выбранное изображение" />
          </Box>
        ))}
        <Button
          component="label"
          role={undefined}
          variant="outlined"
          tabIndex={-1}
        >
          <Box>Добавьте изображения</Box>
          <VisuallyHiddenInput
            multiple
            type="file"
            onChange={handleFileChange}
          />
        </Button>
        <TextField
          label="Название товара"
          id="name"
          name="name"
          placeholder="Навание товара"
          onChange={formik.handleChange}
          value={formik.values.name}
          error={!!formik.errors.name}
          helperText={formik.errors.name}
        />
        <TextField
          label="Цена"
          id="cost"
          name="cost"
          placeholder="Цена"
          onChange={formik.handleChange}
          value={formik.values.cost}
          error={!!formik.errors.cost}
          helperText={formik.errors.cost}
        />
        <Button type="submit">Создать</Button>
      </Box>
    </form>
  );
};
