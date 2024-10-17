/* eslint-disable no-unused-vars */
import React from "react";
import { Box, Typography } from "@mui/material";
import img1 from "../assets/section3.jpg";

export default function Section3() {
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
            Hızlı ve Güvenli Şekilde İkinci El Araba Alın
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
            ikinciyeni.com’daki satılık araçları, ihtiyaçlarınız doğrultusunda
            kolayca listeleyebilirsiniz. Marka, model yılı, vites tipi, yakıt
            tipi, renk, fiyat aralığı ve km aralığı gibi filtreleme seçenekleri
            sayesinde ihtiyacınıza en uygun ikinci el arabayı hızlı bir şekilde
            bulabilirsiniz. Satın aldığınız arabaya ulaşmanız ise uzun sürmez.
            Lojistik hizmeti sayesinde satın aldığınız araç kapınıza kadar
            gelir.
            <br />
            <br />
            İkinci el araç satışında hızın yanında güven de ikinciyeni.com’da!
            İlanlardaki araçların tümü için önceden detaylı bir şekilde
            ekspertiz yapılır. Arabaları incelerken detaylı ekspertiz
            raporlarını görür, rapor üzerinden satın alacağınız araç hakkındaki
            tüm bilgileri öğrenebilirsiniz. Böylece ikinci el araba satın
            alırken riske girmez, olası risklere karşı ise iade hakkınızı
            kullanabilirsiniz.
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
