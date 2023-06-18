import { Select, Button } from "antd";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { useMaterialUIController } from "context";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { groupBy } from "lodash";
import { useEffect, useRef, useState } from "react";
import { createGlobalStyle } from "styled-components";
import exporting from "highcharts/modules/exporting";

exporting(Highcharts);

const { Option } = Select;
const listSymbols = ["Quý", "Năm"];
let childrenInterval = [];
for (let i = 0; i < listSymbols.length; i++) {
  childrenInterval.push(<Option key={listSymbols[i]}>{listSymbols[i]}</Option>);
}

const BarChart = () => {
  const [controller] = useMaterialUIController();
  const [CSVData, setCSVData] = useState([]);
  const [xAxis, setXAxis] = useState([]);
  const [xAxisYear, setXAxisYear] = useState([]);
  const [series, setSeries] = useState([]);
  const [seriesYear, setSeriesYear] = useState([]);
  const color = useRef("#B28221");
  const type = useRef("");
  const value = useRef(0);
  const { darkMode } = controller;
  const GlobalStyles = createGlobalStyle`
  .ant-select-item-option-content {
    color: ${darkMode ? "white" : "black"} !important;
  }
  .ant-btn {
    background-color: ${darkMode ? "#1A2035" : "#1A2035"} !important;
  }
  .ant-select-selection-item {
    color: ${darkMode ? "white" : "black"} !important;
    padding-top: 3px !important;
    padding-left: 25px !important;
  }
  .select-interval .ant-select-selection-item {
    border: none !important;
}
.ant-select-selector {
    height: 40px !important;
    font-size: 16px !important;
    font-weight: 400 !important;
    color: ${darkMode ? "white" : "black"} !important;
}
`;
  const [width, setWidth] = useState(window.innerWidth);
  const [listSymbol, setListSymbol] = useState("Quý");
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  const onChangeInterval = (data) => {
    setListSymbol(data);
  };
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);
  const isMobile = width <= 1190;
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
          year: `${row[3].replace("\r", "")}-${row[2]}`,
          value: Math.round(+row[1] / 1000000000),
          name: row[0],
          quy: row[3],
          onlyYear: row[2],
        };
      });
      //list quaters
      const quy = [...new Set(mapData.map((item) => item.year))];
      let listSeries = [...new Set(mapData.map((item) => item.name))];
      const listData = groupBy(mapData, "name");
      const listDataMap = listSeries.map((item) => {
        return {
          name: item,
          data: quy.map((quy) => {
            return listData[item].find((item) => item.year === quy)?.value || 0;
          }),
        };
      });
      const year = [...new Set(mapData.map((item) => item.onlyYear))];
      const listDataMapYear = listSeries.map((item) => {
        return {
          name: item,
          data: year.map((year) => {
            return listData[item].find((item) => item.onlyYear === year)?.value || 0;
          }),
        };
      });
      setSeries(listDataMap);
      setSeriesYear(listDataMapYear);
      setXAxis(quy);
      setXAxisYear(year);
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
    chart: {
      type: "column",
      backgroundColor: "#1A2035",
      style: {
        color: "#fff",
      },
    },
    title: {
      text: "Bảng cân đối kế toán",
      style: {
        color: "#fff",
      },
    },
    xAxis: {
      categories: listSymbol === "Quý" ? xAxis : xAxisYear,
      crosshair: {
        width: 1,
        color: "#CCCCCC",
      },
      labels: {
        style: {
          color: "#fff",
        },
      },
    },
    borderWidth: 0,
    yAxis: {
      title: false,
      min: 0,
      stackLabels: {
        enabled: false,
      },
      crosshair: {
        width: 1,
        color: "#CCCCCC",
        snap: false,
      },
      labels: {
        style: {
          color: "#fff",
        },
      },
      gridLineColor: "#323546",
      gridLineDashStyle: "dot",
    },
    legend: {
      align: "right",
      verticalAlign: "middle",
      layout: "vertical",
      itemStyle: {
        color: "#fff",
      },
      labels: {
        style: {
          color: "#fff",
        },
      },
    },
    plotOptions: {
      column: {
        stacking: "normal",
        dataLabels: {
          enabled: false,
        },
        borderRadius: 0,
        borderWidth: 0,
      },
    },
    series: listSymbol === "Quý" ? series : seriesYear,
    credits: {
      enabled: false,
    },
    colors: [
      "#B28221",
      "#43F3FF",
      "#597BF8",
      "#30DF9D",
      "#FF36F5",
      "#FFD097",
      "#EF5E76",
      "#FFF92F",
    ],
    tooltip: {
      positioner: function (width, height, point) {
        return {
          x: point.plotX,
          y: point.plotY - 50,
        };
      },
      borderWidth: 0,
      backgroundColor: "rgba(255,255,255,0)",
      borderRadius: 0,
      shadow: false,
      useHTML: true,
      percentageDecimals: 2,
      formatter: function () {
        return `<span data-z-index="1" style="position: absolute; font-family: Inter, &quot;Nunito Sans&quot;, Lexend, &quot;Noto Sans&quot;, sans-serif; font-size: 12px; white-space: nowrap; color: rgb(255, 255, 255); cursor: default; margin-left: 0px; margin-top: 0px; left: 0px; top: 0px; display: block;"><ul style="list-style: none; font-size: 0.7rem; padding: 0; margin: 0; border-radius: 6px; overflow: hidden; box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.24)"> <li style="color: #FFFFFF; padding: 0.5rem 0.8rem; background: rgba(128, 128, 128, 0.7)"><b>${
          this.x
        }</b></li><li style="color: #FFFFFF; padding: 0.5rem 0.8rem; background: rgba(50, 50, 50, 0.5)"><span style="background: ${
          this.color
        }; width: 0.7rem; height: 0.7rem; border-radius: 50%; display: inline-block"></span> <span>${
          this.series.name
        }</span>: <b>${
          this.point.y?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") || 0
        }  Tỷ VNĐ (${this.percentage.toFixed(2)}%)</b></li></ul></span>`;
      },
    },
    exporting: {
      chartOptions: {
        plotOptions: {
          series: {
            dataLabels: {
              enabled: true,
            },
          },
        },
      },
    },
  };

  return (
    <DashboardLayout>
      <GlobalStyles />
      <DashboardNavbar />
      <MDTypography variant="button" color="text" fontWeight="regular">
        Lọc báo cáo
      </MDTypography>
      <div style={{ display: "flex" }}>
        <MDBox style={{ marginTop: 9 }} pt={2} px={2}>
          <Select
            dropdownStyle={{
              backgroundColor: darkMode ? "#202940" : "#fff",
              textColor: "red",
            }}
            className={darkMode ? "select-interval" : ""}
            //   allowClear
            showSearch={false}
            style={{
              width: isMobile ? "122px" : "122px",
              //   marginLeft: isMobile ? "60px" : "61px",
              //   marginRight: isMobile ? "0" : "36px",
            }}
            defaultValue={"Quý"}
            value={listSymbol}
            onChange={onChangeInterval}
          >
            {childrenInterval}
          </Select>
        </MDBox>
      </div>

      <MDBox mt={6} mb={3} style={{ backgroundColor: "#1A2035", padding: 20 }}>
        <HighchartsReact highcharts={Highcharts} options={config} />
      </MDBox>
    </DashboardLayout>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  body: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "30px",
    marginRight: "30px",
    alignItems: "center",
  },
  topBar: {
    width: "100%",
    paddingTop: "20px",
    backgroundColor: "#fff",
    marginBottom: "20px",
    display: "flex",
    justifyContent: "center",
  },
  topBarText: {
    color: "white",
    fontSize: "24px",
    fontWeight: "bold",
  },
  row: {
    marginTop: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  gioBayUTC: {
    fontSize: "18px",
    fontWeight: "bold",
    // color: "#fff",
    marginRight: "20px",
    lineHeight: "18px",
    width: "136px",
  },
  pairText: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#fff",
    marginRight: "20px",
    lineHeight: "18px",
    marginBottom: "20px",
  },
  timePicker: {
    marginBottom: "30px",
    display: "flex",
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
  },
  textButton: {
    color: "#E0E0E0",
    // fontFamily: "san-serif",
  },
  textButtonActive: {
    color: "#fff",
    // fontFamily: "san-serif",
  },
  buttonActive: {
    borderColor: "#fff",
    backgroundColor: "white",
    borderWidth: "1px",
    width: "120px",
    marginTop: "10px",
    marginBottom: "30px",
  },
  interval: {
    marginTop: "20px",
  },
  numberInput: {
    marginLeft: "20px",
  },
};

export default BarChart;
