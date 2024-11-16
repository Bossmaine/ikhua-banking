'use client';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({accounts} : DoughnutChartProps) => {
    const data = {
        datasets: [
            {
                label: 'Banks',
                data: [3350, 2200, 1100],
                backgroundColor: ['#0747B6', '#2265D8', '#2F91FA']
            }
        ],
        labels: ['Bank A', 'Bank B', 'Bank C']
    }
  return (
   <Doughnut data={data} options={{
    responsive: true,
    cutout: '65%',
    plugins: {
        legend: {
            display: false
        }
    }
   }} />
  )
}

export default DoughnutChart
