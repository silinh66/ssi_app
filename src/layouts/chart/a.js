import React, { Component, useState, useEffect, useRef } from "react";
import { Chart } from "primereact/chart";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDBox from "components/MDBox";
import Grid from "@mui/material/Grid";
import { Column } from "@ant-design/plots";

const BarChart = () => {
  const [CSVData, setCSVData] = useState([]);
  const color = useRef("#B28221");
  const type = useRef("");
  const value = useRef(0);

  const fetchData = async () => {
    try {
      const response = await fetch("./data.csv");
      const text = await response.text();

      // Parse CSV data
      const rows = text.split("\n");
      let data = rows.map((row) => row.split("\t"));
      data.shift();
      data.pop();
      const mapData = data.map((row, index) => {
        return {
          year: `${row[3]}-${row[2]}`,
          value: Math.round(+row[1] / 100000000000),
          type: row[0],
          quy: row[3],
        };
      });
      setCSVData(mapData);
    } catch (error) {
      console.error("Failed to fetch CSV data:", error);
    }
  };

  useEffect(() => {
    //read data from local csv file at directory assets/data.csv
    fetchData();
  }, []);

  const config = {
    data: CSVData,
    yAxis: {
      grid: {
        line: {
          style: {
            stroke: "#1A2035",
            lineWidth: 2,
            // lineDash: [4, 5],
            strokeOpacity: 0.7,
            shadowColor: "#1A2035",
            shadowBlur: 10,
            shadowOffsetX: 5,
            shadowOffsetY: 5,
            cursor: "pointer",
          },
        },
      },
    },
    isStack: true,
    xField: "year",
    yField: "value",
    seriesField: "type",
    label: false,
    interactions: [
      {
        type: "active-region",
        enable: false,
      },
      {
        type: "element-selected",
      },
      { type: "element-active" },
    ],
    state: {
      // Set the style of the active activation state
      active: {
        animate: false,
        style: {
          lineWidth: 0,
          stroke: "#000",
          lineHeight: 0,
        },
      },
    },
    onReady: (plot) => {
      plot.on("element:mouseover", (...args) => {
        color.current = args[0].data.color;
        type.current = args[0].data.data.type;
        value.current = args[0].data.data.value;
      });
    },
    colorField: "type", // or seriesField in some cases
    color: ["#B28221", "#43F3FF", "#597BF8", "#30DF9D", "#FF36F5", "#FFD097", "#EF5E76", "#FFF92F"],
    tooltip: {
      showTitle: true,
      shared: true,
      showCrosshairs: true,
      crosshairs: {
        type: "y",
        line: {
          style: {
            stroke: "#fff",
            lineWidth: 1,
            // lineDash: [2],
          },
        },
        follow: true,
        text: (type, defaultContent, items) => {
          const item = items[0];
          return {
            name: item.title,
            value: item.value,
          };
        },
      },
      customContent: (title, data) => {
        if (data.length === 0) return null;
        if (title === "undefined-undefined") return null;
        //sum value of all type
        const sumValue = data.reduce((a, b) => a + +b.value, 0);
        let percent = ((value.current / sumValue) * 100).toFixed(2);
        return `<span data-z-index="1" style="position: absolute; font-family: Inter, &quot;Nunito Sans&quot;, Lexend, &quot;Noto Sans&quot;, sans-serif; font-size: 12px; white-space: nowrap; color: rgb(255, 255, 255); cursor: default; margin-left: 0px; margin-top: 0px; left: 0px; top: 0px; display: block;"><ul style="list-style: none; font-size: 0.7rem; padding: 0; margin: 0; border-radius: 6px; overflow: hidden; box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.24)"> 
      <li style="color: #FFFFFF; padding: 0.5rem 0.8rem; background: rgba(128, 128, 128, 0.7)"><b>${title}</b></li><li style="color: #FFFFFF; padding: 0.5rem 0.8rem; background: rgba(50, 50, 50, 0.5)">
        <span style="background: ${color.current}; width: 0.7rem; height: 0.7rem; border-radius: 50%; display: inline-block"></span> 
        <span>${type.current}</span>:
        <b>${value.current}  Tỷ VNĐ (${percent}%)</b>  
      </li></ul></span> `;
      },
    },
    connectedArea: {
      style: (oldStyle, element) => {
        return {
          fill: "#1A2035",
          stroke: "#1A2035",
          //   lineWidth: 0.5,
        };
      },
    },
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mt={6} mb={3} style={{ backgroundColor: "#1A2035", padding: 20 }}>
        <Column {...config} />
      </MDBox>
    </DashboardLayout>
  );
};

export default BarChart;
