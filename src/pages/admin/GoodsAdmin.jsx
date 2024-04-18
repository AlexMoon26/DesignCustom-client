import { useContext, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { ItemCard } from "../../components/ItemCard";
import { goods } from "../../data/data";

import SearchIcon from "@mui/icons-material/Search";
import { useScreenWidth } from "../../hooks/useScreenWidth";
import { ModalContext } from "../../components/modalContext";
import { AddGoodForm } from "../../components/forms/addGoodForm";
import { EditGoodForm } from "../../components/forms/editGoodForm";

export const GoodsAdmin = () => {
  const { openModal, closeModal } = useContext(ModalContext);
  const { isDesktop } = useScreenWidth();

  const [showTshirts, setShowTshirts] = useState(true);
  const [showDesignerClothing, setShowDesignerClothing] = useState(true);

  const handleTshirtsChange = () => {
    setShowTshirts(!showTshirts);
  };

  const handleDesignerClothingChange = () => {
    setShowDesignerClothing(!showDesignerClothing);
  };

  const handleAddGood = () => {
    openModal({
      component: AddGoodForm,
      props: {
        closeModal,
      },
      title: "Добавление товара",
    });
  };

  const handleEditCloth = (cloth) => {
    openModal({
      component: EditGoodForm,
      props: {
        closeModal,
        cloth,
      },
      title: "Изменение товара",
    });
  };

  return (
    <Box display="flex" flexDirection="column" className="gap-4">
      <Box
        display="flex"
        justifyContent="space-between"
        flexDirection={!isDesktop && "column-reverse"}
      >
        <Box
          className={`flex justify-center gap-4 py-4 ${isDesktop && "pr-4"}`}
          sx={isDesktop ? { width: "50%" } : {}}
        >
          <Button onClick={handleAddGood} fullWidth>
            Добавить
          </Button>
          <Button fullWidth>Выбрать</Button>
        </Box>
        <TextField
          sx={isDesktop ? { width: "50%" } : {}}
          fullWidth={!isDesktop}
          label="Поиск"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Box className="flex">
        <FormControlLabel
          control={
            <Checkbox checked={showTshirts} onChange={handleTshirtsChange} />
          }
          label="Показать футболки"
        />
        <FormControlLabel
          className="truncate"
          control={
            <Checkbox
              checked={showDesignerClothing}
              onChange={handleDesignerClothingChange}
            />
          }
          label="Показать дизайн. одежду"
        />
      </Box>
      <Box className="grid grid-cols-3 max-xl:grid-cols-2 max-lg:grid-cols-1 gap-4">
        {goods.map((item, i) => {
          if (
            (showTshirts && item.category === "Футболки") ||
            (showDesignerClothing && item.category === "Дизайнерская одежда")
          ) {
            return (
              <Box
                key={i}
                className="hover:shadow hover:cursor-pointer"
                onClick={() => handleEditCloth(item)}
              >
                <ItemCard name={item.name} pic={item.pic} price={item.price} />
              </Box>
            );
          } else {
            return null;
          }
        })}
      </Box>
    </Box>
  );
};
