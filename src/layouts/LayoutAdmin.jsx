import { Outlet } from "react-router-dom";
import { SideBar } from "../components/SideBar/SideBar";

export const LayoutAdmin = () => {
  const user = JSON.parse(localStorage.getItem("userInfo"));
  if (user?.role !== "admin") {
    return <>Доступ запрещен</>;
  }
  return (
    <>
      <SideBar />
      <div
        id="background-element"
        className="p-8 md:ml-60 min-h-screen bg-gray-200"
      >
        <Outlet />
      </div>
    </>
  );
};
