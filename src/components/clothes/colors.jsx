import { Box, Checkbox, Typography } from "@mui/material";
import React from "react";
import { Circle, CircleOutlined } from "@mui/icons-material";

export default function Colors({ colors, formik }) {
  return (
    <Box className="bg-slate-200 p-5 w-full">
      <Typography>Выберите цвет:</Typography>
      {colors.map((color, i) => (
        <Checkbox
          size="large"
          key={i}
          checked={formik.values.colors.includes(color)}
          onChange={(e) => {
            formik.setFieldValue("colors", color);
          }}
          icon={<CircleOutlined htmlColor={color} />}
          checkedIcon={<Circle htmlColor={color} />}
        />
      ))}
    </Box>
  );
}
