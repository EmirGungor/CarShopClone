/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { Box, colors, Icon } from "@mui/material";

export default function CarList({
  image,
  Title,
  Price,
  Engine,
  ModalYear,
  Km,
  Transmisson,
  Fuel,
}) {
  return (
    <div>
      <Card
        className="CarCard"
        sx={{ width: 860, height: 137, marginTop: "30px" }}
      >
        <CardMedia
          sx={{ minHeight: 128, minWidth: 206, borderRadius: "5px" }}
          image={image}
          title="Car1"
        />
        <CardContent>
          <div style={{ display: "flex" }}>
            <Typography
              className="CardTitle"
              gutterBottom
              variant="h5"
              component="div"
            >
              {Title}
            </Typography>
            <Typography
              component="span"
              variant="body2"
              sx={{
                marginLeft: "auto",
                fontWeight: 400,
                color: "#99A59F",
                fontSize: "10px",
              }}
            >
              Satış Fiyatı / TL <FontAwesomeIcon icon={faCircleInfo} />
            </Typography>
          </div>
          <div className="forprice" style={{ display: "flex" }}>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {Engine}
            </Typography>
            <Typography
              sx={{ marginLeft: "auto", fontWeight: 800, fontSize: 15 }}
            >
              {Price}
            </Typography>
          </div>

          <div className="parentDetails">
            <div className="details1">
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {ModalYear}
              </Typography>
              <Box
                sx={{
                  width: "1px", // Çizginin genişliği
                  height: "20px", // Çizginin yüksekliği
                  backgroundColor: "#ccc", // Çizginin rengi
                  margin: "0 16px", // Kenar boşlukları
                }}
              />
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {Km} Km
              </Typography>
              <Box
                sx={{
                  width: "1px", // Çizginin genişliği
                  height: "20px", // Çizginin yüksekliği
                  backgroundColor: "#ccc", // Çizginin rengi
                  margin: "0 16px", // Kenar boşlukları
                }}
              />
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {Transmisson}
              </Typography>
            </div>
            <div className="buynow">
              <Button
                variant="contained"
                color="success"
                sx={{ borderRadius: 5, width: 112, marginTop: 2 }}
              >
                Hemen Al
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
