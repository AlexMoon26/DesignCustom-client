/* eslint-disable react/prop-types */
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import ru from 'dayjs/locale/ru';


dayjs.extend(localizedFormat);
dayjs.locale(ru);

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Заказы',
        },
    },
};

const labels = [dayjs().format('MMMM')];

function App({ backgroundColor }) {
    const data = {
        labels,
        datasets: [
            {
                label: 'Заказы',
                data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Клиенты',
                data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                backgroundColor: backgroundColor,
            },
            {
                label: 'Продажи',
                data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };

    return <Bar options={options} data={data} />;
}

export default App;
