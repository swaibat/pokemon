import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export function Chart(datatest: any) {
  const data = {
    labels: datatest.data.map((stat: { stat: { name: any; }; })=>stat.stat.name),
    datasets: [
      {
        label: "Base Stat",
        data: datatest.data.map((stat: { base_stat: any; })=>stat.base_stat),
        backgroundColor: '#FFCB05',
        borderColor: '#3C5AA6',
        borderWidth: 3,
      },
    ],
  };
  return <Bar height={250} data={data} />;
}
