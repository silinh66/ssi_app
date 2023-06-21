import styled from "@emotion/styled";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Card,
  Collapse,
  FormControlLabel,
  Grid,
  Icon,
  InputBase,
  ListItemButton,
  Menu,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Tooltip,
} from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { set } from "lodash";
import { useState } from "react";

function InputSearch(props) {
  return (
    <Paper
      style={{ backgroundColor: "#1D1F2A", paddingTop: 10, paddingBottom: 4 }}
      sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}
    >
      <InputBase
        {...props}
        sx={{ ml: 1, flex: 1 }}
        placeholder="Nhập tiêu chí muốn tìm..."
        style={{ fontSize: "12px", color: "#fff" }}
      />
      <Icon style={{ color: "#747990", fontSize: "4px" }}>search</Icon>
    </Paper>
  );
}

function BpRadio(props) {
  return (
    <Radio
      style={{ fontSize: "10px" }}
      //   disableRipple
      color="default"
      checkedIcon={
        <div style={{ color: "green" }}>
          <Icon style={{ color: "#fff", fontSize: "4px", marginTop: 8 }}>circle</Icon>
        </div>
      }
      icon={
        <div style={{ color: "red" }}>
          <Icon style={{ color: "#747990", fontSize: "4px", marginTop: 8 }}>circle</Icon>
        </div>
      }
      {...props}
    />
  );
}

const NhomThongDung = () => {
  return (
    <MDTypography variant="h5" gutterBottom>
      Nhóm thông dụng
    </MDTypography>
  );
};

const NhomTangTruong = () => {
  return (
    <MDTypography variant="h5" gutterBottom>
      Nhóm tăng trưởng
    </MDTypography>
  );
};

const NhomTiSuatTaiChinh = () => {
  return (
    <MDTypography variant="h5" gutterBottom>
      Nhóm tỉ suất tài chính
    </MDTypography>
  );
};

const BienDongGia = () => {
  return (
    <MDTypography variant="h5" gutterBottom>
      Biến động giá
    </MDTypography>
  );
};

const NhomCoBan = () => {
  return (
    <MDTypography variant="h5" gutterBottom>
      Nhóm cơ bản
    </MDTypography>
  );
};

const NhomCoTuc = () => {
  return (
    <MDTypography variant="h5" gutterBottom>
      Nhóm cổ tức
    </MDTypography>
  );
};

