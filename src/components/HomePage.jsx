import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import ContactSection from "./ContactSection";
import HeaderImage from "./HeaderImage";
import axios from "axios";

const HomePage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://67319c187aaf2a9aff11301d.mockapi.io/api/v1/account/1"
        );
        setData({
          ...response.data,
          "logo-url":
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbOVhr99GOmRIjTpaal830GaXCJSipGkgmjRlbp3gtxBJd-ZAmw3gbAvwX_VG25FfKkHg&usqp=CAU",
          "img-url":
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdRgIKtpCvr8OblgzbOtpGhi0M58a4I8d8Sg&s",
        });
      } catch (error) {
        if (process.env.NODE_ENV === "development") {
          console.error("Error fetching data:", error);
        }
      }
    };
    fetchData();
  }, []);

  return (
    <Box
      sx={{
        maxWidth: 400,
        margin: "auto",
        borderRadius: "50px",
        boxShadow: 3,
        overflow: "hidden",
        fontFamily: "IRANSans, sans-serif", // اعمال فونت سفارشی به کل صفحه
        "@media (min-width:600px)": {
          marginTop: "5vh", // در مرکز قرار دادن صفحه در دسکتاپ
        },
      }}
    >
      <HeaderImage
        name={data?.name}
        logoUrl={data?.["logo-url"]}
        imgUrl={data?.["img-url"]}
        description="لاین زیبایی"
      />

      <Box>
        <ContactSection />
      </Box>
    </Box>
  );
};

export default HomePage;
