import { Box, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export function OrdersPage() {
  const router = useNavigate();
  return (
    <div
      className={`flex w-full text-xs md:text-sm xxl:text-lg border-l-[50px] rounded-l shadow relative border-l-gray-400 p-5 rounded bg-white items-center gap-5`}
      role="list"
    >
      Заказов еще не создано!
      <Button
        onClick={() => router("/", { state: { targetElement: "products" } })}
      >
        Выбрать товар
      </Button>
    </div>
  );
}
