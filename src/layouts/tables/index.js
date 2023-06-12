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

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import socketIOClient from "socket.io-client";
import { isEqual, map, set } from "lodash";

// Bot Trading Config React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Bot Trading Config React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";
import { useEffect, useState } from "react";
import { ENDPOINT } from "constants/endpoint";
import { TextField } from "@mui/material";
import { Button, Select } from "antd";
import { createGlobalStyle } from "styled-components";
import { useMaterialUIController } from "context";
import { listPair } from "constants/listPair";
import { apiUrl } from "constants/api";
import MDSnackbar from "components/MDSnackbar";
import axios from "axios";
import MDButton from "components/MDButton";

const { Option } = Select;
const listSymbols = listPair;
let childrenInterval = [];
for (let i = 0; i < listSymbols.length; i++) {
  childrenInterval.push(<Option key={listSymbols[i]}>{listSymbols[i]}</Option>);
}

function Tables() {
  const [controller] = useMaterialUIController();
  // const { columns, rows } = authorsTableData();
  const { columns: pColumns, rows: pRows } = projectsTableData();
  const [data, setData] = useState([]);
  const [dataChangeUpdate, setDataChangeUpdate] = useState([]);
  const [dataRealtime, setDataRealtime] = useState([]);
  const { darkMode } = controller;
  const GlobalStyles = createGlobalStyle`
  .ant-select-item-option-content {
    color: ${darkMode ? "white" : "black"} !important;
  }
  .ant-btn {
    background-color: ${darkMode ? "#344767" : "#344767"} !important;
  }
`;

  const [width, setWidth] = useState(window.innerWidth);
  const [listSymbol, setListSymbol] = useState([]);
  const [taiSanRong, setTaiSanRong] = useState("");
  const [taiSanRongSource, setTaiSanRongSource] = useState("");
  const [ruiRo, setRuiRo] = useState(0);
  const [ruiRoSource, setRuiRoSource] = useState(0);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  useEffect(() => {
    onRefresh();
  }, []);

  const onRefresh = () => {
    axios.get(`${apiUrl}/input_quan_tri_von`).then((res) => {
      console.log("res", res.data.data);
      if (res.data.data === null) return;
      if (!!res.data.data.tai_san_rong) {
        setTaiSanRong(res.data.data.tai_san_rong);
        setTaiSanRongSource(res.data.data.tai_san_rong);
      }
      if (!!res.data.data.rui_ro) {
        setRuiRo(res.data.data.rui_ro);
        setRuiRoSource(res.data.data.rui_ro);
      }
    });
    axios.get(`${apiUrl}/quan_tri_von`).then((res) => {
      console.log("res", res.data.data);
      if (res.data.data === null) return;
      setData(res.data.data);
      setDataChangeUpdate(res.data.data);
    });
    setListSymbol([]);
    setEditingKey("");
  };

  const onChangeInterval = (data) => {
    setListSymbol(data);
  };

  const isMobile = width <= 1190;

  // useEffect(() => {
  //   const socket = socketIOClient(ENDPOINT);
  //   socket.on("FromAPI", (newData) => {
  //     if (isEqual(dataRealtime, newData)) return;
  //     // setDataRealtime(newData);
  //   });

  //   return () => socket.disconnect();
  // }, []);

  const [message, setMessage] = useState("");

  const [successSB, setSuccessSB] = useState(false);
  const [warningSB, setWarningSB] = useState(false);
  const [editingKey, setEditingKey] = useState("");
  const openSuccessSB = () => setSuccessSB(true);
  const closeSuccessSB = () => setSuccessSB(false);

  const openWarningSB = () => setWarningSB(true);
  const closeWarningSB = () => setWarningSB(false);

  const renderSuccessSB = (
    <MDSnackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      color="success"
      icon="check"
      title="Thông báo"
      content={message}
      dateTime="1 second ago"
      open={successSB}
      onClose={closeSuccessSB}
      close={closeSuccessSB}
      bgWhite
    />
  );

  const renderWarningSB = (
    <MDSnackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      color="warning"
      icon="warning"
      title="Thông báo"
      content={message}
      dateTime="1 second ago"
      open={warningSB}
      onClose={closeWarningSB}
      close={closeWarningSB}
      bgWhite
    />
  );

  const onUpdate = () => {
    if (!taiSanRong) {
      setMessage("Tài sản ròng phải lớn hơn 0");
      openWarningSB();
      return;
    }
    axios
      .post(`${apiUrl}/input_quan_tri_von`, {
        data: {
          tai_san_rong: taiSanRong,
          rui_ro: ruiRo,
        },
      })
      .then((res) => {
        if (!res.error) {
          setMessage("Cập nhật thông số thành công");
          openSuccessSB();
          onRefresh();
        }
      });
  };

  const addSymbol = () => {
    console.log("listSymbol: ", listSymbol);
    if (listSymbol.length === 0) {
      setMessage("Vui lòng chọn mã");
      openWarningSB();
      return;
    }
    const filteredArray = listSymbol.filter((value) =>
      data.map((item) => item.symbol).includes(value)
    );
    console.log("filteredArray: ", filteredArray);
    if (filteredArray.length > 0) {
      setMessage(`Mã (${filteredArray}) đã tồn tại`);
      openWarningSB();
      return;
    }
    axios
      .post(`${apiUrl}/quan_tri_von`, {
        data: listSymbol,
      })
      .then((res) => {
        if (!res.error) {
          setMessage("Thêm mã thành công");
          openSuccessSB();
          onRefresh();
        }
      });
  };

  const _isEditing = (record) => {
    return record.id === editingKey;
  };

  const _onChangeEditingKey = (record) => {
    console.log("record: ", record);
    // const newData = map(dataChangeUpdate, (item, index) => {
    //   if (item.id === this.state.id) {
    //     return {
    //       ...this.state.dataSource[index],
    //     };
    //   } else {
    //     return { ...item };
    //   }
    // });
    setEditingKey(record.id);
  };

  const onSubmitUpdate = (record) => {
    console.log("record: ", record);
    console.log("taiSanRong: ", taiSanRong);
    console.log("ruiRo: ", ruiRo);
    console.log("record.price: ", record.price);
    console.log("record.stoploss: ", record.stoploss);
    let khoi_luong = (+taiSanRong * +ruiRo) / 100 / (+record.price - +record.stoploss);
    khoi_luong = Math.floor(khoi_luong);
    let gia_von = +record.price * khoi_luong;
    console.log("khoi_luong: ", khoi_luong);
    axios
      .put(`${apiUrl}/quan_tri_von`, {
        data: {
          symbol: record.symbol,
          gia_von,
          stoploss: record.stoploss,
          khoi_luong,
          price: record.price,
          volume: record.volume,
        },
      })
      .then((res) => {
        if (!res.error) {
          setMessage("Cập nhật thông số thành công");
          openSuccessSB();
          onRefresh();
        }
      });
  };

  const onCancelEdit = (record) => {
    const newData = map(dataChangeUpdate, (item, index) => {
      if (item.id === record.id) {
        return {
          ...data[index],
        };
      } else {
        return { ...item };
      }
    });
    setEditingKey("");
    setDataChangeUpdate(newData);
  };

  const onChangeStopLoss = (value, record) => {
    const newData = map(dataChangeUpdate, (item) => {
      if (item.id === record.id) {
        return {
          ...item,
          stoploss: value,
        };
      } else {
        return { ...item };
      }
    });
    setDataChangeUpdate(newData);
  };

  const onDelete = (record) => {
    console.log("record: ", record);
    axios
      .delete(`${apiUrl}/quan_tri_von`, {
        data: {
          symbol: record.symbol,
        },
      })
      .then((res) => {
        if (!res.error) {
          setMessage("Xóa mã thành công");
          openSuccessSB();
          onRefresh();
        }
      });
  };

  const columns = [
    { Header: "STT", accessor: "stt", width: "5%", align: "left" },
    { Header: "Mã", accessor: "symbol", width: "10%", align: "left" },
    { Header: "Giá hiện tại", accessor: "price", align: "left" },
    { Header: "Giá vốn", accessor: "gia_von", align: "left" },
    { Header: "Cắt lỗ", accessor: "stoploss", width: "15%", align: "center" },
    { Header: "Khối lượng", accessor: "volume", align: "center" },
    { Header: "Khối lượng khuyến nghị", width: "12%", accessor: "khoi_luong", align: "center" },
    { Header: "Action", accessor: "action", align: "center" },
  ];

  const rows = dataChangeUpdate.map((item) => {
    let khoi_luong = (+taiSanRongSource * +ruiRoSource) / 100 / (+item.price - +item.stoploss);
    khoi_luong = Math.floor(khoi_luong);
    let gia_von = +item.price * khoi_luong;
    let itemSource = data.find((i) => i.symbol === item.symbol);
    return {
      symbol: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {item.symbol}
        </MDTypography>
      ),
      close: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {item.close}
        </MDTypography>
      ),
      stt: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {item.stt}
        </MDTypography>
      ),
      price: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {item.price ? String(item.price).replace(/(.)(?=(\d{3})+$)/g, "$1,") : ""}
        </MDTypography>
      ),
      volume: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {item.volume ? String(item.volume).replace(/(.)(?=(\d{3})+$)/g, "$1,") : ""}
        </MDTypography>
      ),
      stoploss: _isEditing(item) ? (
        <TextField
          style={{ width: "100px" }}
          // type="number"
          id="outlined-basic"
          label="Value"
          variant="outlined"
          value={item.stoploss ? String(item.stoploss).replace(/(.)(?=(\d{3})+$)/g, "$1,") : ""}
          onChange={(e) => {
            let value = e.target.value.replace(/\,/g, "");
            onChangeStopLoss(value, item);
          }}
        />
      ) : (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {item.stoploss ? item.stoploss.replace(/(.)(?=(\d{3})+$)/g, "$1,") : ""}
        </MDTypography>
      ),
      khoi_luong: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {/* {item.khoi_luong ? String(item.khoi_luong).replace(/(.)(?=(\d{3})+$)/g, "$1,") : ""} */}
          {itemSource.stoploss ? String(khoi_luong).replace(/(.)(?=(\d{3})+$)/g, "$1,") : ""}
        </MDTypography>
      ),
      gia_von: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {/* {item.gia_von ? String(item.gia_von).replace(/(.)(?=(\d{3})+$)/g, "$1,") : ""} */}
          {itemSource.stoploss ? String(gia_von).replace(/(.)(?=(\d{3})+$)/g, "$1,") : ""}
        </MDTypography>
      ),
      action: _isEditing(item) ? (
        <MDBox display="flex" justifyContent="center">
          <MDButton
            style={{ marginRight: 10 }}
            variant="outlined"
            color="success"
            size="small"
            onClick={() => {
              onSubmitUpdate(item);
            }}
          >
            Lưu
          </MDButton>
          <MDButton
            variant="outlined"
            color="warning"
            size="small"
            onClick={() => {
              onCancelEdit(item);
            }}
          >
            Huỷ
          </MDButton>
        </MDBox>
      ) : (
        <MDBox display="flex" justifyContent="center">
          <MDButton
            style={{ marginRight: 10 }}
            variant="outlined"
            color="error"
            size="small"
            onClick={() => {
              onDelete(item);
            }}
          >
            Xoá
          </MDButton>
          <MDButton
            variant="outlined"
            color="success"
            size="small"
            onClick={() => {
              _onChangeEditingKey(item);
            }}
          >
            Sửa
          </MDButton>
        </MDBox>
      ),
    };
  });

  return (
    <DashboardLayout>
      {renderSuccessSB}
      {renderWarningSB}
      <GlobalStyles />
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox pt={2} px={2}>
                <div style={styles.timePicker}>
                  <MDTypography
                    style={{ width: "100px" }}
                    variant="button"
                    color="text"
                    fontWeight="regular"
                  >
                    Tài sản ròng
                  </MDTypography>
                  <TextField
                    style={styles.numberInput}
                    id="outlined-basic"
                    label="Value"
                    variant="outlined"
                    value={taiSanRong ? String(taiSanRong).replace(/(.)(?=(\d{3})+$)/g, "$1,") : ""}
                    onChange={(e) => {
                      let value = e.target.value.replace(/\,/g, "");
                      setTaiSanRong(value);
                    }}
                  />
                </div>
              </MDBox>

              <MDBox pt={2} px={2}>
                <div style={styles.timePicker}>
                  <MDTypography
                    style={{ width: "100px" }}
                    variant="button"
                    color="text"
                    fontWeight="regular"
                  >
                    Rủi ro/lệnh (%)
                  </MDTypography>
                  <TextField
                    style={styles.numberInput}
                    type="number"
                    id="outlined-basic"
                    label="Value"
                    variant="outlined"
                    value={ruiRo}
                    onChange={(e) => {
                      setRuiRo(e.target.value);
                    }}
                  />
                </div>
              </MDBox>
              <MDBox pt={2} px={2}>
                <MDTypography variant="button" color="text" fontWeight="regular">
                  Chọn mã
                </MDTypography>
                <Select
                  dropdownStyle={{
                    backgroundColor: darkMode ? "#202940" : "#fff",
                    textColor: "red",
                  }}
                  className={darkMode ? "select-interval" : ""}
                  mode="multiple"
                  allowClear
                  style={{
                    width: isMobile ? "182px" : "182px",
                    marginLeft: isMobile ? "60px" : "61px",
                    marginRight: isMobile ? "0" : "36px",
                  }}
                  placeholder="Chọn mã"
                  value={listSymbol}
                  onChange={onChangeInterval}
                >
                  {childrenInterval}
                </Select>
              </MDBox>
              <div style={{ display: "flex" }}>
                <MDBox style={{ marginBottom: "20px" }} pt={2} px={2}>
                  <Button
                    size="large"
                    style={styles.buttonActive}
                    type=""
                    onClick={() => {
                      onUpdate();
                    }}
                  >
                    <p style={styles.textButtonActive}>Cập nhật</p>
                  </Button>
                </MDBox>
                <MDBox pt={2} px={2}>
                  <Button
                    size="large"
                    style={styles.buttonActive}
                    type=""
                    onClick={() => {
                      addSymbol();
                    }}
                  >
                    <p style={styles.textButtonActive}>Thêm mã</p>
                  </Button>
                </MDBox>
              </div>

              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Hệ thống quản trị vốn
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
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

export default Tables;
