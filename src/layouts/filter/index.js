import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

const Filter = () => {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox style={{ marginTop: 9 }} pt={2} px={2}>
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
                                    padding: "0px 19.360000610351562px 0.5px 120.13999938964844px",
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
        </div>
      </MDBox>
    </DashboardLayout>
  );
};

export default Filter;
