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

function App({ backgroundColor, data }) {
  return (
    <Box className="flex flex-col justify-end">
      <Bar options={options} data={data} />
    </Box>
  );
}

export default App;
