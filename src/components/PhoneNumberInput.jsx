import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  InputAdornment,
  Button,
  CircularProgress,
  Divider,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import { useNavigate } from "react-router-dom";

const PhoneNumberInput = () => {
  const [buttonLoading, setButtonLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // اعتبارسنجی شماره تلفن
  const validatePhoneNumber = (number) => {
    const phoneRegex = /^09[0-9]{9}$/;
    return phoneRegex.test(number);
  };

  const handleContinue = () => {
    if (!validatePhoneNumber(phoneNumber)) {
      setError("شماره تلفن معتبر وارد کنید");
      return;
    }

    setError("");
    setButtonLoading(true);
    setTimeout(() => {
      setButtonLoading(false);
      navigate("/next");
    }, 3000);
  };

  const handleChange = (event) => {
    setPhoneNumber(event.target.value);
    if (error) setError("");
  };

  return (
    <Box padding="16px" textAlign="center">
      {/* توضیحات بالای فیلد ورودی */}
      <Typography
        variant="body2"
        gutterBottom
        sx={{
          color: "#555",
          fontSize: "0.9rem",
          textAlign: "right",
          mb: 1.5,
          fontFamily: "IRANSans, sans-serif", // اعمال فونت سفارشی
        }}
      >
        .لطفا برای ادامه شماره تلفن خود را وارد کنید
      </Typography>

      {/* فیلد ورودی شماره تلفن */}
      <TextField
        type="tel"
        variant="outlined"
        fullWidth
        placeholder="09*********"
        aria-label="شماره تلفن"
        value={phoneNumber}
        onChange={handleChange}
        error={!!error}
        helperText={error}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <PhoneIcon sx={{ color: "#9e9e9e" }} />
            </InputAdornment>
          ),
          sx: { textAlign: "right", fontFamily: "IRANSans, sans-serif" }, // اعمال فونت سفارشی در فیلد ورودی
        }}
        sx={{
          backgroundColor: "#F4F4F9",
          borderRadius: "24px",
          height: "44px",
          "& .MuiOutlinedInput-root": {
            "& input": {
              textAlign: "right",
              padding: "10px 14px",
              fontFamily: "IRANSans, sans-serif", // اعمال فونت سفارشی در متن ورودی
            },
            "& fieldset": {
              borderColor: "#e0e0e0",
              borderRadius: "24px",
            },
            "&:hover fieldset": {
              borderColor: "#d0d0d0",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#6200ea",
            },
          },
        }}
      />

      {/* دکمه ادامه */}
      <Button
        onClick={handleContinue}
        variant="contained"
        color="primary"
        fullWidth
        disabled={buttonLoading}
        sx={{
          mt: 2,
          height: "44px",
          borderRadius: "24px",
          fontWeight: "bold",
          fontSize: "1rem",
          bgcolor: "#6200ea",
          fontFamily: "IRANSans, sans-serif", // اعمال فونت سفارشی در دکمه
          ":hover": {
            bgcolor: "#5b00d6",
          },
        }}
      >
        {buttonLoading ? (
          <CircularProgress size={24} color="inherit" />
        ) : (
          "ادامه"
        )}
      </Button>
      <Divider sx={{ my: 2.5, width: "100%", mx: "auto" }} />
    </Box>
  );
};

export default PhoneNumberInput;
