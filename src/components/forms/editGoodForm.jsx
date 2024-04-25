import React from "react";

import {
  Box,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  colors,
  Typography,
  Checkbox,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import * as Yup from "yup";
import { useFormik } from "formik";
import axios from "../../axios";
import { toast } from "sonner";
import { colors as colorsSystem, sizes } from "../../data/data";
import { Circle, CircleOutlined } from "@mui/icons-material";

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

export const EditGoodForm = ({ closeModal, cloth, fetchAgain }) => {
  const formik = useFormik({
    initialValues: {
      name: cloth.name,
      cost: cloth.cost,
      outlay: cloth.outlay,
      pictures: cloth.pictures,
      count: cloth.count,
      description: cloth.description,
      sizes: cloth.sizes,
      colors: cloth.colors,
      category: cloth.category,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Заполните название!"),
      cost: Yup.number()
        .required("Заполните стоимость!")
        .min(1, "Стоимость должна быть целым положительным числом!"),
      outlay: Yup.number()
        .required("Заполните себестоимость!")
        .min(1, "Себестоимость должна быть целым положительным числом!"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.post(`/cloth/${cloth._id}`, values);
        if (response.status !== 200) {
          throw new Error("Ошибка изменения товара");
        }
        toast.success("Товар успешно изменен!");
        closeModal();
        fetchAgain();
      } catch (err) {
        toast.error(`${err}`);
      }
    },
  });

  const handleFileChange = async (event) => {
    const files = event.target.files;
    if (!files.length) return;

    const newImageUrls = [...formik.values.pictures];
    for (const file of files) {
      const reader = new FileReader();
      reader.onload = () => {
        newImageUrls.push(reader.result);
        formik.setFieldValue("pictures", newImageUrls);
      };
      reader.readAsDataURL(file);
    }
    for (const file of files) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "chat-app");
      formData.append("cloud_name", "dgfisnrrt");

      // Upload each file using fetch or a library like Axios
      await fetch("https://api.cloudinary.com/v1_1/dgfisnrrt/image/upload", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          // Update form with individual image URLs
          const imageUrls = [...formik.values.pictures, data.url.toString()];
          formik.setFieldValue("pictures", imageUrls);
        })
        .catch((err) => {
          console.error("Error uploading file:", err);
          // Handle upload error (e.g., display error message)
        });
    }
  };
  return (
    <form onSubmit={formik.handleSubmit}>
      <Box className="flex flex-col gap-5 mt-3">
        <Box className="w-full flex justify-center">
          <img src={cloth.pictures} alt="Выбранное изображение" />
        </Box>
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
        <TextField
          label="Себестоимость"
          id="outlay"
          name="outlay"
          placeholder="Себестоимость"
          onChange={formik.handleChange}
          value={formik.values.outlay}
          error={!!formik.errors.outlay}
          helperText={formik.errors.outlay}
        />
        <TextField
          label="Количество на складе"
          id="count"
          name="count"
          placeholder="Количество"
          onChange={formik.handleChange}
          value={formik.values.count}
          error={!!formik.errors.count}
          helperText={formik.errors.count}
        />
        <Box className="bg-slate-200 p-5">
          <Typography>Выберите цвета:</Typography>
          {colorsSystem.map((color, i) => (
            <Checkbox
              size="large"
              key={i}
              checked={formik.values.colors.includes(color)}
              onChange={(e) => {
                const updatedColors = [...formik.values.colors];
                if (e.target.checked) {
                  updatedColors.push(color);
                } else {
                  const index = updatedColors.indexOf(color);
                  if (index > -1) {
                    updatedColors.splice(index, 1);
                  }
                }
                formik.setFieldValue("colors", updatedColors);
              }}
              icon={<CircleOutlined htmlColor={color} />}
              checkedIcon={<Circle htmlColor={color} />}
            />
          ))}
        </Box>
        <Box className="bg-slate-200 p-5">
          <Typography>Выберите размер:</Typography>
          {sizes.map((size, i) => (
            <Checkbox
              size="large"
              key={i}
              checked={formik.values.sizes.includes(size)}
              onChange={(e) => {
                const updatedSizes = [...formik.values.sizes];
                if (e.target.checked) {
                  updatedSizes.push(size);
                } else {
                  const index = updatedSizes.indexOf(size);
                  if (index > -1) {
                    updatedSizes.splice(index, 1);
                  }
                }
                formik.setFieldValue("sizes", updatedSizes);
              }}
              icon={
                <div className="size-10 flex justify-center items-center">
                  {size}
                </div>
              }
              checkedIcon={
                <div className="size-10 bg-white rounded-full flex justify-center items-center">
                  {size}
                </div>
              }
            />
          ))}
        </Box>
        <FormControl>
          <InputLabel id="categoryLabel">Категория</InputLabel>
          <Select
            label="Категория"
            labelId="categoryLabel"
            id="category"
            name="category"
            onChange={formik.handleChange}
            value={formik.values.category}
            error={!!formik.errors.category}
          >
            <MenuItem value={"tshirts"}>Футболки</MenuItem>
            <MenuItem value={"designer-clothes"}>Дизайнерская одежда</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Описание"
          id="description"
          name="description"
          placeholder="Описание"
          onChange={formik.handleChange}
          value={formik.values.description}
          error={!!formik.errors.description}
          helperText={formik.errors.description}
          multiline
        />
        <Button type="submit">Сохранить</Button>
      </Box>
    </form>
  );
};
