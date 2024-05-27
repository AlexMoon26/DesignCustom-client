import { Box, Button, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import AddressForm from "../../components/forms/addressForm";
import { ModalContext } from "../../components/modalContext";
import axios from "../../axios";

export default function AddressPage() {
  const [address, setAddress] = useState(null);
  const { openModal, closeModal } = useContext(ModalContext);

  const handleFetchAgain = async () => {
    const response = await axios.get("/auth/me");
    setAddress(response.data.user.address);
  };

  const handleCreateAddress = () => {
    openModal({
      component: AddressForm,
      props: { closeModal, handleFetchAgain },
      title: "Создание платежного адреса",
    });
  };

  const handleEditAddress = () => {
    openModal({
      component: AddressForm,
      props: { closeModal, handleFetchAgain, address },
      title: "Создание платежного адреса",
    });
  };

  useEffect(() => {
    handleFetchAgain();
  }, []);
  return (
    <Box className="flex flex-col gap-5">
      <Typography textAlign="center">
        Данный адрес будет использоваться по умолчанию при оформлении заказов
      </Typography>
      <Typography fontWeight="bold">Платежный адрес</Typography>
      {address ? (
        <div>
          <Box className="flex flex-col w-48 items-left gap-3">
            <Box className="bg-gray-300 size-48 rounded" />
            <Button onClick={handleEditAddress}>Изменить</Button>
          </Box>
        </div>
      ) : (
        <Button onClick={handleCreateAddress}>Добавить</Button>
      )}
    </Box>
  );
}
