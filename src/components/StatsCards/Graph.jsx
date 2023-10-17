import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import Chart from "chart.js/auto";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  canvas: {
    width: "100%",
    height: "100%",
  },
}));

const CardWithBarGraph = () => {
  const classes = useStyles();

  React.useEffect(() => {
    const ctx = document.getElementById("earningsChart").getContext("2d");
    const existingChart = Chart.getChart(ctx); // Get existing chart
    if (existingChart) {
      existingChart.destroy(); // Destroy existing chart
    }
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: "Earnings",
            data: [
              2000, 2200, 1800, 2500, 2300, 2700, 2000, 2200, 1800, 2500, 2300,
              2700,
            ],
            backgroundColor: "#1976D2",
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }, []);

  return (
    <Card className={classes.card}>
      <CardContent>
        <canvas id="earningsChart" className={classes.canvas}></canvas>
        <Typography variant="h6" component="div">
          Earnings
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardWithBarGraph;
