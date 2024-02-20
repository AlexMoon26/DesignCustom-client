import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/footer/Footer";
import { Box } from "@mui/material";
import { useScreenWidth } from "../hooks/useScreenWidth";

export const LayoutMain = () => {
  return (
    <Box minHeight={"100vh"} className="">
      <Header />
      <Box className={`pt-20 min-h-[75vh]`}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};
