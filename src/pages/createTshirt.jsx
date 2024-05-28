import React from "react";
import { BreadCrumbs } from "../components/Breadcrumbs";
import { Wrapper } from "../layouts/Wrapper";
import { Box, Button, Divider, Typography } from "@mui/material";
import { CanvasModel } from "../canvas";
import { ColorPicker } from "../components/ColorPicker";

export default function CreateTshirt() {
  return (
    <Wrapper>
      <BreadCrumbs />
      <Box className="flex max-md:flex-col max-md:items-center w-full justify-between ">
        <Box className="flex justify-left h-[75vh] max-md:w-full md:w-1/2">
          <CanvasModel />
        </Box>
        <Divider variant="middle" flexItem orientation="vertical" />
        <form className="flex flex-col items-center p-5 gap-5 md:w-1/2 w-full ">
          <Typography fontSize={24}>Создание футболки</Typography>
          {/* <Colors colors={item.colors} formik={formik} /> */}
          <Divider flexItem />
          <Typography>Выберите цвет</Typography>
          <ColorPicker />
          <Box className="flex flex-col gap-5 w-full">
            <Box className="flex justify-between gap-5">
              <Button size="small" onClick={() => setIsSizes(!isSizes)}>
                Выберите размер
              </Button>
              <Button size="small">Размерная сетка</Button>
            </Box>
            {/* {isSizes && <Sizes sizes={item.sizes} formik={formik} />} */}
            <Button type="submit">В корзину</Button>
          </Box>
        </form>
      </Box>
    </Wrapper>
  );
}
