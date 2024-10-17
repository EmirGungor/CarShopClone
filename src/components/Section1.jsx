/* eslint-disable no-unused-vars */
import React from "react";
import { Box, Typography } from "@mui/material";
import img1 from "../assets/section1.jpg";

export default function Section1() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          background: "linear-gradient(90deg, #01AF69, #018D55)", // Gradient color
          borderRadius: "8px",
          display: "flex", // Flexbox düzeni
          justifyContent: "space-between", // Elemanlar arasına boşluk ekler
          alignItems: "center",
          padding: "20px 40px",
          flexDirection: { xs: "column", md: "row" }, // Responsive düzen
          position: "relative", // Pseudo-element için
        }}
      >
        {/* Yuvarlak yapı (background circle) */}
        <Box
          sx={{
            position: "absolute",
            top: "10%", // Dairenin konumunu ayarlar
            left: "20%",
            width: "300px", // Dairenin genişliği
            height: "300px", // Dairenin yüksekliği
            background:
              "radial-gradient(circle, rgba(255,255,255,0.2), rgba(0,0,0,0))", // Yuvarlak, soft gradient
            borderRadius: "50%", // Daire yapar
            zIndex: 1, // Arka planda kalmasını sağlar
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "10%", // Dairenin konumunu ayarlar
            right: "45%",
            width: "150px", // Dairenin genişliği
            height: "150px", // Dairenin yüksekliği
            background:
              "radial-gradient(circle, rgba(255,100,255,0.2), rgba(0,0,0,0))", // Yuvarlak, soft gradient
            borderRadius: "50%", // Daire yapar
            zIndex: 1, // Arka planda kalmasını sağlar
          }}
        />

        <Box sx={{ flex: 1, paddingRight: { xs: 0, md: "40px" }, zIndex: 2 }}>
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontSize: "24px",
              fontWeight: 700,
              lineHeight: "32px",
              textAlign: "left",
              color: "white",
            }}
          >
            Hemen İkinci El Araba Satın Alın
          </Typography>
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontSize: "16px",
              lineHeight: "24px",
              textAlign: "left",
              color: "white",
              marginTop: "16px",
            }}
          >
            Araç ihtiyaçlarını ikinci el araba fırsatları ile karşılamak oldukça
            avantajlı ve pratik bir tercihtir. Fiyat avantajının yanında yeni
            model üretimi devam etmeyen araçlara ulaşmanın yolu da ikinci el
            araba ilanlarına göz atmaktır. Aklınızdaki arabayı hızlı, güvenli ve
            uygun fiyatlarla almak için ikinciyeni.com’daki ilanları keşfedin,
            ihtiyacınıza uygun ikinci el arabayı hemen satın alın.
          </Typography>
        </Box>

        <Box
          sx={{ flex: 1, display: "flex", justifyContent: "center", zIndex: 2 }}
        >
          <img
            style={{
              width: "100%", // Resim genişliği ayarlandı
              maxWidth: "400px", // Max genişlik 400px olarak ayarlandı
              borderRadius: "8px",
            }}
            src={img1}
            alt="Araba"
          />
        </Box>
      </Box>
    </>
  );
}
