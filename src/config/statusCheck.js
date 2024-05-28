export const getOrderStatusText = (status) => {
  switch (status) {
    case "pending":
      return "В ожидании";
    case "accepted":
      return "Принят";
    case "confirmed":
      return "Подтвержден";
    case "delivering":
      return "Доставляется";
    case "received":
      return "Получен";
    default:
      return "";
  }
};
