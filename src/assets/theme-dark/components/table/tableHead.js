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
import borders from "assets/theme-dark/base/borders";

// Bot Trading Config React helper functions
import pxToRem from "assets/theme-dark/functions/pxToRem";

const { borderRadius } = borders;

const tableHead = {
  styleOverrides: {
    root: {
      display: "block",
      padding: `${pxToRem(16)} ${pxToRem(16)} 0  ${pxToRem(16)}`,
      borderRadius: `${borderRadius.xl} ${borderRadius.xl} 0 0`,
    },
  },
};

export default tableHead;
