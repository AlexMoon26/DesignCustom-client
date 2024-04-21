import React from "react";

import {
  Box,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import * as Yup from "yup";
import { useFormik } from "formik";
import axios from "../../axios";
import { toast } from "sonner";

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
      pictures: cloth.pictures,
      count: cloth.count,
      description: cloth.description,
      sizes: cloth.sizes,
      category: cloth.category,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Заполните название!"),
      cost: Yup.number()
        .required("Заполните стоимость!")
        .min(1, "Стоимость должна быть целым положительным числом!"),
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
        <Box>
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
          label="Количество на складе"
          id="count"
          name="count"
          placeholder="Количество"
          onChange={formik.handleChange}
          value={formik.values.count}
          error={!!formik.errors.count}
          helperText={formik.errors.count}
        />
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
            <MenuItem value={"Футболки"}>Футболки</MenuItem>
            <MenuItem value={"Дизайнерская одежда"}>
              Дизайнерская одежда
            </MenuItem>
          </Select>
        </FormControl>
        <Button type="submit">Сохранить</Button>
      </Box>
    </form>
  );
};
