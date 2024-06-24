import React, { useEffect } from "react";
import Chart from "chart.js/auto";

const TotalExpensesChart: React.FC = () => {
  useEffect(() => {
    const ctx = document.getElementById("myDoughnutChart") as HTMLCanvasElement;
    if (!ctx) return;

    const drawCenterTextPlugin = {
      id: "drawCenterText",
      afterDraw(chart: any) {
        const { ctx } = chart;
        ctx.save();
        const centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
        const centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;

        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.font = "bold 12px Arial"; // Reduced font size for "Total Expenses"
        ctx.fillStyle = "#000";
        ctx.fillText("Total Expenses", centerX, centerY - 10);

        ctx.font = "bold 25px Arial";
        ctx.fillText("N780,000", centerX, centerY + 15);
        ctx.restore();
      },
    };

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
            borderWidth: 5,
            borderRadius: 10,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: true,
            position: "bottom",
            labels: {
              boxWidth: 2,
              boxHeight: 2,
              padding: 10,
              borderRadius: 50,
              font: {
                size: 10,
              },
            },
          },
        },
        responsive: true,
        maintainAspectRatio: false,
        cutout: "80%",
      },
      plugins: [drawCenterTextPlugin],
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
        width: "70%",
        height: "350px",
      }}
    >
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
