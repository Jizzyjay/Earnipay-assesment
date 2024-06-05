import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement } from "chart.js";
import { ChartOptions } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement);

const EmptyInflowOutflow: React.FC = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    scales: {
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
      <Bar data={data} options={options}  />
  );
};

export default EmptyInflowOutflow;