/* eslint-disable no-unused-vars */
import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button,
  Box,
} from "@mui/material";
import img1 from "../assets/car1.jpg";

const CarCard = () => {
  return (
    <Card sx={{ display: "flex", width: 1300, padding: 2 }}>
      {/* Resim Bölümü */}
      <CardMedia
        component="img"
        sx={{ width: 206, height: 130, objectFit: "contain", borderRadius:'30px' }}
        image={img1}
        alt="Renault Megane"
        
      />

      {/* İçerik Bölümü */}
      <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Grid container spacing={2}>
            {/* Sol bölüm: Araba bilgileri */}
            <Grid item xs={8}>
              <Typography sx={{color:'#317B52'}} variant="h6">RENAULT MEGANE</Typography>
              <Typography variant="body2" color="textSecondary" gutterBottom>
                1.3 TCe Joy EDC
              </Typography>
              <Typography variant="body2" color="textSecondary">
                2022 • 38.991 KM • Otomatik • Benzin • KDV %20
              </Typography>
            </Grid>

            {/* Sağ bölüm: Fiyat ve buton */}
            <Grid item xs={4} sx={{ textAlign: "right" }}>
              <Typography variant="h6" color="textPrimary">
                849.400 TL
              </Typography>
              <Button variant="contained" color="success" sx={{ mt: 2 }}>
                Hemen Al
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Box>
    </Card>
  );
};

export default CarCard;
