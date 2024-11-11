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
      padding: "16px",
      maxWidth: "400px",
      margin: "auto",
      borderRadius: { xs: "30px 30px 0 0", sm: "35px 35px 0 0" }, // تغییر مقدار برای موبایل و بزرگتر
      backgroundColor: "#f9fdf9",
      marginTop: "-40px",
      paddingBottom: "20px",
      paddingTop: "env(safe-area-inset-top)",
      zIndex: 3,
      "@media (max-width: 600px)": {
        paddingBottom: "15px",
      },
    }}
  >
    <PhoneNumberInput />

    <Typography
      variant="body2"
      sx={{
        color: "#555",
        fontSize: "1rem",
        fontWeight: "bold",
        marginBottom: "10px",
        textAlign: "center",
        marginTop: "-10px",
        fontFamily: "IRANSans, sans-serif",
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
        marginBottom: "20px",
        "@media (max-width: 600px)": {
          gap: 1,
        },
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
