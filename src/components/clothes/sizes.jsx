import { Box, Checkbox, Typography } from "@mui/material";
import React from "react";
import { sizes } from "../../data/data";

export default function Sizes({ formik, closeModal }) {
  return (
    <Box className="bg-slate-200 p-5">
      <Typography>Выберите размер:</Typography>
      {sizes.map((size, i) => (
        <Checkbox
          size="large"
          key={i + size}
          checked={formik.values.sizes === size}
          onChange={(e) => {
            formik.setFieldValue("sizes", size);
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
  );
}
