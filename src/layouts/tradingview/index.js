/**
=========================================================
* Bot Trading Config React - v2.2.0
=========================================================

* Product Page: https://www.youtube.com/@hoangvinhtacdattacvang/product/material-dashboard-react
* Copyright 2023 Vinh Hoàng (https://www.youtube.com/@hoangvinhtacdattacvang)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useEffect, useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Bot Trading Config React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Bot Trading Config React example components
import { Select } from "antd";
import axios from "axios";
import MDSnackbar from "components/MDSnackbar";
import { apiUrl } from "constants/api";
import { useMaterialUIController } from "context";
import Footer from "examples/Footer";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { createGlobalStyle } from "styled-components";
import TradingViewWidget from "./TradingView";
const { Option } = Select;
const listIntervals = ["1m", "5m", "15m", "30m", "1h", "2h", "4h", "12h", "1d", "3d", "1w", "1M"];
let childrenInterval = [];
for (let i = 0; i < listIntervals.length; i++) {
  childrenInterval.push(<Option key={listIntervals[i]}>{listIntervals[i]}</Option>);
}

function TradingView() {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;
  //   console.log("darkMode: ", darkMode);
  const [width, setWidth] = useState(window.innerWidth);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 1190;

  const [state, setState] = useState({
    listPair: ["All"],
    listInterval: ["1m", "5m"],
    Wiliams: true,
    DMI_ADX: true,
    MFI: true,
    RSI: true,
    RSIdown: true,
    Stoch: true,
    MACD: true,
    EMA: true,
    MA: true,
    WiliamsValue: 0,
    DMI_ADXValue: 0,
    MFIValue: 0,
    RSIValue: 0,
    RSIdownValue: 0,
    StochValue: 0,
    MACDValue: 0,
    EMAValue: 0,
    MAValue: 0,
  });
  const GlobalStyles = createGlobalStyle`
  .ant-select-item-option-content {
    color: ${darkMode ? "white" : "black"} !important;
  }
  .ant-btn {
    background-color: ${darkMode ? "#344767" : "#344767"} !important;
    margin-bottom: 20px !important;
  }
`;

  useEffect(() => {
    axios.get(`${apiUrl}/getConfig`).then((res) => {
      //   console.log("res", res.data.data);
      setState(res.data.data);
    });
  }, []);

  const onChangeValue = (field, checked) => {
    setState((prevState) => ({ ...prevState, [field]: checked }));
    // console.log(`${field} switch to ${checked}`);
  };

  const onChangeInterval = (data) => {
    setState((prevState) => ({ ...prevState, listInterval: data }));
  };
  const [successSB, setSuccessSB] = useState(false);
  const openSuccessSB = () => setSuccessSB(true);
  const closeSuccessSB = () => setSuccessSB(false);

  const renderSuccessSB = (
    <MDSnackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      color="success"
      icon="check"
      title="Thông báo"
      content="Cập nhật thông số bot thành công"
      dateTime="1 second ago"
      open={successSB}
      onClose={closeSuccessSB}
      close={closeSuccessSB}
      bgWhite
    />
  );

  const onSave = () => {
    // console.log("Result: ", state);
    const body = { data: state };
    axios.post(`${apiUrl}/config`, body).then((res) => {
      if (!res.error) {
        // console.log("success");
        openSuccessSB();
      }
    });
  };

  const onChangeValueWithInput = (field, value) => {
    if (isNaN(value)) return;
    if (value === "") value = 0;
    setState((prevState) => ({ ...prevState, [field]: value }));
  };

  // Render function is replaced by the return statement
  const {
    listPair,
    listInterval,
    WiliamsValue,
    MFIValue,
    RSIValue,
    MAValue,
    RSIdownValue,
    StochValue,
    EMAValue,
    MACDValue,
    Wiliams,
    DMI_ADX,
    MFI,
    RSI,
    RSIdown,
    Stoch,
    MACD,
    EMA,
    MA,
  } = state;

  return (
    <DashboardLayout>
      {renderSuccessSB}
      <GlobalStyles />
      <DashboardNavbar />
      <TradingViewWidget />

      {/* <MDBox mt={6} mb={3}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} lg={8}>
            <Card style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <MDBox p={2}>
                <MDTypography variant="h5">Cài đặt thông số bot</MDTypography>
              </MDBox>
              
            </Card>
          </Grid>
        </Grid>
      </MDBox> */}
      <Footer />
    </DashboardLayout>
  );
}

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
    marginTop: "20px",
  },
  interval: {
    marginTop: "20px",
  },
  numberInput: {
    marginLeft: "20px",
  },
};

export default TradingView;
