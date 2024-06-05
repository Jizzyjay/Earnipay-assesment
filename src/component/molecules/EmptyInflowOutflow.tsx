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
      y: {
        beginAtZero: true,
        grid: {
          display: true,
        //   drawBorder: false,
          drawTicks: false,
          color: function(context) {
            // Draw grid line only for y=0
            return context.tick.value === 0 ? '#E5E7EB' : 'transparent';
          },
        },
        ticks: {
          callback: function (value: number | string) {
            if (typeof value === "number") {
              return value === 0 ? "0" : "";
            }
            return "";
          },
        },
      },
      x: {
        grid: {
          display: false, // Hide vertical lines
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

export default EmptyInflowOutflow;