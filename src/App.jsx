import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import CarCard from "./components/CarCard";
import Section1 from "./components/Section1"
import { Box } from "@mui/material";
import axios from "axios";

function App() {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [filters, setFilters] = useState({
    brands: [],
    transmissions: [],
    fuelTypes: [],
  });

  useEffect(() => {
    getCars();
  }, []);

  useEffect(() => {
    // Filtreleme işlemi
    const applyFilters = () => {
      setFilteredCars(
        cars.filter((car) => {
          const brandMatch =
            filters.brands.length === 0 || filters.brands.includes(car.title);
          const transmissionMatch =
            filters.transmissions.length === 0 ||
            filters.transmissions.includes(car.transmission);
          const fuelTypeMatch =
            filters.fuelTypes.length === 0 ||
            filters.fuelTypes.includes(car.fuel);

          return brandMatch && transmissionMatch && fuelTypeMatch;
        })
      );
    };
    applyFilters();
  }, [filters, cars]);

  const getCars = async () => {
    const response = await axios.get("http://localhost:3000/cars");
    setCars(response.data);
    setFilteredCars(response.data); // İlk yüklemede tüm arabaları göster
  };

  // Sidebar’dan gelen filtre değişikliklerini işleme
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <Box sx={{ display: "flex", flexGrow: 1, marginTop: 2 }}>
        <Sidebar onFilterChange={handleFilterChange} />
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {/* Filtrelenmiş veriyi CarCard bileşenine aktarıyoruz */}
          {filteredCars.map((car) => (
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
      <Section1/>
      <Footer />
    </Box>
  );
}

export default App;
