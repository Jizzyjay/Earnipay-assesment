import React, { useEffect } from "react";
import Chart from "chart.js/auto";

const TotalExpensesChart: React.FC = () => {
  useEffect(() => {
    const ctx = document.getElementById("myDoughnutChart") as HTMLCanvasElement;
    if (!ctx) return;

    const myDoughnutChart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: [
          "Payroll 23%",
          "Transfer 21%",
          "Electricity 29%",
          "Airtime 5.5%",
          "Cable Tv 9%",
          "Data 4.21%",
        ],
        datasets: [
          {
            label: "Expenses",
            data: [0.23, 0.055, 0.09, 0.0421, 0.21, 0.29],
            backgroundColor: [
              "#00535C", // Payroll
              "#D6DADB", // Airtime
              "#9DDB63", // Cable
              "#F49D1B", // Data
              "#72B3B8", // Transfer
              "#DC2626", // Electricity
            ],
            borderWidth: 0,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: true,
            position: "bottom",
            labels: {
              boxWidth: 5,
              boxHeight: 5,
              padding: 10,
              borderRadius: 50,
              font: {
                size: 12,
              },
            },
          },
        },
        responsive: true,
        maintainAspectRatio: false,
        cutout: "80%",
      },
    });

    return () => {
      myDoughnutChart.destroy();
    };
  }, []);

  return (
    <div
      style={{
        textAlign: "center",
        margin: "auto",
        width: "80%",
        height: "400px",
      }}
    >
      <div 
      // className="absolute md:bottom-[10rem] lg:bottom-[5rem] md:right-[8.5rem] lg:right-[8.5rem]"
      >
        <h2 className="text-[0.95rem] lg:text-base">Total Expenses</h2>
        <p className="text-xs lg:text-base">N780,000</p>
      </div>

      <div style={{ position: "relative", width: "85%", height: "85%" }}>
        <canvas
          id="myDoughnutChart"
          style={{ position: "absolute", left: 0, top: 0 }}
        />
      </div>
    </div>
  );
};

export default TotalExpensesChart;
