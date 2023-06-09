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

// Bot Trading Config React base styles
import borders from "assets/theme/base/borders";
import colors from "assets/theme/base/colors";

// Bot Trading Config React helper functions
import pxToRem from "assets/theme/functions/pxToRem";

const { borderWidth } = borders;
const { light } = colors;

const tableCell = {
  styleOverrides: {
    root: {
      padding: `${pxToRem(12)} ${pxToRem(16)}`,
      borderBottom: `${borderWidth[1]} solid ${light.main}`,
    },
  },
};

export default tableCell;
