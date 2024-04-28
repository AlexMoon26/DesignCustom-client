import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/footer/Footer";
import { Box } from "@mui/material";

export const LayoutMain = () => {
  return (
    <Box minHeight={"100vh"}>
      <Header />
      <Box className={`pt-20 min-h-[75vh]`}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};
