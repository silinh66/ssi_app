import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import {
  Box,
  Card,
  Collapse,
  Divider,
  Drawer,
  FormControlLabel,
  Grid,
  Icon,
  InputBase,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import list from "assets/theme/components/list";
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { useState } from "react";

function InputSearch(props) {
  return (
    <Paper
      style={{ backgroundColor: "#1D1F2A", paddingTop: 10, paddingBottom: 4 }}
      component="form"
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

const NhomChiBaoKyThuat = () => {
  const [open, setOpen] = useState(true);
  const [listTieuChiPicked, setListTieuChiPicked] = useState([]);
  console.log("listTieuChiPicked: ", listTieuChiPicked);
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
    if (listTieuChiPicked.includes(state)) {
      //remove state from listTieuChiPicked
      let newListTieuChiPicked = listTieuChiPicked.filter((item) => item !== state);
      setListTieuChiPicked(newListTieuChiPicked);
    } else {
      let newListTieuChiPicked = [...listTieuChiPicked, state];
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
    <MDBox style={{ overflowY: "scroll", height: "260px" }}>
      {listTieuChi.map((item, index) => {
        let isOpen = listOpenTieuChi.includes(item.label);
        let numberOfPicked = listTieuChiPicked.filter((itemPicked) =>
          item.dropdown.includes(itemPicked)
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
                    {listTieuChiPicked.includes(item) ? (
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

  console.log(tieuChiSearch);

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const options = ["≥ lớn hơn hoặc bằng", "= bằng", "< nhỏ hơn", "≤ nhỏ hơn hoặc bằng"];

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
                        {selectedValue === "nhomChiBaoKyThuat" && <NhomChiBaoKyThuat />}
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
                <MDBox>
                  <Paper
                    style={{ backgroundColor: "#1D1F2A", paddingTop: 10, paddingBottom: 4 }}
                    component="form"
                    sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}
                  >
                    <Tooltip title=" Giá so với đường TB - EMA">
                      <MDTypography
                        style={{
                          width: 300,
                          marginLeft: 5,
                          color: "#fff",
                          fontSize: 12,
                          fontWeight: "bold",
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
                        Giá so với đường TB - EMA
                      </MDTypography>
                    </Tooltip>
                    <Paper
                      style={{
                        backgroundColor: "#2D303D",
                        paddingLeft: 5,
                        paddingTop: 5,
                        paddingBottom: 2,
                      }}
                      component="form"
                      // sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}
                    >
                      <MDTypography
                        style={{
                          width: 200,
                          color: "#fff",
                          fontSize: 12,
                          fontWeight: "bold",
                        }}
                        gutterBottom
                      >
                        Giá
                      </MDTypography>
                      <MDTypography
                        style={{
                          width: 200,
                          color: "#fff",
                          fontSize: 12,
                          fontWeight: "bold",
                        }}
                        gutterBottom
                      >
                        &gt;
                      </MDTypography>
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
                        {options.map((option, index) => (
                          <MenuItem
                            key={option}
                            selected={index === selectedIndex}
                            onClick={(event) => handleMenuItemClick(event, index)}
                          >
                            {option}
                          </MenuItem>
                        ))}
                      </Menu>
                    </Paper>

                    <Icon style={{ color: "#747990", fontSize: "4px" }}>clear</Icon>
                  </Paper>
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
