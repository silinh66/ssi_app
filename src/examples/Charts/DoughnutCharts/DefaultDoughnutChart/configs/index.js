/**
=========================================================
* Bot Trading Config  React - v2.2.0
=========================================================

* Product Page: https://www.youtube.com/@hoangvinhtacdattacvang/product/material-dashboard-react
* Copyright 2023 Vinh Hoàng (https://www.youtube.com/@hoangvinhtacdattacvang)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/* eslint-disable no-dupe-keys */
// Bot Trading Config React base styles
import colors from "assets/theme/base/colors";

const { gradients, dark } = colors;

function configs(labels, datasets, cutout = 60) {
  const backgroundColors = [];

  if (datasets.backgroundColors) {
    datasets.backgroundColors.forEach((color) => {
      if (gradients[color]) {
        if (color === "info") {
          backgroundColors.push(gradients.info.main);
        } else {
          backgroundColors.push(gradients[color].state);
        }
      } else {
        backgroundColors.push(dark.main);
      }
    });
  } else {
    backgroundColors.push(dark.main);
  }

  return {
    data: {
      labels,
      datasets: [
        {
          label: datasets.label,
          weight: 9,
          cutout,
          tension: 0.9,
          pointRadius: 2,
          borderWidth: 2,
          backgroundColor: backgroundColors,
          fill: false,
          data: datasets.data,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      interaction: {
        intersect: false,
        mode: "index",
      },
    },
  };
}

export default configs;
