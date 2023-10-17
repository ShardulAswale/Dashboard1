import React, { useEffect } from 'react';
import { Card, CardContent } from '@mui/material';
import Chart from 'chart.js/auto';

const DynamicDoughnutChart = ({ labels, data, colors }) => {
  useEffect(() => {
    const canvasElement = document.getElementById('dynamicDoughnutChart');
    const ctx = canvasElement.getContext('2d');

    new Chart(ctx, {
      type: 'doughnut',
      plugins: [
        {
          beforeDraw: function (chart) {
            const datasetMeta = chart.getDatasetMeta(0);
            const innerRadius = datasetMeta.controller.innerRadius;
            const outerRadius = datasetMeta.controller.outerRadius;
            const heightOfItem = outerRadius - innerRadius;

            const countOfData = chart.getDatasetMeta(0).data.length;
            const additionalRadius = Math.floor(heightOfItem / countOfData);

            const weightsMap = datasetMeta.data
              .map((v) => v.circumference)
              .sort((a, b) => a - b)
              .reduce((a, c, ci) => {
                a.set(c, ci + 1);
                return a;
              }, new Map());

            datasetMeta.data.forEach((dataItem) => {
              const weight = weightsMap.get(dataItem.circumference);
              dataItem.outerRadius = innerRadius + additionalRadius * weight;
            });
          },
        },
      ],
      data: {
        labels: labels,
        datasets: [
          {
            backgroundColor: colors,
            data: data,
            borderWidth: 0,
          },
        ],
      },
      options: {
        layout: {
          padding: 10,
        },
        plugins: {
          legend: false,
          datalabels: {
            display: false,
          },
        },
        maintainAspectRatio: false,
        responsive: true,
      },
    });

    // Draw text in the center
    const centerX = canvasElement.width / 2;
    const centerY = canvasElement.height / 2;

    ctx.fillStyle = '#000'; // Set the color of the text
    ctx.font = '20px Arial'; // Set the font size and type

    const text = 'Center Text'; // Your text here
    const textWidth = ctx.measureText(text).width;

    ctx.fillText(text, centerX - textWidth / 2, centerY);
  }, [labels, data, colors]);

  return (
    <Card>
      <CardContent>
        <canvas id="dynamicDoughnutChart"></canvas>
      </CardContent>
    </Card>
  );
};

export default DynamicDoughnutChart;