const NhomChiBaoKyThuat = ({ listTieuChiPicked, setListTieuChiPicked }) => {
  const [listOpenTieuChi, setListOpenTieuChi] = useState([]);
  const [isHover, setIsHover] = useState([]);
  const handleClick = (state) => {
    if (listOpenTieuChi.includes(state)) {
      //remove state from listOpenTieuChi
      let newListOpenTieuChi = listOpenTieuChi.filter((item) => item !== state);
      setListOpenTieuChi(newListOpenTieuChi);
    } else {
      let newListOpenTieuChi = [...listOpenTieuChi, state];
      setListOpenTieuChi(newListOpenTieuChi);
    }
  };
  const handlePick = (state) => {
    if (listTieuChiPicked.map((item) => item?.label || null).includes(state)) {
      //remove state from listTieuChiPicked
      let newListTieuChiPicked = listTieuChiPicked.filter((item) => item.label !== state);
      setListTieuChiPicked(newListTieuChiPicked);
    } else {
      let mapListTieuChiPicked = listTieuChiPicked.map((item) => {
        if (item.label === "Giá so với đường TB - EMA") {
          return {
            label: state,
            leftIndexValue: "",
            leftIndexList: ["Giá"],
            compare: 0,
            compareList: [
              "> lớn hơn",
              "≥ lớn hơn hoặc bằng",
              "= bằng",
              "< nhỏ hơn",
              "≤ nhỏ hơn hoặc bằng",
            ],
            rightIndexValue: 0,
            rightIndexList: ["EMA(10)", "EMA(15)", "EMA(20)", "EMA(50)", "EMA(100)", "EMA(200)"],
            interval: 0,
            intervalList: ["1 ngày", "1 tuần"],
          };
        }
        if (item.label === "Giá cắt đường TB - EMA") {
          return {
            label: state,
            leftIndexValue: "",
            leftIndexList: ["Giá"],
            compare: 0,
            compareList: ["Cắt xuống dưới", "Cắt lên trên"],
            rightIndexValue: 0,
            rightIndexList: ["EMA(10)", "EMA(15)", "EMA(20)", "EMA(50)", "EMA(100)", "EMA(200)"],
            interval: 0,
            intervalList: ["1 ngày", "1 tuần"],
          };
        }
        return item;
      });
      let newListTieuChiPicked = [
        ...listTieuChiPicked,
        {
          label: state,
          leftIndexValue: "",
          leftIndexList: ["Giá"],
          compare: 0,
          compareList: [
            "> lớn hơn",
            "≥ lớn hơn hoặc bằng",
            "= bằng",
            "< nhỏ hơn",
            "≤ nhỏ hơn hoặc bằng",
          ],
          rightIndexValue: 0,
          rightIndexList: ["EMA(10)", "EMA(15)", "EMA(20)", "EMA(50)", "EMA(100)", "EMA(200)"],
          interval: 0,
          intervalList: ["1 ngày", "1 tuần"],
        },
      ];
      setListTieuChiPicked(newListTieuChiPicked);
    }
  };

  const listTieuChi = [
    {
      dropdown: [
        "Giá so với đường TB - EMA",
        "Giá cắt đường TB - EMA",
        "So sánh 2 đường TB - EMA",
        "Giao cắt 2 đường TB - EMA",
      ],
      label: "THEO ĐƯỜNG TB HÀM MŨ (EMA)",
    },
    {
      dropdown: [
        "Giá so với đường TB - SMA",
        "So sánh 2 đường TB - SMA",
        "Giao cắt 2 đường TB - SMA",
        "Giao cắt đường TB - SMA",
      ],
      label: "THEO ĐƯỜNG TB ĐƠN GIẢN (SMA)",
    },
    {
      dropdown: [
        "Giá so với Tenkan(9)",
        "Giá so với Kijun(26)",
        "Giá so với Cloud(52)",
        "Giá giao cắt với Tenkan(9)",
        "Giá giao cắt với Kijun(26)",
        "Giá giao cắt với Cloud(52)",
        "Giao cắt thành phần Ichimoku",
      ],
      label: "ICHIMOKU",
    },
    {
      dropdown: [
        "MACD so với Signal",
        "MACD cắt với Signal",
        "Trạng thái giá trị của MACD",
        "Histogram tăng liên tục",
        "Histogram giảm liên tục",
      ],
      label: "MACD (9,12,26)",
    },
    {
      dropdown: ["Giá trị RSI14", "RSI14 so với các vùng giá trị", "RSI14 và vùng Quá mua/Quá bán"],
      label: "RSI14",
    },
    {
      dropdown: [
        "Giá tăng vượt Biên trên",
        "Giá giảm qua Biên trên",
        "Giá giảm thủng Biên dưới",
        "Giá tăng qua Biên dưới",
        "Giá duy trì vượt ngoài Biên trên Bollinger",
        "Giá duy trì ngoài Biên dưới Bollinger",
      ],
      label: "BOLLINGER BAND (20,2)",
    },
    {
      dropdown: ["Giá trị MFI(20)", "MFI(20) và vùng Quá mua/Quá bán"],
      label: "CHỈ BÁO MFI(20)",
    },
    {
      dropdown: ["Stochastic và vùng Quá mua/Quá bán", "Stochastic giao cắt nhau"],
      label: "CHỈ BÁO STOCHASTIC (13,5,5)",
    },
    {
      dropdown: ["Giá trị MCDX (Banker)", "Giá trị MCDX (Hot money)", "Biến động MCDX"],
      label: "CHỈ BÁO MCDX",
    },
    {
      dropdown: [
        "Giá trị ADX(14)",
        "Giá trị -DI(14)",
        "Giá trị +DI(14)",
        "Giao cắt nhóm ADX",
        "ADX và ngưỡng giá trị",
      ],
      label: "CHỈ BÁO ADX(14)",
    },
    {
      dropdown: ["Giá so với PSar", "Khoảng cách giá và PSar", "PSar đảo chiều"],
      label: "CHỈ BÁO PARABOLIC SAR - PSAR",
    },
  ];
  return (
    <MDBox style={{ overflowY: "scroll", height: "250px" }}>
      {listTieuChi.map((item, index) => {
        let isOpen = listOpenTieuChi.includes(item.label);
        let numberOfPicked = listTieuChiPicked.filter((itemPicked) =>
          item.dropdown.includes(itemPicked.label)
        ).length;
        return (
          <div key={index} style={{ marginBottom: 4 }}>
            <ListItemButton
              style={{
                display: "flex",
                padding: 0,
                paddingLeft: 3,
                paddingRight: 3,
                backgroundColor: "#1b1e2b",
                justifyContent: "space-between",
              }}
              onClick={() => handleClick(item.label)}
            >
              <MDTypography variant="h5" style={{ fontSize: 12, fontWeight: "bold" }}>
                {item.label}{" "}
                <span style={{ color: "#9197B1" }}>
                  ({numberOfPicked}/{item.dropdown.length})
                </span>
              </MDTypography>
              {isOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={isOpen} timeout="auto" unmountOnExit>
              {item.dropdown.map((item, index) => {
                return (
                  <ListItemButton
                    key={index}
                    style={{
                      display: "flex",
                      padding: 0,
                      paddingLeft: 3,
                      paddingRight: 3,
                      backgroundColor: "#1b1e2b",
                      justifyContent: "space-between",
                    }}
                    onClick={() => handlePick(item)}
                  >
                    <MDTypography
                      style={{ marginLeft: 5, color: "#9197B1", fontSize: 12, fontWeight: "bold" }}
                      gutterBottom
                    >
                      {item}
                    </MDTypography>
                    {listTieuChiPicked.map((item) => item?.label || null).includes(item) ? (
                      <Icon
                        onMouseEnter={() => {
                          setIsHover([item, true]);
                        }}
                        onMouseLeave={() => {
                          setIsHover([item, false]);
                        }}
                        style={{
                          color: isHover[1] && isHover[0] === item ? "#9197B1" : "#856DFC",
                          fontSize: "2px",
                        }}
                      >
                        {isHover[1] && isHover[0] === item ? "clear" : "check"}
                      </Icon>
                    ) : (
                      <Icon style={{ color: "#856DFC", fontSize: "2px" }}>layers</Icon>
                    )}
                  </ListItemButton>
                );
              })}
            </Collapse>
          </div>
        );
      })}
    </MDBox>
  );
};

const Filter = () => {
  const [selectedValue, setSelectedValue] = useState("nhomThongDung");
  const [tieuChiSearch, setTieuChiSearch] = useState("");
  const [listTieuChiPicked, setListTieuChiPicked] = useState([]);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  const listChiTieu = [
    {
      value: "nhomThongDung",
      label: "Nhóm thông dụng",
    },
    {
      value: "nhomTangTruong",
      label: "Nhóm tăng trưởng",
    },
    {
      value: "nhomTiSuatTaiChinh",
      label: "Nhóm tỉ suất tài chính",
    },
    {
      value: "bienDongGia",
      label: "Biến động Giá & KL",
    },
    {
      value: "nhomCoBan",
      label: "Nhóm cơ bản",
    },
    {
      value: "nhomCoTuc",
      label: "Nhóm cổ tức",
    },
    {
      value: "nhomChiBaoKyThuat",
      label: "Nhóm chỉ báo kỹ thuật",
    },
  ];

  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElLeft, setAnchorElLeft] = useState(null);
  const [anchorElRight, setAnchorElRight] = useState(null);
  const [anchorElInterval, setAnchorElInterval] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);
  const openLeft = Boolean(anchorElLeft);
  const openRight = Boolean(anchorElRight);
  const openInterval = Boolean(anchorElInterval);
  let [currentChangeTieuChi, setCurrentChangeTieuChi] = useState({});
  let [currentChangeTieuChiLeft, setCurrentChangeTieuChiLeft] = useState({});
  let [currentChangeTieuChiRight, setCurrentChangeTieuChiRight] = useState({});
  let [currentChangeTieuChiInterval, setCurrentChangeTieuChiInterval] = useState({});
  const [isHoverClear, setIsHoverClear] = useState([]);
  const [isHoverLeft, setIsHoverLeft] = useState([]);
  const [isHoverRight, setIsHoverRight] = useState([]);
  const [isHoverInterval, setIsHoverInterval] = useState([]);
  const handleClickListItem = (event, item) => {
    setAnchorEl(event.currentTarget);
    setCurrentChangeTieuChi(item);
  };
  const handleClickListItemLeft = (event, item) => {
    setAnchorElLeft(event.currentTarget);
    setCurrentChangeTieuChiLeft(item);
  };
  const handleClickListItemRight = (event, item) => {
    setAnchorElRight(event.currentTarget);
    setCurrentChangeTieuChiRight(item);
  };
  const handleClickListItemInterval = (event, item) => {
    setAnchorElInterval(event.currentTarget);
    setCurrentChangeTieuChiInterval(item);
  };
  const handleChangeSelectIndex = (tieuChiPicked, value, indexType) => {
    let newListTieuChiPicked = listTieuChiPicked.map((item, index) => {
      if (item.label === tieuChiPicked) {
        return {
          ...item,
          [indexType]: value,
        };
      } else {
        return item;
      }
    });
    setListTieuChiPicked(newListTieuChiPicked);
    setAnchorEl(null);
    setAnchorElLeft(null);
    setAnchorElRight(null);
    setAnchorElInterval(null);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCloseLeft = () => {
    setAnchorElLeft(null);
  };
  const handleCloseRight = () => {
    setAnchorElRight(null);
  };
  const handleCloseInterval = () => {
    setAnchorElInterval(null);
  };

  const handleClearTieuChi = (state) => {
    let newListTieuChiPicked = listTieuChiPicked.filter((item) => item.label !== state);
    setListTieuChiPicked(newListTieuChiPicked);
  };

  const optionsCompare = [
    "> lớn hơn",
    "≥ lớn hơn hoặc bằng",
    "= bằng",
    "< nhỏ hơn",
    "≤ nhỏ hơn hoặc bằng",
  ];
  const optionsENA = ["EMA(10)", "EMA(15)", "EMA(20)", "EMA(50)", "EMA(100)", "EMA(200)"];

  const IconRotate = styled(Icon)({
    "& > .material-icons-round": {
      transform: "rotate(90deg)",
    },
  });

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={6}>
              <Card style={{ padding: 10 }}>
                <MDBox display="flex" justifyContent="space-between" alignItems="center" p={1}>
                  <MDBox>
                    <MDTypography variant="h6" gutterBottom>
                      Chọn chỉ tiêu
                    </MDTypography>
                  </MDBox>
                </MDBox>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6} lg={5}>
                    <RadioGroup defaultValue="a">
                      {listChiTieu.map((item, index) => (
                        <FormControlLabel
                          key={item.value}
                          style={styles.radioButton(selectedValue === item.value, index)}
                          value={item.value}
                          control={<BpRadio label={item.label} {...controlProps(item.value)} />}
                          label={item.label}
                        />
                      ))}
                    </RadioGroup>
                  </Grid>
                  <Grid item xs={12} md={6} lg={7}>
                    <MDBox>
                      <InputSearch
                        value={tieuChiSearch}
                        onChange={(e) => {
                          setTieuChiSearch(e.target.value);
                        }}
                      />
                      <MDBox style={{ paddingTop: 12 }}>
                        {selectedValue === "nhomThongDung" && <NhomThongDung />}
                        {selectedValue === "nhomTangTruong" && <NhomTangTruong />}
                        {selectedValue === "nhomTiSuatTaiChinh" && <NhomTiSuatTaiChinh />}
                        {selectedValue === "bienDongGia" && <BienDongGia />}
                        {selectedValue === "nhomCoBan" && <NhomCoBan />}
                        {selectedValue === "nhomCoTuc" && <NhomCoTuc />}
                        {selectedValue === "nhomChiBaoKyThuat" && (
                          <NhomChiBaoKyThuat
                            listTieuChiPicked={listTieuChiPicked}
                            setListTieuChiPicked={setListTieuChiPicked}
                          />
                        )}
                      </MDBox>
                    </MDBox>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Card style={{ padding: 10, height: "370px" }}>
                <MDBox p={1}>
                  <MDTypography variant="h6" gutterBottom>
                    Chọn giá trị
                  </MDTypography>
                </MDBox>
                <MDBox style={{ overflowY: "scroll", height: "280px" }}>
                  {listTieuChiPicked.length > 0 &&
                    listTieuChiPicked.map((item, index) => {
                      return (
                        <Paper
                          key={index}
                          style={{
                            backgroundColor: index % 2 === 0 ? "#1D1F2A" : "#202940",
                            paddingTop: 8,
                            paddingBottom: 8,
                            marginBottom: 4,
                            boxShadow: "none",
                          }}
                          sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}
                        >
                          <Tooltip title={item.label}>
                            <MDTypography
                              style={{
                                width: 250,
                                marginLeft: 5,
                                color: "#fff",
                                fontSize: 12,
                                fontWeight: "bold",
                                marginTop: 4,
                              }}
                              sx={{
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                display: "-webkit-box",
                                WebkitLineClamp: "1",
                                WebkitBoxOrient: "vertical",
                              }}
                              gutterBottom
                            >
                              {item.label}
                            </MDTypography>
                          </Tooltip>
                          <Paper
                            style={{
                              backgroundColor: "#2D303D",
                              paddingLeft: 10,
                              paddingTop: 6,
                              paddingBottom: 0,
                              marginRight: 4,
                              height: 24,
                            }}
                            sx={{
                              p: "2px 4px",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            {/* Left Component */}
                            {item.leftIndexList.length === 1 && (
                              <MDTypography
                                style={{
                                  width: 120,
                                  color: "#fff",
                                  fontSize: 12,
                                  fontWeight: "bold",
                                }}
                                gutterBottom
                              >
                                {item.leftIndexList[0]}
                              </MDTypography>
                            )}

                            {/* Compair Component */}
                            {item.compareList.length > 0 && (
                              <MDTypography
                                style={{
                                  width: 70,
                                  height: 20,
                                  position: "relative",
                                  marginTop: item.compare === 1 || item.compare === 4 ? 8 : 12,
                                  fontSize: item.compare === 1 || item.compare === 4 ? 17 : 20,
                                  marginRight: 8,
                                  color:
                                    item.compare < 2
                                      ? "#3CDC96"
                                      : item.compare > 2
                                      ? "#FF5858"
                                      : "#FFA758",
                                  fontWeight: "bold",
                                  userSelect: "none",
                                  cursor: "pointer",
                                  display: "flex",
                                  justifyContent: "flex-end",
                                  alignItems: "flex-end",
                                }}
                                gutterBottom
                                onClick={(e) => {
                                  handleClickListItem(e, item);
                                }}
                              >
                                {item.compare === 0 && ">"}
                                {item.compare === 1 && "≥"}
                                {item.compare === 2 && "="}
                                {item.compare === 3 && "<"}
                                {item.compare === 4 && "≤"}
                                <MDTypography
                                  component={"span"}
                                  style={{
                                    fontSize: 10,
                                    marginBottom: item.compare === 1 || item.compare === 4 ? 4 : 6,
                                  }}
                                >
                                  <IconRotate style={{ marginLeft: 8 }}>
                                    <Icon style={{ fontSize: 6, color: "#747990" }}>
                                      switch_left
                                    </Icon>
                                  </IconRotate>
                                </MDTypography>
                              </MDTypography>
                            )}

                            {/* Right Component */}

                            {item.rightIndexList.length > 0 && (
                              <MDTypography
                                onMouseEnter={() => {
                                  setIsHoverRight([item, true]);
                                }}
                                onMouseLeave={() => {
                                  setIsHoverRight([item, false]);
                                }}
                                style={{
                                  color:
                                    isHoverRight[1] && isHoverRight[0] === item
                                      ? "#856DFC"
                                      : "#fff",
                                  width: 140,
                                  fontWeight: "bold",
                                  userSelect: "none",
                                  cursor: "pointer",
                                  display: "flex",
                                  justifyContent: "flex-end",
                                  alignItems: "flex-end",
                                  fontSize: 12,
                                }}
                                gutterBottom
                                onClick={(e) => {
                                  handleClickListItemRight(e, item);
                                }}
                              >
                                {item.rightIndexList[item.rightIndexValue]}
                                <MDTypography component={"span"} style={{ fontSize: 10 }}>
                                  <IconRotate style={{ marginBottom: 0, marginLeft: 8 }}>
                                    <Icon style={{ fontSize: 6, color: "#747990" }}>
                                      switch_left
                                    </Icon>
                                  </IconRotate>
                                </MDTypography>
                              </MDTypography>
                            )}

                            {/* Interval Component */}
                            {item.intervalList.length > 0 && (
                              <MDTypography
                                onMouseEnter={() => {
                                  setIsHoverInterval([item, true]);
                                }}
                                onMouseLeave={() => {
                                  setIsHoverInterval([item, false]);
                                }}
                                style={{
                                  color:
                                    isHoverInterval[1] && isHoverInterval[0] === item
                                      ? "#856DFC"
                                      : "#fff",
                                  width: 140,
                                  fontWeight: "bold",
                                  userSelect: "none",
                                  cursor: "pointer",
                                  display: "flex",
                                  justifyContent: "flex-end",
                                  alignItems: "flex-end",
                                  fontSize: 12,
                                }}
                                gutterBottom
                                onClick={(e) => {
                                  handleClickListItemInterval(e, item);
                                }}
                              >
                                {item.intervalList[item.interval]}
                                <MDTypography component={"span"} style={{ fontSize: 10 }}>
                                  <IconRotate style={{ marginBottom: 0, marginLeft: 8 }}>
                                    <Icon style={{ fontSize: 6, color: "#747990" }}>
                                      switch_left
                                    </Icon>
                                  </IconRotate>
                                </MDTypography>
                              </MDTypography>
                            )}
                          </Paper>

                          <Icon
                            onMouseEnter={() => {
                              setIsHoverClear([item, true]);
                            }}
                            onMouseLeave={() => {
                              setIsHoverClear([item, false]);
                            }}
                            style={{
                              color:
                                isHoverClear[1] && isHoverClear[0] === item ? "#856DFC" : "#9197B1",
                              fontSize: "2px",
                              cursor: "pointer",
                            }}
                            onClick={() => {
                              handleClearTieuChi(item.label);
                            }}
                          >
                            clear
                          </Icon>
                        </Paper>
                      );
                    })}
                  {/* Middle Menu Dropdown */}
                  <Menu
                    id="lock-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "lock-button",
                      role: "listbox",
                    }}
                  >
                    {currentChangeTieuChi.compareList?.map((option, index) => {
                      return (
                        <MenuItem
                          key={option}
                          selected={index === currentChangeTieuChi.compare}
                          // onClick={(event) => handleMenuItemClick(event, index)}
                          onClick={(e) => {
                            handleChangeSelectIndex(currentChangeTieuChi.label, index, "compare");
                          }}
                        >
                          {option}
                        </MenuItem>
                      );
                    })}
                  </Menu>
                  {/* Right Menu Dropdown */}
                  <Menu
                    id="lock-menu"
                    anchorEl={anchorElRight}
                    open={openRight}
                    onClose={handleCloseRight}
                    MenuListProps={{
                      "aria-labelledby": "lock-button",
                      role: "listbox",
                    }}
                  >
                    {currentChangeTieuChiRight.rightIndexList?.map((option, index) => {
                      return (
                        <MenuItem
                          key={option}
                          selected={index === currentChangeTieuChiRight.rightIndexValue}
                          // onClick={(event) => handleMenuItemClick(event, index)}
                          onClick={(e) => {
                            handleChangeSelectIndex(
                              currentChangeTieuChiRight.label,
                              index,
                              "rightIndexValue"
                            );
                          }}
                        >
                          {option}
                        </MenuItem>
                      );
                    })}
                  </Menu>
                  {/* Interval Menu Dropdown */}
                  <Menu
                    id="lock-menu"
                    anchorEl={anchorElInterval}
                    open={openInterval}
                    onClose={handleCloseInterval}
                    MenuListProps={{
                      "aria-labelledby": "lock-button",
                      role: "listbox",
                    }}
                  >
                    {currentChangeTieuChiInterval.intervalList?.map((option, index) => {
                      return (
                        <MenuItem
                          key={option}
                          selected={index === currentChangeTieuChiInterval.interval}
                          // onClick={(event) => handleMenuItemClick(event, index)}
                          onClick={(e) => {
                            handleChangeSelectIndex(
                              currentChangeTieuChiInterval.label,
                              index,
                              "interval"
                            );
                          }}
                        >
                          {option}
                        </MenuItem>
                      );
                    })}
                  </Menu>
                </MDBox>
              </Card>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox style={{ marginTop: 10 }}>
          <Card style={{ padding: 10 }}>
            <MDBox p={1}>
              <MDTypography variant="h6" gutterBottom>
                Kết quả lọc
              </MDTypography>
            </MDBox>
          </Card>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
};

const styles = {
  radioButton: (isMatch, index) => {
    return {
      marginLeft: 10,
      backgroundColor: isMatch ? "#856DFC" : index % 2 === 0 ? "#232632" : "#202940",
      borderRadius: 4,
    };
  },
};
export default Filter;
