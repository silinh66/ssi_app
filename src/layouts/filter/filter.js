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
  Paper,
  Radio,
  RadioGroup,
  Toolbar,
  Typography,
} from "@mui/material";
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
  const [isPickGiaSoDuongTbEma, setIsPickGiaSoDuongTbEma] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const handlePick = (state, setState) => {
    setState(!state);
  };
  return (
    <MDBox style={{ overflowY: "scroll", height: "260px" }}>
      <ListItemButton
        style={{
          display: "flex",
          padding: 0,
          paddingLeft: 3,
          paddingRight: 3,
          backgroundColor: "#1b1e2b",
          justifyContent: "space-between",
        }}
        onClick={handleClick}
      >
        <MDTypography variant="h5" style={{ fontSize: 12, fontWeight: "bold" }}>
          THEO ĐƯỜNG TB HÀM MŨ (EMA) <span style={{ color: "#9197B1" }}>(0/4)</span>
        </MDTypography>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <ListItemButton
          style={{
            display: "flex",
            padding: 0,
            paddingLeft: 3,
            paddingRight: 3,
            backgroundColor: "#1b1e2b",
            justifyContent: "space-between",
          }}
          onClick={() => handlePick(isPickGiaSoDuongTbEma, setIsPickGiaSoDuongTbEma)}
        >
          <MDTypography
            style={{ marginLeft: 5, color: "#9197B1", fontSize: 12, fontWeight: "bold" }}
            gutterBottom
          >
            Giá so với đường TB - EMA
          </MDTypography>
          {isPickGiaSoDuongTbEma ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
      </Collapse>
      <MDTypography variant="h5" gutterBottom>
        Nhóm chỉ báo kỹ thuật
      </MDTypography>
      <MDTypography variant="h5" gutterBottom>
        Nhóm chỉ báo kỹ thuật
      </MDTypography>
      <MDTypography variant="h5" gutterBottom>
        Nhóm chỉ báo kỹ thuật
      </MDTypography>
      <MDTypography variant="h5" gutterBottom>
        Nhóm chỉ báo kỹ thuật
      </MDTypography>
      <MDTypography variant="h5" gutterBottom>
        Nhóm chỉ báo kỹ thuật
      </MDTypography>
      <MDTypography variant="h5" gutterBottom>
        Nhóm chỉ báo kỹ thuật
      </MDTypography>
      <MDTypography variant="h5" gutterBottom>
        Nhóm chỉ báo kỹ thuật
      </MDTypography>
      <MDTypography variant="h5" gutterBottom>
        Nhóm chỉ báo kỹ thuật
      </MDTypography>
      <MDTypography variant="h5" gutterBottom>
        Nhóm chỉ báo kỹ thuật
      </MDTypography>
      <MDTypography variant="h5" gutterBottom>
        Nhóm chỉ báo kỹ thuật
      </MDTypography>
      <MDTypography variant="h5" gutterBottom>
        Nhóm chỉ báo kỹ thuật
      </MDTypography>
      <MDTypography variant="h5" gutterBottom>
        Nhóm chỉ báo kỹ thuật
      </MDTypography>
      <MDTypography variant="h5" gutterBottom>
        Nhóm chỉ báo kỹ thuật
      </MDTypography>
      <MDTypography variant="h5" gutterBottom>
        Nhóm chỉ báo kỹ thuật
      </MDTypography>
      <MDTypography variant="h5" gutterBottom>
        Nhóm chỉ báo kỹ thuật
      </MDTypography>
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
