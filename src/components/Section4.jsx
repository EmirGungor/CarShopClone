/* eslint-disable no-unused-vars */
import React from "react";
import { Box, Typography } from "@mui/material";
import img1 from "../assets/section4.jpg";

export default function Section2() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          background: "white", // Gradient color
          borderRadius: "8px",
          display: "flex", // Flexbox düzeni
          justifyContent: "space-between", // Elemanlar arasına boşluk ekler
          alignItems: "center",
          padding: "20px 40px",
          flexDirection: { xs: "column", md: "row" }, // Responsive düzen
          position: "relative", // Pseudo-element için
        }}
      >
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

        <Box sx={{ flex: 1, paddingRight: { xs: 0, md: "40px" }, zIndex: 2 }}>
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontSize: "24px",
              fontWeight: 700,
              lineHeight: "32px",
              textAlign: "left",
              color: "#2D3631",
            }}
          >
            Uygun Fiyatlarla İkinci El Arabaları Keşfedin
          </Typography>
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontSize: "16px",
              lineHeight: "24px",
              textAlign: "left",
              color: "#536259",
              marginTop: "16px",
            }}
          >
            İkinci el otomobil alırken dikkat etmeniz birçok nokta var. Araçtaki
            parçaların orijinalliği, sağlamlığı, geçmişte gördüğü onarımlar ve
            motor durumu özellikle dikkat edilmesi gereken detaylardır. Bu
            detayların etkilediği ve 2. el araba alırken dikkat etmeniz gereken
            bir başka nokta ise fiyattır. En uygun ikinci el araba fiyatlarına
            ise ikinciyeni.com’dan ulaşabilirsiniz.
            <br /><br />
            Uygun fiyatlı ikinci el araba fırsatları için ikinciyeni.com’da açık
            artırmalara katılabilir ya da hemen al seçeneği ile hedefinizdeki
            aracı doğrudan satın alabilirsiniz. Bu alternatif yöntemler
            sayesinde en uygun 2. el arabalar için fırsatları kaçırmaz,
            seçtiğiniz araca kolayca sahip olabilirsiniz. Üstelik
            ikinciyeni.com’daki taksit seçenekleri ile ödemenizi bütçenizi
            zorlamadan rahatlıkla yapabilirsiniz.
          </Typography>
        </Box>
      </Box>
    </>
  );
}
