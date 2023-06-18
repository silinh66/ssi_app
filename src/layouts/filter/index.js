import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

const Filter = () => {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <div
        style={{
          position: "relative",
          backgroundColor: "#232632",
          width: "100%",
          height: "932px",
          textAlign: "left",
          fontSize: "10px",
          color: "#fff",
          fontFamily: "Oswald",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          <div
            style={{
              backgroundColor: "#232632",
              display: "flex",
              flexDirection: "row",
              padding: "0px 0px 0px 50px",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              position: "relative",
              zIndex: "1",
            }}
          >
            <img
              style={{
                position: "absolute",
                margin: "0",
                height: "100%",
                top: "0px",
                bottom: "0px",
                left: "0px",
                maxHeight: "100%",
                width: "50px",
                objectFit: "cover",
                zIndex: "0",
              }}
              alt=""
              src="/divappheader--logo@2x.png"
            />
            <div
              style={{
                position: "relative",
                width: "1791px",
                height: "45px",
                zIndex: "1",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "0px",
                  left: "10px",
                  width: "576.95px",
                  height: "45px",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "-12.99px",
                    borderRadius: "10px",
                    borderRight: "3px solid #323643",
                    boxSizing: "border-box",
                    width: "138.81px",
                    height: "51.96px",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "calc(50% - 23.09px)",
                      left: "calc(50% - 57.86px)",
                      width: "135.81px",
                      height: "51.64px",
                    }}
                  >
                    <img
                      style={{
                        position: "absolute",
                        top: "calc(50% - 25.82px)",
                        left: "57.91px",
                        width: "20px",
                        height: "25.82px",
                      }}
                      alt=""
                      src="/iicomaskgroup.svg"
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "34.27px",
                        left: "30px",
                        lineHeight: "15px",
                        textTransform: "uppercase",
                      }}
                    >
                      Tổng hợp thị trường
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "127.82px",
                    borderRadius: "10px",
                    backgroundColor: "#856dfc",
                    borderRight: "3px solid #856dfc",
                    boxSizing: "border-box",
                    width: "104.97px",
                    height: "51.96px",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "calc(50% - 23.09px)",
                      left: "calc(50% - 40.94px)",
                      width: "101.97px",
                      height: "51.64px",
                    }}
                  >
                    <img
                      style={{
                        position: "absolute",
                        top: "calc(50% - 25.82px)",
                        left: "40.99px",
                        width: "20px",
                        height: "25.82px",
                      }}
                      alt=""
                      src="/iicomaskgroup1.svg"
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "34.27px",
                        left: "30px",
                        lineHeight: "15px",
                        textTransform: "uppercase",
                      }}
                    >
                      Lọc cổ phiếu
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "234.79px",
                    borderRadius: "10px",
                    borderRight: "3px solid #323643",
                    boxSizing: "border-box",
                    width: "102.81px",
                    height: "51.96px",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "calc(50% - 23.09px)",
                      left: "calc(50% - 39.86px)",
                      width: "99.81px",
                      height: "51.64px",
                    }}
                  >
                    <img
                      style={{
                        position: "absolute",
                        top: "calc(50% - 25.82px)",
                        left: "39.91px",
                        width: "20px",
                        height: "25.82px",
                      }}
                      alt=""
                      src="/iicomaskgroup2.svg"
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "34.27px",
                        left: "30px",
                        lineHeight: "15px",
                        textTransform: "uppercase",
                      }}
                    >
                      Cổ phiếu A-Z
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "339.6px",
                    borderRadius: "10px",
                    borderRight: "3px solid #323643",
                    boxSizing: "border-box",
                    width: "88.84px",
                    height: "51.96px",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "calc(50% - 23.09px)",
                      left: "calc(50% - 32.87px)",
                      width: "85.85px",
                      height: "51.64px",
                    }}
                  >
                    <img
                      style={{
                        position: "absolute",
                        top: "calc(50% - 25.82px)",
                        left: "32.93px",
                        width: "20px",
                        height: "25.82px",
                      }}
                      alt=""
                      src="/iicomaskgroup3.svg"
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "34.27px",
                        left: "30px",
                        lineHeight: "15px",
                        textTransform: "uppercase",
                      }}
                    >
                      Bảng giá
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: "-2.25px",
                    left: "422.57px",
                    borderRadius: "10px",
                    backgroundColor: "#212121",
                    boxShadow: "-5px 5px 5px rgba(102, 102, 102, 0.2)",
                    borderRight: "3px solid #212121",
                    boxSizing: "border-box",
                    width: "144.67px",
                    height: "57.16px",
                    fontSize: "11px",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "calc(50% - 25.4px)",
                      left: "calc(50% - 59.63px)",
                      width: "141.37px",
                      height: "56.8px",
                    }}
                  >
                    <img
                      style={{
                        position: "absolute",
                        top: "calc(50% - 28.4px)",
                        left: "59.68px",
                        width: "22px",
                        height: "28.4px",
                      }}
                      alt=""
                      src="/iicomaskgroup4.svg"
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "38.5px",
                        left: "33px",
                        lineHeight: "15px",
                        textTransform: "uppercase",
                      }}
                    >
                      Phân tích kỹ thuật
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "calc(50% - 22.5px)",
                  left: "1307.33px",
                  width: "373.67px",
                  height: "45px",
                  overflow: "hidden",
                  fontSize: "14px",
                  color: "#ff5858",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "10px",
                    display: "flex",
                    flexDirection: "row",
                    padding: "0px 0px 0px 14.989999771118164px",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "2px",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      margin: "0",
                      top: "0px",
                      left: "266.66px",
                      borderRadius: "10px",
                      borderRight: "3px solid #323643",
                      boxSizing: "border-box",
                      width: "100px",
                      height: "51.96px",
                      zIndex: "0",
                    }}
                  />
                  <div
                    style={{
                      position: "relative",
                      borderRadius: "10px",
                      borderLeft: "3px solid #323643",
                      boxSizing: "border-box",
                      width: "121.34px",
                      height: "51.96px",
                      zIndex: "1",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: "4.33px",
                        left: "2.18px",
                        width: "98.34px",
                        height: "48.41px",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          top: "21.3px",
                          left: "-5px",
                          width: "103.34px",
                          height: "27.11px",
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            width: "calc(100% - 15px)",
                            top: "calc(50% - 13.56px)",
                            right: "0px",
                            left: "15px",
                            height: "27.11px",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              top: "0px",
                              left: "0px",
                              lineHeight: "21px",
                              fontWeight: "500",
                              display: "flex",
                              alignItems: "center",
                              width: "41.78px",
                              height: "27.11px",
                            }}
                          >
                            -0.16%
                          </div>
                          <div
                            style={{
                              position: "absolute",
                              top: "5.16px",
                              left: "67.76px",
                              fontSize: "11px",
                              lineHeight: "16.5px",
                              fontWeight: "500",
                              textAlign: "right",
                              display: "flex",
                              alignItems: "center",
                              width: "20.78px",
                              height: "20.66px",
                            }}
                          >
                            -1.75
                          </div>
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            top: "calc(50% - 3.87px)",
                            left: "0px",
                            borderTop: "6px solid #ff5858",
                            borderRight: "5px solid #ff5858",
                            borderLeft: "5px solid #ff5858",
                            boxSizing: "border-box",
                            width: "10px",
                            height: "7.75px",
                          }}
                        />
                      </div>
                      <div
                        style={{
                          position: "absolute",
                          top: "0px",
                          left: "5px",
                          width: "103.34px",
                          height: "21.3px",
                          fontSize: "11px",
                          color: "#fff",
                          fontFamily: "Roboto",
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            width: "calc(100% - 52.12px)",
                            top: "calc(50% - 10.65px)",
                            right: "52.12px",
                            left: "0px",
                            height: "21.3px",
                            overflow: "hidden",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              top: "1.29px",
                              left: "0px",
                              lineHeight: "16.5px",
                              textTransform: "uppercase",
                              fontWeight: "500",
                              display: "flex",
                              alignItems: "center",
                              width: "46.42px",
                              height: "16.78px",
                            }}
                          >
                            VNINDEX
                          </div>
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            top: "1.29px",
                            left: "61.22px",
                            lineHeight: "16.5px",
                            color: "#9197b1",
                            textAlign: "right",
                            display: "flex",
                            alignItems: "center",
                            width: "42.32px",
                            height: "16.78px",
                          }}
                        >
                          1,115.22
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      position: "relative",
                      borderRadius: "10px",
                      borderLeft: "3px solid #323643",
                      boxSizing: "border-box",
                      width: "102.56px",
                      height: "51.96px",
                      zIndex: "2",
                      color: "#3cdc96",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: "4.33px",
                        left: "2.18px",
                        width: "79.56px",
                        height: "48.41px",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          width: "calc(100% - 10px)",
                          top: "calc(50% - 2.9px)",
                          right: "0px",
                          left: "10px",
                          height: "27.11px",
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                            lineHeight: "21px",
                            fontWeight: "500",
                            display: "flex",
                            alignItems: "center",
                            width: "38.56px",
                            height: "27.11px",
                          }}
                        >
                          0.04%
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            top: "5.16px",
                            left: "50.02px",
                            fontSize: "11px",
                            lineHeight: "16.5px",
                            fontWeight: "500",
                            textAlign: "right",
                            display: "flex",
                            alignItems: "center",
                            width: "19.74px",
                            height: "20.66px",
                          }}
                        >
                          0.49
                        </div>
                      </div>
                      <div
                        style={{
                          position: "absolute",
                          top: "0px",
                          left: "5px",
                          width: "84.56px",
                          height: "21.3px",
                          fontSize: "11px",
                          color: "#fff",
                          fontFamily: "Roboto",
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            width: "calc(100% - 52.12px)",
                            top: "calc(50% - 10.65px)",
                            right: "52.12px",
                            left: "0px",
                            height: "21.3px",
                            overflow: "hidden",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              top: "1.29px",
                              left: "0px",
                              lineHeight: "16.5px",
                              textTransform: "uppercase",
                              fontWeight: "500",
                              display: "flex",
                              alignItems: "center",
                              width: "27.64px",
                              height: "16.78px",
                            }}
                          >
                            VN30
                          </div>
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            top: "1.29px",
                            left: "42.44px",
                            lineHeight: "16.5px",
                            color: "#9197b1",
                            textAlign: "right",
                            display: "flex",
                            alignItems: "center",
                            width: "42.32px",
                            height: "16.78px",
                          }}
                        >
                          1,109.06
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      position: "relative",
                      borderRadius: "10px",
                      borderLeft: "3px solid #323643",
                      boxSizing: "border-box",
                      width: "120.77px",
                      height: "51.96px",
                      zIndex: "3",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: "4.33px",
                        left: "2.18px",
                        width: "97.77px",
                        height: "48.41px",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          top: "21.3px",
                          left: "-5px",
                          width: "102.77px",
                          height: "27.11px",
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            width: "calc(100% - 15px)",
                            top: "calc(50% - 13.56px)",
                            right: "0px",
                            left: "15px",
                            height: "27.11px",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              top: "0px",
                              left: "0px",
                              lineHeight: "21px",
                              fontWeight: "500",
                              display: "flex",
                              alignItems: "center",
                              width: "41.78px",
                              height: "27.11px",
                            }}
                          >
                            -0.47%
                          </div>
                          <div
                            style={{
                              position: "absolute",
                              top: "5.16px",
                              left: "65.55px",
                              fontSize: "11px",
                              lineHeight: "16.5px",
                              fontWeight: "500",
                              textAlign: "right",
                              display: "flex",
                              alignItems: "center",
                              width: "22.42px",
                              height: "20.66px",
                            }}
                          >
                            -1.09
                          </div>
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            top: "calc(50% - 3.87px)",
                            left: "0px",
                            borderTop: "6px solid #ff5858",
                            borderRight: "5px solid #ff5858",
                            borderLeft: "5px solid #ff5858",
                            boxSizing: "border-box",
                            width: "10px",
                            height: "7.75px",
                          }}
                        />
                      </div>
                      <div
                        style={{
                          position: "absolute",
                          top: "0px",
                          left: "5px",
                          width: "102.77px",
                          height: "21.3px",
                          fontSize: "11px",
                          color: "#fff",
                          fontFamily: "Roboto",
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            width: "calc(100% - 47.77px)",
                            top: "calc(50% - 10.65px)",
                            right: "47.77px",
                            left: "0px",
                            height: "21.3px",
                            overflow: "hidden",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              top: "1.29px",
                              left: "0px",
                              lineHeight: "16.5px",
                              textTransform: "uppercase",
                              fontWeight: "500",
                              display: "flex",
                              alignItems: "center",
                              width: "54.17px",
                              height: "16.78px",
                            }}
                          >
                            HNXINDEX
                          </div>
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            top: "1.29px",
                            left: "65px",
                            lineHeight: "16.5px",
                            color: "#9197b1",
                            textAlign: "right",
                            display: "flex",
                            alignItems: "center",
                            width: "34px",
                            height: "16.78px",
                          }}
                        >
                          228.44
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "calc(50% - 22.5px)",
                  left: "1681px",
                  display: "flex",
                  flexDirection: "row",
                  padding: "12.5px 10px",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "15px",
                }}
              >
                <img
                  style={{ position: "relative", width: "20px", height: "20px" }}
                  alt=""
                  src="/iicoalertmaskgroup.svg"
                />
                <img
                  style={{ position: "relative", width: "20px", height: "20px" }}
                  alt=""
                  src="/iiconotificationmaskgroup.svg"
                />
                <div style={{ position: "relative", width: "20px", height: "20px" }}>
                  <div
                    style={{
                      position: "absolute",
                      top: "calc(50% - 10px)",
                      right: "0px",
                      backgroundColor: "#9197b1",
                      width: "20px",
                      height: "20px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              flex: "1",
              position: "relative",
              width: "1841px",
              zIndex: "0",
              fontSize: "16px",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "0px",
                left: "50px",
                borderRadius: "5px 0px 0px 0px",
                backgroundColor: "#1d1f2a",
                width: "1791px",
                height: "887px",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "10px",
                left: "55px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "10px",
              }}
            >
              <div
                style={{
                  position: "relative",
                  borderRadius: "5px",
                  backgroundColor: "#232632",
                  width: "1771px",
                  height: "55px",
                  fontFamily: "Roboto",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    height: "calc(100% - 30px)",
                    top: "15px",
                    bottom: "15px",
                    left: "10px",
                    borderRadius: "5px 5px 0px 0px",
                    display: "flex",
                    flexDirection: "row",
                    padding: "0.5px 9.139999389648438px 0.5px 10px",
                    boxSizing: "border-box",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    fontFamily: "Oswald",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      lineHeight: "24px",
                      zIndex: "0",
                    }}
                  >
                    Lọc cổ phiếu
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      margin: "0",
                      top: "10.46px",
                      left: "0.29px",
                      borderTop: "4px solid #856dfc",
                      borderRight: "3px solid #856dfc",
                      borderLeft: "3px solid #856dfc",
                      boxSizing: "border-box",
                      width: "6px",
                      height: "4px",
                      transform: " rotate(45deg)",
                      transformOrigin: "0 0",
                      zIndex: "1",
                    }}
                  />
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: "calc(50% - 17.5px)",
                    left: "132.14px",
                    display: "flex",
                    flexDirection: "row",
                    padding: "0px 26.719970703125px 10px 0px",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "10px",
                    fontSize: "11px",
                    color: "#9197b1",
                  }}
                >
                  <div
                    style={{
                      borderRadius: "3px",
                      backgroundColor: "#1d1f2a",
                      border: "1px solid #323643",
                      display: "flex",
                      flexDirection: "row",
                      padding: "1px 14.649993896484375px 1px 1px",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      gap: "10px",
                      color: "#fff",
                    }}
                  >
                    <img
                      style={{
                        position: "relative",
                        width: "35px",
                        height: "33px",
                      }}
                      alt=""
                      src="/divborderright.svg"
                    />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        padding: "3px 0px 0.5px",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        gap: "8px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          padding: "0px 7.270000457763672px 0.5px 0px",
                          alignItems: "flex-start",
                          justifyContent: "flex-start",
                          gap: "8px",
                        }}
                      >
                        <div
                          style={{
                            position: "relative",
                            borderRadius: "2px",
                            backgroundColor: "#856dfc",
                            border: "1px solid #856dfc",
                            boxSizing: "border-box",
                            width: "16px",
                            height: "16px",
                            zIndex: "1",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              top: "2.08px",
                              left: "9.36px",
                              borderRight: "2px solid #fff",
                              borderBottom: "2px solid #fff",
                              boxSizing: "border-box",
                              width: "5.7px",
                              height: "9.14px",
                              transform: " rotate(45deg)",
                              transformOrigin: "0 0",
                            }}
                          />
                        </div>
                        <div
                          style={{
                            position: "relative",
                            lineHeight: "16.5px",
                            zIndex: "0",
                          }}
                        >
                          HSX
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          padding: "0px 7.6699981689453125px 0.5px 0px",
                          alignItems: "flex-start",
                          justifyContent: "flex-start",
                          gap: "8px",
                        }}
                      >
                        <div
                          style={{
                            position: "relative",
                            borderRadius: "2px",
                            backgroundColor: "#856dfc",
                            border: "1px solid #856dfc",
                            boxSizing: "border-box",
                            width: "16px",
                            height: "16px",
                            zIndex: "1",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              top: "2.08px",
                              left: "9.36px",
                              borderRight: "2px solid #fff",
                              borderBottom: "2px solid #fff",
                              boxSizing: "border-box",
                              width: "5.7px",
                              height: "9.14px",
                              transform: " rotate(45deg)",
                              transformOrigin: "0 0",
                            }}
                          />
                        </div>
                        <div
                          style={{
                            position: "relative",
                            lineHeight: "16.5px",
                            zIndex: "0",
                          }}
                        >
                          HNX
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          padding: "0px 7.410003662109375px 0.5px 0px",
                          alignItems: "flex-start",
                          justifyContent: "flex-start",
                          gap: "8px",
                        }}
                      >
                        <div
                          style={{
                            position: "relative",
                            borderRadius: "2px",
                            backgroundColor: "#856dfc",
                            border: "1px solid #856dfc",
                            boxSizing: "border-box",
                            width: "16px",
                            height: "16px",
                            zIndex: "1",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              top: "2.08px",
                              left: "9.36px",
                              borderRight: "2px solid #fff",
                              borderBottom: "2px solid #fff",
                              boxSizing: "border-box",
                              width: "5.7px",
                              height: "9.14px",
                              transform: " rotate(45deg)",
                              transformOrigin: "0 0",
                            }}
                          />
                        </div>
                        <div
                          style={{
                            position: "relative",
                            lineHeight: "16.5px",
                            zIndex: "0",
                          }}
                        >
                          UPCOM
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      position: "relative",
                      borderRadius: "3px",
                      backgroundColor: "#1d1f2a",
                      border: "1px solid #323643",
                      boxSizing: "border-box",
                      width: "210px",
                      height: "35px",
                    }}
                  >
                    <img
                      style={{
                        position: "absolute",
                        top: "calc(50% - 16.5px)",
                        left: "1px",
                        width: "29.84px",
                        height: "33px",
                      }}
                      alt=""
                      src="/divborderright1.svg"
                    />
                    <div
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "calc(100% - 31.84px)",
                        top: "0px",
                        right: "0px",
                        bottom: "0px",
                        left: "31.84px",
                        borderRadius: "3px",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          top: "calc(50% - 9.25px)",
                          left: "11px",
                          overflow: "hidden",
                          display: "flex",
                          flexDirection: "row",
                          padding: "0px 0px 0.5px",
                          alignItems: "flex-start",
                          justifyContent: "flex-start",
                        }}
                      >
                        <div style={{ position: "relative", lineHeight: "16.5px" }}>
                          Toàn bộ Ngành
                        </div>
                      </div>
                      <div
                        style={{
                          position: "absolute",
                          top: "17.5px",
                          left: "166.16px",
                          borderTop: "3px solid #9197b1",
                          borderRight: "3px solid #9197b1",
                          borderLeft: "3px solid #9197b1",
                          boxSizing: "border-box",
                          width: "6px",
                          height: "3px",
                        }}
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      borderRadius: "3px",
                      backgroundColor: "#1d1f2a",
                      border: "1px solid #323643",
                      display: "flex",
                      flexDirection: "row",
                      padding: "1px 15.050003051757812px 1px 1px",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      gap: "10px",
                    }}
                  >
                    <img
                      style={{
                        position: "relative",
                        width: "35px",
                        height: "33px",
                      }}
                      alt=""
                      src="/divborderright2.svg"
                    />
                    <div
                      style={{
                        position: "relative",
                        width: "118.95px",
                        height: "16.5px",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          top: "-1px",
                          left: "24px",
                          lineHeight: "16.5px",
                        }}
                      >
                        Vượt đỉnh thời đại
                      </div>
                      <div
                        style={{
                          position: "absolute",
                          top: "-1.16px",
                          left: "0px",
                          borderRadius: "2px",
                          border: "1px solid #323643",
                          boxSizing: "border-box",
                          width: "16px",
                          height: "16px",
                        }}
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      borderRadius: "3px",
                      backgroundColor: "#1d1f2a",
                      border: "1px solid #323643",
                      display: "flex",
                      flexDirection: "row",
                      padding: "1px 11px 1px 1px",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      gap: "10px",
                    }}
                  >
                    <img
                      style={{
                        position: "relative",
                        width: "35px",
                        height: "33px",
                      }}
                      alt=""
                      src="/divborderright3.svg"
                    />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        padding: "3px 0px 0.5px",
                        alignItems: "flex-end",
                        justifyContent: "flex-start",
                        gap: "8px",
                      }}
                    >
                      <div
                        style={{
                          position: "relative",
                          width: "146.67px",
                          height: "16.5px",
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            top: "-1px",
                            left: "24px",
                            lineHeight: "16.5px",
                          }}
                        >
                          Có GD 5 phiên gần nhất
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            top: "-1.16px",
                            left: "0px",
                            borderRadius: "2px",
                            border: "1px solid #323643",
                            boxSizing: "border-box",
                            width: "16px",
                            height: "16px",
                          }}
                        />
                      </div>
                      <div
                        style={{
                          position: "relative",
                          width: "152.84px",
                          height: "16.5px",
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            top: "-1px",
                            left: "24px",
                            lineHeight: "16.5px",
                          }}
                        >
                          Có GD 10 phiên gần nhất
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            top: "-1.16px",
                            left: "0px",
                            borderRadius: "2px",
                            border: "1px solid #323643",
                            boxSizing: "border-box",
                            width: "16px",
                            height: "16px",
                          }}
                        />
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          padding: "0px 7.6300048828125px 0.5px 0px",
                          alignItems: "flex-start",
                          justifyContent: "flex-start",
                          gap: "8px",
                          color: "#fff",
                        }}
                      >
                        <div
                          style={{
                            position: "relative",
                            borderRadius: "2px",
                            backgroundColor: "#856dfc",
                            border: "1px solid #856dfc",
                            boxSizing: "border-box",
                            width: "16px",
                            height: "16px",
                            zIndex: "1",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              top: "2.08px",
                              left: "9.36px",
                              borderRight: "2px solid #fff",
                              borderBottom: "2px solid #fff",
                              boxSizing: "border-box",
                              width: "5.7px",
                              height: "9.14px",
                              transform: " rotate(45deg)",
                              transformOrigin: "0 0",
                            }}
                          />
                        </div>
                        <div
                          style={{
                            position: "relative",
                            lineHeight: "16.5px",
                            zIndex: "0",
                          }}
                        >
                          Có BCTC cập nhật thường xuyên
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: "calc(50% - 17.5px)",
                    left: "1396px",
                    display: "flex",
                    flexDirection: "row",
                    padding: "0px 0px 0px 10px",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "10px",
                    textAlign: "center",
                    fontSize: "12px",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      borderRadius: "3px",
                      backgroundColor: "#856dfc",
                      width: "150px",
                      height: "35px",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: "10.5px",
                        left: "19.06px",
                        fontWeight: "500",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "77.06px",
                        height: "14px",
                      }}
                    >
                      Gợi ý từ Fialda
                    </div>
                    <img
                      style={{
                        position: "absolute",
                        height: "100%",
                        top: "0px",
                        right: "0px",
                        bottom: "0px",
                        borderRadius: "3px",
                        maxHeight: "100%",
                        width: "35px",
                      }}
                      alt=""
                      src="/spanh2d38f7e547.svg"
                    />
                  </div>
                  <div
                    style={{
                      position: "relative",
                      borderRadius: "3px",
                      backgroundColor: "#47b3ff",
                      width: "150px",
                      height: "35px",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: "10.5px",
                        left: "18.03px",
                        fontWeight: "500",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "79.12px",
                        height: "14px",
                      }}
                    >
                      Bộ lọc của bạn
                    </div>
                    <img
                      style={{
                        position: "absolute",
                        height: "100%",
                        top: "0px",
                        right: "0px",
                        bottom: "0px",
                        borderRadius: "3px",
                        maxHeight: "100%",
                        width: "35px",
                      }}
                      alt=""
                      src="/spanh2da266c8c9.svg"
                    />
                  </div>
                  <img
                    style={{
                      position: "relative",
                      borderRadius: "3px",
                      width: "35px",
                      height: "35px",
                    }}
                    alt=""
                    src="/button.svg"
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  padding: "0px 5px",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "10px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}
                >
                  <div
                    style={{
                      borderRadius: "5px 5px 0px 0px",
                      backgroundColor: "#232632",
                      display: "flex",
                      flexDirection: "row",
                      padding: "5.5px 9.169998168945312px 5.5px 10px",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        zIndex: "0",
                      }}
                    >
                      <div style={{ position: "relative", lineHeight: "24px" }}>Chọn chỉ tiêu</div>
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        margin: "0",
                        top: "35px",
                        left: "0px",
                        backgroundColor: "#232632",
                        width: "96.17px",
                        height: "10px",
                        zIndex: "1",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        margin: "0",
                        top: "20.46px",
                        left: "0.29px",
                        borderTop: "4px solid #856dfc",
                        borderRight: "3px solid #856dfc",
                        borderLeft: "3px solid #856dfc",
                        boxSizing: "border-box",
                        width: "6px",
                        height: "4px",
                        transform: " rotate(45deg)",
                        transformOrigin: "0 0",
                        zIndex: "2",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      borderRadius: "5px",
                      backgroundColor: "#232632",
                      display: "flex",
                      flexDirection: "column",
                      padding: "10px 10px 5px",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      gap: "10px",
                      fontSize: "12px",
                      fontFamily: "Roboto",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        gap: "30px",
                      }}
                    >
                      <div
                        style={{
                          position: "relative",
                          width: "200px",
                          height: "245px",
                          zIndex: "1",
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                            borderRadius: "3px",
                            backgroundColor: "#20232e",
                            width: "200px",
                            height: "35px",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              top: "12.5px",
                              left: "10px",
                              borderRadius: "5px",
                              backgroundColor: "#404457",
                              width: "10px",
                              height: "10px",
                            }}
                          />
                          <div
                            style={{
                              position: "absolute",
                              top: "10.5px",
                              left: "30px",
                              lineHeight: "18px",
                              display: "flex",
                              alignItems: "center",
                              width: "96.14px",
                              height: "14px",
                            }}
                          >
                            Nhóm thông dụng
                          </div>
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            top: "35px",
                            left: "0px",
                            borderRadius: "3px",
                            width: "200px",
                            height: "35px",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              top: "12.5px",
                              left: "10px",
                              borderRadius: "5px",
                              backgroundColor: "#404457",
                              width: "10px",
                              height: "10px",
                            }}
                          />
                          <div
                            style={{
                              position: "absolute",
                              top: "10.5px",
                              left: "30px",
                              lineHeight: "18px",
                              display: "flex",
                              alignItems: "center",
                              width: "98.09px",
                              height: "14px",
                            }}
                          >
                            Nhóm tăng trưởng
                          </div>
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            top: "70px",
                            left: "0px",
                            borderRadius: "3px",
                            backgroundColor: "#20232e",
                            width: "200px",
                            height: "35px",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              top: "12.5px",
                              left: "10px",
                              borderRadius: "5px",
                              backgroundColor: "#404457",
                              width: "10px",
                              height: "10px",
                            }}
                          />
                          <div
                            style={{
                              position: "absolute",
                              top: "10.5px",
                              left: "30px",
                              lineHeight: "18px",
                              display: "flex",
                              alignItems: "center",
                              width: "119.9px",
                              height: "14px",
                            }}
                          >
                            Nhóm tỷ suất tài chính
                          </div>
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            top: "105px",
                            left: "0px",
                            borderRadius: "3px",
                            width: "200px",
                            height: "35px",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              top: "12.5px",
                              left: "10px",
                              borderRadius: "5px",
                              backgroundColor: "#404457",
                              width: "10px",
                              height: "10px",
                            }}
                          />
                          <div
                            style={{
                              position: "absolute",
                              top: "10.5px",
                              left: "30px",
                              lineHeight: "18px",
                              display: "flex",
                              alignItems: "center",
                              width: "101.87px",
                              height: "14px",
                            }}
                          >{`Biến động Giá & KL`}</div>
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            top: "140px",
                            left: "0px",
                            borderRadius: "3px",
                            backgroundColor: "#20232e",
                            width: "200px",
                            height: "35px",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              top: "12.5px",
                              left: "10px",
                              borderRadius: "5px",
                              backgroundColor: "#404457",
                              width: "10px",
                              height: "10px",
                            }}
                          />
                          <div
                            style={{
                              position: "absolute",
                              top: "10.5px",
                              left: "30px",
                              lineHeight: "18px",
                              display: "flex",
                              alignItems: "center",
                              width: "71.68px",
                              height: "14px",
                            }}
                          >
                            Nhóm cơ bản
                          </div>
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            top: "175px",
                            left: "0px",
                            borderRadius: "3px",
                            width: "200px",
                            height: "35px",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              top: "12.5px",
                              left: "10px",
                              borderRadius: "5px",
                              backgroundColor: "#404457",
                              width: "10px",
                              height: "10px",
                            }}
                          />
                          <div
                            style={{
                              position: "absolute",
                              top: "10.5px",
                              left: "30px",
                              lineHeight: "18px",
                              display: "flex",
                              alignItems: "center",
                              width: "69.42px",
                              height: "14px",
                            }}
                          >
                            Nhóm cổ tức
                          </div>
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            top: "210px",
                            left: "0px",
                            borderRadius: "3px",
                            backgroundColor: "#856dfc",
                            width: "200px",
                            height: "35px",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              top: "12.5px",
                              left: "10px",
                              borderRadius: "5px",
                              backgroundColor: "#fff",
                              width: "10px",
                              height: "10px",
                            }}
                          />
                          <div
                            style={{
                              position: "absolute",
                              top: "10.5px",
                              left: "30px",
                              lineHeight: "18px",
                              display: "flex",
                              alignItems: "center",
                              width: "119.92px",
                              height: "14px",
                            }}
                          >
                            Nhóm chỉ báo kỹ thuật
                          </div>
                          <div
                            style={{
                              position: "absolute",
                              top: "12px",
                              left: "175px",
                              borderRadius: "10px",
                              backgroundColor: "#fff",
                              width: "15px",
                              height: "11px",
                              overflow: "hidden",
                              textAlign: "center",
                              fontSize: "9px",
                              color: "#856dfc",
                            }}
                          >
                            <div
                              style={{
                                position: "absolute",
                                top: "0px",
                                left: "4.97px",
                                lineHeight: "12px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "5.26px",
                                height: "11px",
                              }}
                            >
                              3
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          flex: "1",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          justifyContent: "flex-start",
                          gap: "10px",
                          zIndex: "0",
                          fontSize: "11px",
                          color: "#757575",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                            position: "relative",
                          }}
                        >
                          <div
                            style={{
                              borderRadius: "3px",
                              backgroundColor: "#1d1f2a",
                              border: "1px solid #323643",
                              display: "flex",
                              flexDirection: "row",
                              padding: "11px 36px 11px 11px",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              zIndex: "0",
                            }}
                          >
                            <div
                              style={{
                                position: "relative",
                                width: "583.5px",
                                height: "13px",
                                overflow: "hidden",
                                flexShrink: "0",
                              }}
                            >
                              <div
                                style={{
                                  position: "absolute",
                                  top: "0px",
                                  left: "0px",
                                  display: "flex",
                                  alignItems: "center",
                                  width: "583.7px",
                                  height: "13px",
                                }}
                              >
                                Nhập tiêu chí muốn tìm...
                              </div>
                            </div>
                          </div>
                          <img
                            style={{
                              position: "absolute",
                              margin: "0",
                              top: "10px",
                              right: "10px",
                              width: "18px",
                              height: "18px",
                              zIndex: "1",
                            }}
                            alt=""
                            src="/iicomaskgroup5.svg"
                          />
                        </div>
                        <div
                          style={{
                            flex: "1",
                            position: "relative",
                            width: "640.5px",
                            overflow: "hidden",
                            fontSize: "12px",
                            color: "#fff",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              height: "calc(100% + 18px)",
                              width: "calc(100% + 18px)",
                              top: "0px",
                              right: "-18px",
                              bottom: "-18px",
                              left: "0px",
                              overflow: "hidden",
                            }}
                          >
                            <div
                              style={{
                                position: "absolute",
                                top: "0px",
                                left: "0px",
                                width: "630.5px",
                                height: "403px",
                              }}
                            >
                              <div
                                style={{
                                  position: "absolute",
                                  top: "0px",
                                  left: "0px",
                                  backgroundColor: "#2d303d",
                                  width: "630.5px",
                                  height: "25px",
                                }}
                              >
                                <img
                                  style={{
                                    position: "absolute",
                                    top: "7.5px",
                                    left: "610.5px",
                                    width: "10px",
                                    height: "10px",
                                  }}
                                  alt=""
                                  src="/pseudomaskgroup.svg"
                                />
                                <div
                                  style={{
                                    position: "absolute",
                                    top: "6px",
                                    left: "5px",
                                    lineHeight: "18px",
                                    textTransform: "uppercase",
                                    fontWeight: "500",
                                    display: "flex",
                                    alignItems: "center",
                                    width: "181.25px",
                                    height: "14px",
                                  }}
                                >
                                  Theo đường TB hàm mũ (EMA)
                                </div>
                                <div
                                  style={{
                                    position: "absolute",
                                    top: "calc(50% - 8.5px)",
                                    left: "191.05px",
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "flex-start",
                                    justifyContent: "flex-start",
                                    color: "#9197b1",
                                  }}
                                >
                                  <div
                                    style={{
                                      position: "relative",
                                      lineHeight: "18px",
                                      textTransform: "uppercase",
                                      fontWeight: "500",
                                    }}
                                  >
                                    (0/4)
                                  </div>
                                </div>
                              </div>
                              <div
                                style={{
                                  position: "absolute",
                                  top: "30px",
                                  left: "0px",
                                  backgroundColor: "#2d303d",
                                  width: "630.5px",
                                  height: "25px",
                                }}
                              >
                                <img
                                  style={{
                                    position: "absolute",
                                    top: "7.5px",
                                    left: "610.5px",
                                    width: "10px",
                                    height: "10px",
                                  }}
                                  alt=""
                                  src="/pseudomaskgroup.svg"
                                />
                                <div
                                  style={{
                                    position: "absolute",
                                    top: "6px",
                                    left: "5px",
                                    lineHeight: "18px",
                                    textTransform: "uppercase",
                                    fontWeight: "500",
                                    display: "flex",
                                    alignItems: "center",
                                    width: "189.26px",
                                    height: "14px",
                                  }}
                                >
                                  Theo đường TB đơn giản (SMA)
                                </div>
                                <div
                                  style={{
                                    position: "absolute",
                                    top: "calc(50% - 8.5px)",
                                    left: "199.06px",
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "flex-start",
                                    justifyContent: "flex-start",
                                    color: "#9197b1",
                                  }}
                                >
                                  <div
                                    style={{
                                      position: "relative",
                                      lineHeight: "18px",
                                      textTransform: "uppercase",
                                      fontWeight: "500",
                                    }}
                                  >
                                    (0/4)
                                  </div>
                                </div>
                              </div>
                              <div
                                style={{
                                  position: "absolute",
                                  top: "60px",
                                  left: "0px",
                                  backgroundColor: "#2d303d",
                                  width: "630.5px",
                                  height: "25px",
                                }}
                              >
                                <img
                                  style={{
                                    position: "absolute",
                                    top: "7.5px",
                                    left: "610.5px",
                                    width: "10px",
                                    height: "10px",
                                  }}
                                  alt=""
                                  src="/pseudomaskgroup.svg"
                                />
                                <div
                                  style={{
                                    position: "absolute",
                                    top: "6px",
                                    left: "5px",
                                    lineHeight: "18px",
                                    textTransform: "uppercase",
                                    fontWeight: "500",
                                    display: "flex",
                                    alignItems: "center",
                                    width: "57.51px",
                                    height: "14px",
                                  }}
                                >
                                  Ichimoku
                                </div>
                                <div
                                  style={{
                                    position: "absolute",
                                    top: "calc(50% - 8.5px)",
                                    left: "67.31px",
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "flex-start",
                                    justifyContent: "flex-start",
                                    color: "#9197b1",
                                  }}
                                >
                                  <div
                                    style={{
                                      position: "relative",
                                      lineHeight: "18px",
                                      textTransform: "uppercase",
                                      fontWeight: "500",
                                    }}
                                  >
                                    (0/7)
                                  </div>
                                </div>
                              </div>
                              <div
                                style={{
                                  position: "absolute",
                                  top: "90px",
                                  left: "0px",
                                  backgroundColor: "#2d303d",
                                  width: "630.5px",
                                  height: "25px",
                                }}
                              >
                                <img
                                  style={{
                                    position: "absolute",
                                    top: "7.5px",
                                    left: "610.5px",
                                    width: "10px",
                                    height: "10px",
                                  }}
                                  alt=""
                                  src="/pseudomaskgroup.svg"
                                />
                                <div
                                  style={{
                                    position: "absolute",
                                    top: "6px",
                                    left: "5px",
                                    lineHeight: "18px",
                                    textTransform: "uppercase",
                                    fontWeight: "500",
                                    display: "flex",
                                    alignItems: "center",
                                    width: "85.14px",
                                    height: "14px",
                                  }}
                                >
                                  MACD (9,12,26)
                                </div>
                                <div
                                  style={{
                                    position: "absolute",
                                    top: "calc(50% - 8.5px)",
                                    left: "94.94px",
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "flex-start",
                                    justifyContent: "flex-start",
                                    color: "#9197b1",
                                  }}
                                >
                                  <div
                                    style={{
                                      position: "relative",
                                      lineHeight: "18px",
                                      textTransform: "uppercase",
                                      fontWeight: "500",
                                    }}
                                  >
                                    (0/5)
                                  </div>
                                </div>
                              </div>
                              <div
                                style={{
                                  position: "absolute",
                                  top: "120px",
                                  left: "0px",
                                  backgroundColor: "#2d303d",
                                  width: "630.5px",
                                  height: "25px",
                                }}
                              >
                                <img
                                  style={{
                                    position: "absolute",
                                    top: "7.5px",
                                    left: "610.5px",
                                    width: "20px",
                                    height: "20px",
                                  }}
                                  alt=""
                                  src="/pseudomaskgroup1.svg"
                                />
                                <div
                                  style={{
                                    position: "absolute",
                                    top: "6px",
                                    left: "5px",
                                    lineHeight: "18px",
                                    textTransform: "uppercase",
                                    fontWeight: "500",
                                    display: "flex",
                                    alignItems: "center",
                                    width: "31.97px",
                                    height: "14px",
                                  }}
                                >
                                  RSI14
                                </div>
                                <div
                                  style={{
                                    position: "absolute",
                                    top: "calc(50% - 8.5px)",
                                    left: "41.77px",
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "flex-start",
                                    justifyContent: "flex-start",
                                    color: "#856dfc",
                                  }}
                                >
                                  <div
                                    style={{
                                      position: "relative",
                                      lineHeight: "18px",
                                      textTransform: "uppercase",
                                      fontWeight: "500",
                                    }}
                                  >
                                    (3/3)
                                  </div>
                                </div>
                              </div>
                              <div
                                style={{
                                  position: "absolute",
                                  top: "145px",
                                  left: "0px",
                                  borderBottom: "1px dashed #323643",
                                  boxSizing: "border-box",
                                  width: "630.5px",
                                  height: "26px",
                                  color: "#856dfc",
                                }}
                              >
                                <div
                                  style={{
                                    position: "absolute",
                                    top: "6px",
                                    left: "10px",
                                    lineHeight: "18px",
                                    fontWeight: "500",
                                    display: "flex",
                                    alignItems: "center",
                                    width: "66.93px",
                                    height: "14px",
                                  }}
                                >
                                  Giá trị RSI14
                                </div>
                                <img
                                  style={{
                                    position: "absolute",
                                    top: "7.5px",
                                    right: "10px",
                                    width: "10px",
                                    height: "10px",
                                  }}
                                  alt=""
                                  src="/iicomaskgroup6.svg"
                                />
                              </div>
                              <div
                                style={{
                                  position: "absolute",
                                  top: "171px",
                                  left: "0px",
                                  borderBottom: "1px dashed #323643",
                                  boxSizing: "border-box",
                                  width: "630.5px",
                                  height: "26px",
                                  color: "#856dfc",
                                }}
                              >
                                <div
                                  style={{
                                    position: "absolute",
                                    top: "6px",
                                    left: "10px",
                                    lineHeight: "18px",
                                    fontWeight: "500",
                                    display: "flex",
                                    alignItems: "center",
                                    width: "151.54px",
                                    height: "14px",
                                  }}
                                >
                                  RSI14 so với các vùng giá trị
                                </div>
                                <img
                                  style={{
                                    position: "absolute",
                                    top: "7.5px",
                                    right: "10px",
                                    width: "10px",
                                    height: "10px",
                                  }}
                                  alt=""
                                  src="/iicomaskgroup6.svg"
                                />
                              </div>
                              <div
                                style={{
                                  position: "absolute",
                                  top: "197px",
                                  left: "0px",
                                  borderBottom: "1px dashed #323643",
                                  boxSizing: "border-box",
                                  width: "630.5px",
                                  height: "26px",
                                }}
                              />
                            </div>
                          </div>
                          <div
                            style={{
                              position: "absolute",
                              top: "2px",
                              left: "635.5px",
                              borderRadius: "3px",
                              backgroundColor: "#9197b1",
                              width: "3px",
                              height: "94px",
                              opacity: "0.3",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        borderTop: "1px solid #323643",
                        display: "flex",
                        flexDirection: "row",
                        padding: "8.5px 691.5px 2.5px 0px",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        gap: "10px",
                      }}
                    >
                      <img
                        style={{
                          position: "relative",
                          width: "20px",
                          height: "20px",
                        }}
                        alt=""
                        src="/iicomaskgroup7.svg"
                      />
                      <div style={{ position: "relative", lineHeight: "18px" }}>
                        Có thể thêm nhiều tiêu chí
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      padding: "0px 792.8099975585938px 0px 0px",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        borderRadius: "5px 5px 0px 0px",
                        backgroundColor: "#232632",
                        display: "flex",
                        flexDirection: "row",
                        padding: "5.5px 9.69000244140625px 5.5px 10px",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        position: "relative",
                        zIndex: "0",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          margin: "0",
                          top: "35px",
                          left: "0px",
                          backgroundColor: "#232632",
                          width: "87.69px",
                          height: "10px",
                          zIndex: "0",
                        }}
                      />
                      <div
                        style={{
                          position: "relative",
                          lineHeight: "24px",
                          zIndex: "1",
                        }}
                      >
                        Chọn giá trị
                      </div>
                      <div
                        style={{
                          position: "absolute",
                          margin: "0",
                          top: "20.46px",
                          left: "0.29px",
                          borderTop: "4px solid #856dfc",
                          borderRight: "3px solid #856dfc",
                          borderLeft: "3px solid #856dfc",
                          boxSizing: "border-box",
                          width: "6px",
                          height: "4px",
                          transform: " rotate(45deg)",
                          transformOrigin: "0 0",
                          zIndex: "2",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        margin: "0",
                        position: "absolute",
                        height: "calc(100% - 10px)",
                        width: "calc(100% - 670.5px)",
                        top: "5px",
                        right: "0px",
                        bottom: "5px",
                        left: "670.5px",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        gap: "10px",
                        zIndex: "1",
                        textAlign: "center",
                        fontSize: "11px",
                        color: "#9197b1",
                        fontFamily: "Roboto",
                      }}
                    >
                      <div
                        style={{
                          position: "relative",
                          borderRadius: "3px",
                          backgroundColor: "#2d303d",
                          border: "1px solid #323643",
                          boxSizing: "border-box",
                          width: "100px",
                          height: "25px",
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            height: "calc(100% - 2px)",
                            width: "calc(100% - 2px)",
                            top: "1px",
                            right: "1px",
                            bottom: "1px",
                            left: "1px",
                          }}
                        >
                          <img
                            style={{
                              position: "absolute",
                              top: "calc(50% - 7.5px)",
                              left: "calc(50% - 38.28px)",
                              width: "15px",
                              height: "15px",
                            }}
                            alt=""
                            src="/iicomaskgroup8.svg"
                          />
                          <div
                            style={{
                              position: "absolute",
                              top: "5px",
                              left: "35.72px",
                              fontWeight: "500",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: "51.76px",
                              height: "13px",
                            }}
                          >
                            Lưu bộ lọc
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          position: "relative",
                          borderRadius: "3px",
                          backgroundColor: "#2d303d",
                          border: "1px solid #323643",
                          boxSizing: "border-box",
                          width: "100px",
                          height: "25px",
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            height: "calc(100% - 2px)",
                            width: "calc(100% - 2px)",
                            top: "1px",
                            right: "1px",
                            bottom: "1px",
                            left: "1px",
                          }}
                        >
                          <img
                            style={{
                              position: "absolute",
                              top: "calc(50% - 7.5px)",
                              left: "calc(50% - 37.27px)",
                              width: "15px",
                              height: "15px",
                            }}
                            alt=""
                            src="/iicomaskgroup9.svg"
                          />
                          <div
                            style={{
                              position: "absolute",
                              top: "5px",
                              left: "36.73px",
                              fontWeight: "500",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: "49.73px",
                              height: "13px",
                            }}
                          >
                            Xóa tất cả
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      flex: "1",
                      borderRadius: "5px",
                      backgroundColor: "#232632",
                      display: "flex",
                      flexDirection: "row",
                      padding: "10px 0px 5px 10px",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      fontSize: "12px",
                      fontFamily: "Roboto",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                      }}
                    >
                      <div
                        style={{
                          position: "relative",
                          width: "870.5px",
                          height: "255px",
                          overflow: "hidden",
                          flexShrink: "0",
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            height: "calc(100% + 18px)",
                            width: "calc(100% + 18px)",
                            top: "0px",
                            right: "-18px",
                            bottom: "-18px",
                            left: "0px",
                            overflow: "hidden",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              top: "0px",
                              left: "0px",
                              width: "860.5px",
                              height: "105px",
                            }}
                          >
                            <div
                              style={{
                                position: "absolute",
                                top: "0px",
                                left: "0px",
                                borderRadius: "3px",
                                backgroundColor: "#20232e",
                                width: "860.5px",
                                height: "35px",
                              }}
                            >
                              <div
                                style={{
                                  position: "absolute",
                                  top: "calc(50% - 17.5px)",
                                  left: "10px",
                                  width: "310.5px",
                                  height: "35px",
                                  overflow: "hidden",
                                }}
                              >
                                <div
                                  style={{
                                    position: "absolute",
                                    top: "calc(50% - 9px)",
                                    left: "0px",
                                    overflow: "hidden",
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "flex-start",
                                    justifyContent: "flex-start",
                                  }}
                                >
                                  <div
                                    style={{
                                      position: "relative",
                                      lineHeight: "18px",
                                      fontWeight: "500",
                                    }}
                                  >
                                    Giá trị RSI14
                                  </div>
                                </div>
                              </div>
                              <div
                                style={{
                                  position: "absolute",
                                  top: "calc(50% - 12.5px)",
                                  left: "320.5px",
                                  display: "flex",
                                  flexDirection: "row",
                                  alignItems: "flex-start",
                                  justifyContent: "flex-start",
                                  gap: "45.12px",
                                  textAlign: "center",
                                  fontSize: "11px",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    width: "390.63px",
                                    height: "25px",
                                  }}
                                >
                                  <div
                                    style={{
                                      position: "absolute",
                                      height: "100%",
                                      top: "0px",
                                      bottom: "0px",
                                      left: "0px",
                                      borderRadius: "3px 0px 0px 3px",
                                      backgroundColor: "#2d303d",
                                      width: "70px",
                                    }}
                                  >
                                    <div
                                      style={{
                                        position: "absolute",
                                        top: "6px",
                                        left: "2px",
                                        width: "58px",
                                        height: "13px",
                                        overflow: "hidden",
                                      }}
                                    >
                                      <div
                                        style={{
                                          position: "absolute",
                                          top: "0px",
                                          left: "0px",
                                          display: "flex",
                                          alignItems: "center",
                                          justifyContent: "center",
                                          width: "58.2px",
                                          height: "13px",
                                        }}
                                      >{`0.00 `}</div>
                                    </div>
                                  </div>
                                  <div
                                    style={{
                                      position: "absolute",
                                      height: "100%",
                                      top: "0px",
                                      right: "0px",
                                      bottom: "0px",
                                      borderRadius: "0px 3px 3px 0px",
                                      backgroundColor: "#2d303d",
                                      width: "70px",
                                    }}
                                  >
                                    <div
                                      style={{
                                        position: "absolute",
                                        top: "6px",
                                        left: "10px",
                                        width: "58px",
                                        height: "13px",
                                        overflow: "hidden",
                                      }}
                                    >
                                      <div
                                        style={{
                                          position: "absolute",
                                          top: "0px",
                                          left: "0px",
                                          display: "flex",
                                          alignItems: "center",
                                          justifyContent: "center",
                                          width: "58.2px",
                                          height: "13px",
                                        }}
                                      >{`100.00 `}</div>
                                    </div>
                                  </div>
                                  <div
                                    style={{
                                      position: "absolute",
                                      height: "100%",
                                      top: "0px",
                                      bottom: "0px",
                                      left: "67px",
                                      backgroundColor: "#2d303d",
                                      borderRight: "1px solid #232632",
                                      borderLeft: "1px solid #232632",
                                      boxSizing: "border-box",
                                      width: "256.63px",
                                    }}
                                  >
                                    <div
                                      style={{
                                        position: "absolute",
                                        height: "100%",
                                        width: "calc(100% - 2px)",
                                        top: "0px",
                                        right: "1px",
                                        bottom: "0px",
                                        left: "1px",
                                      }}
                                    >
                                      <div
                                        style={{
                                          position: "absolute",
                                          height: "100%",
                                          width: "100%",
                                          top: "0px",
                                          right: "0px",
                                          bottom: "0px",
                                          left: "0px",
                                          overflow: "hidden",
                                        }}
                                      >
                                        <div
                                          style={{
                                            position: "absolute",
                                            height: "100%",
                                            width: "100%",
                                            top: "0px",
                                            right: "0px",
                                            bottom: "0px",
                                            left: "0px",
                                            backgroundColor: "#2f4045",
                                          }}
                                        />
                                      </div>
                                      <div
                                        style={{
                                          position: "absolute",
                                          height: "100%",
                                          width: "100%",
                                          top: "0px",
                                          right: "0px",
                                          bottom: "0px",
                                          left: "0px",
                                          overflow: "hidden",
                                        }}
                                      >
                                        <div
                                          style={{
                                            position: "absolute",
                                            height: "calc(100% + 5px)",
                                            width: "calc(100% + 10.37px)",
                                            top: "0px",
                                            right: "-5.37px",
                                            bottom: "-5px",
                                            left: "-5px",
                                            overflow: "hidden",
                                          }}
                                        >
                                          <div
                                            style={{
                                              position: "absolute",
                                              top: "0px",
                                              left: "calc(50% - 132.5px)",
                                              width: "265px",
                                              height: "30px",
                                            }}
                                          />
                                        </div>
                                      </div>
                                      <div
                                        style={{
                                          position: "absolute",
                                          top: "-2.5px",
                                          right: "-4px",
                                          borderRadius: "3px",
                                          backgroundColor: "#6c7390",
                                          border: "1px solid #535a77",
                                          boxSizing: "border-box",
                                          width: "10px",
                                          height: "30px",
                                        }}
                                      >
                                        <div
                                          style={{
                                            position: "absolute",
                                            top: "7.5px",
                                            left: "3px",
                                            backgroundColor: "#535a77",
                                            width: "1px",
                                            height: "15px",
                                          }}
                                        />
                                        <div
                                          style={{
                                            position: "absolute",
                                            top: "7.5px",
                                            left: "6px",
                                            backgroundColor: "#535a77",
                                            width: "1px",
                                            height: "15px",
                                          }}
                                        />
                                      </div>
                                      <div
                                        style={{
                                          position: "absolute",
                                          top: "-2.5px",
                                          right: "250.54px",
                                          borderRadius: "3px",
                                          backgroundColor: "#6c7390",
                                          border: "1px solid #535a77",
                                          boxSizing: "border-box",
                                          width: "10px",
                                          height: "30px",
                                        }}
                                      >
                                        <div
                                          style={{
                                            position: "absolute",
                                            top: "7.5px",
                                            left: "3px",
                                            backgroundColor: "#535a77",
                                            width: "1px",
                                            height: "15px",
                                          }}
                                        />
                                        <div
                                          style={{
                                            position: "absolute",
                                            top: "7.5px",
                                            left: "6px",
                                            backgroundColor: "#535a77",
                                            width: "1px",
                                            height: "15px",
                                          }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  style={{
                                    borderRadius: "3px",
                                    backgroundColor: "#2d303d",
                                    border: "1px solid #2d303d",
                                    display: "flex",
                                    flexDirection: "row",
                                    padding: "3.25px 20.25px 4.25px 11px",
                                    alignItems: "flex-start",
                                    justifyContent: "flex-start",
                                    position: "relative",
                                    textAlign: "left",
                                    color: "#9197b1",
                                  }}
                                >
                                  <div
                                    style={{
                                      overflow: "hidden",
                                      display: "flex",
                                      flexDirection: "row",
                                      padding: "0px 0px 0.5px",
                                      alignItems: "flex-start",
                                      justifyContent: "flex-start",
                                      zIndex: "0",
                                    }}
                                  >
                                    <div
                                      style={{
                                        position: "relative",
                                        lineHeight: "16.5px",
                                      }}
                                    >
                                      1 ngày
                                    </div>
                                  </div>
                                  <div
                                    style={{
                                      position: "absolute",
                                      margin: "0",
                                      top: "12.5px",
                                      left: "52.25px",
                                      borderTop: "3px solid #9197b1",
                                      borderRight: "3px solid #9197b1",
                                      borderLeft: "3px solid #9197b1",
                                      boxSizing: "border-box",
                                      width: "6px",
                                      height: "3px",
                                      zIndex: "1",
                                    }}
                                  />
                                </div>
                              </div>
                              <img
                                style={{
                                  position: "absolute",
                                  top: "10px",
                                  right: "10px",
                                  width: "15px",
                                  height: "15px",
                                }}
                                alt=""
                                src="/iicomaskgroup10.svg"
                              />
                            </div>
                            <div
                              style={{
                                position: "absolute",
                                top: "35px",
                                left: "0px",
                                borderRadius: "3px",
                                width: "860.5px",
                                height: "35px",
                              }}
                            >
                              <div
                                style={{
                                  position: "absolute",
                                  top: "calc(50% - 17.5px)",
                                  left: "10px",
                                  width: "310.5px",
                                  height: "35px",
                                  overflow: "hidden",
                                }}
                              >
                                <div
                                  style={{
                                    position: "absolute",
                                    top: "calc(50% - 9px)",
                                    left: "0px",
                                    overflow: "hidden",
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "flex-start",
                                    justifyContent: "flex-start",
                                  }}
                                >
                                  <div
                                    style={{
                                      position: "relative",
                                      lineHeight: "18px",
                                      fontWeight: "500",
                                    }}
                                  >
                                    RSI14 so với các vùng giá trị
                                  </div>
                                </div>
                              </div>
                              <div
                                style={{
                                  position: "absolute",
                                  bottom: "5px",
                                  left: "calc(50% - 109.75px)",
                                  display: "flex",
                                  flexDirection: "row",
                                  alignItems: "flex-start",
                                  justifyContent: "flex-start",
                                  fontSize: "11px",
                                }}
                              >
                                <div
                                  style={{
                                    flex: "1",
                                    borderRadius: "3px 0px 0px 3px",
                                    backgroundColor: "#2d303d",
                                    borderRight: "1px solid #323643",
                                    display: "flex",
                                    flexDirection: "row",
                                    padding: "3.25px 133.5px 4.75px 10px",
                                    alignItems: "flex-start",
                                    justifyContent: "flex-start",
                                  }}
                                >
                                  <div
                                    style={{
                                      position: "relative",
                                      lineHeight: "16.5px",
                                    }}
                                  >
                                    RSI14
                                  </div>
                                </div>
                                <div
                                  style={{
                                    flex: "1",
                                    backgroundColor: "#2d303d",
                                    display: "flex",
                                    flexDirection: "row",
                                    padding: "5px 0px",
                                    alignItems: "flex-start",
                                    justifyContent: "flex-start",
                                  }}
                                >
                                  <div
                                    style={{
                                      borderRadius: "3px",
                                      display: "flex",
                                      flexDirection: "row",
                                      padding: "0px 20px 0px 25px",
                                      alignItems: "flex-start",
                                      justifyContent: "flex-start",
                                      position: "relative",
                                    }}
                                  >
                                    <img
                                      style={{
                                        position: "relative",
                                        width: "15px",
                                        height: "15px",
                                        zIndex: "0",
                                      }}
                                      alt=""
                                      src="/iicomaskgroup11.svg"
                                    />
                                    <div
                                      style={{
                                        position: "absolute",
                                        margin: "0",
                                        top: "7.5px",
                                        left: "49px",
                                        borderTop: "3px solid #9197b1",
                                        borderRight: "3px solid #9197b1",
                                        borderLeft: "3px solid #9197b1",
                                        boxSizing: "border-box",
                                        width: "6px",
                                        height: "3px",
                                        zIndex: "1",
                                      }}
                                    />
                                  </div>
                                </div>
                                <div
                                  style={{
                                    flex: "1",
                                    backgroundColor: "#2d303d",
                                    display: "flex",
                                    flexDirection: "row",
                                    padding: "3.25px 10px 4.25px",
                                    alignItems: "flex-start",
                                    justifyContent: "flex-start",
                                  }}
                                >
                                  <div
                                    style={{
                                      borderRadius: "3px",
                                      display: "flex",
                                      flexDirection: "row",
                                      padding:
                                        "0px 19.360000610351562px 0.5px 120.13999938964844px",
                                      alignItems: "flex-start",
                                      justifyContent: "flex-start",
                                      position: "relative",
                                    }}
                                  >
                                    <div
                                      style={{
                                        position: "relative",
                                        lineHeight: "16.5px",
                                        zIndex: "0",
                                      }}
                                    >
                                      70
                                    </div>
                                    <div
                                      style={{
                                        position: "absolute",
                                        margin: "0",
                                        top: "9.25px",
                                        left: "141.5px",
                                        borderTop: "3px solid #9197b1",
                                        borderRight: "3px solid #9197b1",
                                        borderLeft: "3px solid #9197b1",
                                        boxSizing: "border-box",
                                        width: "6px",
                                        height: "3px",
                                        zIndex: "1",
                                      }}
                                    />
                                  </div>
                                </div>
                                <div
                                  style={{
                                    flex: "1",
                                    borderRadius: "0px 3px 3px 0px",
                                    backgroundColor: "#2d303d",
                                    borderLeft: "1px solid #232632",
                                    display: "flex",
                                    flexDirection: "row",
                                    padding: "3.25px 0px 4.25px 1px",
                                    alignItems: "flex-start",
                                    justifyContent: "flex-start",
                                  }}
                                >
                                  <div
                                    style={{
                                      borderRadius: "3px",
                                      display: "flex",
                                      flexDirection: "row",
                                      padding: "0px 19.25px 0.5px 41.75px",
                                      alignItems: "flex-start",
                                      justifyContent: "flex-start",
                                      position: "relative",
                                    }}
                                  >
                                    <div
                                      style={{
                                        position: "relative",
                                        lineHeight: "16.5px",
                                        zIndex: "0",
                                      }}
                                    >
                                      1 ngày
                                    </div>
                                    <div
                                      style={{
                                        position: "absolute",
                                        margin: "0",
                                        top: "9.25px",
                                        left: "83px",
                                        borderTop: "3px solid #9197b1",
                                        borderRight: "3px solid #9197b1",
                                        borderLeft: "3px solid #9197b1",
                                        boxSizing: "border-box",
                                        width: "6px",
                                        height: "3px",
                                        zIndex: "1",
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                              <img
                                style={{
                                  position: "absolute",
                                  top: "10px",
                                  right: "10px",
                                  width: "15px",
                                  height: "15px",
                                }}
                                alt=""
                                src="/iicomaskgroup10.svg"
                              />
                            </div>
                            <div
                              style={{
                                position: "absolute",
                                top: "70px",
                                left: "0px",
                                borderRadius: "3px",
                                backgroundColor: "#20232e",
                                width: "860.5px",
                                height: "35px",
                              }}
                            >
                              <div
                                style={{
                                  position: "absolute",
                                  top: "calc(50% - 17.5px)",
                                  left: "10px",
                                  width: "310.5px",
                                  height: "35px",
                                  overflow: "hidden",
                                }}
                              >
                                <div
                                  style={{
                                    position: "absolute",
                                    top: "calc(50% - 9px)",
                                    left: "0px",
                                    overflow: "hidden",
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "flex-start",
                                    justifyContent: "flex-start",
                                  }}
                                >
                                  <div
                                    style={{
                                      position: "relative",
                                      lineHeight: "18px",
                                      fontWeight: "500",
                                    }}
                                  >
                                    RSI14 và vùng Quá mua/Quá bán
                                  </div>
                                </div>
                              </div>
                              <div
                                style={{
                                  position: "absolute",
                                  bottom: "5px",
                                  left: "calc(50% - 109.75px)",
                                  display: "flex",
                                  flexDirection: "row",
                                  alignItems: "flex-start",
                                  justifyContent: "flex-start",
                                  fontSize: "11px",
                                }}
                              >
                                <div
                                  style={{
                                    flex: "1",
                                    borderRadius: "3px 0px 0px 3px",
                                    backgroundColor: "#2d303d",
                                    borderRight: "1px solid #323643",
                                    display: "flex",
                                    flexDirection: "row",
                                    padding: "3.25px 133.5px 4.75px 10px",
                                    alignItems: "flex-start",
                                    justifyContent: "flex-start",
                                  }}
                                >
                                  <div
                                    style={{
                                      position: "relative",
                                      lineHeight: "16.5px",
                                    }}
                                  >
                                    RSI14
                                  </div>
                                </div>
                                <div
                                  style={{
                                    flex: "1",
                                    backgroundColor: "#2d303d",
                                    display: "flex",
                                    flexDirection: "row",
                                    padding: "3.5px 0px",
                                    alignItems: "flex-start",
                                    justifyContent: "flex-start",
                                  }}
                                >
                                  <div
                                    style={{
                                      borderRadius: "3px",
                                      display: "flex",
                                      flexDirection: "row",
                                      padding: "0px 20px 0px 22px",
                                      alignItems: "flex-start",
                                      justifyContent: "flex-start",
                                      position: "relative",
                                    }}
                                  >
                                    <img
                                      style={{
                                        position: "relative",
                                        width: "18px",
                                        height: "18px",
                                        zIndex: "0",
                                      }}
                                      alt=""
                                      src="/iicomaskgroup12.svg"
                                    />
                                    <div
                                      style={{
                                        position: "absolute",
                                        margin: "0",
                                        top: "9px",
                                        left: "49px",
                                        borderTop: "3px solid #9197b1",
                                        borderRight: "3px solid #9197b1",
                                        borderLeft: "3px solid #9197b1",
                                        boxSizing: "border-box",
                                        width: "6px",
                                        height: "3px",
                                        zIndex: "1",
                                      }}
                                    />
                                  </div>
                                </div>
                                <div
                                  style={{
                                    flex: "1",
                                    backgroundColor: "#2d303d",
                                    display: "flex",
                                    flexDirection: "row",
                                    padding: "3.25px 10px 4.25px",
                                    alignItems: "flex-start",
                                    justifyContent: "flex-start",
                                  }}
                                >
                                  <div
                                    style={{
                                      borderRadius: "3px",
                                      display: "flex",
                                      flexDirection: "row",
                                      padding: "0px 19.59000015258789px 0.5px 61.90999984741211px",
                                      alignItems: "flex-start",
                                      justifyContent: "flex-start",
                                      position: "relative",
                                    }}
                                  >
                                    <div
                                      style={{
                                        position: "relative",
                                        lineHeight: "16.5px",
                                        zIndex: "0",
                                      }}
                                    >
                                      Vùng quá mua
                                    </div>
                                    <div
                                      style={{
                                        position: "absolute",
                                        margin: "0",
                                        top: "9.25px",
                                        left: "141.5px",
                                        borderTop: "3px solid #9197b1",
                                        borderRight: "3px solid #9197b1",
                                        borderLeft: "3px solid #9197b1",
                                        boxSizing: "border-box",
                                        width: "6px",
                                        height: "3px",
                                        zIndex: "1",
                                      }}
                                    />
                                  </div>
                                </div>
                                <div
                                  style={{
                                    flex: "1",
                                    borderRadius: "0px 3px 3px 0px",
                                    backgroundColor: "#2d303d",
                                    borderLeft: "1px solid #232632",
                                    display: "flex",
                                    flexDirection: "row",
                                    padding: "3.25px 0px 4.25px 1px",
                                    alignItems: "flex-start",
                                    justifyContent: "flex-start",
                                  }}
                                >
                                  <div
                                    style={{
                                      borderRadius: "3px",
                                      display: "flex",
                                      flexDirection: "row",
                                      padding: "0px 19.25px 0.5px 41.75px",
                                      alignItems: "flex-start",
                                      justifyContent: "flex-start",
                                      position: "relative",
                                    }}
                                  >
                                    <div
                                      style={{
                                        position: "relative",
                                        lineHeight: "16.5px",
                                        zIndex: "0",
                                      }}
                                    >
                                      1 ngày
                                    </div>
                                    <div
                                      style={{
                                        position: "absolute",
                                        margin: "0",
                                        top: "9.25px",
                                        left: "83px",
                                        borderTop: "3px solid #9197b1",
                                        borderRight: "3px solid #9197b1",
                                        borderLeft: "3px solid #9197b1",
                                        boxSizing: "border-box",
                                        width: "6px",
                                        height: "3px",
                                        zIndex: "1",
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                              <img
                                style={{
                                  position: "absolute",
                                  top: "10px",
                                  right: "10px",
                                  width: "15px",
                                  height: "15px",
                                }}
                                alt=""
                                src="/iicomaskgroup10.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          position: "relative",
                          borderTop: "1px solid #323643",
                          boxSizing: "border-box",
                          width: "860.5px",
                          height: "31px",
                          fontSize: "16px",
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            top: "calc(50% - 9px)",
                            left: "0px",
                            display: "flex",
                            flexDirection: "row",
                            padding: "0px 363.3900146484375px 0px 0px",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                            fontFamily: "Oswald",
                          }}
                        >
                          <div style={{ position: "relative", lineHeight: "24px" }}>
                            <span>{`Kết quả: `}</span>
                            <span style={{ color: "#856dfc" }}>17</span>
                          </div>
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            top: "calc(50% - 5.25px)",
                            left: "427.39px",
                            width: "183.11px",
                            height: "16.5px",
                            fontSize: "11px",
                            color: "#9197b1",
                          }}
                        >
                          <i
                            style={{
                              position: "absolute",
                              top: "-1px",
                              left: "0px",
                              lineHeight: "16.5px",
                            }}
                          >
                            K: Nghìn
                          </i>
                          <i
                            style={{
                              position: "absolute",
                              top: "-1px",
                              left: "50.34px",
                              lineHeight: "16.5px",
                            }}
                          >
                            M: Triệu
                          </i>
                          <i
                            style={{
                              position: "absolute",
                              top: "-1px",
                              left: "98.8px",
                              lineHeight: "16.5px",
                            }}
                          >
                            B: Tỷ
                          </i>
                          <i
                            style={{
                              position: "absolute",
                              top: "-1px",
                              left: "131.75px",
                              lineHeight: "16.5px",
                            }}
                          >
                            T: Nghìn tỷ
                          </i>
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            top: "calc(50% - 9.5px)",
                            left: "620.5px",
                            borderLeft: "1px solid #323643",
                            boxSizing: "border-box",
                            width: "240px",
                            height: "25px",
                            fontSize: "12px",
                            color: "#bfbfbf",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              width: "calc(100% - 90px)",
                              top: "0px",
                              right: "85px",
                              left: "5px",
                              borderRadius: "3px",
                              border: "1px solid #323643",
                              boxSizing: "border-box",
                              display: "flex",
                              flexDirection: "row",
                              padding: "1px",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                            }}
                          >
                            <div
                              style={{
                                borderRadius: "3px",
                                backgroundColor: "#1d1f2a",
                                display: "flex",
                                flexDirection: "row",
                                padding: "4.5px 20px 4.5px 10px",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                                zIndex: "0",
                              }}
                            >
                              <div
                                style={{
                                  position: "relative",
                                  width: "118px",
                                  height: "14px",
                                  overflow: "hidden",
                                  flexShrink: "0",
                                }}
                              >
                                <div
                                  style={{
                                    position: "absolute",
                                    top: "0px",
                                    left: "0px",
                                    display: "flex",
                                    alignItems: "center",
                                    width: "118.2px",
                                    height: "14px",
                                  }}
                                >
                                  Thời gian lọc
                                </div>
                              </div>
                            </div>
                            <img
                              style={{
                                position: "absolute",
                                margin: "0",
                                top: "5.5px",
                                right: "13px",
                                width: "14px",
                                height: "14px",
                                zIndex: "1",
                              }}
                              alt=""
                              src="/icon-calendarmaskgroup.svg"
                            />
                          </div>
                          <div
                            style={{
                              position: "absolute",
                              top: "0px",
                              right: "0px",
                              borderRadius: "3px",
                              backgroundColor: "#856dfc",
                              width: "80px",
                              height: "25px",
                              textAlign: "center",
                              fontSize: "11px",
                              color: "#fff",
                            }}
                          >
                            <div
                              style={{
                                position: "absolute",
                                top: "6px",
                                left: "18.5px",
                                fontWeight: "500",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "18.18px",
                                height: "13px",
                              }}
                            >
                              Lọc
                            </div>
                            <img
                              style={{
                                position: "absolute",
                                height: "100%",
                                top: "0px",
                                right: "0px",
                                bottom: "0px",
                                borderRadius: "3px",
                                maxHeight: "100%",
                                width: "25px",
                              }}
                              alt=""
                              src="/spanh2d8c8aa5fd.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    padding: "0px 1668.5799560546875px 0px 0px",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      borderRadius: "5px 5px 0px 0px",
                      backgroundColor: "#232632",
                      display: "flex",
                      flexDirection: "row",
                      padding: "5.5px 9.509994506835938px 5.5px 10px",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      position: "relative",
                      gap: "4.91px",
                      zIndex: "0",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        margin: "0",
                        top: "35px",
                        left: "0px",
                        backgroundColor: "#232632",
                        width: "102.42px",
                        height: "10px",
                        zIndex: "0",
                      }}
                    />
                    <div
                      style={{
                        position: "relative",
                        lineHeight: "24px",
                        zIndex: "1",
                      }}
                    >
                      Kết quả lọc
                    </div>
                    <div
                      style={{
                        position: "relative",
                        lineHeight: "24px",
                        color: "#856dfc",
                        zIndex: "2",
                      }}
                    >
                      17
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        margin: "0",
                        top: "20.46px",
                        left: "0.29px",
                        borderTop: "4px solid #856dfc",
                        borderRight: "3px solid #856dfc",
                        borderLeft: "3px solid #856dfc",
                        boxSizing: "border-box",
                        width: "6px",
                        height: "4px",
                        transform: " rotate(45deg)",
                        transformOrigin: "0 0",
                        zIndex: "3",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      margin: "0",
                      position: "absolute",
                      height: "calc(100% - 10px)",
                      width: "calc(100% - 1426px)",
                      top: "5px",
                      right: "0px",
                      bottom: "5px",
                      left: "1426px",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      gap: "10px",
                      zIndex: "1",
                      textAlign: "center",
                      fontSize: "11px",
                      color: "#9197b1",
                      fontFamily: "Roboto",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        borderRadius: "3px",
                        backgroundColor: "#2d303d",
                        border: "1px solid #3c3c3c",
                        boxSizing: "border-box",
                        width: "160px",
                        height: "25px",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          height: "calc(100% - 2px)",
                          width: "calc(100% - 2px)",
                          top: "1px",
                          right: "1px",
                          bottom: "1px",
                          left: "1px",
                        }}
                      >
                        <img
                          style={{
                            position: "absolute",
                            top: "calc(50% - 7.5px)",
                            left: "calc(50% - 63.91px)",
                            width: "15px",
                            height: "15px",
                          }}
                          alt=""
                          src="/iicomaskgroup13.svg"
                        />
                        <div
                          style={{
                            position: "absolute",
                            top: "5px",
                            left: "40.09px",
                            fontWeight: "500",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "103.01px",
                            height: "13px",
                          }}
                        >
                          Xuất kết quả ra Excel
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        position: "relative",
                        borderRadius: "3px",
                        backgroundColor: "#2d303d",
                        border: "1px solid #3c3c3c",
                        boxSizing: "border-box",
                        width: "175px",
                        height: "25px",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          height: "calc(100% - 2px)",
                          width: "calc(100% - 2px)",
                          top: "1px",
                          right: "1px",
                          bottom: "1px",
                          left: "1px",
                        }}
                      >
                        <img
                          style={{
                            position: "absolute",
                            top: "calc(50% - 7.5px)",
                            left: "calc(50% - 80.62px)",
                            width: "15px",
                            height: "15px",
                          }}
                          alt=""
                          src="/iicomaskgroup14.svg"
                        />
                        <div
                          style={{
                            position: "absolute",
                            top: "5px",
                            left: "30.88px",
                            fontWeight: "500",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "136.43px",
                            height: "13px",
                          }}
                        >
                          Thêm kết quả vào Watchlist
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    borderRadius: "5px",
                    backgroundColor: "#232632",
                    display: "flex",
                    flexDirection: "column",
                    padding: "10px",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    position: "relative",
                    gap: "10px",
                    fontSize: "11px",
                    color: "#9197b1",
                    fontFamily: "Roboto",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#232632",
                      borderBottom: "1px solid #323643",
                      display: "flex",
                      flexDirection: "row",
                      padding: "0px 500.5px 1px",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      position: "relative",
                      zIndex: "2",
                      fontSize: "12px",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        borderRadius: "3px",
                        width: "750px",
                        height: "25px",
                        zIndex: "0",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          top: "3.5px",
                          left: "27.36px",
                          lineHeight: "18px",
                          fontWeight: "500",
                        }}
                      >
                        Tổng quan
                      </div>
                      <div
                        style={{
                          position: "absolute",
                          top: "calc(50% - 12.5px)",
                          left: "calc(50% - 236.91px)",
                          display: "flex",
                          flexDirection: "row",
                          padding: "3.5px 0px",
                          alignItems: "flex-start",
                          justifyContent: "flex-start",
                          color: "#fff",
                        }}
                      >
                        <div
                          style={{
                            position: "relative",
                            lineHeight: "18px",
                            fontWeight: "500",
                            zIndex: "0",
                          }}
                        >
                          Tiêu chí lọc
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            margin: "0",
                            top: "22px",
                            left: "0px",
                            borderRadius: "3px 3px 0px 0px",
                            backgroundColor: "#856dfc",
                            width: "61.72px",
                            height: "3px",
                            zIndex: "1",
                          }}
                        />
                      </div>
                      <div
                        style={{
                          position: "absolute",
                          top: "3.5px",
                          left: "254.53px",
                          lineHeight: "18px",
                          fontWeight: "500",
                        }}
                      >
                        Cơ bản
                      </div>
                      <div
                        style={{
                          position: "absolute",
                          top: "3.5px",
                          left: "346.92px",
                          lineHeight: "18px",
                          fontWeight: "500",
                        }}
                      >
                        Kỹ thuật
                      </div>
                      <div
                        style={{
                          position: "absolute",
                          top: "3.5px",
                          left: "445.61px",
                          lineHeight: "18px",
                          fontWeight: "500",
                          opacity: "0.5",
                        }}
                      >
                        Mô hình nến
                      </div>
                      <div
                        style={{
                          position: "absolute",
                          top: "3.5px",
                          left: "566.59px",
                          lineHeight: "18px",
                          fontWeight: "500",
                        }}
                      >
                        Biến động
                      </div>
                      <div
                        style={{
                          position: "absolute",
                          top: "3.5px",
                          left: "675.75px",
                          lineHeight: "18px",
                          fontWeight: "500",
                        }}
                      >
                        Bảng giá
                      </div>
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        margin: "0",
                        height: "calc(100% - 8px)",
                        width: "calc(100% - 1594.89px)",
                        top: "5px",
                        right: "1594.89px",
                        bottom: "3px",
                        left: "0px",
                        zIndex: "1",
                        color: "#fff",
                      }}
                    >
                      <img
                        style={{
                          position: "absolute",
                          top: "calc(50% - 6.5px)",
                          left: "0px",
                          width: "11px",
                          height: "11px",
                        }}
                        alt=""
                        src="/pseudomaskgroup2.svg"
                      />
                      <b
                        style={{
                          position: "absolute",
                          top: "0px",
                          left: "16px",
                          lineHeight: "18px",
                        }}
                      >
                        Thời gian lọc: 16/06/2023
                      </b>
                    </div>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      margin: "0",
                      width: "calc(100% - 1636px)",
                      top: "5px",
                      right: "10px",
                      left: "1626px",
                      borderRadius: "3px",
                      backgroundColor: "#20232e",
                      border: "1px solid #323643",
                      boxSizing: "border-box",
                      height: "25px",
                      zIndex: "1",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: "3.25px",
                        left: "11px",
                        lineHeight: "16.5px",
                      }}
                    >
                      1/1 tiêu chí hiển thị
                    </div>
                    <img
                      style={{
                        position: "absolute",
                        top: "calc(50% - 6px)",
                        left: "109.45px",
                        width: "12px",
                        height: "12px",
                      }}
                      alt=""
                      src="/iicomaskgroup15.svg"
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      zIndex: "0",
                      color: "#fff",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        padding: "0px 0px 1px",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        zIndex: "1",
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "#232632",
                          display: "flex",
                          flexDirection: "row",
                          padding: "5px 689.7899780273438px 5px 689.780029296875px",
                          alignItems: "flex-start",
                          justifyContent: "flex-start",
                          gap: "5.01px",
                          zIndex: "1",
                        }}
                      >
                        <div
                          style={{
                            borderRadius: "25px",
                            backgroundColor: "#1d1f2a",
                            border: "1px solid #323643",
                            display: "flex",
                            flexDirection: "row",
                            padding: "6px 7.489990234375px 6px 1px",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            gap: "6.55px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              padding: "0px 9.989997863769531px 0px 10px",
                              alignItems: "center",
                              justifyContent: "flex-start",
                              gap: "4.66px",
                            }}
                          >
                            <div style={{ position: "relative" }}>RSI14</div>
                            <img
                              style={{
                                position: "relative",
                                width: "12px",
                                height: "12px",
                              }}
                              alt=""
                              src="/iicomaskgroup16.svg"
                            />
                            <div style={{ position: "relative" }}>70</div>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                padding: "0px 0.0800018310546875px 0px 0px",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <i style={{ position: "relative" }}>(1 ngày)</i>
                            </div>
                          </div>
                          <img
                            style={{
                              position: "relative",
                              width: "12px",
                              height: "12px",
                            }}
                            alt=""
                            src="/iicomaskgroup17.svg"
                          />
                        </div>
                        <div
                          style={{
                            borderRadius: "25px",
                            backgroundColor: "#1d1f2a",
                            border: "1px solid #323643",
                            display: "flex",
                            flexDirection: "row",
                            padding: "6px 7.5099945068359375px 6px 1px",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            gap: "6.79px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              padding: "0px 10px",
                              alignItems: "center",
                              justifyContent: "flex-start",
                              gap: "4.65px",
                            }}
                          >
                            <div style={{ position: "relative" }}>RSI14</div>
                            <img
                              style={{
                                position: "relative",
                                width: "12px",
                                height: "12px",
                              }}
                              alt=""
                              src="/iicomaskgroup18.svg"
                            />
                            <div style={{ position: "relative" }}>Vùng quá mua</div>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                padding: "0px 0.0800018310546875px 0px 0px",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <i style={{ position: "relative" }}>(1 ngày)</i>
                            </div>
                          </div>
                          <img
                            style={{
                              position: "relative",
                              width: "12px",
                              height: "12px",
                            }}
                            alt=""
                            src="/iicomaskgroup19.svg"
                          />
                        </div>
                      </div>
                      <div
                        style={{
                          borderRadius: "3px",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "flex-start",
                          justifyContent: "flex-start",
                          zIndex: "0",
                        }}
                      >
                        <div
                          style={{
                            borderRadius: "3px 0px 0px 3px",
                            backgroundColor: "#2d303d",
                            border: "1px solid #2d303d",
                            display: "flex",
                            flexDirection: "row",
                            padding: "3px 21.389999389648438px 3.5px 21.610000610351562px",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                            textAlign: "center",
                          }}
                        >
                          <div
                            style={{
                              position: "relative",
                              lineHeight: "16.5px",
                              textTransform: "uppercase",
                            }}
                          >
                            #
                          </div>
                        </div>
                        <div
                          style={{
                            backgroundColor: "#2d303d",
                            border: "1px solid #2d303d",
                            display: "flex",
                            flexDirection: "row",
                            padding: "3px 52px 3.5px 11px",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                            position: "relative",
                          }}
                        >
                          <div
                            style={{
                              position: "relative",
                              lineHeight: "16.5px",
                              textTransform: "uppercase",
                              zIndex: "0",
                            }}
                          >
                            Mã
                          </div>
                          <div
                            style={{
                              position: "absolute",
                              margin: "0",
                              width: "calc(100% - 2px)",
                              right: "1px",
                              bottom: "1px",
                              left: "1px",
                              backgroundColor: "#856dfc",
                              height: "1px",
                              zIndex: "1",
                            }}
                          />
                        </div>
                        <div
                          style={{
                            backgroundColor: "#2d303d",
                            border: "1px solid #2d303d",
                            display: "flex",
                            flexDirection: "row",
                            padding: "3px 777.5px 3.5px 11px",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                          }}
                        >
                          <div
                            style={{
                              position: "relative",
                              lineHeight: "16.5px",
                              textTransform: "uppercase",
                            }}
                          >
                            Sàn
                          </div>
                        </div>
                        <div
                          style={{
                            borderRadius: "0px 3px 3px 0px",
                            backgroundColor: "#2d303d",
                            border: "1px solid #2d303d",
                            display: "flex",
                            flexDirection: "row",
                            padding: "3px 11.47998046875px 3.5px 675.02001953125px",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                            textAlign: "right",
                          }}
                        >
                          <div
                            style={{
                              position: "relative",
                              lineHeight: "16.5px",
                              textTransform: "uppercase",
                            }}
                          >
                            Giá trị RSI(14) (1 ngày)
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        position: "relative",
                        width: "1751px",
                        height: "408px",
                        overflow: "hidden",
                        flexShrink: "0",
                        zIndex: "0",
                        fontSize: "12px",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          top: "0px",
                          left: "0px",
                          width: "1751px",
                          height: "408px",
                          overflow: "hidden",
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                            borderRadius: "3px",
                            width: "1751px",
                            height: "24px",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              top: "5px",
                              left: "21.63px",
                              lineHeight: "18px",
                              textAlign: "center",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: "6.95px",
                              height: "14px",
                            }}
                          >
                            1
                          </div>
                          <b
                            style={{
                              position: "absolute",
                              top: "5px",
                              left: "60px",
                              lineHeight: "18px",
                              display: "flex",
                              alignItems: "center",
                              width: "23.73px",
                              height: "14px",
                            }}
                          >
                            AAS
                          </b>
                          <div
                            style={{
                              position: "absolute",
                              top: "0px",
                              left: "130px",
                              overflow: "hidden",
                              display: "flex",
                              flexDirection: "row",
                              padding: "3px 753.6099853515625px 3px 5px",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                            }}
                          >
                            <div
                              style={{
                                overflow: "hidden",
                                display: "flex",
                                flexDirection: "row",
                                padding: "0px 4.8899993896484375px 0px 5px",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  position: "relative",
                                  lineHeight: "18px",
                                }}
                              >
                                UPCOM
                              </div>
                            </div>
                          </div>
                          <div
                            style={{
                              position: "absolute",
                              top: "0px",
                              left: "940.5px",
                              overflow: "hidden",
                              display: "flex",
                              flexDirection: "row",
                              padding: "3px 4.989994049072266px 3px 765.3800048828125px",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              textAlign: "right",
                            }}
                          >
                            <div
                              style={{
                                overflow: "hidden",
                                display: "flex",
                                flexDirection: "row",
                                padding: "0px 5.130001068115234px 0px 4px",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  position: "relative",
                                  lineHeight: "18px",
                                }}
                              >
                                71.68
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            top: "24px",
                            left: "0px",
                            borderRadius: "3px",
                            backgroundColor: "#323643",
                            width: "1751px",
                            height: "24px",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              top: "5px",
                              left: "21.63px",
                              lineHeight: "18px",
                              textAlign: "center",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: "6.95px",
                              height: "14px",
                            }}
                          >
                            2
                          </div>
                          <b
                            style={{
                              position: "absolute",
                              top: "5px",
                              left: "60px",
                              lineHeight: "18px",
                              display: "flex",
                              alignItems: "center",
                              width: "26.75px",
                              height: "14px",
                            }}
                          >
                            CMG
                          </b>
                          <div
                            style={{
                              position: "absolute",
                              top: "0px",
                              left: "130px",
                              overflow: "hidden",
                              display: "flex",
                              flexDirection: "row",
                              padding: "3px 772.2999877929688px 3px 5px",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                            }}
                          >
                            <div
                              style={{
                                overflow: "hidden",
                                display: "flex",
                                flexDirection: "row",
                                padding: "0px 4.200000762939453px 0px 5px",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  position: "relative",
                                  lineHeight: "18px",
                                }}
                              >
                                HSX
                              </div>
                            </div>
                          </div>
                          <div
                            style={{
                              position: "absolute",
                              top: "0px",
                              left: "940.5px",
                              overflow: "hidden",
                              display: "flex",
                              flexDirection: "row",
                              padding: "3px 4.989994049072266px 3px 765.3800048828125px",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              textAlign: "right",
                            }}
                          >
                            <div
                              style={{
                                overflow: "hidden",
                                display: "flex",
                                flexDirection: "row",
                                padding: "0px 5.130001068115234px 0px 4px",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  position: "relative",
                                  lineHeight: "18px",
                                }}
                              >
                                70.14
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            top: "48px",
                            left: "0px",
                            borderRadius: "3px",
                            width: "1751px",
                            height: "24px",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              top: "5px",
                              left: "21.63px",
                              lineHeight: "18px",
                              textAlign: "center",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: "6.95px",
                              height: "14px",
                            }}
                          >
                            3
                          </div>
                          <b
                            style={{
                              position: "absolute",
                              top: "5px",
                              left: "60px",
                              lineHeight: "18px",
                              display: "flex",
                              alignItems: "center",
                              width: "21.89px",
                              height: "14px",
                            }}
                          >
                            CTF
                          </b>
                          <div
                            style={{
                              position: "absolute",
                              top: "0px",
                              left: "130px",
                              overflow: "hidden",
                              display: "flex",
                              flexDirection: "row",
                              padding: "3px 772.2999877929688px 3px 5px",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                            }}
                          >
                            <div
                              style={{
                                overflow: "hidden",
                                display: "flex",
                                flexDirection: "row",
                                padding: "0px 4.200000762939453px 0px 5px",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  position: "relative",
                                  lineHeight: "18px",
                                }}
                              >
                                HSX
                              </div>
                            </div>
                          </div>
                          <div
                            style={{
                              position: "absolute",
                              top: "0px",
                              left: "940.5px",
                              overflow: "hidden",
                              display: "flex",
                              flexDirection: "row",
                              padding: "3px 4.989994049072266px 3px 765.3800048828125px",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              textAlign: "right",
                            }}
                          >
                            <div
                              style={{
                                overflow: "hidden",
                                display: "flex",
                                flexDirection: "row",
                                padding: "0px 5.130001068115234px 0px 4px",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  position: "relative",
                                  lineHeight: "18px",
                                }}
                              >
                                70.67
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            top: "72px",
                            left: "0px",
                            borderRadius: "3px",
                            backgroundColor: "#323643",
                            width: "1751px",
                            height: "24px",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              top: "5px",
                              left: "21.63px",
                              lineHeight: "18px",
                              textAlign: "center",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: "6.95px",
                              height: "14px",
                            }}
                          >
                            4
                          </div>
                          <b
                            style={{
                              position: "absolute",
                              top: "5px",
                              left: "60px",
                              lineHeight: "18px",
                              display: "flex",
                              alignItems: "center",
                              width: "22.64px",
                              height: "14px",
                            }}
                          >
                            DP3
                          </b>
                          <div
                            style={{
                              position: "absolute",
                              top: "0px",
                              left: "130px",
                              overflow: "hidden",
                              display: "flex",
                              flexDirection: "row",
                              padding: "3px 770.77001953125px 3px 5px",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                            }}
                          >
                            <div
                              style={{
                                overflow: "hidden",
                                display: "flex",
                                flexDirection: "row",
                                padding: "0px 4.729999542236328px 0px 5px",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  position: "relative",
                                  lineHeight: "18px",
                                }}
                              >
                                HNX
                              </div>
                            </div>
                          </div>
                          <div
                            style={{
                              position: "absolute",
                              top: "0px",
                              left: "940.5px",
                              overflow: "hidden",
                              display: "flex",
                              flexDirection: "row",
                              padding: "3px 4.989994049072266px 3px 765.3800048828125px",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              textAlign: "right",
                            }}
                          >
                            <div
                              style={{
                                overflow: "hidden",
                                display: "flex",
                                flexDirection: "row",
                                padding: "0px 5.130001068115234px 0px 4px",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  position: "relative",
                                  lineHeight: "18px",
                                }}
                              >
                                70.05
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            top: "96px",
                            left: "0px",
                            borderRadius: "3px",
                            width: "1751px",
                            height: "24px",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              top: "5px",
                              left: "21.63px",
                              lineHeight: "18px",
                              textAlign: "center",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: "6.95px",
                              height: "14px",
                            }}
                          >
                            5
                          </div>
                          <b
                            style={{
                              position: "absolute",
                              top: "5px",
                              left: "60px",
                              lineHeight: "18px",
                              display: "flex",
                              alignItems: "center",
                              width: "24.83px",
                              height: "14px",
                            }}
                          >
                            HBH
                          </b>
                          <div
                            style={{
                              position: "absolute",
                              top: "0px",
                              left: "130px",
                              overflow: "hidden",
                              display: "flex",
                              flexDirection: "row",
                              padding: "3px 753.6099853515625px 3px 5px",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                            }}
                          >
                            <div
                              style={{
                                overflow: "hidden",
                                display: "flex",
                                flexDirection: "row",
                                padding: "0px 4.8899993896484375px 0px 5px",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  position: "relative",
                                  lineHeight: "18px",
                                }}
                              >
                                UPCOM
                              </div>
                            </div>
                          </div>
                          <div
                            style={{
                              position: "absolute",
                              top: "0px",
                              left: "940.5px",
                              overflow: "hidden",
                              display: "flex",
                              flexDirection: "row",
                              padding: "3px 4.989994049072266px 3px 765.3800048828125px",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              textAlign: "right",
                            }}
                          >
                            <div
                              style={{
                                overflow: "hidden",
                                display: "flex",
                                flexDirection: "row",
                                padding: "0px 5.130001068115234px 0px 4px",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  position: "relative",
                                  lineHeight: "18px",
                                }}
                              >
                                71.01
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            top: "120px",
                            left: "0px",
                            borderRadius: "3px",
                            backgroundColor: "#323643",
                            width: "1751px",
                            height: "24px",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              top: "5px",
                              left: "21.63px",
                              lineHeight: "18px",
                              textAlign: "center",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: "6.95px",
                              height: "14px",
                            }}
                          >
                            6
                          </div>
                          <b
                            style={{
                              position: "absolute",
                              top: "5px",
                              left: "60px",
                              lineHeight: "18px",
                              display: "flex",
                              alignItems: "center",
                              width: "24.61px",
                              height: "14px",
                            }}
                          >
                            HPG
                          </b>
                          <div
                            style={{
                              position: "absolute",
                              top: "0px",
                              left: "130px",
                              overflow: "hidden",
                              display: "flex",
                              flexDirection: "row",
                              padding: "3px 772.2999877929688px 3px 5px",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                            }}
                          >
                            <div
                              style={{
                                overflow: "hidden",
                                display: "flex",
                                flexDirection: "row",
                                padding: "0px 4.200000762939453px 0px 5px",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  position: "relative",
                                  lineHeight: "18px",
                                }}
                              >
                                HSX
                              </div>
                            </div>
                          </div>
                          <div
                            style={{
                              position: "absolute",
                              top: "0px",
                              left: "940.5px",
                              overflow: "hidden",
                              display: "flex",
                              flexDirection: "row",
                              padding: "3px 4.989994049072266px 3px 765.3800048828125px",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              textAlign: "right",
                            }}
                          >
                            <div
                              style={{
                                overflow: "hidden",
                                display: "flex",
                                flexDirection: "row",
                                padding: "0px 5.130001068115234px 0px 4px",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  position: "relative",
                                  lineHeight: "18px",
                                }}
                              >
                                71.40
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            top: "144px",
                            left: "0px",
                            borderRadius: "3px",
                            width: "1751px",
                            height: "24px",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              top: "5px",
                              left: "21.63px",
                              lineHeight: "18px",
                              textAlign: "center",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: "6.95px",
                              height: "14px",
                            }}
                          >
                            7
                          </div>
                          <b
                            style={{
                              position: "absolute",
                              top: "5px",
                              left: "60px",
                              lineHeight: "18px",
                              display: "flex",
                              alignItems: "center",
                              width: "23.11px",
                              height: "14px",
                            }}
                          >
                            KKC
                          </b>
                          <div
                            style={{
                              position: "absolute",
                              top: "0px",
                              left: "130px",
                              overflow: "hidden",
                              display: "flex",
                              flexDirection: "row",
                              padding: "3px 770.77001953125px 3px 5px",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                            }}
                          >
                            <div
                              style={{
                                overflow: "hidden",
                                display: "flex",
                                flexDirection: "row",
                                padding: "0px 4.729999542236328px 0px 5px",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  position: "relative",
                                  lineHeight: "18px",
                                }}
                              >
                                HNX
                              </div>
                            </div>
                          </div>
                          <div
                            style={{
                              position: "absolute",
                              top: "0px",
                              left: "940.5px",
                              overflow: "hidden",
                              display: "flex",
                              flexDirection: "row",
                              padding: "3px 4.989994049072266px 3px 765.3800048828125px",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              textAlign: "right",
                            }}
                          >
                            <div
                              style={{
                                overflow: "hidden",
                                display: "flex",
                                flexDirection: "row",
                                padding: "0px 5.130001068115234px 0px 4px",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  position: "relative",
                                  lineHeight: "18px",
                                }}
                              >
                                70.38
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            top: "168px",
                            left: "0px",
                            borderRadius: "3px",
                            backgroundColor: "#323643",
                            width: "1751px",
                            height: "24px",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              top: "5px",
                              left: "21.63px",
                              lineHeight: "18px",
                              textAlign: "center",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: "6.95px",
                              height: "14px",
                            }}
                          >
                            8
                          </div>
                          <b
                            style={{
                              position: "absolute",
                              top: "5px",
                              left: "60px",
                              lineHeight: "18px",
                              display: "flex",
                              alignItems: "center",
                              width: "24.87px",
                              height: "14px",
                            }}
                          >
                            LBM
                          </b>
                          <div
                            style={{
                              position: "absolute",
                              top: "0px",
                              left: "130px",
                              overflow: "hidden",
                              display: "flex",
                              flexDirection: "row",
                              padding: "3px 772.2999877929688px 3px 5px",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                            }}
                          >
                            <div
                              style={{
                                overflow: "hidden",
                                display: "flex",
                                flexDirection: "row",
                                padding: "0px 4.200000762939453px 0px 5px",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  position: "relative",
                                  lineHeight: "18px",
                                }}
                              >
                                HSX
                              </div>
                            </div>
                          </div>
                          <div
                            style={{
                              position: "absolute",
                              top: "0px",
                              left: "940.5px",
                              overflow: "hidden",
                              display: "flex",
                              flexDirection: "row",
                              padding: "3px 4.989994049072266px 3px 765.3800048828125px",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              textAlign: "right",
                            }}
                          >
                            <div
                              style={{
                                overflow: "hidden",
                                display: "flex",
                                flexDirection: "row",
                                padding: "0px 5.130001068115234px 0px 4px",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  position: "relative",
                                  lineHeight: "18px",
                                }}
                              >
                                72.52
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            top: "192px",
                            left: "0px",
                            borderRadius: "3px",
                            width: "1751px",
                            height: "24px",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              top: "5px",
                              left: "21.63px",
                              lineHeight: "18px",
                              textAlign: "center",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: "6.95px",
                              height: "14px",
                            }}
                          >
                            9
                          </div>
                          <b
                            style={{
                              position: "absolute",
                              top: "5px",
                              left: "60px",
                              lineHeight: "18px",
                              display: "flex",
                              alignItems: "center",
                              width: "25.34px",
                              height: "14px",
                            }}
                          >
                            MTA
                          </b>
                          <div
                            style={{
                              position: "absolute",
                              top: "0px",
                              left: "130px",
                              overflow: "hidden",
                              display: "flex",
                              flexDirection: "row",
                              padding: "3px 753.6099853515625px 3px 5px",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                            }}
                          >
                            <div
                              style={{
                                overflow: "hidden",
                                display: "flex",
                                flexDirection: "row",
                                padding: "0px 4.8899993896484375px 0px 5px",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  position: "relative",
                                  lineHeight: "18px",
                                }}
                              >
                                UPCOM
                              </div>
                            </div>
                          </div>
                          <div
                            style={{
                              position: "absolute",
                              top: "0px",
                              left: "940.5px",
                              overflow: "hidden",
                              display: "flex",
                              flexDirection: "row",
                              padding: "3px 4.989994049072266px 3px 765.3800048828125px",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              textAlign: "right",
                            }}
                          >
                            <div
                              style={{
                                overflow: "hidden",
                                display: "flex",
                                flexDirection: "row",
                                padding: "0px 5.130001068115234px 0px 4px",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  position: "relative",
                                  lineHeight: "18px",
                                }}
                              >
                                70.51
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            top: "216px",
                            left: "0px",
                            borderRadius: "3px",
                            backgroundColor: "#323643",
                            width: "1751px",
                            height: "24px",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              top: "5px",
                              left: "18.25px",
                              lineHeight: "18px",
                              textAlign: "center",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: "13.68px",
                              height: "14px",
                            }}
                          >
                            10
                          </div>
                          <b
                            style={{
                              position: "absolute",
                              top: "5px",
                              left: "60px",
                              lineHeight: "18px",
                              display: "flex",
                              alignItems: "center",
                              width: "24.83px",
                              height: "14px",
                            }}
                          >
                            OCH
                          </b>
                          <div
                            style={{
                              position: "absolute",
                              top: "0px",
                              left: "130px",
                              overflow: "hidden",
                              display: "flex",
                              flexDirection: "row",
                              padding: "3px 770.77001953125px 3px 5px",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                            }}
                          >
                            <div
                              style={{
                                overflow: "hidden",
                                display: "flex",
                                flexDirection: "row",
                                padding: "0px 4.729999542236328px 0px 5px",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  position: "relative",
                                  lineHeight: "18px",
                                }}
                              >
                                HNX
                              </div>
                            </div>
                          </div>
                          <div
                            style={{
                              position: "absolute",
                              top: "0px",
                              left: "940.5px",
                              overflow: "hidden",
                              display: "flex",
                              flexDirection: "row",
                              padding: "3px 4.989994049072266px 3px 765.3800048828125px",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              textAlign: "right",
                            }}
                          >
                            <div
                              style={{
                                overflow: "hidden",
                                display: "flex",
                                flexDirection: "row",
                                padding: "0px 5.130001068115234px 0px 4px",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  position: "relative",
                                  lineHeight: "18px",
                                }}
                              >
                                72.15
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            top: "240px",
                            left: "0px",
                            borderRadius: "3px",
                            width: "1751px",
                            height: "24px",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              top: "5px",
                              left: "18.25px",
                              lineHeight: "18px",
                              textAlign: "center",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: "13.68px",
                              height: "14px",
                            }}
                          >
                            11
                          </div>
                          <b
                            style={{
                              position: "absolute",
                              top: "5px",
                              left: "60px",
                              lineHeight: "18px",
                              display: "flex",
                              alignItems: "center",
                              width: "24.79px",
                              height: "14px",
                            }}
                          >
                            SJM
                          </b>
                          <div
                            style={{
                              position: "absolute",
                              top: "0px",
                              left: "130px",
                              overflow: "hidden",
                              display: "flex",
                              flexDirection: "row",
                              padding: "3px 753.6099853515625px 3px 5px",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                            }}
                          >
                            <div
                              style={{
                                overflow: "hidden",
                                display: "flex",
                                flexDirection: "row",
                                padding: "0px 4.8899993896484375px 0px 5px",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  position: "relative",
                                  lineHeight: "18px",
                                }}
                              >
                                UPCOM
                              </div>
                            </div>
                          </div>
                          <div
                            style={{
                              position: "absolute",
                              top: "0px",
                              left: "940.5px",
                              overflow: "hidden",
                              display: "flex",
                              flexDirection: "row",
                              padding: "3px 4.989994049072266px 3px 765.3800048828125px",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              textAlign: "right",
                            }}
                          >
                            <div
                              style={{
                                overflow: "hidden",
                                display: "flex",
                                flexDirection: "row",
                                padding: "0px 5.130001068115234px 0px 4px",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  position: "relative",
                                  lineHeight: "18px",
                                }}
                              >
                                70.09
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            top: "264px",
                            left: "0px",
                            borderRadius: "3px",
                            backgroundColor: "#323643",
                            width: "1751px",
                            height: "24px",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              top: "5px",
                              left: "18.25px",
                              lineHeight: "18px",
                              textAlign: "center",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: "13.68px",
                              height: "14px",
                            }}
                          >
                            12
                          </div>
                          <b
                            style={{
                              position: "absolute",
                              top: "5px",
                              left: "60px",
                              lineHeight: "18px",
                              display: "flex",
                              alignItems: "center",
                              width: "23.17px",
                              height: "14px",
                            }}
                          >
                            TDP
                          </b>
                          <div
                            style={{
                              position: "absolute",
                              top: "0px",
                              left: "130px",
                              overflow: "hidden",
                              display: "flex",
                              flexDirection: "row",
                              padding: "3px 772.2999877929688px 3px 5px",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                            }}
                          >
                            <div
                              style={{
                                overflow: "hidden",
                                display: "flex",
                                flexDirection: "row",
                                padding: "0px 4.200000762939453px 0px 5px",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  position: "relative",
                                  lineHeight: "18px",
                                }}
                              >
                                HSX
                              </div>
                            </div>
                          </div>
                          <div
                            style={{
                              position: "absolute",
                              top: "0px",
                              left: "940.5px",
                              overflow: "hidden",
                              display: "flex",
                              flexDirection: "row",
                              padding: "3px 4.989994049072266px 3px 765.3800048828125px",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              textAlign: "right",
                            }}
                          >
                            <div
                              style={{
                                overflow: "hidden",
                                display: "flex",
                                flexDirection: "row",
                                padding: "0px 5.130001068115234px 0px 4px",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  position: "relative",
                                  lineHeight: "18px",
                                }}
                              >
                                89.18
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            top: "288px",
                            left: "0px",
                            borderRadius: "3px",
                            width: "1751px",
                            height: "24px",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              top: "5px",
                              left: "18.25px",
                              lineHeight: "18px",
                              textAlign: "center",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: "13.68px",
                              height: "14px",
                            }}
                          >
                            13
                          </div>
                          <b
                            style={{
                              position: "absolute",
                              top: "5px",
                              left: "60px",
                              lineHeight: "18px",
                              display: "flex",
                              alignItems: "center",
                              width: "24.28px",
                              height: "14px",
                            }}
                          >
                            THG
                          </b>
                          <div
                            style={{
                              position: "absolute",
                              top: "0px",
                              left: "130px",
                              overflow: "hidden",
                              display: "flex",
                              flexDirection: "row",
                              padding: "3px 772.2999877929688px 3px 5px",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                            }}
                          >
                            <div
                              style={{
                                overflow: "hidden",
                                display: "flex",
                                flexDirection: "row",
                                padding: "0px 4.200000762939453px 0px 5px",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  position: "relative",
                                  lineHeight: "18px",
                                }}
                              >
                                HSX
                              </div>
                            </div>
                          </div>
                          <div
                            style={{
                              position: "absolute",
                              top: "0px",
                              left: "940.5px",
                              overflow: "hidden",
                              display: "flex",
                              flexDirection: "row",
                              padding: "3px 4.989994049072266px 3px 765.3800048828125px",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              textAlign: "right",
                            }}
                          >
                            <div
                              style={{
                                overflow: "hidden",
                                display: "flex",
                                flexDirection: "row",
                                padding: "0px 5.130001068115234px 0px 4px",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  position: "relative",
                                  lineHeight: "18px",
                                }}
                              >
                                71.05
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            top: "312px",
                            left: "0px",
                            borderRadius: "3px",
                            backgroundColor: "#323643",
                            width: "1751px",
                            height: "24px",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              top: "5px",
                              left: "18.25px",
                              lineHeight: "18px",
                              textAlign: "center",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: "13.68px",
                              height: "14px",
                            }}
                          >
                            14
                          </div>
                          <b
                            style={{
                              position: "absolute",
                              top: "5px",
                              left: "60px",
                              lineHeight: "18px",
                              display: "flex",
                              alignItems: "center",
                              width: "21.93px",
                              height: "14px",
                            }}
                          >
                            TLG
                          </b>
                          <div
                            style={{
                              position: "absolute",
                              top: "0px",
                              left: "130px",
                              overflow: "hidden",
                              display: "flex",
                              flexDirection: "row",
                              padding: "3px 772.2999877929688px 3px 5px",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                            }}
                          >
                            <div
                              style={{
                                overflow: "hidden",
                                display: "flex",
                                flexDirection: "row",
                                padding: "0px 4.200000762939453px 0px 5px",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  position: "relative",
                                  lineHeight: "18px",
                                }}
                              >
                                HSX
                              </div>
                            </div>
                          </div>
                          <div
                            style={{
                              position: "absolute",
                              top: "0px",
                              left: "940.5px",
                              overflow: "hidden",
                              display: "flex",
                              flexDirection: "row",
                              padding: "3px 4.989994049072266px 3px 765.3800048828125px",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              textAlign: "right",
                            }}
                          >
                            <div
                              style={{
                                overflow: "hidden",
                                display: "flex",
                                flexDirection: "row",
                                padding: "0px 5.130001068115234px 0px 4px",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  position: "relative",
                                  lineHeight: "18px",
                                }}
                              >
                                70.25
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            top: "336px",
                            left: "0px",
                            borderRadius: "3px",
                            width: "1751px",
                            height: "24px",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              top: "5px",
                              left: "18.25px",
                              lineHeight: "18px",
                              textAlign: "center",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: "13.68px",
                              height: "14px",
                            }}
                          >
                            15
                          </div>
                          <b
                            style={{
                              position: "absolute",
                              top: "5px",
                              left: "60px",
                              lineHeight: "18px",
                              display: "flex",
                              alignItems: "center",
                              width: "19.28px",
                              height: "14px",
                            }}
                          >
                            VIX
                          </b>
                          <div
                            style={{
                              position: "absolute",
                              top: "0px",
                              left: "130px",
                              overflow: "hidden",
                              display: "flex",
                              flexDirection: "row",
                              padding: "3px 772.2999877929688px 3px 5px",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                            }}
                          >
                            <div
                              style={{
                                overflow: "hidden",
                                display: "flex",
                                flexDirection: "row",
                                padding: "0px 4.200000762939453px 0px 5px",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  position: "relative",
                                  lineHeight: "18px",
                                }}
                              >
                                HSX
                              </div>
                            </div>
                          </div>
                          <div
                            style={{
                              position: "absolute",
                              top: "0px",
                              left: "940.5px",
                              overflow: "hidden",
                              display: "flex",
                              flexDirection: "row",
                              padding: "3px 4.989994049072266px 3px 765.3800048828125px",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              textAlign: "right",
                            }}
                          >
                            <div
                              style={{
                                overflow: "hidden",
                                display: "flex",
                                flexDirection: "row",
                                padding: "0px 5.130001068115234px 0px 4px",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  position: "relative",
                                  lineHeight: "18px",
                                }}
                              >
                                70.83
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            top: "360px",
                            left: "0px",
                            borderRadius: "3px",
                            backgroundColor: "#323643",
                            width: "1751px",
                            height: "24px",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              top: "5px",
                              left: "18.25px",
                              lineHeight: "18px",
                              textAlign: "center",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: "13.68px",
                              height: "14px",
                            }}
                          >
                            16
                          </div>
                          <b
                            style={{
                              position: "absolute",
                              top: "5px",
                              left: "60px",
                              lineHeight: "18px",
                              display: "flex",
                              alignItems: "center",
                              width: "25.93px",
                              height: "14px",
                            }}
                          >
                            VMS
                          </b>
                          <div
                            style={{
                              position: "absolute",
                              top: "0px",
                              left: "130px",
                              overflow: "hidden",
                              display: "flex",
                              flexDirection: "row",
                              padding: "3px 770.77001953125px 3px 5px",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                            }}
                          >
                            <div
                              style={{
                                overflow: "hidden",
                                display: "flex",
                                flexDirection: "row",
                                padding: "0px 4.729999542236328px 0px 5px",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  position: "relative",
                                  lineHeight: "18px",
                                }}
                              >
                                HNX
                              </div>
                            </div>
                          </div>
                          <div
                            style={{
                              position: "absolute",
                              top: "0px",
                              left: "940.5px",
                              overflow: "hidden",
                              display: "flex",
                              flexDirection: "row",
                              padding: "3px 4.989994049072266px 3px 765.3800048828125px",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              textAlign: "right",
                            }}
                          >
                            <div
                              style={{
                                overflow: "hidden",
                                display: "flex",
                                flexDirection: "row",
                                padding: "0px 5.130001068115234px 0px 4px",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  position: "relative",
                                  lineHeight: "18px",
                                }}
                              >
                                72.14
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            top: "384px",
                            left: "0px",
                            borderRadius: "3px",
                            width: "1751px",
                            height: "24px",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              top: "5px",
                              left: "18.25px",
                              lineHeight: "18px",
                              textAlign: "center",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: "13.68px",
                              height: "14px",
                            }}
                          >
                            17
                          </div>
                          <b
                            style={{
                              position: "absolute",
                              top: "5px",
                              left: "60px",
                              lineHeight: "18px",
                              display: "flex",
                              alignItems: "center",
                              width: "22.84px",
                              height: "14px",
                            }}
                          >
                            VTA
                          </b>
                          <div
                            style={{
                              position: "absolute",
                              top: "0px",
                              left: "130px",
                              overflow: "hidden",
                              display: "flex",
                              flexDirection: "row",
                              padding: "3px 753.6099853515625px 3px 5px",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                            }}
                          >
                            <div
                              style={{
                                overflow: "hidden",
                                display: "flex",
                                flexDirection: "row",
                                padding: "0px 4.8899993896484375px 0px 5px",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  position: "relative",
                                  lineHeight: "18px",
                                }}
                              >
                                UPCOM
                              </div>
                            </div>
                          </div>
                          <div
                            style={{
                              position: "absolute",
                              top: "0px",
                              left: "940.5px",
                              overflow: "hidden",
                              display: "flex",
                              flexDirection: "row",
                              padding: "3px 4.989994049072266px 3px 765.3800048828125px",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              textAlign: "right",
                            }}
                          >
                            <div
                              style={{
                                overflow: "hidden",
                                display: "flex",
                                flexDirection: "row",
                                padding: "0px 5.130001068115234px 0px 4px",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  position: "relative",
                                  lineHeight: "18px",
                                }}
                              >
                                70.53
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                top: "0px",
                left: "50px",
                borderRadius: "5px",
                backgroundColor: "#1d1f2a",
                width: "1791px",
                height: "10px",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "50px",
                height: "887px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  height: "100%",
                  top: "0px",
                  bottom: "0px",
                  left: "-400px",
                  width: "350px",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "297px",
                    backgroundColor: "rgba(255, 255, 255, 0)",
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
                    width: "50px",
                    height: "887px",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    borderRadius: "5px 0px 0px 0px",
                    backgroundColor: "#181a25",
                    width: "350px",
                    height: "887px",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "5px",
                    display: "flex",
                    flexDirection: "row",
                    padding: "10.5px 279px 10.5px 0px",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      lineHeight: "24px",
                      zIndex: "0",
                    }}
                  >
                    Chức năng
                  </div>
                  <div
                    style={{
                      margin: "0",
                      position: "absolute",
                      height: "calc(100% - 21px)",
                      width: "calc(100% - 295px)",
                      top: "0px",
                      right: "0px",
                      bottom: "21px",
                      left: "295px",
                      display: "flex",
                      flexDirection: "row",
                      padding: "10px 0px 0px 10px",
                      boxSizing: "border-box",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      gap: "10px",
                      zIndex: "1",
                    }}
                  >
                    <img
                      style={{
                        position: "relative",
                        width: "14px",
                        height: "14px",
                      }}
                      alt=""
                      src="/ipinmaskgroup.svg"
                    />
                    <img
                      style={{
                        position: "relative",
                        width: "11px",
                        height: "11px",
                      }}
                      alt=""
                      src="/iclosemaskgroup.svg"
                    />
                  </div>
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: "45px",
                    left: "5px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "10px",
                    fontSize: "11px",
                    color: "#9197b1",
                    fontFamily: "Roboto",
                  }}
                >
                  <div
                    style={{
                      borderRadius: "3px",
                      backgroundColor: "#232632",
                      border: "1px solid #323643",
                      display: "flex",
                      flexDirection: "row",
                      padding: "1px",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      position: "relative",
                      zIndex: "1",
                    }}
                  >
                    <div
                      style={{
                        flex: "1",
                        position: "relative",
                        height: "33px",
                        overflow: "hidden",
                        zIndex: "0",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          height: "calc(100% - 15.5px)",
                          width: "calc(100% - 235px)",
                          top: "7.25px",
                          right: "227px",
                          bottom: "8.25px",
                          left: "8px",
                          overflow: "hidden",
                          display: "flex",
                          flexDirection: "row",
                          padding: "0px 0px 0.5px",
                          boxSizing: "border-box",
                          alignItems: "flex-start",
                          justifyContent: "flex-start",
                        }}
                      >
                        <div
                          style={{ position: "relative", lineHeight: "16.5px" }}
                        >{`Tìm Mã & Chức năng`}</div>
                      </div>
                    </div>
                    <img
                      style={{
                        position: "absolute",
                        margin: "0",
                        top: "10px",
                        right: "11px",
                        width: "15px",
                        height: "15px",
                        zIndex: "1",
                      }}
                      alt=""
                      src="/iicosearchmaskgroup.svg"
                    />
                  </div>
                  <div
                    style={{
                      position: "relative",
                      width: "350px",
                      height: "792px",
                      overflow: "hidden",
                      flexShrink: "0",
                      zIndex: "0",
                      fontSize: "12px",
                      color: "#fff",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        height: "calc(100% + 18px)",
                        width: "calc(100% + 18px)",
                        top: "0px",
                        right: "-18px",
                        bottom: "-18px",
                        left: "0px",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          top: "0px",
                          left: "0px",
                          width: "340px",
                          height: "1012px",
                          overflow: "hidden",
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                            width: "340px",
                            height: "1012px",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              top: "0px",
                              left: "0px",
                              borderBottom: "1px solid #323643",
                              boxSizing: "border-box",
                              width: "340px",
                              height: "36px",
                            }}
                          >
                            <div
                              style={{
                                position: "absolute",
                                top: "0px",
                                left: "0px",
                                display: "flex",
                                flexDirection: "row",
                                padding: "8.5px 247px 8.5px 25px",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <img
                                style={{
                                  position: "absolute",
                                  margin: "0",
                                  top: "8.5px",
                                  left: "0px",
                                  width: "15px",
                                  height: "15px",
                                  zIndex: "0",
                                }}
                                alt=""
                                src="/imetismenuiconmaskgroup.svg"
                              />
                              <b
                                style={{
                                  position: "relative",
                                  lineHeight: "18px",
                                  textTransform: "uppercase",
                                  zIndex: "1",
                                }}
                              >
                                Trang chủ
                              </b>
                              <div
                                style={{
                                  margin: "0",
                                  position: "absolute",
                                  height: "calc(100% - 19.5px)",
                                  width: "calc(100% - 297.97px)",
                                  top: "10px",
                                  right: "0px",
                                  bottom: "9.5px",
                                  left: "297.97px",
                                  borderRadius: "3px",
                                  backgroundColor: "#232632",
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "1px 4.029998779296875px 0.5px 5px",
                                  boxSizing: "border-box",
                                  alignItems: "flex-start",
                                  justifyContent: "flex-start",
                                  zIndex: "2",
                                  fontSize: "9px",
                                  color: "#9197b1",
                                }}
                              >
                                <b
                                  style={{
                                    position: "relative",
                                    lineHeight: "13.5px",
                                    textTransform: "uppercase",
                                  }}
                                >
                                  CTRL+0
                                </b>
                              </div>
                            </div>
                          </div>
                          <div
                            style={{
                              position: "absolute",
                              top: "36px",
                              left: "0px",
                              borderBottom: "1px solid #323643",
                              boxSizing: "border-box",
                              width: "340px",
                              height: "36px",
                            }}
                          >
                            <div
                              style={{
                                position: "absolute",
                                top: "0px",
                                left: "0px",
                                display: "flex",
                                flexDirection: "row",
                                padding: "8.5px 72px 8.5px 25px",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <img
                                style={{
                                  position: "absolute",
                                  margin: "0",
                                  top: "8.5px",
                                  left: "0px",
                                  width: "15px",
                                  height: "15px",
                                  zIndex: "0",
                                }}
                                alt=""
                                src="/imetismenuiconmaskgroup1.svg"
                              />
                              <b
                                style={{
                                  position: "relative",
                                  lineHeight: "18px",
                                  textTransform: "uppercase",
                                  zIndex: "1",
                                }}
                              >
                                Biểu đồ tương quan luân chuyển - RRG
                              </b>
                              <div
                                style={{
                                  margin: "0",
                                  position: "absolute",
                                  height: "calc(100% - 19.5px)",
                                  width: "calc(100% - 294.81px)",
                                  top: "10px",
                                  right: "0px",
                                  bottom: "9.5px",
                                  left: "294.81px",
                                  borderRadius: "3px",
                                  backgroundColor: "#232632",
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "1px 4.189998626708984px 0.5px 5px",
                                  boxSizing: "border-box",
                                  alignItems: "flex-start",
                                  justifyContent: "flex-start",
                                  zIndex: "2",
                                  fontSize: "9px",
                                  color: "#9197b1",
                                }}
                              >
                                <b
                                  style={{
                                    position: "relative",
                                    lineHeight: "13.5px",
                                    textTransform: "uppercase",
                                  }}
                                >
                                  SHIFT+0
                                </b>
                              </div>
                            </div>
                          </div>
                          <div
                            style={{
                              position: "absolute",
                              top: "72px",
                              left: "0px",
                              borderBottom: "1px solid #323643",
                              boxSizing: "border-box",
                              width: "340px",
                              height: "176px",
                            }}
                          >
                            <div
                              style={{
                                position: "absolute",
                                top: "0px",
                                left: "0px",
                                display: "flex",
                                flexDirection: "row",
                                padding: "8.5px 183px 8.5px 25px",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <img
                                style={{
                                  position: "absolute",
                                  margin: "0",
                                  top: "8.5px",
                                  left: "0px",
                                  width: "15px",
                                  height: "15px",
                                  zIndex: "0",
                                }}
                                alt=""
                                src="/imetismenuiconmaskgroup2.svg"
                              />
                              <b
                                style={{
                                  position: "relative",
                                  lineHeight: "18px",
                                  textTransform: "uppercase",
                                  zIndex: "1",
                                }}
                              >
                                Thống kê thị trường
                              </b>
                              <img
                                style={{
                                  position: "absolute",
                                  margin: "0",
                                  top: "13px",
                                  right: "0px",
                                  width: "9px",
                                  height: "9px",
                                  zIndex: "2",
                                }}
                                alt=""
                                src="/imetismenustateiconmaskgroup.svg"
                              />
                            </div>
                            <div
                              style={{
                                position: "absolute",
                                top: "35px",
                                left: "0px",
                                display: "flex",
                                flexDirection: "column",
                                padding: "0px 0px 0px 25px",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                                color: "#9197b1",
                              }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "5px 254px 5px 10px",
                                  alignItems: "flex-start",
                                  justifyContent: "flex-start",
                                  position: "relative",
                                }}
                              >
                                <img
                                  style={{
                                    position: "absolute",
                                    margin: "0",
                                    top: "10px",
                                    left: "0px",
                                    width: "6px",
                                    height: "6px",
                                    zIndex: "0",
                                  }}
                                  alt=""
                                  src="/imetismenuiconmaskgroup3.svg"
                                />
                                <div
                                  style={{
                                    position: "relative",
                                    lineHeight: "18px",
                                    fontWeight: "500",
                                    zIndex: "1",
                                  }}
                                >
                                  Tổng hợp
                                </div>
                                <div
                                  style={{
                                    margin: "0",
                                    position: "absolute",
                                    height: "calc(100% - 12.5px)",
                                    width: "calc(100% - 279.44px)",
                                    top: "7px",
                                    right: "0px",
                                    bottom: "5.5px",
                                    left: "279.44px",
                                    borderRadius: "3px",
                                    backgroundColor: "#232632",
                                    display: "flex",
                                    flexDirection: "row",
                                    padding: "1px 4.560001373291016px 0.5px 5px",
                                    boxSizing: "border-box",
                                    alignItems: "flex-start",
                                    justifyContent: "flex-start",
                                    zIndex: "2",
                                    fontSize: "9px",
                                  }}
                                >
                                  <div
                                    style={{
                                      position: "relative",
                                      lineHeight: "13.5px",
                                      textTransform: "uppercase",
                                      fontWeight: "500",
                                    }}
                                  >
                                    ALT+5
                                  </div>
                                </div>
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "5px 204px 5px 10px",
                                  alignItems: "flex-start",
                                  justifyContent: "flex-start",
                                  position: "relative",
                                }}
                              >
                                <img
                                  style={{
                                    position: "absolute",
                                    margin: "0",
                                    top: "10px",
                                    left: "0px",
                                    width: "6px",
                                    height: "6px",
                                    zIndex: "0",
                                  }}
                                  alt=""
                                  src="/imetismenuiconmaskgroup3.svg"
                                />
                                <div
                                  style={{
                                    position: "relative",
                                    lineHeight: "18px",
                                    fontWeight: "500",
                                    zIndex: "1",
                                  }}
                                >
                                  Cổ phiếu trọng yếu
                                </div>
                                <div
                                  style={{
                                    margin: "0",
                                    position: "absolute",
                                    height: "calc(100% - 12.5px)",
                                    width: "calc(100% - 279.44px)",
                                    top: "7px",
                                    right: "0px",
                                    bottom: "5.5px",
                                    left: "279.44px",
                                    borderRadius: "3px",
                                    backgroundColor: "#232632",
                                    display: "flex",
                                    flexDirection: "row",
                                    padding: "1px 4.560001373291016px 0.5px 5px",
                                    boxSizing: "border-box",
                                    alignItems: "flex-start",
                                    justifyContent: "flex-start",
                                    zIndex: "2",
                                    fontSize: "9px",
                                  }}
                                >
                                  <div
                                    style={{
                                      position: "relative",
                                      lineHeight: "13.5px",
                                      textTransform: "uppercase",
                                      fontWeight: "500",
                                    }}
                                  >
                                    ALT+6
                                  </div>
                                </div>
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "5px 152px 5px 10px",
                                  alignItems: "flex-start",
                                  justifyContent: "flex-start",
                                  position: "relative",
                                }}
                              >
                                <img
                                  style={{
                                    position: "absolute",
                                    margin: "0",
                                    top: "10px",
                                    left: "0px",
                                    width: "6px",
                                    height: "6px",
                                    zIndex: "0",
                                  }}
                                  alt=""
                                  src="/imetismenuiconmaskgroup3.svg"
                                />
                                <div
                                  style={{
                                    position: "relative",
                                    lineHeight: "18px",
                                    fontWeight: "500",
                                    zIndex: "1",
                                  }}
                                >
                                  Cập nhật kết quả kinh doanh
                                </div>
                                <div
                                  style={{
                                    margin: "0",
                                    position: "absolute",
                                    height: "calc(100% - 12.5px)",
                                    width: "calc(100% - 279.44px)",
                                    top: "7px",
                                    right: "0px",
                                    bottom: "5.5px",
                                    left: "279.44px",
                                    borderRadius: "3px",
                                    backgroundColor: "#232632",
                                    display: "flex",
                                    flexDirection: "row",
                                    padding: "1px 4.560001373291016px 0.5px 5px",
                                    boxSizing: "border-box",
                                    alignItems: "flex-start",
                                    justifyContent: "flex-start",
                                    zIndex: "2",
                                    fontSize: "9px",
                                  }}
                                >
                                  <div
                                    style={{
                                      position: "relative",
                                      lineHeight: "13.5px",
                                      textTransform: "uppercase",
                                      fontWeight: "500",
                                    }}
                                  >
                                    ALT+7
                                  </div>
                                </div>
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "5px 194px 5px 10px",
                                  alignItems: "flex-start",
                                  justifyContent: "flex-start",
                                  position: "relative",
                                }}
                              >
                                <img
                                  style={{
                                    position: "absolute",
                                    margin: "0",
                                    top: "10px",
                                    left: "0px",
                                    width: "6px",
                                    height: "6px",
                                    zIndex: "0",
                                  }}
                                  alt=""
                                  src="/imetismenuiconmaskgroup3.svg"
                                />
                                <div
                                  style={{
                                    position: "relative",
                                    lineHeight: "18px",
                                    fontWeight: "500",
                                    zIndex: "1",
                                  }}
                                >{`Báo cáo & Download`}</div>
                                <div
                                  style={{
                                    margin: "0",
                                    position: "absolute",
                                    height: "calc(100% - 12.5px)",
                                    width: "calc(100% - 279.44px)",
                                    top: "7px",
                                    right: "0px",
                                    bottom: "5.5px",
                                    left: "279.44px",
                                    borderRadius: "3px",
                                    backgroundColor: "#232632",
                                    display: "flex",
                                    flexDirection: "row",
                                    padding: "1px 4.560001373291016px 0.5px 5px",
                                    boxSizing: "border-box",
                                    alignItems: "flex-start",
                                    justifyContent: "flex-start",
                                    zIndex: "2",
                                    fontSize: "9px",
                                  }}
                                >
                                  <div
                                    style={{
                                      position: "relative",
                                      lineHeight: "13.5px",
                                      textTransform: "uppercase",
                                      fontWeight: "500",
                                    }}
                                  >
                                    ALT+8
                                  </div>
                                </div>
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "5px 134px 5px 10px",
                                  alignItems: "flex-start",
                                  justifyContent: "flex-start",
                                  position: "relative",
                                }}
                              >
                                <img
                                  style={{
                                    position: "absolute",
                                    margin: "0",
                                    top: "10px",
                                    left: "0px",
                                    width: "6px",
                                    height: "6px",
                                    zIndex: "0",
                                  }}
                                  alt=""
                                  src="/imetismenuiconmaskgroup3.svg"
                                />
                                <div
                                  style={{
                                    position: "relative",
                                    lineHeight: "18px",
                                    fontWeight: "500",
                                    zIndex: "1",
                                  }}
                                >
                                  Tổng hợp báo cáo phân tích quý
                                </div>
                                <div
                                  style={{
                                    margin: "0",
                                    position: "absolute",
                                    height: "calc(100% - 12.5px)",
                                    width: "calc(100% - 279.44px)",
                                    top: "7px",
                                    right: "0px",
                                    bottom: "5.5px",
                                    left: "279.44px",
                                    borderRadius: "3px",
                                    backgroundColor: "#232632",
                                    display: "flex",
                                    flexDirection: "row",
                                    padding: "1px 4.560001373291016px 0.5px 5px",
                                    boxSizing: "border-box",
                                    alignItems: "flex-start",
                                    justifyContent: "flex-start",
                                    zIndex: "2",
                                    fontSize: "9px",
                                  }}
                                >
                                  <div
                                    style={{
                                      position: "relative",
                                      lineHeight: "13.5px",
                                      textTransform: "uppercase",
                                      fontWeight: "500",
                                    }}
                                  >
                                    ALT+9
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            style={{
                              position: "absolute",
                              top: "248px",
                              left: "0px",
                              borderBottom: "1px solid #323643",
                              boxSizing: "border-box",
                              width: "340px",
                              height: "148px",
                            }}
                          >
                            <div
                              style={{
                                position: "absolute",
                                top: "0px",
                                left: "0px",
                                display: "flex",
                                flexDirection: "row",
                                padding: "8.5px 244px 8.5px 25px",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <img
                                style={{
                                  position: "absolute",
                                  margin: "0",
                                  top: "8.5px",
                                  left: "0px",
                                  width: "15px",
                                  height: "15px",
                                  zIndex: "0",
                                }}
                                alt=""
                                src="/imetismenuiconmaskgroup4.svg"
                              />
                              <b
                                style={{
                                  position: "relative",
                                  lineHeight: "18px",
                                  textTransform: "uppercase",
                                  zIndex: "1",
                                }}
                              >
                                Thị trường
                              </b>
                              <img
                                style={{
                                  position: "absolute",
                                  margin: "0",
                                  top: "13px",
                                  right: "0px",
                                  width: "9px",
                                  height: "9px",
                                  zIndex: "2",
                                }}
                                alt=""
                                src="/imetismenustateiconmaskgroup.svg"
                              />
                            </div>
                            <div
                              style={{
                                position: "absolute",
                                top: "35px",
                                left: "0px",
                                display: "flex",
                                flexDirection: "column",
                                padding: "0px 0px 0px 25px",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                                color: "#9197b1",
                              }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "5px 254px 5px 10px",
                                  alignItems: "flex-start",
                                  justifyContent: "flex-start",
                                  position: "relative",
                                }}
                              >
                                <img
                                  style={{
                                    position: "absolute",
                                    margin: "0",
                                    top: "10px",
                                    left: "0px",
                                    width: "6px",
                                    height: "6px",
                                    zIndex: "0",
                                  }}
                                  alt=""
                                  src="/imetismenuiconmaskgroup3.svg"
                                />
                                <div
                                  style={{
                                    position: "relative",
                                    lineHeight: "18px",
                                    fontWeight: "500",
                                    zIndex: "1",
                                  }}
                                >
                                  Tổng hợp
                                </div>
                                <div
                                  style={{
                                    margin: "0",
                                    position: "absolute",
                                    height: "calc(100% - 12.5px)",
                                    width: "calc(100% - 273.17px)",
                                    top: "7px",
                                    right: "0px",
                                    bottom: "5.5px",
                                    left: "273.17px",
                                    borderRadius: "3px",
                                    backgroundColor: "#232632",
                                    display: "flex",
                                    flexDirection: "row",
                                    padding: "1px 4.8300018310546875px 0.5px 5px",
                                    boxSizing: "border-box",
                                    alignItems: "flex-start",
                                    justifyContent: "flex-start",
                                    zIndex: "2",
                                    fontSize: "9px",
                                  }}
                                >
                                  <div
                                    style={{
                                      position: "relative",
                                      lineHeight: "13.5px",
                                      textTransform: "uppercase",
                                      fontWeight: "500",
                                    }}
                                  >
                                    CTRL+1
                                  </div>
                                </div>
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "5px 281px 5px 10px",
                                  alignItems: "flex-start",
                                  justifyContent: "flex-start",
                                  position: "relative",
                                }}
                              >
                                <img
                                  style={{
                                    position: "absolute",
                                    margin: "0",
                                    top: "10px",
                                    left: "0px",
                                    width: "6px",
                                    height: "6px",
                                    zIndex: "0",
                                  }}
                                  alt=""
                                  src="/imetismenuiconmaskgroup3.svg"
                                />
                                <div
                                  style={{
                                    position: "relative",
                                    lineHeight: "18px",
                                    fontWeight: "500",
                                    zIndex: "1",
                                  }}
                                >
                                  HSX
                                </div>
                                <div
                                  style={{
                                    margin: "0",
                                    position: "absolute",
                                    height: "calc(100% - 12.5px)",
                                    width: "calc(100% - 273.17px)",
                                    top: "7px",
                                    right: "0px",
                                    bottom: "5.5px",
                                    left: "273.17px",
                                    borderRadius: "3px",
                                    backgroundColor: "#232632",
                                    display: "flex",
                                    flexDirection: "row",
                                    padding: "1px 4.8300018310546875px 0.5px 5px",
                                    boxSizing: "border-box",
                                    alignItems: "flex-start",
                                    justifyContent: "flex-start",
                                    zIndex: "2",
                                    fontSize: "9px",
                                  }}
                                >
                                  <div
                                    style={{
                                      position: "relative",
                                      lineHeight: "13.5px",
                                      textTransform: "uppercase",
                                      fontWeight: "500",
                                    }}
                                  >
                                    CTRL+2
                                  </div>
                                </div>
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "5px 280px 5px 10px",
                                  alignItems: "flex-start",
                                  justifyContent: "flex-start",
                                  position: "relative",
                                }}
                              >
                                <img
                                  style={{
                                    position: "absolute",
                                    margin: "0",
                                    top: "10px",
                                    left: "0px",
                                    width: "6px",
                                    height: "6px",
                                    zIndex: "0",
                                  }}
                                  alt=""
                                  src="/imetismenuiconmaskgroup3.svg"
                                />
                                <div
                                  style={{
                                    position: "relative",
                                    lineHeight: "18px",
                                    fontWeight: "500",
                                    zIndex: "1",
                                  }}
                                >
                                  HNX
                                </div>
                                <div
                                  style={{
                                    margin: "0",
                                    position: "absolute",
                                    height: "calc(100% - 12.5px)",
                                    width: "calc(100% - 273.17px)",
                                    top: "7px",
                                    right: "0px",
                                    bottom: "5.5px",
                                    left: "273.17px",
                                    borderRadius: "3px",
                                    backgroundColor: "#232632",
                                    display: "flex",
                                    flexDirection: "row",
                                    padding: "1px 4.8300018310546875px 0.5px 5px",
                                    boxSizing: "border-box",
                                    alignItems: "flex-start",
                                    justifyContent: "flex-start",
                                    zIndex: "2",
                                    fontSize: "9px",
                                  }}
                                >
                                  <div
                                    style={{
                                      position: "relative",
                                      lineHeight: "13.5px",
                                      textTransform: "uppercase",
                                      fontWeight: "500",
                                    }}
                                  >
                                    CTRL+3
                                  </div>
                                </div>
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "5px 262px 5px 10px",
                                  alignItems: "flex-start",
                                  justifyContent: "flex-start",
                                  position: "relative",
                                }}
                              >
                                <img
                                  style={{
                                    position: "absolute",
                                    margin: "0",
                                    top: "10px",
                                    left: "0px",
                                    width: "6px",
                                    height: "6px",
                                    zIndex: "0",
                                  }}
                                  alt=""
                                  src="/imetismenuiconmaskgroup3.svg"
                                />
                                <div
                                  style={{
                                    position: "relative",
                                    lineHeight: "18px",
                                    fontWeight: "500",
                                    zIndex: "1",
                                  }}
                                >
                                  UPCOM
                                </div>
                                <div
                                  style={{
                                    margin: "0",
                                    position: "absolute",
                                    height: "calc(100% - 12.5px)",
                                    width: "calc(100% - 273.17px)",
                                    top: "7px",
                                    right: "0px",
                                    bottom: "5.5px",
                                    left: "273.17px",
                                    borderRadius: "3px",
                                    backgroundColor: "#232632",
                                    display: "flex",
                                    flexDirection: "row",
                                    padding: "1px 4.8300018310546875px 0.5px 5px",
                                    boxSizing: "border-box",
                                    alignItems: "flex-start",
                                    justifyContent: "flex-start",
                                    zIndex: "2",
                                    fontSize: "9px",
                                  }}
                                >
                                  <div
                                    style={{
                                      position: "relative",
                                      lineHeight: "13.5px",
                                      textTransform: "uppercase",
                                      fontWeight: "500",
                                    }}
                                  >
                                    CTRL+4
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            style={{
                              position: "absolute",
                              top: "396px",
                              left: "0px",
                              borderBottom: "1px solid #323643",
                              boxSizing: "border-box",
                              width: "340px",
                              height: "36px",
                            }}
                          >
                            <div
                              style={{
                                position: "absolute",
                                top: "0px",
                                left: "0px",
                                display: "flex",
                                flexDirection: "row",
                                padding: "8.5px 269px 8.5px 25px",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <img
                                style={{
                                  position: "absolute",
                                  margin: "0",
                                  top: "8.5px",
                                  left: "0px",
                                  width: "15px",
                                  height: "15px",
                                  zIndex: "0",
                                }}
                                alt=""
                                src="/imetismenuiconmaskgroup5.svg"
                              />
                              <b
                                style={{
                                  position: "relative",
                                  lineHeight: "18px",
                                  textTransform: "uppercase",
                                  zIndex: "1",
                                }}
                              >
                                Tin tức
                              </b>
                              <div
                                style={{
                                  margin: "0",
                                  position: "absolute",
                                  height: "calc(100% - 19.5px)",
                                  width: "calc(100% - 297.97px)",
                                  top: "10px",
                                  right: "0px",
                                  bottom: "9.5px",
                                  left: "297.97px",
                                  borderRadius: "3px",
                                  backgroundColor: "#232632",
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "1px 4.029998779296875px 0.5px 5px",
                                  boxSizing: "border-box",
                                  alignItems: "flex-start",
                                  justifyContent: "flex-start",
                                  zIndex: "2",
                                  fontSize: "9px",
                                  color: "#9197b1",
                                }}
                              >
                                <b
                                  style={{
                                    position: "relative",
                                    lineHeight: "13.5px",
                                    textTransform: "uppercase",
                                  }}
                                >
                                  CTRL+5
                                </b>
                              </div>
                            </div>
                          </div>
                          <div
                            style={{
                              position: "absolute",
                              top: "432px",
                              left: "0px",
                              borderBottom: "1px solid #323643",
                              boxSizing: "border-box",
                              width: "340px",
                              height: "92px",
                            }}
                          >
                            <div
                              style={{
                                position: "absolute",
                                top: "0px",
                                left: "0px",
                                display: "flex",
                                flexDirection: "row",
                                padding: "8.5px 171px 8.5px 25px",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <img
                                style={{
                                  position: "absolute",
                                  margin: "0",
                                  top: "8.5px",
                                  left: "0px",
                                  width: "15px",
                                  height: "15px",
                                  zIndex: "0",
                                }}
                                alt=""
                                src="/imetismenuiconmaskgroup6.svg"
                              />
                              <b
                                style={{
                                  position: "relative",
                                  lineHeight: "18px",
                                  textTransform: "uppercase",
                                  zIndex: "1",
                                }}
                              >{`Watchlist & Portfolio`}</b>
                              <img
                                style={{
                                  position: "absolute",
                                  margin: "0",
                                  top: "13px",
                                  right: "0px",
                                  width: "9px",
                                  height: "9px",
                                  zIndex: "2",
                                }}
                                alt=""
                                src="/imetismenustateiconmaskgroup.svg"
                              />
                            </div>
                            <div
                              style={{
                                position: "absolute",
                                top: "35px",
                                left: "0px",
                                display: "flex",
                                flexDirection: "column",
                                padding: "0px 0px 0px 25px",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                                color: "#9197b1",
                              }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "5px 254px 5px 10px",
                                  alignItems: "flex-start",
                                  justifyContent: "flex-start",
                                  position: "relative",
                                }}
                              >
                                <img
                                  style={{
                                    position: "absolute",
                                    margin: "0",
                                    top: "10px",
                                    left: "0px",
                                    width: "6px",
                                    height: "6px",
                                    zIndex: "0",
                                  }}
                                  alt=""
                                  src="/imetismenuiconmaskgroup3.svg"
                                />
                                <div
                                  style={{
                                    position: "relative",
                                    lineHeight: "18px",
                                    fontWeight: "500",
                                    zIndex: "1",
                                  }}
                                >
                                  Watchlist
                                </div>
                                <div
                                  style={{
                                    margin: "0",
                                    position: "absolute",
                                    height: "calc(100% - 12.5px)",
                                    width: "calc(100% - 273.17px)",
                                    top: "7px",
                                    right: "0px",
                                    bottom: "5.5px",
                                    left: "273.17px",
                                    borderRadius: "3px",
                                    backgroundColor: "#232632",
                                    display: "flex",
                                    flexDirection: "row",
                                    padding: "1px 4.8300018310546875px 0.5px 5px",
                                    boxSizing: "border-box",
                                    alignItems: "flex-start",
                                    justifyContent: "flex-start",
                                    zIndex: "2",
                                    fontSize: "9px",
                                  }}
                                >
                                  <div
                                    style={{
                                      position: "relative",
                                      lineHeight: "13.5px",
                                      textTransform: "uppercase",
                                      fontWeight: "500",
                                    }}
                                  >
                                    CTRL+6
                                  </div>
                                </div>
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "5px 258px 5px 10px",
                                  alignItems: "flex-start",
                                  justifyContent: "flex-start",
                                  position: "relative",
                                }}
                              >
                                <img
                                  style={{
                                    position: "absolute",
                                    margin: "0",
                                    top: "10px",
                                    left: "0px",
                                    width: "6px",
                                    height: "6px",
                                    zIndex: "0",
                                  }}
                                  alt=""
                                  src="/imetismenuiconmaskgroup3.svg"
                                />
                                <div
                                  style={{
                                    position: "relative",
                                    lineHeight: "18px",
                                    fontWeight: "500",
                                    zIndex: "1",
                                  }}
                                >
                                  Portfolio
                                </div>
                                <div
                                  style={{
                                    margin: "0",
                                    position: "absolute",
                                    height: "calc(100% - 12.5px)",
                                    width: "calc(100% - 273.17px)",
                                    top: "7px",
                                    right: "0px",
                                    bottom: "5.5px",
                                    left: "273.17px",
                                    borderRadius: "3px",
                                    backgroundColor: "#232632",
                                    display: "flex",
                                    flexDirection: "row",
                                    padding: "1px 4.8300018310546875px 0.5px 5px",
                                    boxSizing: "border-box",
                                    alignItems: "flex-start",
                                    justifyContent: "flex-start",
                                    zIndex: "2",
                                    fontSize: "9px",
                                  }}
                                >
                                  <div
                                    style={{
                                      position: "relative",
                                      lineHeight: "13.5px",
                                      textTransform: "uppercase",
                                      fontWeight: "500",
                                    }}
                                  >
                                    CTRL+7
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            style={{
                              position: "absolute",
                              top: "524px",
                              left: "0px",
                              borderBottom: "1px solid #323643",
                              boxSizing: "border-box",
                              width: "340px",
                              height: "36px",
                            }}
                          >
                            <div
                              style={{
                                position: "absolute",
                                top: "0px",
                                left: "0px",
                                display: "flex",
                                flexDirection: "row",
                                padding: "8.5px 193px 8.5px 25px",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <img
                                style={{
                                  position: "absolute",
                                  margin: "0",
                                  top: "8.5px",
                                  left: "0px",
                                  width: "15px",
                                  height: "15px",
                                  zIndex: "0",
                                }}
                                alt=""
                                src="/imetismenuiconmaskgroup7.svg"
                              />
                              <b
                                style={{
                                  position: "relative",
                                  lineHeight: "18px",
                                  textTransform: "uppercase",
                                  zIndex: "1",
                                }}
                              >
                                Phân tích kỹ thuật
                              </b>
                              <div
                                style={{
                                  margin: "0",
                                  position: "absolute",
                                  height: "calc(100% - 19.5px)",
                                  width: "calc(100% - 297.97px)",
                                  top: "10px",
                                  right: "0px",
                                  bottom: "9.5px",
                                  left: "297.97px",
                                  borderRadius: "3px",
                                  backgroundColor: "#232632",
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "1px 4.029998779296875px 0.5px 5px",
                                  boxSizing: "border-box",
                                  alignItems: "flex-start",
                                  justifyContent: "flex-start",
                                  zIndex: "2",
                                  fontSize: "9px",
                                  color: "#9197b1",
                                }}
                              >
                                <b
                                  style={{
                                    position: "relative",
                                    lineHeight: "13.5px",
                                    textTransform: "uppercase",
                                  }}
                                >
                                  CTRL+8
                                </b>
                              </div>
                            </div>
                          </div>
                          <div
                            style={{
                              position: "absolute",
                              top: "560px",
                              left: "0px",
                              borderBottom: "1px solid #323643",
                              boxSizing: "border-box",
                              width: "340px",
                              height: "148px",
                            }}
                          >
                            <div
                              style={{
                                position: "absolute",
                                top: "0px",
                                left: "0px",
                                display: "flex",
                                flexDirection: "row",
                                padding: "8.5px 261px 8.5px 25px",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <img
                                style={{
                                  position: "absolute",
                                  margin: "0",
                                  top: "8.5px",
                                  left: "0px",
                                  width: "15px",
                                  height: "15px",
                                  zIndex: "0",
                                }}
                                alt=""
                                src="/imetismenuiconmaskgroup8.svg"
                              />
                              <b
                                style={{
                                  position: "relative",
                                  lineHeight: "18px",
                                  textTransform: "uppercase",
                                  zIndex: "1",
                                }}
                              >
                                Cổ phiếu
                              </b>
                              <img
                                style={{
                                  position: "absolute",
                                  margin: "0",
                                  top: "13px",
                                  right: "0px",
                                  width: "9px",
                                  height: "9px",
                                  zIndex: "2",
                                }}
                                alt=""
                                src="/imetismenustateiconmaskgroup.svg"
                              />
                            </div>
                            <div
                              style={{
                                position: "absolute",
                                top: "35px",
                                left: "0px",
                                display: "flex",
                                flexDirection: "column",
                                padding: "0px 0px 0px 25px",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                                color: "#9197b1",
                              }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "5px 258px 5px 10px",
                                  alignItems: "flex-start",
                                  justifyContent: "flex-start",
                                  position: "relative",
                                }}
                              >
                                <img
                                  style={{
                                    position: "absolute",
                                    margin: "0",
                                    top: "10px",
                                    left: "0px",
                                    width: "6px",
                                    height: "6px",
                                    zIndex: "0",
                                  }}
                                  alt=""
                                  src="/imetismenuiconmaskgroup3.svg"
                                />
                                <div
                                  style={{
                                    position: "relative",
                                    lineHeight: "18px",
                                    fontWeight: "500",
                                    zIndex: "1",
                                  }}
                                >
                                  Bảng giá
                                </div>
                                <div
                                  style={{
                                    margin: "0",
                                    position: "absolute",
                                    height: "calc(100% - 12.5px)",
                                    width: "calc(100% - 273.17px)",
                                    top: "7px",
                                    right: "0px",
                                    bottom: "5.5px",
                                    left: "273.17px",
                                    borderRadius: "3px",
                                    backgroundColor: "#232632",
                                    display: "flex",
                                    flexDirection: "row",
                                    padding: "1px 4.8300018310546875px 0.5px 5px",
                                    boxSizing: "border-box",
                                    alignItems: "flex-start",
                                    justifyContent: "flex-start",
                                    zIndex: "2",
                                    fontSize: "9px",
                                  }}
                                >
                                  <div
                                    style={{
                                      position: "relative",
                                      lineHeight: "13.5px",
                                      textTransform: "uppercase",
                                      fontWeight: "500",
                                    }}
                                  >
                                    Ctrl+9
                                  </div>
                                </div>
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "5px 235px 5px 10px",
                                  alignItems: "flex-start",
                                  justifyContent: "flex-start",
                                  position: "relative",
                                }}
                              >
                                <img
                                  style={{
                                    position: "absolute",
                                    margin: "0",
                                    top: "10px",
                                    left: "0px",
                                    width: "6px",
                                    height: "6px",
                                    zIndex: "0",
                                  }}
                                  alt=""
                                  src="/imetismenuiconmaskgroup3.svg"
                                />
                                <div
                                  style={{
                                    position: "relative",
                                    lineHeight: "18px",
                                    fontWeight: "500",
                                    zIndex: "1",
                                  }}
                                >
                                  Cổ phiếu A-Z
                                </div>
                                <div
                                  style={{
                                    margin: "0",
                                    position: "absolute",
                                    height: "calc(100% - 12.5px)",
                                    width: "calc(100% - 279.44px)",
                                    top: "7px",
                                    right: "0px",
                                    bottom: "5.5px",
                                    left: "279.44px",
                                    borderRadius: "3px",
                                    backgroundColor: "#232632",
                                    display: "flex",
                                    flexDirection: "row",
                                    padding: "1px 4.560001373291016px 0.5px 5px",
                                    boxSizing: "border-box",
                                    alignItems: "flex-start",
                                    justifyContent: "flex-start",
                                    zIndex: "2",
                                    fontSize: "9px",
                                  }}
                                >
                                  <div
                                    style={{
                                      position: "relative",
                                      lineHeight: "13.5px",
                                      textTransform: "uppercase",
                                      fontWeight: "500",
                                    }}
                                  >
                                    ALT+0
                                  </div>
                                </div>
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "5px 236px 5px 10px",
                                  alignItems: "flex-start",
                                  justifyContent: "flex-start",
                                  position: "relative",
                                  color: "#856dfc",
                                }}
                              >
                                <img
                                  style={{
                                    position: "absolute",
                                    margin: "0",
                                    top: "10px",
                                    left: "0px",
                                    width: "6px",
                                    height: "6px",
                                    zIndex: "0",
                                  }}
                                  alt=""
                                  src="/imetismenuiconmaskgroup9.svg"
                                />
                                <div
                                  style={{
                                    position: "relative",
                                    lineHeight: "18px",
                                    fontWeight: "500",
                                    zIndex: "1",
                                  }}
                                >
                                  Lọc cổ phiếu
                                </div>
                                <div
                                  style={{
                                    margin: "0",
                                    position: "absolute",
                                    height: "calc(100% - 12.5px)",
                                    width: "calc(100% - 279.44px)",
                                    top: "7px",
                                    right: "0px",
                                    bottom: "5.5px",
                                    left: "279.44px",
                                    borderRadius: "3px",
                                    backgroundColor: "#232632",
                                    display: "flex",
                                    flexDirection: "row",
                                    padding: "1px 4.560001373291016px 0.5px 5px",
                                    boxSizing: "border-box",
                                    alignItems: "flex-start",
                                    justifyContent: "flex-start",
                                    zIndex: "2",
                                    fontSize: "9px",
                                    color: "#9197b1",
                                  }}
                                >
                                  <div
                                    style={{
                                      position: "relative",
                                      lineHeight: "13.5px",
                                      textTransform: "uppercase",
                                      fontWeight: "500",
                                    }}
                                  >
                                    ALT+1
                                  </div>
                                </div>
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "5px 213px 5px 10px",
                                  alignItems: "flex-start",
                                  justifyContent: "flex-start",
                                  position: "relative",
                                }}
                              >
                                <img
                                  style={{
                                    position: "absolute",
                                    margin: "0",
                                    top: "10px",
                                    left: "0px",
                                    width: "6px",
                                    height: "6px",
                                    zIndex: "0",
                                  }}
                                  alt=""
                                  src="/imetismenuiconmaskgroup3.svg"
                                />
                                <div
                                  style={{
                                    position: "relative",
                                    lineHeight: "18px",
                                    fontWeight: "500",
                                    zIndex: "1",
                                  }}
                                >
                                  So sánh cổ phiếu
                                </div>
                                <div
                                  style={{
                                    margin: "0",
                                    position: "absolute",
                                    height: "calc(100% - 12.5px)",
                                    width: "calc(100% - 270px)",
                                    top: "7px",
                                    right: "0px",
                                    bottom: "5.5px",
                                    left: "270px",
                                    borderRadius: "3px",
                                    backgroundColor: "#232632",
                                    display: "flex",
                                    flexDirection: "row",
                                    padding: "1px 4px 0.5px 5px",
                                    boxSizing: "border-box",
                                    alignItems: "flex-start",
                                    justifyContent: "flex-start",
                                    zIndex: "2",
                                    fontSize: "9px",
                                  }}
                                >
                                  <div
                                    style={{
                                      position: "relative",
                                      lineHeight: "13.5px",
                                      textTransform: "uppercase",
                                      fontWeight: "500",
                                    }}
                                  >
                                    SHIFT+1
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            style={{
                              position: "absolute",
                              top: "708px",
                              left: "0px",
                              borderBottom: "1px solid #323643",
                              boxSizing: "border-box",
                              width: "340px",
                              height: "92px",
                            }}
                          >
                            <div
                              style={{
                                position: "absolute",
                                top: "0px",
                                left: "0px",
                                display: "flex",
                                flexDirection: "row",
                                padding: "8.5px 159px 8.5px 25px",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <img
                                style={{
                                  position: "absolute",
                                  margin: "0",
                                  top: "8.5px",
                                  left: "0px",
                                  width: "15px",
                                  height: "15px",
                                  zIndex: "0",
                                }}
                                alt=""
                                src="/imetismenuiconmaskgroup10.svg"
                              />
                              <b
                                style={{
                                  position: "relative",
                                  lineHeight: "18px",
                                  textTransform: "uppercase",
                                  zIndex: "1",
                                }}
                              >{`Phái sinh & Chứng quyền`}</b>
                              <img
                                style={{
                                  position: "absolute",
                                  margin: "0",
                                  top: "13px",
                                  right: "0px",
                                  width: "9px",
                                  height: "9px",
                                  zIndex: "2",
                                }}
                                alt=""
                                src="/imetismenustateiconmaskgroup.svg"
                              />
                            </div>
                            <div
                              style={{
                                position: "absolute",
                                top: "35px",
                                left: "0px",
                                display: "flex",
                                flexDirection: "column",
                                padding: "0px 0px 0px 25px",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                                color: "#9197b1",
                              }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "5px 255px 5px 10px",
                                  alignItems: "flex-start",
                                  justifyContent: "flex-start",
                                  position: "relative",
                                }}
                              >
                                <img
                                  style={{
                                    position: "absolute",
                                    margin: "0",
                                    top: "10px",
                                    left: "0px",
                                    width: "6px",
                                    height: "6px",
                                    zIndex: "0",
                                  }}
                                  alt=""
                                  src="/imetismenuiconmaskgroup3.svg"
                                />
                                <div
                                  style={{
                                    position: "relative",
                                    lineHeight: "18px",
                                    fontWeight: "500",
                                    zIndex: "1",
                                  }}
                                >
                                  Phái sinh
                                </div>
                                <div
                                  style={{
                                    margin: "0",
                                    position: "absolute",
                                    height: "calc(100% - 12.5px)",
                                    width: "calc(100% - 279.44px)",
                                    top: "7px",
                                    right: "0px",
                                    bottom: "5.5px",
                                    left: "279.44px",
                                    borderRadius: "3px",
                                    backgroundColor: "#232632",
                                    display: "flex",
                                    flexDirection: "row",
                                    padding: "1px 4.560001373291016px 0.5px 5px",
                                    boxSizing: "border-box",
                                    alignItems: "flex-start",
                                    justifyContent: "flex-start",
                                    zIndex: "2",
                                    fontSize: "9px",
                                  }}
                                >
                                  <div
                                    style={{
                                      position: "relative",
                                      lineHeight: "13.5px",
                                      textTransform: "uppercase",
                                      fontWeight: "500",
                                    }}
                                  >
                                    ALT+2
                                  </div>
                                </div>
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "5px 234px 5px 10px",
                                  alignItems: "flex-start",
                                  justifyContent: "flex-start",
                                  position: "relative",
                                }}
                              >
                                <img
                                  style={{
                                    position: "absolute",
                                    margin: "0",
                                    top: "10px",
                                    left: "0px",
                                    width: "6px",
                                    height: "6px",
                                    zIndex: "0",
                                  }}
                                  alt=""
                                  src="/imetismenuiconmaskgroup3.svg"
                                />
                                <div
                                  style={{
                                    position: "relative",
                                    lineHeight: "18px",
                                    fontWeight: "500",
                                    zIndex: "1",
                                  }}
                                >
                                  Chứng quyền
                                </div>
                                <div
                                  style={{
                                    margin: "0",
                                    position: "absolute",
                                    height: "calc(100% - 12.5px)",
                                    width: "calc(100% - 279.44px)",
                                    top: "7px",
                                    right: "0px",
                                    bottom: "5.5px",
                                    left: "279.44px",
                                    borderRadius: "3px",
                                    backgroundColor: "#232632",
                                    display: "flex",
                                    flexDirection: "row",
                                    padding: "1px 4.560001373291016px 0.5px 5px",
                                    boxSizing: "border-box",
                                    alignItems: "flex-start",
                                    justifyContent: "flex-start",
                                    zIndex: "2",
                                    fontSize: "9px",
                                  }}
                                >
                                  <div
                                    style={{
                                      position: "relative",
                                      lineHeight: "13.5px",
                                      textTransform: "uppercase",
                                      fontWeight: "500",
                                    }}
                                  >
                                    ALT+3
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        top: "2px",
                        left: "345px",
                        borderRadius: "3px",
                        backgroundColor: "#9197b1",
                        width: "3px",
                        height: "611px",
                        opacity: "0.3",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div
                style={{
                  position: "absolute",
                  height: "100%",
                  top: "0px",
                  bottom: "0px",
                  left: "0px",
                  width: "50px",
                  fontSize: "10px",
                  color: "#9197b1",
                  fontFamily: "Roboto",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "10px",
                    left: "0px",
                    display: "flex",
                    flexDirection: "column",
                    padding: "5px 10px",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: "7px",
                  }}
                >
                  <img
                    style={{
                      position: "relative",
                      width: "25px",
                      height: "25px",
                    }}
                    alt=""
                    src="/iicomaskgroup20.svg"
                  />
                  <div
                    style={{
                      position: "relative",
                      borderRadius: "3px",
                      backgroundColor: "#2d303d",
                      width: "30px",
                      height: "12px",
                    }}
                  >
                    <b
                      style={{
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        lineHeight: "15px",
                        display: "flex",
                        alignItems: "center",
                        width: "30.2px",
                        height: "12px",
                      }}
                    >
                      F1
                    </b>
                  </div>
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: "74px",
                    left: "0px",
                    display: "flex",
                    flexDirection: "column",
                    padding: "5px 10px",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: "7px",
                  }}
                >
                  <img
                    style={{
                      position: "relative",
                      width: "25px",
                      height: "25px",
                    }}
                    alt=""
                    src="/iicomaskgroup21.svg"
                  />
                  <div
                    style={{
                      position: "relative",
                      borderRadius: "3px",
                      backgroundColor: "#2d303d",
                      width: "30px",
                      height: "12px",
                    }}
                  >
                    <b
                      style={{
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        lineHeight: "15px",
                        display: "flex",
                        alignItems: "center",
                        width: "30.2px",
                        height: "12px",
                      }}
                    >
                      F2
                    </b>
                  </div>
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: "138px",
                    left: "0px",
                    display: "flex",
                    flexDirection: "column",
                    padding: "5px 10px",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: "7px",
                  }}
                >
                  <img
                    style={{
                      position: "relative",
                      width: "25px",
                      height: "25px",
                    }}
                    alt=""
                    src="/iicomaskgroup22.svg"
                  />
                  <div
                    style={{
                      position: "relative",
                      borderRadius: "3px",
                      backgroundColor: "#2d303d",
                      width: "30px",
                      height: "12px",
                    }}
                  >
                    <b
                      style={{
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        lineHeight: "15px",
                        display: "flex",
                        alignItems: "center",
                        width: "30.2px",
                        height: "12px",
                      }}
                    >
                      F3
                    </b>
                  </div>
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: "202px",
                    left: "0px",
                    display: "flex",
                    flexDirection: "column",
                    padding: "5px 10px",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: "7px",
                  }}
                >
                  <img
                    style={{
                      position: "relative",
                      width: "25px",
                      height: "25px",
                    }}
                    alt=""
                    src="/iicomaskgroup23.svg"
                  />
                  <div
                    style={{
                      position: "relative",
                      borderRadius: "3px",
                      backgroundColor: "#2d303d",
                      width: "30px",
                      height: "12px",
                    }}
                  >
                    <b
                      style={{
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        lineHeight: "15px",
                        display: "flex",
                        alignItems: "center",
                        width: "30.2px",
                        height: "12px",
                      }}
                    >
                      F4
                    </b>
                  </div>
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: "266px",
                    left: "0px",
                    display: "flex",
                    flexDirection: "column",
                    padding: "5px 10px",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: "7px",
                  }}
                >
                  <img
                    style={{
                      position: "relative",
                      width: "25px",
                      height: "25px",
                    }}
                    alt=""
                    src="/iicomaskgroup24.svg"
                  />
                  <div
                    style={{
                      position: "relative",
                      borderRadius: "3px",
                      backgroundColor: "#2d303d",
                      width: "30px",
                      height: "12px",
                    }}
                  >
                    <b
                      style={{
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        lineHeight: "15px",
                        display: "flex",
                        alignItems: "center",
                        width: "30.2px",
                        height: "12px",
                      }}
                    >
                      F6
                    </b>
                  </div>
                </div>
                <img
                  style={{
                    position: "absolute",
                    top: "calc(50% - 108.5px)",
                    left: "calc(50% - 12.5px)",
                    width: "25px",
                    height: "25px",
                  }}
                  alt=""
                  src="/iicomaskgroup25.svg"
                />
                <img
                  style={{
                    position: "absolute",
                    top: "calc(50% - 63.5px)",
                    left: "calc(50% - 12.5px)",
                    width: "25px",
                    height: "25px",
                  }}
                  alt=""
                  src="/iicomaskgroup26.svg"
                />
                <div
                  style={{
                    position: "absolute",
                    top: "420px",
                    left: "0px",
                    borderTop: "1px solid #323643",
                    display: "flex",
                    flexDirection: "row",
                    padding: "16px 10px 0px",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        borderRadius: "15px",
                        backgroundColor: "#323643",
                        width: "30px",
                        height: "30px",
                        overflow: "hidden",
                        flexShrink: "0",
                        zIndex: "0",
                      }}
                    >
                      <img
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          top: "0px",
                          right: "0px",
                          bottom: "0px",
                          left: "0px",
                          maxWidth: "100%",
                          overflow: "hidden",
                          maxHeight: "100%",
                          objectFit: "cover",
                        }}
                        alt=""
                        src="/image1@2x.png"
                      />
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        margin: "0",
                        top: "-1px",
                        right: "-2px",
                        borderRadius: "5px",
                        backgroundColor: "#856dfc",
                        border: "2px solid #232632",
                        boxSizing: "border-box",
                        width: "10px",
                        height: "10px",
                        zIndex: "1",
                      }}
                    />
                  </div>
                </div>
                <div
                  style={{
                    position: "absolute",
                    height: "calc(100% - 840.5px)",
                    width: "100%",
                    top: "840.5px",
                    right: "0px",
                    bottom: "0px",
                    left: "0px",
                    textAlign: "center",
                    fontSize: "11px",
                    color: "#fff",
                    fontFamily: "Oswald",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "0px",
                      left: "16.27px",
                      lineHeight: "16.5px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "17.67px",
                      height: "16px",
                    }}
                  >
                    Web
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      top: "16.5px",
                      left: "7.69px",
                      lineHeight: "16.5px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "34.81px",
                      height: "16px",
                    }}
                  >
                    Terminal
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      top: "34px",
                      left: "11.33px",
                      fontSize: "9px",
                      lineHeight: "13.5px",
                      fontFamily: "Roboto",
                      color: "#9197b1",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "27.53px",
                      height: "11px",
                    }}
                  >
                    1.1.5.5
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Filter;
