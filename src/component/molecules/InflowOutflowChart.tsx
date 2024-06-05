import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";
import { ChartOptions } from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip
);

const InflowOutflowChart: React.FC = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Inflow",
        data: [2500, 3200, 3500, 1500, 2300, 3600, 3600],
        backgroundColor: "#398D94",
        barThickness: 7,
      },
      {
        label: "Outflow",
        data: [3500, 2000, 3500, 1700, 1500, 1200, 1200],
        backgroundColor: "#E5E7EB",
        barThickness: 7,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        grid: {},
        ticks: {
          callback: function (value: number | string) {
            if (typeof value === "number") {
              return value === 0 ? "0" : value / 1000 + "k";
            }
            return value;
          },
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          align: "start",
        },
      },
    },
  };

  return (
    <div className="bg-white p-2">
      <Bar data={data} options={options} />
    </div>
  );
};

export default InflowOutflowChart;
