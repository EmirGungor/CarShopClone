/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import CarCard from "./components/CarCard";
import { Box } from "@mui/material";

function App() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // Verileri JSON Server'dan çekmek için fetch kullanıyoruz
    fetch("http://localhost:5000/cars")
      .then((response) => response.json())
      .then((data) => setCars(data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []); // 1 kere çalışsın diye

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Navbar />
      <div
        style={{
          display: "flex",
          flexGrow: 1,
          marginTop: "20px",
        }}
      >
        <Sidebar />
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {/* map ile gelen veriyi CarCard bileşenine aktarıyoruz */}
          {cars.map((car) => {
            return (
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
            );
          })}
        </Box>
      </div>

      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </div>
  );
}

export default App;
