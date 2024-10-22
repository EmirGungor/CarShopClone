/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Section1 from "./components/Section1";
import CarCard from "./components/CarCard";
import { Box } from "@mui/material";

function App() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // Verileri JSON Server'dan çekmek için fetch kullanıyoruz
    fetch("http://localhost:3000/cars")
      .then((response) => response.json())
      .then((data) => setCars(data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []); // 1 kere çalışsın diye

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <Box sx={{ display: "flex", flexGrow: 1, marginTop: 2 }}>
        <Sidebar />
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {/* map ile gelen veriyi CarCard bileşenine aktarıyoruz */}
          {cars.map((car) => (
            <CarCard
              key={car.id}
              image={car.image}
              title={car.title}
              engine={car.engine}
              km={car.km}
              model={car.model}
              transmission={car.transmission}
              fuel={car.fuel}
              price={car.price}
            />
          ))}
        </Box>
      </Box>

      <Section1 />
      <Footer />
    </Box>
  );
}

export default App;
