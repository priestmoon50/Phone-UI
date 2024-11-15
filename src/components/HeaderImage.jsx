import React from "react";
import { Box, Typography, Avatar } from "@mui/material";
import BgImage from "../assets/Bg.webp";
import LogoImage from "../assets/logo.png";

const HeaderImage = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "450px",
        color: "#fff",
        borderRadius: { xs: "20px 20px 0 0", sm: "16px 16px 0 0" }, // استفاده از مقدار نسبی
        overflow: "hidden",
        paddingTop: "env(safe-area-inset-top)", // اضافه کردن safe area
        "@media (max-width: 600px)": {
          height: "400px",
          borderRadius: "25px 25px 0 0", // تنظیم مقدار گردی برای موبایل‌های کوچکتر
        },
      }}
    >
      {/* پس‌زمینه تصویر با لایه تیره */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${BgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 1,
          "&::after": {
            content: '""',
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)", // لایه تیره با شفافیت 50%
            zIndex: 2,
          },
        }}
      />

      {/* محتوای روی لایه تیره */}
      <Box
        sx={{
          position: "absolute",
          bottom: 40,
          right: 20,
          textAlign: "right",
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          transform: "translateY(-20px)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 90,
            height: 90,
            backgroundColor: "#fff",
            borderRadius: "50%",
            padding: 1,
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
            mb: 1.5,
          }}
        >
          <Avatar
            src={LogoImage}
            alt="لوگو سالن زیبایی میناراد"
            loading="lazy"
            sx={{ width: 75, height: 75 }}
          />
        </Box>

        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            color: "#fff",
            fontSize: "1.75rem",
            lineHeight: 1.3,
            fontFamily: "IRANSans, sans-serif",
            mb: 1,
          }}
        >
          سالن زیبایی میناراد
        </Typography>

        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: "#ddd",
            fontSize: "1.12rem",
            lineHeight: 1.2,
            mt: "4px",
            fontFamily: "IRANSans, sans-serif",
          }}
        >
          لاین زیبایی
        </Typography>
      </Box>
    </Box>
  );
};

export default HeaderImage;
