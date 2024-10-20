/* eslint-disable react/prop-types */
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
  IconButton,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

const CarCard = ({
  image,
  title,
  engine,
  model,
  km,
  transmission,
  fuel,
  price,
}) => {
  return (
    <Card
      sx={{
        display: "flex",
        width: 1300,
        height: "9rem",
        padding: 1,
        marginLeft: "1rem",
      }}
    >
      {/* Resim Bölümü */}
      <CardMedia
        component="img"
        sx={{ width: 206, height: 130, borderRadius: "5px" }}
        image={image}
        alt={title}
      />

      {/* İçerik Bölümü */}
      <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Grid container spacing={0} sx={{ height: "100%" }}>
            {/* Sol bölüm: Araba bilgileri */}
            <Grid
              item
              xs={8}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
              }}
            >
              <Box sx={{ flexGrow: 1 }}>
                <Typography sx={{ color: "#317B52" }} variant="h6">
                  {title}
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  {engine}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 2 }}>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ mt: "auto" }}
                >
                  {model}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ mt: "auto" }}
                >
                  {km} KM
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ mt: "auto" }}
                >
                  {transmission}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ mt: "auto" }}
                >
                  {fuel}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ mt: "auto" }}
                >
                  KDV %20
                </Typography>
              </Box>
            </Grid>

            {/* Sağ bölüm: Fiyat ve buton */}
            <Grid item xs={4} sx={{ textAlign: "right" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <Typography variant="body2" color="textSecondary">
                  Satış Fiyatı / TL
                </Typography>
                <IconButton aria-label="info" size="small">
                  <InfoIcon fontSize="small" />
                </IconButton>
              </Box>
              <Typography
                variant="h6"
                color="textPrimary"
                sx={{ fontWeight: "700" }}
              >
                {price}
              </Typography>
              <Button
                variant="contained"
                color="success"
                sx={{ mt: 2, borderRadius: "30px" }}
              >
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
