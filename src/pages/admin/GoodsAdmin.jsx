import { useContext, useEffect, useState } from "react";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { ItemCard } from "../../components/ItemCard";
import SearchIcon from "@mui/icons-material/Search";
import { useScreenWidth } from "../../hooks/useScreenWidth";
import { ModalContext } from "../../components/modalContext";
import { AddGoodForm } from "../../components/forms/addGoodForm";
import { EditGoodForm } from "../../components/forms/editGoodForm";
import axios from "../../axios";
import { toast } from "sonner";

const filterOptions = [
  { value: "alphabetical", label: "По алфавиту" },
  { value: "price", label: "По цене" },
  { value: "tshirts", label: "Только футболки" },
  { value: "designer-clothes", label: "Только дизайнерская одежда" },
];

export const GoodsAdmin = () => {
  const [clothes, setClothes] = useState(null);
  const { openModal, closeModal } = useContext(ModalContext);
  const { isDesktop } = useScreenWidth();

  const [filterOption, setFilterOption] = useState("alphabetical");
  const [selectedItems, setSelectedItems] = useState([]);

  const handleItemSelection = (itemId) => {
    const newSelection = [...selectedItems];
    const itemIndex = newSelection.indexOf(itemId);
    if (itemIndex !== -1) {
      newSelection.splice(itemIndex, 1);
    } else {
      newSelection.push(itemId);
    }
    setSelectedItems(newSelection);
  };

  const handleSelectAll = () => {
    const allItemIds = clothes.map((item) => item._id);
    setSelectedItems(
      allItemIds.length === selectedItems.length ? [] : allItemIds
    );
  };

  const handleSelectDelete = async () => {
    const response = await axios.post(`/cloth/delete`, {
      ids: selectedItems,
    });
    if (response.status === 200) {
      toast.success(response.data.message);
    }
    fetchAgain();
    setSelectedItems([]);
  };

  const filteredClothes = clothes
    ? clothes
        .filter((item) => {
          switch (filterOption) {
            case "alphabetical":
              return true;
            case "price":
              return true;
            case "tshirts":
              return item.category === "tshirts";
            case "designer-clothes":
              return item.category === "designer-clothes";
            default:
              return true;
          }
        })
        .sort((a, b) => {
          switch (filterOption) {
            case "alphabetical":
              return a.name.localeCompare(b.name);
            case "price":
              return a.cost - b.cost;
            default:
              return 0;
          }
        })
    : [];

  const fetchAgain = async () => {
    const response = await axios.get(`/cloth/getAllCloth`);
    setClothes(response.data.clothes);
  };

  const handleAddGood = () => {
    openModal({
      component: AddGoodForm,
      props: {
        closeModal,
        fetchAgain,
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
        fetchAgain,
      },
      title: "Изменение товара",
    });
  };

  useEffect(() => {
    (async function fetchCloth() {
      const response = await axios.get(`/cloth/getAllCloth`);
      setClothes(response.data.clothes);
    })();
  }, []);

  return (
    <Box display="flex" flexDirection="column" className="gap-4">
      <Box
        className="flex justify-between items-center"
        flexDirection={!isDesktop && "column-reverse"}
      >
        <Box
          className={`flex justify-center gap-4 py-4 ${isDesktop && "pr-4"}`}
          sx={isDesktop ? { width: "50%" } : {}}
        >
          <Button onClick={handleAddGood} fullWidth>
            Добавить
          </Button>
          <Button
            fullWidth
            disabled={selectedItems.length === 0}
            onClick={handleSelectDelete}
          >
            Удалить выбранные ({selectedItems.length})
          </Button>
          <Button variant="outlined" onClick={handleSelectAll}>
            Выбрать все
          </Button>
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
      <Box className="flex mb-4">
        <Select
          value={filterOption}
          onChange={(e) => setFilterOption(e.target.value)}
          label="Сортировать по"
        >
          {filterOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </Box>
      <Box className="grid grid-cols-3 max-xl:grid-cols-2 max-lg:grid-cols-1 gap-4">
        {clothes ? (
          filteredClothes.map((item, i) => {
            {
              return (
                <div key={i}>
                  {" "}
                  <Box
                    className="hover:shadow hover:cursor-pointer"
                    onClick={() => handleEditCloth(item)}
                  >
                    <ItemCard
                      key={i}
                      itemId={item._id}
                      sizes={item.sizes}
                      selectedItems={selectedItems}
                      name={item.name}
                      pictures={item.pictures}
                      cost={item.cost}
                      colors={item.colors}
                      handleItemSelection={handleItemSelection}
                    />
                  </Box>
                </div>
              );
            }
          })
        ) : (
          <>Товары не найдены</>
        )}
      </Box>
    </Box>
  );
};
