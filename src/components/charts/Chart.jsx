/* eslint-disable react/prop-types */
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import faker from "faker";
import { Box } from "@mui/material";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const options = {
  responsive: true,
  maintainAspectRatio: false,
};

function App({ backgroundColor }) {
  const data = {
    labels: [""],
    datasets: [
      {
        label: "Заказы",
        data: [faker.datatype.number({ min: 1, max: 1000 })],
        backgroundColor: ["rgba(255, 99, 132, 0.5)"],
      },
      {
        label: "Клиенты",
        data: [faker.datatype.number({ min: 1, max: 1000 })],
        backgroundColor: [backgroundColor],
      },
      {
        label: "Продажи",
        data: [faker.datatype.number({ min: 1, max: 1000 })],
        backgroundColor: ["rgba(255, 99, 132, 0.5)"],
      },
    ],
  };

  return (
    <Box className="flex flex-col justify-end">
      <Bar options={options} data={data} />
    </Box>
  );
}

export default App;
