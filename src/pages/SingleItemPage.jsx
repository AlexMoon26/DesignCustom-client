import { useParams } from "react-router-dom";
import { Wrapper } from "../layouts/Wrapper";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Divider,
  Typography,
} from "@mui/material";
import { BreadCrumbs } from "../components/Breadcrumbs";
import { useEffect, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import axios from "../axios";
import Colors from "../components/clothes/colors";
import { useFormik } from "formik";
import Sizes from "../components/clothes/sizes";
import { toast } from "sonner";
import * as Yup from "yup";

export const SingleItemPage = () => {
  const { id } = useParams();
  const [goods, setGoods] = useState();
  const [isSizes, setIsSizes] = useState(false);

  const formik = useFormik({
    initialValues: {
      _id: id,
      colors: "",
      sizes: "M",
    },
    validationSchema: Yup.object({
      colors: Yup.string().required("Выберите цвет!"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.post("/user/cart", { ...values });
        if (!response) {
          throw new Error("Ошибка добавления товара в корзину");
        }
        toast.success("Товар успешно добавлен в корзину");
      } catch (err) {
        toast.error(`${err}`);
      }
    },
  });

  useEffect(() => {
    (async () => {
      const response = await axios.get(`/cloth/getAllCloth`);
      setGoods(response.data.clothes);
    })();
  }, []);
  return (
    <>
      <Wrapper>
        <BreadCrumbs item={goods && goods.filter((item) => item._id == id)} />
        {goods &&
          goods
            .filter((item) => item._id == id)
            .map((item, i) => (
              <Box
                key={i}
                className="flex max-md:flex-col max-md:items-center w-full justify-between "
              >
                <Box className="flex justify-center md:w-1/2">
                  <img
                    className="w-[500px] h-[500px]"
                    src={item.pictures}
                    alt="фото одежды"
                  />
                </Box>
                <Divider variant="middle" flexItem orientation="vertical" />
                <form
                  onSubmit={formik.handleSubmit}
                  className="flex flex-col items-center p-5 gap-5 md:w-1/2 w-full "
                >
                  <Typography fontSize={24}>{item.name}</Typography>
                  <Colors colors={item.colors} formik={formik} />
                  <Divider flexItem />
                  <Box className="flex flex-col gap-5 w-full">
                    <Box className="flex justify-between gap-5">
                      <Button size="small" onClick={() => setIsSizes(!isSizes)}>
                        Выберите размер
                      </Button>
                      <Button size="small">Размерная сетка</Button>
                    </Box>
                    {isSizes && <Sizes formik={formik} />}
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="description"
                        id="description-header"
                        sx={{
                          flexDirection: "row-reverse",
                          "& .MuiAccordionSummary-expandIconWrapper": {
                            marginRight: "auto",
                          },
                        }}
                      >
                        Информация о товаре
                      </AccordionSummary>
                      <AccordionDetails>{item.description}</AccordionDetails>
                    </Accordion>
                    <Typography textAlign="center">
                      Цена: {item.cost}
                    </Typography>
                    {formik.errors.colors && (
                      <Typography textAlign="center" color="red">
                        {formik.errors.colors}
                      </Typography>
                    )}
                    <Button type="submit">В корзину</Button>
                  </Box>
                </form>
              </Box>
            ))}
      </Wrapper>
    </>
  );
};
