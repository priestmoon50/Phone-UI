import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneNumberInput from "./PhoneNumberInput";

const iconButtonStyles = {
  width: 56,
  height: 56,
  border: "1px solid #ddd",
  borderRadius: "12px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const iconStyles = { fontSize: 32 };

const icons = [
  {
    icon: <PhoneIcon sx={{ color: "#007bff", ...iconStyles }} />,
    label: "تماس",
    key: "phone",
  },
  {
    icon: <LocationOnIcon sx={{ color: "#28a745", ...iconStyles }} />,
    label: "موقعیت",
    key: "location",
  },
  {
    icon: <InstagramIcon sx={{ color: "#e4405f", ...iconStyles }} />,
    label: "اینستاگرام",
    key: "instagram",
  },
];

const ContactSection = () => (
  <Box
    sx={{
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 1,
      padding: 1,
      maxWidth: "400px", // عرض محدود برای جلوگیری از کجی
      margin: "auto", // تراز کردن مرکز
      borderRadius: "35px 35px 0 0", // انحنای حلالی بالای بخش
      backgroundColor: "#f9fdf9",
      marginTop: "-40px",
      paddingBottom: "10px",
      zIndex: 3,
    }}
  >
    <PhoneNumberInput />

    <Typography
      variant="body2"
      sx={{
        color: "#555",
        fontSize: "1.1rem",
        fontWeight: "bold",
        marginBottom: "10px", // افزایش فاصله پایین برای فاصله بیشتر از آیکون‌ها
        textAlign: "center",
        marginTop: "-15px",
      }}
    >
      ارتباط با ما
    </Typography>

    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: 2,
        width: "100%",
         marginBottom: "35px",
      }}
    >
      {icons.map(({ icon, label, key }) => (
        <IconButton key={key} sx={iconButtonStyles} aria-label={label}>
          {icon}
        </IconButton>
      ))}
    </Box>
  </Box>
);

export default ContactSection;
