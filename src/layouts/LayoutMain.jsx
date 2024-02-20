import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/footer/Footer";
import { Box } from "@mui/material";
import { useScreenWidth } from "../hooks/useScreenWidth";

export const LayoutMain = () => {
  const { isDesktop } = useScreenWidth();
  return (
    <Box minHeight={"100vh"} className="">
      <Header />
      <Box className={`mt-16 ${isDesktop && "pt-20"}`}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};
