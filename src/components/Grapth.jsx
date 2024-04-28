import Chart from "./charts/Chart";
export const Grapth = ({ dataItems = [1, 2, 4] }) => {
  const data = {
    labels: ["Заказы", "Клиенты", "Продажи"], // Array of labels
    datasets: [
      {
        label: "кол-во", // Label for the dataset
        data: dataItems, // Array of data values
        backgroundColor: "#A60783", // Background color for data points
      },
    ],
  };
  return <Chart backgroundColor={"#A60783"} data={data} />;
};
