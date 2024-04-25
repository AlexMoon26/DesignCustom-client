/* eslint-disable react/prop-types */
import { Box, IconButton, Input, Modal, Typography } from "@mui/material";
import dayjs from "dayjs";
import { goods } from "../../data/data";
import { ItemCard } from "../ItemCard";
import { useScreenWidth } from "../../hooks/useScreenWidth.jsx";
import { Close } from "@mui/icons-material";

export const ModalOrder = ({ open, handleModal }) => {
  const { isDesktop } = useScreenWidth();

  const BoxStyle = () => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    width: isDesktop ? "500px" : "100vw",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  });
  return (
    <Modal
      open={open}
      onClose={handleModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={BoxStyle}></Box>
    </Modal>
  );
};
