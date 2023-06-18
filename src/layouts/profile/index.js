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
import Divider from "@mui/material/Divider";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

// Bot Trading Config React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Bot Trading Config React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import ProfilesList from "examples/Lists/ProfilesList";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";

// Overview page components
import Header from "layouts/profile/components/Header";
import PlatformSettings from "layouts/profile/components/PlatformSettings";

// Data
import profilesListData from "layouts/profile/data/profilesListData";

// Images
import homeDecor1 from "assets/images/project1.jpg";
import homeDecor2 from "assets/images/project2.jpg";
import homeDecor3 from "assets/images/project3.jpg";
import homeDecor4 from "assets/images/home-decor-4.jpeg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

function Overview() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} />
      <Header>
        <MDBox mt={5} mb={3}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6} xl={4}>
              <PlatformSettings />
            </Grid>
            <Grid item xs={12} md={6} xl={4} sx={{ display: "flex" }}>
              <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />
              <ProfileInfoCard
                title="profile information"
                description="Xin chào, tôi là Hoàng Vinh - Cố vấn Đầu tư Bền vững & Quản lý Tài sản. Với sự đam mê và kiến thức chuyên sâu về lĩnh vực này, tôi đã tận hưởng hành trình hỗ trợ khách hàng xây dựng các chiến lược đầu tư bền vững và quản lý tài sản hiệu quả."
                info={{
                  fullName: "Hoàng Vinh",
                  mobile: "0395966899",
                  email: "tacdattacvang.com.vn@gmail.com",
                  location: "VN",
                }}
                social={[
                  {
                    link: "https://www.facebook.com/profile.php?id=100047330494208",
                    icon: <FacebookIcon />,
                    color: "facebook",
                  },
                  {
                    link: "https://www.tiktok.com/@hoangvinhchi",
                    icon: <TwitterIcon />,
                    color: "twitter",
                  },
                  {
                    link: "https://www.youtube.com/@hoangvinhtacdattacvang",
                    icon: <InstagramIcon />,
                    color: "instagram",
                  },
                ]}
                action={{ route: "", tooltip: "Edit Profile" }}
                shadow={false}
              />
              <Divider orientation="vertical" sx={{ mx: 0 }} />
            </Grid>
            <Grid item xs={12} xl={4}>
              <ProfilesList title="conversations" profiles={profilesListData} shadow={false} />
            </Grid>
          </Grid>
        </MDBox>
        <MDBox pt={2} px={2} lineHeight={1.25}>
          <MDTypography variant="h6" fontWeight="medium">
            Dự án
          </MDTypography>
          <MDBox mb={1}>
            <MDTypography variant="button" color="text">
              Cố Vấn Đầu Tư Bền Vững & Quản Lý Tài Sản
            </MDTypography>
          </MDBox>
        </MDBox>
        <MDBox p={2}>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6} xl={3}>
              <DefaultProjectCard
                image={homeDecor1}
                label="project #2"
                title="Đầu tư bền vững"
                description="Fed tăng lãi suất thêm 0,25% trong tháng 2 là kịch bản không có gì mới.
                Kế hoạch năm 2023 này thì vẫn là chịu khó tìm tài sản mà mua 😆🇻🇳."
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
                  color: "info",
                  label: "Xem dự án",
                }}
                authors={[
                  { image: team1, name: "Elena Morison" },
                  { image: team2, name: "Ryan Milly" },
                  { image: team3, name: "Nick Daniel" },
                  { image: team4, name: "Peterson" },
                ]}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <DefaultProjectCard
                image={homeDecor2}
                label="project #1"
                title="Đầu tư bền vững"
                description="Cảm ơn anh chị em đầu tư, nhiều anh chị từ tỉnh xa về Hà Nội.. thật sự em rất trân trọng. 
                Hi vọng buổi cafe nói chuyện có ích và ý nghĩa với mọi người. 
                Chúc anh chị em đầu tư thắng lợi ❤️❤️❤️"
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
                  color: "info",
                  label: "Xem dự án",
                }}
                authors={[
                  { image: team3, name: "Nick Daniel" },
                  { image: team4, name: "Peterson" },
                  { image: team1, name: "Elena Morison" },
                  { image: team2, name: "Ryan Milly" },
                ]}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <DefaultProjectCard
                image={homeDecor3}
                label="project #3"
                title="Đầu tư bền vững"
                description="Dạo này lên văn phòng thấy team chứng khoán mặt sáng hẳn lên 😂😂"
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
                  color: "info",
                  label: "Xem dự án",
                }}
                authors={[
                  { image: team4, name: "Peterson" },
                  { image: team3, name: "Nick Daniel" },
                  { image: team2, name: "Ryan Milly" },
                  { image: team1, name: "Elena Morison" },
                ]}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <DefaultProjectCard
                image={homeDecor4}
                label="project #4"
                title="Đầu tư bền vững"
                description="Cảm ơn anh chị em đầu tư ở Sài Gòn, nhiều anh chị từ Vũng Tàu, Đà Lạt.. chạy lên mình thật sự rất trân trọng. Hi vọng buổi nói chuyện về đầu tư hôm nay có ích và ý nghĩa với mọi người. 
                Chúc anh chị em đầu tư thắng lợi ❤️❤️❤️"
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
                  color: "info",
                  label: "Xem dự án",
                }}
                authors={[
                  { image: team4, name: "Peterson" },
                  { image: team3, name: "Nick Daniel" },
                  { image: team2, name: "Ryan Milly" },
                  { image: team1, name: "Elena Morison" },
                ]}
              />
            </Grid>
          </Grid>
        </MDBox>
      </Header>
      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
